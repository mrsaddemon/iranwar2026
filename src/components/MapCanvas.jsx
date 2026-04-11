import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import {
  ACTOR_RGB,
  CITY_CORES,
  CONFLICT_ZONES,
  DEFAULT_VIEW,
  GRID_SPACING,
  MAP_LABELS,
  SEA_LABELS,
  SMALL_COUNTRY_HOTSPOTS,
  STRAIT_OF_HORMUZ,
  TOOLTIP_STYLE,
  US_BASES,
  VIEWPORT_BOUNDS,
  distanceToSegment,
  formatTooltipPosition,
  getCountryStyle,
  getFeatureTooltip,
  getRegionFeatures,
  isPointInViewportBounds,
  projectWithView,
} from './mapGeoData.js';
import {
  drawAirstrikeArc,
  drawCyber,
  drawDiplomacy,
  drawDroneSwarm,
  drawMissileTrajectory,
  drawNavalPath,
  drawNuclearStrikeSequence,
  drawShield,
  drawSignal,
} from './mapAnimationDraw.js';

function getOverlayVisualScale(zoomScale) {
  return Math.max(0.72, Math.min(1.28, 1 / Math.sqrt(zoomScale || 1)));
}

function getScaledLabelFontSize(baseSize, zoomScale) {
  return Math.max(7, baseSize * getOverlayVisualScale(zoomScale));
}

function getTrackerMarkerSize(highVisibility) {
  return highVisibility ? 1.1 : 1;
}

const DEFAULT_CONFLICT_FOCUS = { lon: 43, lat: 31 };
const DEFAULT_CONFLICT_SCALE = 1.42;

