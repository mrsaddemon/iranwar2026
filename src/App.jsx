import React, { useState, useCallback, useEffect, useRef } from 'react';
import TopBar from './components/TopBar.jsx';
import LeftPanel from './components/LeftPanel.jsx';
import RightPanel from './components/RightPanel.jsx';
import BottomPanel from './components/BottomPanel.jsx';
import MapCanvas from './components/MapCanvas.jsx';
import PlayerControls from './components/PlayerControls.jsx';
import WarConclusion from './components/WarConclusion.jsx';
import { createSimulationState, simulateTick, applyPlayerAction, resolvePendingNuclearStrike } from './engine/SimulationEngine.js';

const TICK_INTERVALS = { 1: 1000, 5: 200, 20: 50 };
const TRACKER_POLL_INTERVAL_MS = 2500;
const TRACKER_TRAIL_LIMIT = 6;
const TRACKER_STORAGE_KEY = 'war-sim-tracker-cache-v1';
const TRACKER_ENTITY_GRACE_MS = 3 * 60 * 1000;
const TRACKER_VISIBILITY_STORAGE_KEY = 'war-sim-tracker-visibility-v3';

function isLocalRuntime() {
  if (typeof window === 'undefined') return false;
  return (
    window.location.hostname === '127.0.0.1'
    || window.location.hostname === 'localhost'
  );
}

function shouldPreserveEntities(nextItems, sourceStatusValue) {
  const statusText = String(sourceStatusValue || '').toLowerCase();
  return (!Array.isArray(nextItems) || nextItems.length === 0)
    && (
      statusText.includes('failed')
      || statusText.includes('connection failed')
      || statusText.includes('stale cache')
      || statusText.includes('throttled')
      || statusText.includes('too many requests')
      || statusText.includes('429')
      || statusText.includes('rate limit')
    );
}

function readStoredTrackerSnapshot() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(TRACKER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return {
      generatedAt: parsed.generatedAt || null,
      fetchedAt: parsed.fetchedAt || null,
      flights: Array.isArray(parsed.flights) ? parsed.flights : [],
      ships: Array.isArray(parsed.ships) ? parsed.ships : [],
      sourceStatus: parsed.sourceStatus || {},
    };
  } catch {
    return null;
  }
}

function storeTrackerSnapshot(snapshot) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // Ignore storage failures; live state still works for the current session.
  }
}

function readTrackerVisibility() {
  if (typeof window === 'undefined') {
    return { flights: false, ships: false };
  }
  try {
    const raw = window.localStorage.getItem(TRACKER_VISIBILITY_STORAGE_KEY);
    if (!raw) return { flights: false, ships: false };
    const parsed = JSON.parse(raw);
    return {
      flights: parsed?.flights === true,
      ships: parsed?.ships === true,
    };
  } catch {
    return { flights: false, ships: false };
  }
}

function storeTrackerVisibility(visibility) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(TRACKER_VISIBILITY_STORAGE_KEY, JSON.stringify(visibility));
  } catch {
    // Ignore storage failures; toggles still work for the current session.
  }
}

function advanceCoordinates(lat, lon, headingDeg, speedKnots, seconds) {
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || !Number.isFinite(headingDeg) || !Number.isFinite(speedKnots) || speedKnots <= 0 || seconds <= 0) {
    return { lat, lon };
  }

  const earthRadiusKm = 6371;
  const distanceKm = (speedKnots * 1.852 * seconds) / 3600;
  const angularDistance = distanceKm / earthRadiusKm;
  const bearing = (headingDeg * Math.PI) / 180;
  const lat1 = (lat * Math.PI) / 180;
  const lon1 = (lon * Math.PI) / 180;

  const sinLat1 = Math.sin(lat1);
  const cosLat1 = Math.cos(lat1);
  const sinAd = Math.sin(angularDistance);
  const cosAd = Math.cos(angularDistance);

  const lat2 = Math.asin((sinLat1 * cosAd) + (cosLat1 * sinAd * Math.cos(bearing)));
  const lon2 = lon1 + Math.atan2(
    Math.sin(bearing) * sinAd * cosLat1,
    cosAd - (sinLat1 * Math.sin(lat2)),
  );

  let normalizedLon = ((lon2 * 180) / Math.PI + 540) % 360 - 180;
  if (!Number.isFinite(normalizedLon)) normalizedLon = lon;

  return {
    lat: (lat2 * 180) / Math.PI,
    lon: normalizedLon,
  };
}

