const TRACKER_REGION = Object.freeze({
  name: 'Regional Theater',
  lamin: 8,
  lamax: 43,
  lomin: 24,
  lomax: 72,
});

const SHIP_BOUNDING_BOXES = Object.freeze([
  [[30, 29], [37.5, 37.8]], // Eastern Mediterranean / Cyprus / Levant
  [[11, 31], [30, 45]], // Red Sea / Suez / Gulf of Aden
  [[23.5, 47], [31, 57.5]], // Persian Gulf
  [[21, 55.5], [28.5, 66]], // Gulf of Oman / Arabian Sea approach
  [[12, 57], [24, 72]], // Arabian Sea / northern Indian Ocean
  [[17, 66], [25, 73]], // Pakistan / western India sea approaches
]);

const STRATEGIC_SHIP_PRIORITY_BOXES = Object.freeze([
  [[23, 54], [29, 60]], // Strait of Hormuz
  [[20, 56], [28, 66]], // Gulf of Oman / Arabian Sea approach
  [[5, 60], [24, 90]], // Arabian / northern Indian Ocean
  [[20, 47], [31, 58]], // Persian Gulf
  [[10, 32], [30, 45]], // Red Sea / Suez
  [[31, 29], [37.5, 37.8]], // Eastern Mediterranean / Cyprus / Levant
]);

const OPENSKY_TOKEN_URL = 'https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token';
const OPENSKY_STATES_URL = 'https://opensky-network.org/api/states/all';
const AISSTREAM_WS_URL = 'wss://stream.aisstream.io/v0/stream';

let openskyTokenCache = {
  accessToken: null,
  expiresAt: 0,
};

let openskyRateLimitCache = {
  limitedUntil: 0,
};

let shipSnapshotCache = {
  ships: [],
  generatedAt: 0,
};

let flightSnapshotCache = {
  flights: [],
  generatedAt: 0,
};

let flightFetchMeta = {
  status: 'idle',
  usedCache: false,
};

let trackerSnapshotCache = {
  snapshot: null,
  generatedAt: 0,
  key: 'all',
};

const SHIP_CACHE_TTL_MS = 5 * 60 * 1000;
const FLIGHT_CACHE_TTL_MS = 90 * 60 * 1000;
const TRACKER_SNAPSHOT_TTL_MS = 4 * 1000;
const TRACKER_ERROR_SNAPSHOT_TTL_MS = 4 * 1000;
const MAX_GLOBAL_FLIGHTS = 56;
const MAX_GLOBAL_SHIPS = 120;
const MAX_PRIORITY_SHIPS = 42;
const MILITARY_FLIGHT_PREFIXES = [
  'RCH', 'REACH', 'CFC', 'CNV', 'PAT', 'DUKE', 'RRR', 'MC', 'VM', 'HAF', 'IAF', 'IAM', 'QID', 'ASY', 'NAF', 'HKY',
];
const MILITARY_SHIP_KEYWORDS = [
  'USS', 'USNS', 'HMS', 'RFA', 'FS ', 'INS ', 'PNS ', 'JS ', 'ROKS', 'IRIS', 'IRIN', 'NAVY', 'COAST GUARD',
  'COASTGUARD', 'WARSHIP', 'DESTROYER', 'FRIGATE', 'CORVETTE', 'PATROL',
];