function createViewportProjection(width, height, padding = { x: 24, y: 14 }) {
  const baseProjection = geoMercator().scale(1).translate([0, 0]);
  const corners = [
    [VIEWPORT_BOUNDS.minLon, VIEWPORT_BOUNDS.minLat],
    [VIEWPORT_BOUNDS.minLon, VIEWPORT_BOUNDS.maxLat],
    [VIEWPORT_BOUNDS.maxLon, VIEWPORT_BOUNDS.minLat],
    [VIEWPORT_BOUNDS.maxLon, VIEWPORT_BOUNDS.maxLat],
  ]
    .map((point) => baseProjection(point))
    .filter(Boolean);

  if (corners.length === 0) {
    return geoMercator().fitExtent([[padding.x, padding.y], [width - padding.x, height - padding.y]], {
      type: 'FeatureCollection',
      features: [],
    });
  }

  const xs = corners.map((point) => point[0]);
  const ys = corners.map((point) => point[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const projectedWidth = Math.max(1e-6, maxX - minX);
  const projectedHeight = Math.max(1e-6, maxY - minY);
  const availableWidth = Math.max(1, width - (padding.x * 2));
  const availableHeight = Math.max(1, height - (padding.y * 2));
  const scale = Math.min(availableWidth / projectedWidth, availableHeight / projectedHeight);
  const tx = padding.x + ((availableWidth - (projectedWidth * scale)) / 2) - (minX * scale);
  const ty = padding.y + ((availableHeight - (projectedHeight * scale)) / 2) - (minY * scale);

  return geoMercator().scale(scale).translate([tx, ty]);
}

function getTrackerInterpolationWindowMs(entity) {
  const stale = Boolean(entity?.stale);
  return stale ? 12000 : 5000;
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

function getTrackerColors(entity, kind, highVisibility) {
  const isMilitary = Boolean(entity?.militaryLikely);
  if (isMilitary) {
    return {
      fill: `rgba(239, 68, 68, ${highVisibility ? 0.98 : 0.94})`,
      stroke: `rgba(254, 226, 226, ${highVisibility ? 0.98 : 0.9})`,
      trail: `rgba(239, 68, 68, ${highVisibility ? 0.45 : 0.34})`,
      ring: `rgba(248, 113, 113, ${highVisibility ? 0.4 : 0.3})`,
      accent: 'rgba(248, 113, 113, 0.98)',
    };
  }

  if (kind === 'ship') {
    return {
      fill: `rgba(251, 191, 36, ${highVisibility ? 0.98 : 0.94})`,
      stroke: `rgba(255, 251, 235, ${highVisibility ? 0.98 : 0.9})`,
      trail: `rgba(251, 191, 36, ${highVisibility ? 0.38 : 0.28})`,
      ring: `rgba(251, 191, 36, ${highVisibility ? 0.34 : 0.24})`,
      accent: 'rgba(251, 191, 36, 0.98)',
    };
  }

  return {
    fill: `rgba(34, 211, 238, ${highVisibility ? 1 : 0.94})`,
    stroke: `rgba(224, 242, 254, ${highVisibility ? 0.98 : 0.88})`,
    trail: `rgba(34, 211, 238, ${highVisibility ? 0.34 : 0.24})`,
    ring: `rgba(34, 211, 238, ${highVisibility ? 0.42 : 0.28})`,
    accent: 'rgba(34, 211, 238, 0.98)',
  };
}

function getInterpolatedCoordinates(entity, now) {
  if (!entity) return null;
  const lat = Number.isFinite(entity.lat) ? entity.lat : null;
  const lon = Number.isFinite(entity.lon) ? entity.lon : null;
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;

  const previousLat = Number.isFinite(entity.previousLat) ? entity.previousLat : lat;
  const previousLon = Number.isFinite(entity.previousLon) ? entity.previousLon : lon;
  const observedAt = Number.isFinite(entity.observedAt) ? entity.observedAt : now;

  const interpolationWindowMs = getTrackerInterpolationWindowMs(entity);
  const elapsedMs = Math.max(0, now - observedAt);
  const progress = Math.max(0, Math.min(1, elapsedMs / interpolationWindowMs));
  const basePoint = (previousLat === lat && previousLon === lon)
    ? { lat, lon }
    : {
        lat: previousLat + ((lat - previousLat) * progress),
        lon: previousLon + ((lon - previousLon) * progress),
      };

  const extrapolatedSeconds = Math.min(entity?.stale ? 45 : 30, Math.max(0, elapsedMs - interpolationWindowMs) / 1000);
  return advanceCoordinates(basePoint.lat, basePoint.lon, entity.heading, entity.speedKnots, extrapolatedSeconds);
}

function formatAgeLabel(seconds) {
  if (!Number.isFinite(seconds)) return 'recent';
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

function formatFlightDetail(flight) {
  const parts = [
    flight.militaryLikely ? `Type: Probable military (${flight.militaryReason || 'heuristic'})` : 'Type: Civil / unconfirmed',
    flight.id ? `ICAO: ${flight.id.toUpperCase()}` : null,
    flight.originCountry ? `Origin: ${flight.originCountry}` : null,
    (Number.isFinite(flight.lat) && Number.isFinite(flight.lon)) ? `Position: ${flight.lat.toFixed(2)}, ${flight.lon.toFixed(2)}` : null,
    Number.isFinite(flight.altitudeFeet) ? `Altitude: ${flight.altitudeFeet.toLocaleString()} ft` : null,
    Number.isFinite(flight.speedKnots) ? `Speed: ${flight.speedKnots} kt` : null,
    Number.isFinite(flight.heading) ? `Heading: ${flight.heading}°` : null,
    flight.squawk ? `Squawk: ${flight.squawk}` : null,
    flight.onGround ? 'Status: On ground' : 'Status: Airborne',
    Number.isFinite(flight.lastContactAgeSec) ? `Last contact: ${formatAgeLabel(flight.lastContactAgeSec)}` : null,
  ];
  return parts.filter(Boolean).join(' • ');
}

function formatShipDetail(ship) {
  const parts = [
    ship.militaryLikely ? `Type: Probable military (${ship.militaryReason || 'heuristic'})` : 'Type: Civil / unconfirmed',
    ship.mmsi ? `MMSI: ${ship.mmsi}` : null,
    ship.callSign ? `Call sign: ${ship.callSign}` : null,
    ship.destination ? `Destination: ${ship.destination}` : null,
    (Number.isFinite(ship.lat) && Number.isFinite(ship.lon)) ? `Position: ${ship.lat.toFixed(2)}, ${ship.lon.toFixed(2)}` : null,
    Number.isFinite(ship.speedKnots) ? `Speed: ${ship.speedKnots} kt` : null,
    Number.isFinite(ship.heading) ? `Heading: ${ship.heading}°` : null,
    ship.navStatus ? `Nav: ${ship.navStatus}` : null,
    ship.strategic ? 'Theater route: Strategic corridor' : 'Theater route: Global traffic sample',
    Number.isFinite(ship.lastUpdateAgeSec) ? `Last update: ${formatAgeLabel(ship.lastUpdateAgeSec)}` : null,
  ];
  return parts.filter(Boolean).join(' • ');
}

function getTrackerStatusText(trackerSnapshot, visibleFlights, visibleShips, trackerVisibility) {
  const flights = visibleFlights?.length || 0;
  const ships = visibleShips?.length || 0;
  const flightStatus = trackerSnapshot?.sourceStatus?.flights || 'idle';
  const shipStatus = trackerSnapshot?.sourceStatus?.ships || 'idle';
  const normalizeStatus = (value, hiddenLabel) => {
    const text = String(value || '').toLowerCase();
    if (text === 'hidden') return hiddenLabel;
    if (text.includes('connecting') || text.includes('loading')) return 'CONNECTING';
    if (text.includes('throttled') || text.includes('429') || text.includes('too many requests') || text.includes('rate limit')) return 'THROTTLED';
    if (text.includes('522')) return 'UPSTREAM';
    if (text.includes('stale cache')) return 'CACHED';
    if (text.includes('ok')) return 'LIVE';
    if (text.includes('failed')) return 'UNAVAILABLE';
    return String(value || hiddenLabel).toUpperCase();
  };
  const airState = trackerVisibility?.flights === false ? 'OFF' : normalizeStatus(flightStatus, 'OFF');
  const seaState = trackerVisibility?.ships === false ? 'OFF' : normalizeStatus(shipStatus, 'OFF');
  return `THEATER TRACKER ${flights} FLIGHTS • ${ships} SHIPS • AIR ${airState} • SEA ${seaState}`;
}

const SMALL_COUNTRY_HIT_NAMES = new Set(['Bangladesh', 'Nepal', 'Bhutan']);

function findOverlayHoverTarget(mouseX, mouseY, width, height, projection, viewTransform, trackerSnapshot, highVisibility, now) {
  const markers = [];
  const visualScale = getOverlayVisualScale(viewTransform.scale);

  for (const zone of CONFLICT_ZONES) {
    const point = projectWithView(projection, zone.coordinates, viewTransform);
    if (point) {
      markers.push({
        hitRadius: Math.max(12, 18 * visualScale),
        point,
        tooltip: {
          id: `zone-${zone.label}`,
          title: zone.label,
          subtitle: 'Conflict Zone',
          detail: zone.detail,
          accent: `rgba(${zone.color.join(',')}, 0.88)`,
        },
      });
    }
  }

  for (const base of US_BASES) {
    const point = projectWithView(projection, base.coordinates, viewTransform);
    if (point) {
      markers.push({
        hitRadius: Math.max(9, 12 * visualScale),
        point,
        tooltip: {
          id: `base-${base.label}`,
          title: base.label,
          subtitle: 'US Position',
          detail: base.detail,
          accent: `rgba(${ACTOR_RGB.usa}, 0.88)`,
        },
      });
    }
  }

  for (const core of CITY_CORES) {
    const point = projectWithView(projection, core.coordinates, viewTransform);
    if (point) {
      markers.push({
        hitRadius: Math.max(8, 10 * visualScale),
        point,
        tooltip: {
          id: `core-${core.label}`,
          title: core.label,
          subtitle: 'Strategic Center',
          detail: core.detail,
          accent: `rgba(${core.color.join(',')}, 0.88)`,
        },
      });
    }
  }

  for (const hotspot of SMALL_COUNTRY_HOTSPOTS) {
    const point = projectWithView(projection, hotspot.coordinates, viewTransform);
    if (point) {
      const style = getCountryStyle(hotspot.name);
      markers.push({
        hitRadius: hotspot.hitRadius,
        point,
        tooltip: {
          id: `country-hotspot-${hotspot.name}`,
          title: style.label || hotspot.name.toUpperCase(),
          subtitle: style.subtitle || 'Regional State',
          detail: style.detail || `${hotspot.name} within the wider war theater.`,
          accent: (style.stroke || 'rgba(125, 211, 252, 0.88)').replace(/[\d.]+\)$/u, '0.88)'),
        },
      });
    }
  }

  for (const flight of trackerSnapshot?.flights || []) {
    const geoPoint = getInterpolatedCoordinates(flight, now);
    const point = geoPoint ? projectWithView(projection, geoPoint, viewTransform) : null;
    if (point) {
      const colors = getTrackerColors(flight, 'flight', highVisibility);
      markers.push({
        hitRadius: highVisibility ? 13 : 12,
        point,
        tooltip: {
          id: `flight-${flight.id}`,
          title: flight.callsign || 'Tracked Flight',
          subtitle: flight.militaryLikely ? 'Probable Military Flight' : 'Live Flight',
          detail: formatFlightDetail(flight),
          accent: colors.accent,
        },
      });
    }
  }

  for (const ship of trackerSnapshot?.ships || []) {
    const geoPoint = getInterpolatedCoordinates(ship, now);
    const point = geoPoint ? projectWithView(projection, geoPoint, viewTransform) : null;
    if (point) {
      const colors = getTrackerColors(ship, 'ship', highVisibility);
      markers.push({
        hitRadius: highVisibility ? 13 : 12,
        point,
        tooltip: {
          id: `ship-${ship.id}`,
          title: ship.name || `Ship ${ship.mmsi || ''}`.trim(),
          subtitle: ship.militaryLikely ? 'Probable Military Vessel' : 'Live Vessel',
          detail: formatShipDetail(ship),
          accent: colors.accent,
        },
      });
    }
  }

  for (const marker of markers) {
    if (Math.hypot(mouseX - marker.point.x, mouseY - marker.point.y) <= marker.hitRadius) {
      return {
        ...marker.tooltip,
        ...formatTooltipPosition(mouseX, mouseY, width, height),
      };
    }
  }

  const start = projectWithView(projection, STRAIT_OF_HORMUZ.start, viewTransform);
  const end = projectWithView(projection, STRAIT_OF_HORMUZ.end, viewTransform);
  if (start && end) {
    const straitDistance = distanceToSegment(mouseX, mouseY, start.x, start.y, end.x, end.y);
    if (straitDistance <= Math.max(6, 8 * visualScale)) {
      return {
        id: 'strait-of-hormuz',
        title: 'Strait of Hormuz',
        subtitle: STRAIT_OF_HORMUZ.blockaded ? 'Blockaded Chokepoint' : 'Strategic Chokepoint',
        detail: STRAIT_OF_HORMUZ.detail,
        accent: 'rgba(249, 115, 22, 0.88)',
        ...formatTooltipPosition(mouseX, mouseY, width, height),
      };
    }
  }

  return null;
}

export default function MapCanvas({
  mapAnimations,
  escalationLevel,
  highVisibility = false,
  trackerSnapshot = { flights: [], ships: [] },
  trackerVisibility = { flights: false, ships: false },
  onToggleTrackerLayer = null,
}) {
  const containerRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const dragRef = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const touchRef = useRef({ mode: null, lastX: 0, lastY: 0, lastDistance: 0, lastMidpoint: null });
  const viewTransformRef = useRef(DEFAULT_VIEW);
  const initialViewAppliedRef = useRef(false);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [viewTransform, setViewTransform] = useState(DEFAULT_VIEW);
  const [hoveredItem, setHoveredItem] = useState(null);

  const regionFeatures = useMemo(() => getRegionFeatures(), []);
  const featureCollection = useMemo(() => ({ type: 'FeatureCollection', features: regionFeatures }), [regionFeatures]);
  const visibleFlights = useMemo(
    () => (trackerVisibility?.flights === false
      ? []
      : (trackerSnapshot?.flights || []).filter((flight) => isPointInViewportBounds(flight))),
    [trackerSnapshot, trackerVisibility],
  );
  const visibleShips = useMemo(
    () => (trackerVisibility?.ships === false
      ? []
      : (trackerSnapshot?.ships || []).filter((ship) => isPointInViewportBounds(ship))),
    [trackerSnapshot, trackerVisibility],
  );

  const projection = useMemo(() => {
    if (!size.width || !size.height) return null;
    return createViewportProjection(size.width, size.height, { x: 24, y: 14 });
  }, [size.height, size.width]);

  const pathGenerator = useMemo(() => (projection ? geoPath(projection) : null), [projection]);

  const commitViewTransform = useCallback((nextTransform) => {
    viewTransformRef.current = nextTransform;
    setViewTransform(nextTransform);
  }, []);

  useEffect(() => {
    if (!projection || !size.width || !size.height || initialViewAppliedRef.current) return;
    const projectedFocus = projection([DEFAULT_CONFLICT_FOCUS.lon, DEFAULT_CONFLICT_FOCUS.lat]);
    if (!projectedFocus) return;

    const scale = DEFAULT_CONFLICT_SCALE;
    commitViewTransform({
      scale,
      x: (size.width / 2) - (projectedFocus[0] * scale),
      y: (size.height / 2) - (projectedFocus[1] * scale),
    });
    initialViewAppliedRef.current = true;
  }, [commitViewTransform, projection, size.height, size.width]);

  const scaleAroundPoint = useCallback((pointX, pointY, nextScale) => {
    const current = viewTransformRef.current;
    const clampedScale = Math.max(0.5, Math.min(5.5, nextScale));
    if (clampedScale === current.scale) return;

    const ratio = clampedScale / current.scale;
    commitViewTransform({
      scale: clampedScale,
      x: pointX - ((pointX - current.x) * ratio),
      y: pointY - ((pointY - current.y) * ratio),
    });
  }, [commitViewTransform]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setSize({
        width: Math.round(entry.contentRect.width),
        height: Math.round(entry.contentRect.height),
      });
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!size.width || !size.height) return undefined;

    const dpr = window.devicePixelRatio || 1;
    [bgCanvasRef.current, overlayCanvasRef.current].filter(Boolean).forEach((canvas) => {
      canvas.width = size.width * dpr;
      canvas.height = size.height * dpr;
      canvas.style.width = `${size.width}px`;
      canvas.style.height = `${size.height}px`;
      canvas.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    });

    return undefined;
  }, [size.height, size.width]);

  useEffect(() => {
    if (!projection || !size.width || !size.height) return undefined;
    const bgCanvas = bgCanvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;
    if (!bgCanvas || !overlayCanvas) return undefined;

    const bgCtx = bgCanvas.getContext('2d');
    const overlayCtx = overlayCanvas.getContext('2d');
    let running = true;

    const loop = (time) => {
      if (!running) return;
      const { x, y, scale } = viewTransformRef.current;
      const visualScale = getOverlayVisualScale(scale);

      bgCtx.clearRect(0, 0, size.width, size.height);
      const gradient = bgCtx.createRadialGradient(size.width / 2, size.height / 2, 0, size.width / 2, size.height / 2, size.width * 0.8);
      gradient.addColorStop(0, highVisibility ? '#162033' : '#0a0f1a');
      gradient.addColorStop(1, highVisibility ? '#0c1423' : '#050810');
      bgCtx.fillStyle = gradient;
      bgCtx.fillRect(0, 0, size.width, size.height);

      bgCtx.strokeStyle = highVisibility ? 'rgba(203, 213, 225, 0.09)' : 'rgba(59, 130, 246, 0.04)';
      bgCtx.lineWidth = 0.5;
      const gridSize = GRID_SPACING * scale;
      const startX = (x % gridSize) - gridSize;
      const startY = (y % gridSize) - gridSize;
      for (let gx = startX; gx < size.width + gridSize; gx += gridSize) {
        bgCtx.beginPath();
        bgCtx.moveTo(gx, 0);
        bgCtx.lineTo(gx, size.height);
        bgCtx.stroke();
      }
      for (let gy = startY; gy < size.height + gridSize; gy += gridSize) {
        bgCtx.beginPath();
        bgCtx.moveTo(0, gy);
        bgCtx.lineTo(size.width, gy);
        bgCtx.stroke();
      }

      if (escalationLevel > 40) {
        const intensity = ((escalationLevel - 40) / 60) * 0.08;
        bgCtx.fillStyle = `rgba(239, 68, 68, ${highVisibility ? intensity * 0.7 : intensity})`;
        bgCtx.fillRect(0, 0, size.width, size.height);
      }

      overlayCtx.clearRect(0, 0, size.width, size.height);
      const trackerMarkerSize = getTrackerMarkerSize(highVisibility);
      const now = Date.now();
      const start = projectWithView(projection, STRAIT_OF_HORMUZ.start, viewTransformRef.current);
      const end = projectWithView(projection, STRAIT_OF_HORMUZ.end, viewTransformRef.current);
      if (start && end) {
        const pulse = 0.5 + (Math.sin(time * 0.003) * 0.3);
        overlayCtx.beginPath();
        overlayCtx.moveTo(start.x, start.y);
        overlayCtx.lineTo(end.x, end.y);
        overlayCtx.strokeStyle = `rgba(249, 115, 22, ${pulse})`;
        overlayCtx.lineWidth = Math.max(1.5, 2.4 * visualScale);
        overlayCtx.stroke();

        overlayCtx.font = `bold ${getScaledLabelFontSize(9, scale)}px 'JetBrains Mono', monospace`;
        overlayCtx.fillStyle = `rgba(249, 115, 22, ${highVisibility ? Math.min(1, pulse + 0.35) : pulse + 0.2})`;
        overlayCtx.textAlign = 'center';
        overlayCtx.fillText(STRAIT_OF_HORMUZ.label, (start.x + end.x) / 2, start.y - (12 * visualScale));
      }

      for (const base of US_BASES) {
        const point = projectWithView(projection, base.coordinates, viewTransformRef.current);
        if (!point) continue;
        const pulse = 0.4 + (Math.sin(time * 0.002 + point.x * 0.01) * 0.3);
        overlayCtx.beginPath();
        overlayCtx.arc(point.x, point.y, 11 * visualScale, 0, Math.PI * 2);
        overlayCtx.fillStyle = `rgba(${ACTOR_RGB.usa}, ${pulse * 0.3})`;
        overlayCtx.fill();
        overlayCtx.beginPath();
        overlayCtx.arc(point.x, point.y, 4 * visualScale, 0, Math.PI * 2);
        overlayCtx.fillStyle = `rgba(${ACTOR_RGB.usa}, ${0.72 + (pulse * 0.28)})`;
        overlayCtx.fill();

        overlayCtx.font = `${getScaledLabelFontSize(8, scale)}px 'JetBrains Mono', monospace`;
        overlayCtx.fillStyle = `rgba(${ACTOR_RGB.usa}, ${highVisibility ? 0.92 : 0.7})`;
        overlayCtx.textAlign = 'center';
        overlayCtx.fillText(base.label, point.x, point.y + (16 * visualScale));
      }

      for (const zone of CONFLICT_ZONES) {
        const point = projectWithView(projection, zone.coordinates, viewTransformRef.current);
        if (!point) continue;
        const pulse = 0.3 + (Math.sin(time * 0.005 + point.x * 0.01) * 0.4);
        overlayCtx.beginPath();
        overlayCtx.arc(point.x, point.y, (16 + (pulse * 8)) * visualScale, 0, Math.PI * 2);
        overlayCtx.strokeStyle = `rgba(${zone.color.join(',')}, 0.25)`;
        overlayCtx.lineWidth = 1;
        overlayCtx.stroke();

        overlayCtx.font = `bold ${getScaledLabelFontSize(8, scale)}px 'JetBrains Mono', monospace`;
        overlayCtx.fillStyle = `rgba(${zone.color.join(',')}, ${highVisibility ? Math.min(1, pulse + 0.48) : pulse + 0.3})`;
        overlayCtx.textAlign = 'center';
        overlayCtx.fillText(zone.label, point.x, point.y - (8 * visualScale));
      }

      for (const core of CITY_CORES) {
        const point = projectWithView(projection, core.coordinates, viewTransformRef.current);
        if (!point) continue;
        const pulse = 0.5 + (Math.sin(time * 0.004 + point.x * 0.01) * 0.5);
        overlayCtx.beginPath();
        overlayCtx.arc(point.x, point.y, 14 * visualScale * (0.8 + (pulse * 0.4)), 0, Math.PI * 2);
        overlayCtx.strokeStyle = `rgba(${core.color.join(',')}, ${pulse * 0.3})`;
        overlayCtx.lineWidth = 1.5;
        overlayCtx.stroke();
        overlayCtx.beginPath();
        overlayCtx.arc(point.x, point.y, 5 * visualScale, 0, Math.PI * 2);
        overlayCtx.fillStyle = `rgba(${core.color.join(',')}, 0.9)`;
        overlayCtx.fill();

        overlayCtx.font = `${getScaledLabelFontSize(9, scale)}px 'JetBrains Mono', monospace`;
        overlayCtx.fillStyle = `rgba(${core.color.join(',')}, ${highVisibility ? 0.96 : 0.72})`;
        overlayCtx.textAlign = 'center';
        overlayCtx.fillText(core.label, point.x, point.y - (13 * visualScale));
      }

      for (const ship of visibleShips) {
        const geoPoint = getInterpolatedCoordinates(ship, now);
        const point = geoPoint ? projectWithView(projection, geoPoint, viewTransformRef.current) : null;
        if (!point) continue;
        const colors = getTrackerColors(ship, 'ship', highVisibility);
        const pulse = 0.45 + (Math.sin(time * 0.003 + point.y * 0.02) * 0.2);
        const hullLength = 7.5 * trackerMarkerSize;
        const hullWidth = 4.8 * trackerMarkerSize;
        const wakeRadius = 6.5 * trackerMarkerSize;

        const trailPoints = [...(ship.history || []).slice(-4), geoPoint]
          .map((segmentPoint) => projectWithView(projection, segmentPoint, viewTransformRef.current))
          .filter(Boolean);
        if (trailPoints.length > 1) {
          overlayCtx.beginPath();
          overlayCtx.moveTo(trailPoints[0].x, trailPoints[0].y);
          for (let idx = 1; idx < trailPoints.length; idx += 1) {
            overlayCtx.lineTo(trailPoints[idx].x, trailPoints[idx].y);
          }
          overlayCtx.strokeStyle = colors.trail;
          overlayCtx.lineWidth = 1.1;
          overlayCtx.stroke();
        }

        overlayCtx.save();
        overlayCtx.translate(point.x, point.y);
        overlayCtx.rotate(((ship.heading || 0) * Math.PI) / 180);
        overlayCtx.beginPath();
        overlayCtx.moveTo(0, -hullLength);
        overlayCtx.bezierCurveTo(hullWidth, (-hullLength * 0.28), hullWidth, hullLength * 0.52, 0, hullLength * 0.82);
        overlayCtx.bezierCurveTo(-hullWidth, hullLength * 0.52, -hullWidth, (-hullLength * 0.28), 0, -hullLength);
        overlayCtx.closePath();
        overlayCtx.fillStyle = colors.fill;
        overlayCtx.strokeStyle = colors.stroke.replace(/[\d.]+\)$/u, `${Math.min(1, pulse + 0.2)})`);
        overlayCtx.lineWidth = 1.2;
        overlayCtx.fill();
        overlayCtx.stroke();
        overlayCtx.beginPath();
        overlayCtx.moveTo(0, -hullLength * 0.3);
        overlayCtx.lineTo(0, hullLength * 0.38);
        overlayCtx.strokeStyle = `rgba(5, 15, 28, ${highVisibility ? 0.72 : 0.62})`;
        overlayCtx.lineWidth = 1;
        overlayCtx.stroke();
        overlayCtx.restore();

        overlayCtx.beginPath();
        overlayCtx.arc(point.x, point.y, wakeRadius + (pulse * 2.5), 0, Math.PI * 2);
        overlayCtx.strokeStyle = colors.ring.replace(/[\d.]+\)$/u, `${0.26 + (pulse * 0.22)})`);
        overlayCtx.lineWidth = 1;
        overlayCtx.stroke();
      }

      for (const flight of visibleFlights) {
        const geoPoint = getInterpolatedCoordinates(flight, now);
        const point = geoPoint ? projectWithView(projection, geoPoint, viewTransformRef.current) : null;
        if (!point) continue;
        const colors = getTrackerColors(flight, 'flight', highVisibility);
        const pulse = 0.45 + (Math.sin(time * 0.0035 + point.x * 0.018) * 0.2);
        const fuselage = 7 * trackerMarkerSize;
        const wingSpan = 6 * trackerMarkerSize;
        const tailSpan = 3 * trackerMarkerSize;

        const trailPoints = [...(flight.history || []).slice(-5), geoPoint]
          .map((segmentPoint) => projectWithView(projection, segmentPoint, viewTransformRef.current))
          .filter(Boolean);
        if (trailPoints.length > 1) {
          overlayCtx.beginPath();
          overlayCtx.moveTo(trailPoints[0].x, trailPoints[0].y);
          for (let idx = 1; idx < trailPoints.length; idx += 1) {
            overlayCtx.lineTo(trailPoints[idx].x, trailPoints[idx].y);
          }
          overlayCtx.strokeStyle = colors.trail;
          overlayCtx.lineWidth = 1;
          overlayCtx.stroke();
        }

        overlayCtx.save();
        overlayCtx.translate(point.x, point.y);
        overlayCtx.rotate((((flight.heading || 0) - 90) * Math.PI) / 180);
        overlayCtx.beginPath();
        overlayCtx.moveTo(fuselage, 0);
        overlayCtx.lineTo(0.5 * trackerMarkerSize, -1.35 * trackerMarkerSize);
        overlayCtx.lineTo(-2.2 * trackerMarkerSize, -wingSpan);
        overlayCtx.lineTo(-0.8 * trackerMarkerSize, -wingSpan);
        overlayCtx.lineTo(1.1 * trackerMarkerSize, -1.7 * trackerMarkerSize);
        overlayCtx.lineTo(-4.8 * trackerMarkerSize, -tailSpan);
        overlayCtx.lineTo(-3.9 * trackerMarkerSize, -0.85 * trackerMarkerSize);
        overlayCtx.lineTo(-7.1 * trackerMarkerSize, 0);
        overlayCtx.lineTo(-3.9 * trackerMarkerSize, 0.85 * trackerMarkerSize);
        overlayCtx.lineTo(-4.8 * trackerMarkerSize, tailSpan);
        overlayCtx.lineTo(1.1 * trackerMarkerSize, 1.7 * trackerMarkerSize);
        overlayCtx.lineTo(-0.8 * trackerMarkerSize, wingSpan);
        overlayCtx.lineTo(-2.2 * trackerMarkerSize, wingSpan);
        overlayCtx.lineTo(0.5 * trackerMarkerSize, 1.35 * trackerMarkerSize);
        overlayCtx.closePath();
        overlayCtx.fillStyle = colors.fill;
        overlayCtx.strokeStyle = colors.stroke;
        overlayCtx.lineWidth = 1.1;
        overlayCtx.fill();
        overlayCtx.stroke();
        overlayCtx.restore();

        if (!flight.onGround) {
          overlayCtx.beginPath();
          overlayCtx.arc(point.x, point.y, (6.5 * trackerMarkerSize) + (pulse * 0.8), 0, Math.PI * 2);
          overlayCtx.strokeStyle = colors.ring;
          overlayCtx.lineWidth = 1;
          overlayCtx.stroke();
        }
      }

      for (const animation of mapAnimations) {
        const elapsed = now - animation.startTime;
        const progress = Math.min(1, elapsed / animation.duration);
        if (progress >= 1) continue;
        const origin = projectWithView(projection, animation.origin, viewTransformRef.current);
        const target = projectWithView(projection, animation.target, viewTransformRef.current);
        if (!origin || !target) continue;
        const eased = 1 - Math.pow(1 - progress, 3);

        if (animation.type === 'missile') drawMissileTrajectory(overlayCtx, origin.x, origin.y, target.x, target.y, eased, time, scale);
        else if (animation.type === 'nuclearStrike') drawNuclearStrikeSequence(overlayCtx, origin.x, origin.y, target.x, target.y, progress, time, scale, animation);
        else if (animation.type === 'drone') drawDroneSwarm(overlayCtx, origin.x, origin.y, target.x, target.y, eased, time, scale);
        else if (animation.type === 'airstrike') drawAirstrikeArc(overlayCtx, origin.x, origin.y, target.x, target.y, eased, time, scale);
        else if (animation.type === 'naval') drawNavalPath(overlayCtx, origin.x, origin.y, target.x, target.y, eased, time, scale);
        else if (animation.type === 'shield') drawShield(overlayCtx, origin.x, origin.y, eased, time, scale);
        else if (animation.type === 'diplomacy') drawDiplomacy(overlayCtx, origin.x, origin.y, target.x, target.y, eased, time, scale);
        else if (animation.type === 'cyber') drawCyber(overlayCtx, origin.x, origin.y, target.x, target.y, eased, time, scale);
        else if (animation.type === 'signal') drawSignal(overlayCtx, origin.x, origin.y, eased, time, scale);
      }

      overlayCtx.font = "10px 'JetBrains Mono', monospace";
      overlayCtx.fillStyle = highVisibility ? 'rgba(203, 213, 225, 0.62)' : 'rgba(100, 120, 160, 0.3)';
      overlayCtx.textAlign = 'left';
      overlayCtx.fillText(`SCALE: ${(scale * 100).toFixed(0)}%`, 12, size.height - 12);

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [escalationLevel, highVisibility, mapAnimations, projection, size, trackerSnapshot, visibleFlights, visibleShips]);

  const handleWheel = useCallback((event) => {
    event.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const delta = event.deltaY > 0 ? 0.9 : 1.1;
    scaleAroundPoint(rect.width / 2, rect.height / 2, viewTransformRef.current.scale * delta);
  }, [scaleAroundPoint]);

  const handleMouseDown = useCallback((event) => {
    setHoveredItem(null);
    dragRef.current = { dragging: true, lastX: event.clientX, lastY: event.clientY };
  }, []);

  const handleMouseMove = useCallback((event) => {
    const container = containerRef.current;
    if (!container || !projection) return;
    const rect = container.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (dragRef.current.dragging) {
      const dx = event.clientX - dragRef.current.lastX;
      const dy = event.clientY - dragRef.current.lastY;
      dragRef.current = { dragging: true, lastX: event.clientX, lastY: event.clientY };
      commitViewTransform({
        ...viewTransformRef.current,
        x: viewTransformRef.current.x + dx,
        y: viewTransformRef.current.y + dy,
      });
      setHoveredItem(null);
      return;
    }

    const overlayTarget = findOverlayHoverTarget(
      mouseX,
      mouseY,
      rect.width,
      rect.height,
      projection,
      viewTransformRef.current,
      { ...trackerSnapshot, flights: visibleFlights, ships: visibleShips },
      highVisibility,
      Date.now(),
    );
    if (overlayTarget) {
      setHoveredItem(overlayTarget);
      return;
    }

    if (!event.target?.getAttribute?.('data-map-country')) {
      setHoveredItem(null);
    }
  }, [commitViewTransform, highVisibility, projection, trackerSnapshot, visibleFlights, visibleShips]);

  const handleMouseUp = useCallback(() => {
    dragRef.current.dragging = false;
  }, []);

  const handleTouchStart = useCallback((event) => {
    setHoveredItem(null);
    if (event.touches.length === 1) {
      touchRef.current = { mode: 'pan', lastX: event.touches[0].clientX, lastY: event.touches[0].clientY, lastDistance: 0, lastMidpoint: null };
      return;
    }
    if (event.touches.length >= 2) {
      const [a, b] = event.touches;
      touchRef.current = {
        mode: 'pinch',
        lastX: 0,
        lastY: 0,
        lastDistance: Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY),
        lastMidpoint: { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 },
      };
    }
  }, []);

  const handleTouchMove = useCallback((event) => {
    if (!containerRef.current) return;
    event.preventDefault();
    if (touchRef.current.mode === 'pan' && event.touches.length === 1) {
      const touch = event.touches[0];
      commitViewTransform({
        ...viewTransformRef.current,
        x: viewTransformRef.current.x + (touch.clientX - touchRef.current.lastX),
        y: viewTransformRef.current.y + (touch.clientY - touchRef.current.lastY),
      });
      touchRef.current = { ...touchRef.current, lastX: touch.clientX, lastY: touch.clientY };
      return;
    }

    if (event.touches.length >= 2) {
      const [a, b] = event.touches;
      const midpoint = { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };
      const distance = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
      if (touchRef.current.lastDistance > 0) {
        const rect = containerRef.current.getBoundingClientRect();
        scaleAroundPoint(midpoint.x - rect.left, midpoint.y - rect.top, viewTransformRef.current.scale * (distance / touchRef.current.lastDistance));
      }
      if (touchRef.current.lastMidpoint) {
        commitViewTransform({
          ...viewTransformRef.current,
          x: viewTransformRef.current.x + (midpoint.x - touchRef.current.lastMidpoint.x),
          y: viewTransformRef.current.y + (midpoint.y - touchRef.current.lastMidpoint.y),
        });
      }
      touchRef.current = { mode: 'pinch', lastX: 0, lastY: 0, lastDistance: distance, lastMidpoint: midpoint };
    }
  }, [commitViewTransform, scaleAroundPoint]);

  const handleCountryMove = useCallback((mapFeature, event) => {
    if (dragRef.current.dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setHoveredItem(getFeatureTooltip(mapFeature, event.clientX - rect.left, event.clientY - rect.top, rect.width, rect.height));
  }, []);

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => { dragRef.current.dragging = false; setHoveredItem(null); }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => { dragRef.current.dragging = false; touchRef.current = { mode: null, lastX: 0, lastY: 0, lastDistance: 0, lastMidpoint: null }; }}
      onTouchCancel={() => { dragRef.current.dragging = false; touchRef.current = { mode: null, lastX: 0, lastY: 0, lastDistance: 0, lastMidpoint: null }; }}
      style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', cursor: dragRef.current.dragging ? 'grabbing' : 'grab', touchAction: 'none' }}
    >
      <canvas ref={bgCanvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }} />
      {projection && pathGenerator && (
        <svg width={size.width} height={size.height} viewBox={`0 0 ${size.width} ${size.height}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}>
          <g transform={`translate(${viewTransform.x} ${viewTransform.y}) scale(${viewTransform.scale})`}>
            {regionFeatures.map((mapFeature) => {
              const name = mapFeature.properties?.name || 'Region';
              const style = getCountryStyle(name);
              const pathData = pathGenerator(mapFeature);
              if (!pathData) return null;
              return (
                <path
                  key={name}
                  d={pathData}
                  data-map-country={name}
                  fill={style.fill}
                  stroke={style.stroke}
                  strokeWidth={name === 'Iran' || name === 'Israel' || name === 'Lebanon' ? 1.6 : 1}
                  vectorEffect="non-scaling-stroke"
                  onMouseEnter={(event) => handleCountryMove(mapFeature, event)}
                  onMouseMove={(event) => handleCountryMove(mapFeature, event)}
                />
              );
            })}
            {regionFeatures.map((mapFeature) => {
              const name = mapFeature.properties?.name || 'Region';
              if (!SMALL_COUNTRY_HIT_NAMES.has(name)) return null;
              const pathData = pathGenerator(mapFeature);
              if (!pathData) return null;
              return (
                <path
                  key={`hit-${name}`}
                  d={pathData}
                  fill="rgba(0,0,0,0)"
                  stroke="rgba(0,0,0,0)"
                  strokeWidth={10}
                  vectorEffect="non-scaling-stroke"
                  pointerEvents="stroke"
                  onMouseEnter={(event) => handleCountryMove(mapFeature, event)}
                  onMouseMove={(event) => handleCountryMove(mapFeature, event)}
                />
              );
            })}
          </g>
          {MAP_LABELS.map((label) => {
            const point = projectWithView(projection, { lon: label.coordinates[0], lat: label.coordinates[1] }, viewTransform);
            if (!point) return null;
            return (
              <text
                key={label.text}
                x={point.x}
                y={point.y}
                fill={label.color}
                fontSize={getScaledLabelFontSize(10, viewTransform.scale)}
                fontFamily="'JetBrains Mono', monospace"
                textAnchor="middle"
                letterSpacing={`${Math.max(0.6, getOverlayVisualScale(viewTransform.scale))}px`}
                opacity={highVisibility ? 0.9 : 0.72}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                {label.text}
              </text>
            );
          })}
          {SEA_LABELS.map((label) => {
            const point = projectWithView(projection, { lon: label.coordinates[0], lat: label.coordinates[1] }, viewTransform);
            if (!point) return null;
            return (
              <text
                key={label.text}
                x={point.x}
                y={point.y}
                fill={label.color}
                fontSize={getScaledLabelFontSize(9, viewTransform.scale)}
                fontFamily="'JetBrains Mono', monospace"
                textAnchor="middle"
                letterSpacing={`${Math.max(0.5, getOverlayVisualScale(viewTransform.scale) * 0.9)}px`}
                opacity={highVisibility ? 0.92 : 0.68}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                {label.text}
              </text>
            );
          })}
        </svg>
      )}
      <canvas ref={overlayCanvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }} />
      {hoveredItem && (
        <div style={{ ...TOOLTIP_STYLE, left: hoveredItem.x, top: hoveredItem.y, background: highVisibility ? 'rgba(9, 14, 24, 0.98)' : TOOLTIP_STYLE.background, borderColor: highVisibility ? 'rgba(226, 232, 240, 0.24)' : TOOLTIP_STYLE.borderColor }}>
          <div style={{ fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: hoveredItem.accent, fontFamily: "'JetBrains Mono', monospace", marginBottom: 6 }}>{hoveredItem.subtitle}</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(226, 232, 240, 0.96)', marginBottom: 6 }}>{hoveredItem.title}</div>
          <div style={{ fontSize: 12, lineHeight: 1.45, color: highVisibility ? 'rgba(226, 232, 240, 0.9)' : 'rgba(148, 163, 184, 0.88)' }}>{hoveredItem.detail}</div>
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          padding: '6px 10px',
          borderRadius: 999,
          border: highVisibility ? '1px solid rgba(226, 232, 240, 0.2)' : '1px solid rgba(34, 211, 238, 0.18)',
          background: highVisibility ? 'rgba(11, 18, 30, 0.92)' : 'rgba(5, 10, 18, 0.84)',
          color: highVisibility ? 'rgba(226, 232, 240, 0.92)' : 'rgba(165, 243, 252, 0.88)',
          fontSize: 9,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: 0.8,
          pointerEvents: 'none',
          zIndex: 3,
        }}
      >
          {getTrackerStatusText(trackerSnapshot, visibleFlights, visibleShips, trackerVisibility)}
      </div>
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          display: 'flex',
          gap: 8,
          zIndex: 3,
          pointerEvents: 'auto',
        }}
      >
        <button
          type="button"
          onClick={() => onToggleTrackerLayer?.('flights')}
          style={{
            borderRadius: 999,
            border: trackerVisibility?.flights === false
              ? '1px solid rgba(100, 116, 139, 0.28)'
              : '1px solid rgba(34, 211, 238, 0.28)',
            background: trackerVisibility?.flights === false
              ? 'rgba(10, 14, 22, 0.76)'
              : 'rgba(8, 20, 28, 0.86)',
            color: trackerVisibility?.flights === false
              ? 'rgba(148, 163, 184, 0.72)'
              : 'rgba(165, 243, 252, 0.94)',
            fontSize: 9,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: 0.8,
            padding: '6px 10px',
            cursor: 'pointer',
          }}
        >
          AIR {trackerVisibility?.flights === false ? 'OFF' : 'ON'}
        </button>
        <button
          type="button"
          onClick={() => onToggleTrackerLayer?.('ships')}
          style={{
            borderRadius: 999,
            border: trackerVisibility?.ships === false
              ? '1px solid rgba(100, 116, 139, 0.28)'
              : '1px solid rgba(251, 191, 36, 0.28)',
            background: trackerVisibility?.ships === false
              ? 'rgba(10, 14, 22, 0.76)'
              : 'rgba(26, 18, 8, 0.84)',
            color: trackerVisibility?.ships === false
              ? 'rgba(148, 163, 184, 0.72)'
              : 'rgba(253, 230, 138, 0.94)',
            fontSize: 9,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: 0.8,
            padding: '6px 10px',
            cursor: 'pointer',
          }}
        >
          SEA {trackerVisibility?.ships === false ? 'OFF' : 'ON'}
        </button>
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          background: `
            linear-gradient(to right, rgba(5, 8, 16, ${highVisibility ? 0.52 : 0.68}) 0%, rgba(5, 8, 16, 0) 10%, rgba(5, 8, 16, 0) 90%, rgba(5, 8, 16, ${highVisibility ? 0.52 : 0.68}) 100%),
            linear-gradient(to bottom, rgba(5, 8, 16, ${highVisibility ? 0.48 : 0.62}) 0%, rgba(5, 8, 16, 0) 10%, rgba(5, 8, 16, 0) 90%, rgba(5, 8, 16, ${highVisibility ? 0.48 : 0.62}) 100%)
          `,
        }}
      />
      <div style={{ position: 'absolute', bottom: 8, right: 8, fontSize: 9, color: highVisibility ? 'rgba(226,232,240,0.75)' : 'rgba(100,120,160,0.4)', fontFamily: "'JetBrains Mono', monospace", pointerEvents: 'none' }}>
        SCROLL TO ZOOM / DRAG TO PAN / PINCH TO ZOOM
      </div>
    </div>
  );
}