function getRenderedTrackerPosition(entity, now) {
  if (!entity) return null;
  const lat = Number.isFinite(entity.lat) ? entity.lat : null;
  const lon = Number.isFinite(entity.lon) ? entity.lon : null;
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;

  const previousLat = Number.isFinite(entity.previousLat) ? entity.previousLat : lat;
  const previousLon = Number.isFinite(entity.previousLon) ? entity.previousLon : lon;
  const observedAt = Number.isFinite(entity.observedAt) ? entity.observedAt : now;
  const interpolationWindowMs = TRACKER_POLL_INTERVAL_MS;
  const elapsedMs = Math.max(0, now - observedAt);
  const progress = Math.max(0, Math.min(1, elapsedMs / interpolationWindowMs));

  const basePoint = (previousLat === lat && previousLon === lon)
    ? { lat, lon }
    : {
        lat: previousLat + ((lat - previousLat) * progress),
        lon: previousLon + ((lon - previousLon) * progress),
      };

  const extrapolatedSeconds = Math.min(30, Math.max(0, elapsedMs - interpolationWindowMs) / 1000);
  return advanceCoordinates(basePoint.lat, basePoint.lon, entity.heading, entity.speedKnots, extrapolatedSeconds);
}

function mergeTrackerEntities(previousEntities, nextEntities, fetchedAt) {
  const previousById = new Map((previousEntities || []).map((entity) => [entity.id, entity]));
  const merged = (nextEntities || []).map((entity) => {
    const previous = previousById.get(entity.id);
    const renderedPrevious = getRenderedTrackerPosition(previous, fetchedAt);
    const previousLat = renderedPrevious?.lat ?? previous?.lat ?? entity.lat;
    const previousLon = renderedPrevious?.lon ?? previous?.lon ?? entity.lon;
    const positionChanged = previous && Number.isFinite(previous.lat) && Number.isFinite(previous.lon)
      && (previous.lat !== entity.lat || previous.lon !== entity.lon);

    const history = positionChanged
      ? [
          ...(previous?.history || []),
          {
            lat: renderedPrevious?.lat ?? previous.lat,
            lon: renderedPrevious?.lon ?? previous.lon,
            observedAt: previous.observedAt || fetchedAt,
          },
        ].slice(-TRACKER_TRAIL_LIMIT)
      : (previous?.history || []).slice(-TRACKER_TRAIL_LIMIT);

    return {
      ...entity,
      previousLat,
      previousLon,
      previousObservedAt: previous?.observedAt || fetchedAt,
      observedAt: fetchedAt,
      history,
      stale: false,
    };
  });

  const nextIds = new Set((nextEntities || []).map((entity) => entity.id));
  const preserved = (previousEntities || [])
    .filter((entity) => !nextIds.has(entity.id))
    .filter((entity) => (fetchedAt - (entity.observedAt || fetchedAt)) <= TRACKER_ENTITY_GRACE_MS)
    .map((entity) => ({
      ...entity,
      stale: true,
      history: (entity.history || []).slice(-TRACKER_TRAIL_LIMIT),
    }));

  return [...merged, ...preserved];
}