function clampCount(items, max) {
  return items.slice(0, max);
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function round(value, digits = 2) {
  if (!Number.isFinite(value)) return null;
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function knotsFromMetersPerSecond(value) {
  if (!Number.isFinite(value)) return null;
  return Math.round(value * 1.94384);
}

function feetFromMeters(value) {
  if (!Number.isFinite(value)) return null;
  return Math.round(value * 3.28084);
}

function getEnvValue(env, key) {
  return env?.[key] || env?.[key.toLowerCase()] || '';
}

function normalizeToken(value) {
  return String(value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

function isPointInBox(lat, lon, box) {
  const [[minLat, minLon], [maxLat, maxLon]] = box;
  return lat >= minLat && lat <= maxLat && lon >= minLon && lon <= maxLon;
}

function isStrategicShip(item) {
  if (!Number.isFinite(item?.lat) || !Number.isFinite(item?.lon)) return false;
  return STRATEGIC_SHIP_PRIORITY_BOXES.some((box) => isPointInBox(item.lat, item.lon, box));
}

function classifyMilitaryFlight(callsign, originCountry) {
  const normalized = normalizeToken(callsign);
  const matchedPrefix = MILITARY_FLIGHT_PREFIXES.find((prefix) => normalized.startsWith(prefix));
  if (matchedPrefix) {
    return {
      militaryLikely: true,
      militaryReason: `Callsign prefix ${matchedPrefix}`,
    };
  }

  if (
    ['United States', 'Israel', 'Iran'].includes(originCountry)
    && /^[A-Z]{2,5}\d{1,4}$/u.test(normalized)
    && !/^(UAL|AAL|DAL|BAW|AFR|DLH|THY|UAE|QTR|ETD|SVA|EZY|WZZ|PGT|IGO|AIC)/u.test(normalized)
  ) {
    return {
      militaryLikely: true,
      militaryReason: `${originCountry} non-commercial style callsign`,
    };
  }

  return {
    militaryLikely: false,
    militaryReason: null,
  };
}

function classifyMilitaryShip(name, callSign) {
  const combined = `${String(name || '').toUpperCase()} ${String(callSign || '').toUpperCase()}`;
  const matchedKeyword = MILITARY_SHIP_KEYWORDS.find((keyword) => combined.includes(keyword));
  if (matchedKeyword) {
    return {
      militaryLikely: true,
      militaryReason: `Identifier contains ${matchedKeyword.trim()}`,
    };
  }

  return {
    militaryLikely: false,
    militaryReason: null,
  };
}

function getTrackerConfig(env = {}) {
  return {
    openskyClientId: getEnvValue(env, 'OPENSKY_CLIENT_ID'),
    openskyClientSecret: getEnvValue(env, 'OPENSKY_CLIENT_SECRET'),
    aisstreamApiKey: getEnvValue(env, 'AISSTREAM_API_KEY'),
  };
}

async function getOpenSkyAccessToken(clientId, clientSecret) {
  if (!clientId || !clientSecret) {
    throw new Error('OpenSky credentials are not configured.');
  }

  const now = Date.now();
  if (openskyTokenCache.accessToken && openskyTokenCache.expiresAt > now + 30000) {
    return openskyTokenCache.accessToken;
  }

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(OPENSKY_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenSky auth failed (${response.status}): ${text.slice(0, 180)}`);
  }

  const json = await response.json();
  openskyTokenCache = {
    accessToken: json.access_token,
    expiresAt: now + ((json.expires_in || 300) * 1000),
  };
  return openskyTokenCache.accessToken;
}

async function fetchFlightSnapshot(config) {
  const now = Date.now();
  if (openskyRateLimitCache.limitedUntil > now) {
    if (flightSnapshotCache.flights.length > 0 && (now - flightSnapshotCache.generatedAt) <= FLIGHT_CACHE_TTL_MS) {
      flightFetchMeta = {
        status: 'throttled cache',
        usedCache: true,
      };
      return flightSnapshotCache.flights;
    }
    flightFetchMeta = {
      status: 'throttled',
      usedCache: false,
    };
    throw new Error('OpenSky temporarily throttled after a recent 429.');
  }

  const token = await getOpenSkyAccessToken(config.openskyClientId, config.openskyClientSecret);
  const params = new URLSearchParams({
    lamin: String(TRACKER_REGION.lamin),
    lomin: String(TRACKER_REGION.lomin),
    lamax: String(TRACKER_REGION.lamax),
    lomax: String(TRACKER_REGION.lomax),
  });

  const requestUrl = `${OPENSKY_STATES_URL}?${params.toString()}`;
  let response = null;
  let lastError = null;

  for (const waitMs of [0, 900, 1800]) {
    if (waitMs > 0) {
      await delay(waitMs);
    }

    try {
      response = await fetch(requestUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      lastError = error;
      continue;
    }

    if (response.ok) {
      break;
    }

    if (response.status === 429) {
      openskyRateLimitCache = {
        limitedUntil: Date.now() + (10 * 60 * 1000),
      };
      break;
    }

    if (response.status === 401 && waitMs === 0) {
      openskyTokenCache = {
        accessToken: null,
        expiresAt: 0,
      };
      const refreshedToken = await getOpenSkyAccessToken(config.openskyClientId, config.openskyClientSecret);
      response = await fetch(requestUrl, {
        headers: {
          Authorization: `Bearer ${refreshedToken}`,
        },
      });
      if (response.ok || response.status === 429) {
        if (response.status === 429) {
          openskyRateLimitCache = {
            limitedUntil: Date.now() + (10 * 60 * 1000),
          };
        }
        break;
      }
    }

    if (response.status >= 500 || response.status === 522) {
      lastError = new Error(`OpenSky upstream temporarily unavailable (${response.status}).`);
      continue;
    }

    break;
  }

  if (!response) {
    if (flightSnapshotCache.flights.length > 0 && (Date.now() - flightSnapshotCache.generatedAt) <= FLIGHT_CACHE_TTL_MS) {
      flightFetchMeta = {
        status: 'stale cache',
        usedCache: true,
      };
      return flightSnapshotCache.flights;
    }
    throw lastError || new Error('OpenSky request failed.');
  }

  if (!response.ok) {
    if (response.status === 429) {
      openskyRateLimitCache = {
        limitedUntil: Date.now() + (10 * 60 * 1000),
      };
      if (flightSnapshotCache.flights.length > 0 && (Date.now() - flightSnapshotCache.generatedAt) <= FLIGHT_CACHE_TTL_MS) {
        flightFetchMeta = {
          status: 'throttled cache',
          usedCache: true,
        };
        return flightSnapshotCache.flights;
      }
      flightFetchMeta = {
        status: 'throttled',
        usedCache: false,
      };
    }
    if ((response.status >= 500 || response.status === 522) && flightSnapshotCache.flights.length > 0 && (Date.now() - flightSnapshotCache.generatedAt) <= FLIGHT_CACHE_TTL_MS) {
      flightFetchMeta = {
        status: 'stale cache',
        usedCache: true,
      };
      return flightSnapshotCache.flights;
    }
    const text = await response.text();
    throw new Error(`OpenSky states failed (${response.status}): ${text.slice(0, 180)}`);
  }

  const json = await response.json();
  const nowSeconds = Math.floor(Date.now() / 1000);
  const flights = (json.states || [])
    .map((state) => {
      const [
        icao24,
        callsign,
        originCountry,
        timePosition,
        lastContact,
        longitude,
        latitude,
        baroAltitude,
        onGround,
        velocity,
        trueTrack,
        verticalRate,
        ,
        geoAltitude,
        squawk,
      ] = state;

      if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) return null;

      const military = classifyMilitaryFlight(callsign, originCountry);

      return {
        id: String(icao24 || callsign || `${latitude}-${longitude}`),
        callsign: String(callsign || '').trim() || String(icao24 || 'UNKNOWN').toUpperCase(),
        originCountry: originCountry || 'Unknown',
        lat: round(latitude, 4),
        lon: round(longitude, 4),
        altitudeFeet: feetFromMeters(geoAltitude ?? baroAltitude),
        speedKnots: knotsFromMetersPerSecond(velocity),
        heading: round(trueTrack, 0),
        verticalRateMps: round(verticalRate, 1),
        onGround: Boolean(onGround),
        squawk: squawk || null,
        lastContactAgeSec: Number.isFinite(lastContact) ? Math.max(0, nowSeconds - lastContact) : null,
        timePositionAgeSec: Number.isFinite(timePosition) ? Math.max(0, nowSeconds - timePosition) : null,
        militaryLikely: military.militaryLikely,
        militaryReason: military.militaryReason,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (a.onGround !== b.onGround) return a.onGround ? 1 : -1;
      return (a.lastContactAgeSec ?? 999999) - (b.lastContactAgeSec ?? 999999);
    });

  const result = clampCount(flights, MAX_GLOBAL_FLIGHTS);
  if (result.length > 0) {
    flightSnapshotCache = {
      flights: result,
      generatedAt: Date.now(),
    };
  }
  openskyRateLimitCache = {
    limitedUntil: 0,
  };
  flightFetchMeta = {
    status: 'ok',
    usedCache: false,
  };
  return result;
}

function getAisSocketFactory() {
  if (typeof WebSocket === 'function') {
    return (url) => new WebSocket(url);
  }
  throw new Error('WebSocket client is not available in this runtime.');
}

async function readSocketMessage(rawData) {
  if (typeof rawData === 'string') return rawData;
  if (rawData && typeof rawData.text === 'function') return rawData.text();
  if (rawData instanceof ArrayBuffer) return new TextDecoder().decode(rawData);
  return String(rawData || '');
}

function extractAisPosition(payload) {
  const meta = payload?.MetaData || {};
  const message = payload?.Message || {};

  return (
    message.PositionReport ||
    message.StandardClassBPositionReport ||
    message.LongRangeAisBroadcastMessage ||
    (Number.isFinite(meta.latitude) ? {
      Latitude: meta.latitude,
      Longitude: meta.longitude,
      Sog: meta.SOG,
      Cog: meta.COG,
      TrueHeading: meta.Heading,
      NavigationalStatus: meta.NavigationalStatus,
    } : null)
  );
}

function extractShipIdentity(payload) {
  const meta = payload?.MetaData || {};
  const message = payload?.Message || {};
  const staticData = message.ShipStaticData || message.StaticDataReport?.ReportB || {};
  const staticName = message.StaticDataReport?.ReportA?.Name;

  return {
    mmsi: String(
      meta.MMSI ||
      staticData.UserID ||
      message.PositionReport?.UserID ||
      message.StandardClassBPositionReport?.UserID ||
      ''
    ),
    name: String(meta.ShipName || staticData.Name || staticName || '').trim() || null,
    callSign: String(meta.CallSign || staticData.CallSign || '').trim() || null,
    destination: String(meta.Destination || staticData.Destination || '').trim() || null,
  };
}

function formatNavStatus(status) {
  const map = {
    0: 'Under way using engine',
    1: 'At anchor',
    2: 'Not under command',
    3: 'Restricted maneuverability',
    4: 'Constrained by draught',
    5: 'Moored',
    6: 'Aground',
    7: 'Fishing',
    8: 'Under sail',
  };
  return map[status] || (Number.isFinite(status) ? `Status ${status}` : 'Unknown');
}

async function fetchShipSnapshot(config) {
  if (!config.aisstreamApiKey) {
    throw new Error('AISStream API key is not configured.');
  }

  const createSocket = getAisSocketFactory();
  const shipMap = new Map();
  const ws = createSocket(AISSTREAM_WS_URL);

  return new Promise((resolve, reject) => {
    let settled = false;
    const timeoutId = setTimeout(() => {
      finalize();
    }, 18000);

    function cleanup() {
      clearTimeout(timeoutId);
      if (typeof ws.close === 'function') {
        try { ws.close(); } catch {}
      }
    }

    function finalize(error = null) {
      if (settled) return;
      settled = true;
      cleanup();
      if (error) {
        reject(error);
        return;
      }

      const sortedShips = Array.from(shipMap.values())
        .filter((item) => Number.isFinite(item.lat) && Number.isFinite(item.lon))
        .sort((a, b) => (a.lastUpdateTs || 0) < (b.lastUpdateTs || 0) ? 1 : -1);

      const priorityShips = [];
      const nonPriorityShips = [];
      for (const item of sortedShips) {
        if (isStrategicShip(item)) priorityShips.push(item);
        else nonPriorityShips.push(item);
      }

      const ships = [
        ...priorityShips.slice(0, MAX_PRIORITY_SHIPS),
        ...nonPriorityShips.slice(0, Math.max(0, MAX_GLOBAL_SHIPS - Math.min(priorityShips.length, MAX_PRIORITY_SHIPS))),
      ].map((item) => {
        const military = classifyMilitaryShip(item.name, item.callSign);
        return {
          id: item.id,
          mmsi: item.mmsi,
          name: item.name || `MMSI ${item.mmsi}`,
          callSign: item.callSign,
          destination: item.destination,
          lat: round(item.lat, 4),
          lon: round(item.lon, 4),
          speedKnots: Number.isFinite(item.speedKnots) ? Math.round(item.speedKnots) : null,
          heading: Number.isFinite(item.heading) ? Math.round(item.heading) : null,
          navStatus: formatNavStatus(item.navStatus),
          lastUpdateAgeSec: Math.max(0, Math.round((Date.now() - (item.lastUpdateTs || Date.now())) / 1000)),
          strategic: isStrategicShip(item),
          militaryLikely: military.militaryLikely,
          militaryReason: military.militaryReason,
        };
      });

      if (ships.length > 0) {
        shipSnapshotCache = {
          ships,
          generatedAt: Date.now(),
        };
        resolve({ ships, usedCache: false });
        return;
      }

      if (shipSnapshotCache.ships.length > 0 && (Date.now() - shipSnapshotCache.generatedAt) <= SHIP_CACHE_TTL_MS) {
        resolve({ ships: shipSnapshotCache.ships, usedCache: true });
        return;
      }

      resolve({ ships: [], usedCache: false });
    }

    function upsertShip(payload) {
      const identity = extractShipIdentity(payload);
      if (!identity.mmsi) return;

      const position = extractAisPosition(payload);
      const current = shipMap.get(identity.mmsi) || {
        id: identity.mmsi,
        mmsi: identity.mmsi,
      };

      const next = {
        ...current,
        ...identity,
        lastUpdateTs: Date.now(),
      };

      if (position) {
        next.lat = position.Latitude ?? position.latitude ?? current.lat;
        next.lon = position.Longitude ?? position.longitude ?? current.lon;
        next.speedKnots = position.Sog ?? position.sog ?? current.speedKnots;
        next.heading = position.Cog ?? position.TrueHeading ?? current.heading;
        next.navStatus = position.NavigationalStatus ?? current.navStatus;
      }

      shipMap.set(identity.mmsi, next);
    }

    async function handleMessage(rawData) {
      try {
        const payload = JSON.parse(await readSocketMessage(rawData));
        if (payload?.error || payload?.Error) {
          finalize(new Error(payload.error || payload.Error));
          return;
        }
        upsertShip(payload);
      } catch {
        // Ignore malformed messages and continue collecting.
      }
    }

    function handleOpen() {
      const subscription = {
        APIKey: config.aisstreamApiKey,
        Apikey: config.aisstreamApiKey,
        BoundingBoxes: SHIP_BOUNDING_BOXES,
      };
      ws.send(JSON.stringify(subscription));
    }

    if ('addEventListener' in ws) {
      ws.addEventListener('open', handleOpen);
      ws.addEventListener('message', (event) => { void handleMessage(event.data); });
      ws.addEventListener('error', () => finalize(new Error('AISStream connection failed.')));
      ws.addEventListener('close', () => finalize());
      return;
    }

    ws.onopen = handleOpen;
    ws.onmessage = (event) => { void handleMessage(event.data); };
    ws.onerror = () => finalize(new Error('AISStream connection failed.'));
    ws.onclose = () => finalize();
  });
}

async function fetchShipSnapshotWithRetry(config) {
  const delays = [0, 1200, 2500];
  let lastError = null;

  for (const waitMs of delays) {
    if (waitMs > 0) {
      await delay(waitMs);
    }

    try {
      return await fetchShipSnapshot(config);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('AISStream connection failed.');
}

export async function getTrackerSnapshot(env = {}, options = {}) {
  const fetchFlights = options.fetchFlights !== false;
  const fetchShips = options.fetchShips !== false;
  const cacheKey = `air:${fetchFlights ? 1 : 0}|sea:${fetchShips ? 1 : 0}`;
  const currentSnapshot = trackerSnapshotCache.snapshot;
  const currentAge = Date.now() - trackerSnapshotCache.generatedAt;
  const flightStatusText = String(currentSnapshot?.sourceStatus?.flights || '').toLowerCase();
  const shipStatusText = String(currentSnapshot?.sourceStatus?.ships || '').toLowerCase();
  const hasTrackerFailure = (
    (fetchFlights && currentSnapshot && (!currentSnapshot.flights?.length) && (flightStatusText.includes('unavailable') || flightStatusText.includes('throttled') || flightStatusText.includes('retrying')))
    || (fetchShips && currentSnapshot && (!currentSnapshot.ships?.length) && shipStatusText.includes('failed'))
  );
  const snapshotTtl = hasTrackerFailure ? TRACKER_ERROR_SNAPSHOT_TTL_MS : TRACKER_SNAPSHOT_TTL_MS;

  if (
    currentSnapshot
    && trackerSnapshotCache.key === cacheKey
    && currentAge <= snapshotTtl
  ) {
    return currentSnapshot;
  }

  const config = getTrackerConfig(env);
  const [flightsResult, shipsResult] = await Promise.allSettled([
    fetchFlights ? fetchFlightSnapshot(config) : Promise.resolve([]),
    fetchShips ? fetchShipSnapshotWithRetry(config) : Promise.resolve({ ships: [], usedCache: false }),
  ]);

  const flightPayload = flightsResult.status === 'fulfilled'
    ? { flights: flightsResult.value, usedCache: false }
    : (
      flightSnapshotCache.flights.length > 0 && (Date.now() - flightSnapshotCache.generatedAt) <= FLIGHT_CACHE_TTL_MS
        ? { flights: flightSnapshotCache.flights, usedCache: true }
        : { flights: [], usedCache: false }
    );

  const shipPayload = shipsResult.status === 'fulfilled'
    ? shipsResult.value
    : (
      shipSnapshotCache.ships.length > 0 && (Date.now() - shipSnapshotCache.generatedAt) <= SHIP_CACHE_TTL_MS
        ? { ships: shipSnapshotCache.ships, usedCache: true }
        : { ships: [], usedCache: false }
    );

  const snapshot = {
    generatedAt: new Date().toISOString(),
    region: TRACKER_REGION,
    flights: flightPayload.flights,
    ships: shipPayload.ships,
    sourceStatus: {
      flights: !fetchFlights
        ? 'hidden'
        : flightsResult.status === 'fulfilled'
        ? `${flightFetchMeta.status || 'ok'} (${flightPayload.flights.length})`
        : `${flightPayload.usedCache ? 'stale cache' : 'temporarily unavailable'} ${flightPayload.flights.length ? `(${flightPayload.flights.length})` : ''}`.trim(),
      ships: !fetchShips
        ? 'hidden'
        : shipsResult.status === 'fulfilled'
        ? `${shipPayload.usedCache ? 'stale cache' : 'ok'} (${shipPayload.ships.length})`
        : `${shipPayload.usedCache ? 'stale cache' : (shipsResult.reason?.message || 'failed')} ${shipPayload.ships.length ? `(${shipPayload.ships.length})` : ''}`.trim(),
    },
  };

  trackerSnapshotCache = {
    snapshot,
    generatedAt: Date.now(),
    key: cacheKey,
  };

  return snapshot;
}

export { TRACKER_REGION };