export default function App() {
  const [state, setState] = useState(createSimulationState);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [bottomTab, setBottomTab] = useState('predictions'); // 'predictions' | 'command'
  const [iranHasNuke, setIranHasNuke] = useState(false);
  const [refreshPending, setRefreshPending] = useState(false);
  const [trackerSnapshot, setTrackerSnapshot] = useState(() => {
    const stored = readStoredTrackerSnapshot();
    return stored || {
      generatedAt: null,
      fetchedAt: null,
      flights: [],
      ships: [],
      sourceStatus: {},
    };
  });
  const [highVisibility, setHighVisibility] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('sunlight-mode') === '1';
  });
  const [trackerVisibility, setTrackerVisibility] = useState(readTrackerVisibility);
  const intervalRef = useRef(null);
  const nuclearResolutionTimeoutRef = useRef(null);
  const refreshTimeoutRef = useRef(null);
  const refreshSeenRef = useRef(null);

  const tick = useCallback(() => {
    setState(prev => {
      if (prev.warConclusion) return prev;
      return simulateTick(prev);
    });
  }, []);

  useEffect(() => {
    if (running && !state.warConclusion) {
      intervalRef.current = setInterval(tick, TICK_INTERVALS[speed] || 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, speed, tick, state.warConclusion]);

  // Stop simulation when war concludes
  useEffect(() => {
    if (state.warConclusion && running) {
      setRunning(false);
    }
  }, [state.warConclusion, running]);

  useEffect(() => {
    if (!state.pendingNuclearStrike) return undefined;

    setRunning(false);
    const delay = Math.max(0, state.pendingNuclearStrike.resolveAt - Date.now());
    nuclearResolutionTimeoutRef.current = setTimeout(() => {
      setState(prev => resolvePendingNuclearStrike(prev));
    }, delay);

    return () => {
      if (nuclearResolutionTimeoutRef.current) {
        clearTimeout(nuclearResolutionTimeoutRef.current);
        nuclearResolutionTimeoutRef.current = null;
      }
    };
  }, [state.pendingNuclearStrike]);

  useEffect(() => {
    refreshSeenRef.current = state.lastSyncedAt;
  }, [state.lastSyncedAt]);

  useEffect(() => {
    if (isLocalRuntime()) return undefined;

    const pollForDeployment = async () => {
      try {
        const resp = await fetch(`/update-meta.json?ts=${Date.now()}`, { cache: 'no-store' });
        if (!resp.ok) return;
        const meta = await resp.json();
        if (!meta?.lastSyncedAt || meta.lastSyncedAt === refreshSeenRef.current) return;

        refreshSeenRef.current = meta.lastSyncedAt;
        setRefreshPending(true);
        if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
        refreshTimeoutRef.current = setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch {
        // Ignore transient polling failures; a later poll can still pick up the deployment.
      }
    };

    pollForDeployment();
    const pollId = setInterval(pollForDeployment, 60000);
    return () => {
      clearInterval(pollId);
      if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
    };
  }, []);

  const handleToggleRunning = useCallback(() => {
    setRunning(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setRunning(false);
    if (nuclearResolutionTimeoutRef.current) {
      clearTimeout(nuclearResolutionTimeoutRef.current);
      nuclearResolutionTimeoutRef.current = null;
    }
    setState(createSimulationState());
    setBottomTab('predictions');
  }, []);

  const handleSpeedChange = useCallback((s) => {
    setSpeed(s);
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadTrackerSnapshot = async () => {
      if (!trackerVisibility?.flights && !trackerVisibility?.ships) {
        if (cancelled) return;
        setTrackerSnapshot((previous) => ({
          generatedAt: previous?.generatedAt || null,
          fetchedAt: Date.now(),
          flights: [],
          ships: [],
          sourceStatus: {
            flights: 'hidden',
            ships: 'hidden',
          },
        }));
        return;
      }

      try {
        const params = new URLSearchParams({
          ts: String(Date.now()),
          air: trackerVisibility?.flights ? '1' : '0',
          sea: trackerVisibility?.ships ? '1' : '0',
        });
        const response = await fetch(`/api/tracker/snapshot?${params.toString()}`, { cache: 'no-store' });
        if (!response.ok) return;
        const data = await response.json();
        if (cancelled) return;
        const fetchedAt = Date.now();
        setTrackerSnapshot((previous) => {
          const nextFlights = Array.isArray(data.flights) ? data.flights : [];
          const nextShips = Array.isArray(data.ships) ? data.ships : [];
          const resolvedFlights = shouldPreserveEntities(nextFlights, data?.sourceStatus?.flights)
            ? (previous?.flights || [])
            : nextFlights;
          const resolvedShips = shouldPreserveEntities(nextShips, data?.sourceStatus?.ships)
            ? (previous?.ships || [])
            : nextShips;

          const nextSnapshot = {
            generatedAt: data.generatedAt || null,
            fetchedAt,
            flights: mergeTrackerEntities(previous?.flights, resolvedFlights, fetchedAt),
            ships: mergeTrackerEntities(previous?.ships, resolvedShips, fetchedAt),
            sourceStatus: data.sourceStatus || {},
          };
          if (nextSnapshot.flights.length > 0 || nextSnapshot.ships.length > 0) {
            storeTrackerSnapshot(nextSnapshot);
          }
          return nextSnapshot;
        });
      } catch {
        // Ignore transient tracker failures; the next poll can recover.
      }
    };

    loadTrackerSnapshot();
    const intervalId = window.setInterval(loadTrackerSnapshot, TRACKER_POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, [trackerVisibility]);

  const handleToggleHighVisibility = useCallback(() => {
    setHighVisibility(prev => {
      const next = !prev;
      try {
        window.localStorage.setItem('sunlight-mode', next ? '1' : '0');
      } catch {
        // Ignore storage failures; the mode still works for this session.
      }
      return next;
    });
  }, []);

  const handleToggleTrackerLayer = useCallback((layer) => {
    setTrackerVisibility((previous) => {
      const next = { ...previous, [layer]: !previous[layer] };
      storeTrackerVisibility(next);
      setTrackerSnapshot((current) => ({
        ...(current || {}),
        sourceStatus: {
          ...(current?.sourceStatus || {}),
          [layer === 'flights' ? 'flights' : 'ships']: next[layer] ? 'connecting' : 'hidden',
        },
      }));
      return next;
    });
  }, []);

  const handleSelectActor = useCallback((actorId) => {
    setState(prev => ({ ...prev, playerControlledActor: actorId }));
    if (actorId) setBottomTab('command');
  }, []);

  const handlePlayerAction = useCallback((actionId, target, options) => {
    setState(prev => applyPlayerAction(prev, actionId, target, options));
  }, []);

  return (
    <div className={`app-shell ${highVisibility ? 'sunlight-mode' : ''}`}>
      {/* Announcement Banner */}
      <div className="announce-bar">
        <span className="announce-pulse" />
        <span>SIMULATION SEEDED FROM THE LATEST SOURCE SNAPSHOT, UPDATED EVERY 15 MINUTES</span>
        <span className="announce-dot">|</span>
        <span>Probabilistic model for educational purposes only</span>
        {refreshPending && (
          <>
            <span className="announce-dot">|</span>
            <span>New scheduled update detected. Refreshing...</span>
          </>
        )}
      </div>

      <TopBar
        dayCount={state.dayCount}
        warDay={state.warDay}
        speed={speed}
        running={running}
        nuclearIndex={state.nuclearIndex}
        escalationLevel={state.escalationLevel}
        summary={state.summary}
        recentEvents={state.recentEvents}
        ceasefireStatus={state.ceasefireStatus}
        lastUpdated={state.lastUpdated}
        lastSyncedAt={state.lastSyncedAt}
        simStart={state.lastUpdated}
        onSpeedChange={handleSpeedChange}
        onToggleRunning={handleToggleRunning}
        onReset={handleReset}
        onFullscreen={handleFullscreen}
        highVisibility={highVisibility}
        onToggleHighVisibility={handleToggleHighVisibility}
      />

      <div className="main-content">
        <LeftPanel
          actors={state.actors}
          escalationLevel={state.escalationLevel}
          oilDisruption={state.oilDisruption}
          ceasefireStatus={state.ceasefireStatus}
          recentEvents={state.events}
          summary={state.snapshotSummary}
        />

        <div className="center-panel">
          <MapCanvas
            mapAnimations={state.mapAnimations}
            escalationLevel={state.escalationLevel}
            nuclearIndex={state.nuclearIndex}
            highVisibility={highVisibility}
            trackerSnapshot={trackerSnapshot}
            trackerVisibility={trackerVisibility}
            onToggleTrackerLayer={handleToggleTrackerLayer}
          />
        </div>

        <RightPanel events={state.events} updateSequence={state.updateSequence} />
      </div>

      {/* Tabbed Bottom Panel */}
      <div className="bottom-tabs">
        <button
          className={`bottom-tab-btn ${bottomTab === 'predictions' ? 'active' : ''}`}
          onClick={() => setBottomTab('predictions')}
        >
          PREDICTIONS
        </button>
        <button
          className={`bottom-tab-btn ${bottomTab === 'command' ? 'active' : ''}`}
          onClick={() => setBottomTab('command')}
          style={state.playerControlledActor ? { color: '#22c55e' } : {}}
        >
          COMMAND CENTER {state.playerControlledActor ? `(${state.playerControlledActor.toUpperCase()})` : ''}
          {!state.playerControlledActor && <span className="bottom-tab-hint">SELECT SIDE</span>}
        </button>
      </div>

      {bottomTab === 'predictions' ? (
        <BottomPanel
          predictions={state.predictions}
          escalationProbability={state.escalationProbability}
          warDurationRange={state.warDurationRange}
          nuclearPredictions={state.nuclearPredictions}
          oilDisruption={state.oilDisruption}
          escalationLevel={state.escalationLevel}
          ceasefireStatus={state.ceasefireStatus}
          narratives={state.narratives}
          lastNarrativeUpdate={state.lastNarrativeUpdate}
          updateSequence={state.updateSequence}
        />
      ) : (
        <PlayerControls
          playerControlledActor={state.playerControlledActor}
          onSelectActor={handleSelectActor}
          onPlayerAction={handlePlayerAction}
          nuclearIndex={state.nuclearIndex}
          ceasefireProposals={state.ceasefireProposals}
          escalationLevel={state.escalationLevel}
          iranHasNuke={iranHasNuke}
          onToggleIranNuke={() => setIranHasNuke(prev => !prev)}
        />
      )}

      {/* Social Footer */}
      <div className="social-footer">
        <span className="social-built">Built by lmbdTech</span>
        <a href="https://www.youtube.com/@lmbdTech" target="_blank" rel="noopener noreferrer" className="social-link social-yt">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          YouTube
        </a>
        <a href="https://www.instagram.com/lmbdtech/" target="_blank" rel="noopener noreferrer" className="social-link social-ig">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          Instagram
        </a>
      </div>

      {/* War Conclusion Overlay */}
      <WarConclusion
        conclusion={state.warConclusion}
        dayCount={state.dayCount}
        warDay={state.warDay}
        oilDisruption={state.oilDisruption}
        nuclearIndex={state.nuclearIndex}
        onReset={handleReset}
      />
    </div>
  );
}
