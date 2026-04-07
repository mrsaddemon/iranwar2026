import React, { useRef, useEffect, useCallback, useState } from 'react';

// Accurate Middle East map — detailed borders calibrated to 2026 Iran War
// Coordinate space: x=longitude mapped ~0.08(Egypt/Sinai)..0.95(Pakistan), y=latitude mapped ~0.05(Turkey)..0.92(Yemen)
// More detailed polygons (~15-30 points each) for recognizable shapes
const REGIONS = {
  turkey_south: {
    color: 'rgba(100, 100, 100, 0.05)',
    borderColor: 'rgba(100, 100, 100, 0.25)',
    label: 'TURKEY',
    labelPos: { x: 0.40, y: 0.06 },
    path: [
      [0.25, 0.00], [0.35, 0.00], [0.45, 0.00], [0.55, 0.00], [0.60, 0.02],
      [0.58, 0.08], [0.55, 0.10], [0.52, 0.12], [0.48, 0.13], [0.44, 0.11],
      [0.40, 0.12], [0.36, 0.10], [0.32, 0.09], [0.28, 0.07], [0.25, 0.04],
    ],
  },
  syria: {
    color: 'rgba(100, 100, 100, 0.06)',
    borderColor: 'rgba(100, 100, 100, 0.3)',
    label: 'SYRIA',
    labelPos: { x: 0.40, y: 0.16 },
    path: [
      [0.32, 0.09], [0.36, 0.10], [0.40, 0.12], [0.44, 0.11], [0.48, 0.13],
      [0.50, 0.15], [0.48, 0.18], [0.46, 0.22], [0.44, 0.24], [0.42, 0.22],
      [0.38, 0.22], [0.36, 0.20], [0.34, 0.18], [0.32, 0.16], [0.30, 0.14],
      [0.30, 0.11],
    ],
  },
  lebanon: {
    color: 'rgba(249, 115, 22, 0.12)',
    borderColor: 'rgba(249, 115, 22, 0.55)',
    label: 'LEB',
    labelPos: { x: 0.34, y: 0.22 },
    activeConflict: true,
    path: [
      [0.32, 0.19], [0.34, 0.18], [0.36, 0.20], [0.37, 0.22], [0.36, 0.25],
      [0.34, 0.26], [0.32, 0.24], [0.31, 0.21],
    ],
  },
  israel: {
    color: 'rgba(59, 130, 246, 0.22)',
    borderColor: 'rgba(59, 130, 246, 0.7)',
    label: 'ISRAEL',
    labelPos: { x: 0.33, y: 0.30 },
    activeConflict: true,
    path: [
      [0.34, 0.26], [0.36, 0.25], [0.37, 0.27], [0.37, 0.30], [0.37, 0.33],
      [0.36, 0.36], [0.35, 0.38], [0.33, 0.40], [0.32, 0.37], [0.31, 0.34],
      [0.32, 0.30], [0.32, 0.28],
    ],
  },
  jordan: {
    color: 'rgba(100, 100, 100, 0.05)',
    borderColor: 'rgba(100, 100, 100, 0.25)',
    label: 'JORDAN',
    labelPos: { x: 0.39, y: 0.33 },
    path: [
      [0.37, 0.27], [0.38, 0.26], [0.42, 0.24], [0.44, 0.24], [0.46, 0.28],
      [0.45, 0.32], [0.44, 0.36], [0.42, 0.40], [0.38, 0.42], [0.35, 0.40],
      [0.35, 0.38], [0.36, 0.36], [0.37, 0.33], [0.37, 0.30],
    ],
  },
  egypt_sinai: {
    color: 'rgba(100, 100, 100, 0.04)',
    borderColor: 'rgba(100, 100, 100, 0.2)',
    label: 'EGYPT',
    labelPos: { x: 0.22, y: 0.38 },
    path: [
      [0.20, 0.20], [0.25, 0.18], [0.30, 0.14], [0.32, 0.16], [0.32, 0.19],
      [0.31, 0.21], [0.32, 0.28], [0.32, 0.37], [0.33, 0.40], [0.28, 0.45],
      [0.22, 0.50], [0.18, 0.55], [0.15, 0.60], [0.12, 0.58], [0.10, 0.50],
      [0.12, 0.40], [0.15, 0.30], [0.18, 0.24],
    ],
  },
  iraq: {
    color: 'rgba(100, 100, 100, 0.07)',
    borderColor: 'rgba(100, 100, 100, 0.3)',
    label: 'IRAQ',
    labelPos: { x: 0.52, y: 0.26 },
    path: [
      [0.48, 0.13], [0.52, 0.12], [0.55, 0.10], [0.58, 0.12], [0.60, 0.15],
      [0.62, 0.18], [0.62, 0.22], [0.61, 0.26], [0.60, 0.30], [0.58, 0.35],
      [0.56, 0.40], [0.54, 0.42], [0.52, 0.44], [0.50, 0.42], [0.48, 0.40],
      [0.46, 0.38], [0.44, 0.36], [0.45, 0.32], [0.46, 0.28], [0.44, 0.24],
      [0.46, 0.22], [0.48, 0.18], [0.50, 0.15],
    ],
  },
  iran: {
    color: 'rgba(34, 197, 94, 0.16)',
    borderColor: 'rgba(34, 197, 94, 0.65)',
    label: 'IRAN',
    labelPos: { x: 0.73, y: 0.30 },
    activeConflict: true,
    path: [
      // Northwest (Turkey/Azerbaijan border)
      [0.60, 0.02], [0.62, 0.05], [0.64, 0.04], [0.67, 0.06],
      // Caspian coast
      [0.68, 0.08], [0.70, 0.10], [0.72, 0.09], [0.74, 0.10],
      // Northeast (Turkmenistan border)
      [0.78, 0.12], [0.82, 0.14], [0.85, 0.16],
      // East (Afghanistan/Pakistan border)
      [0.88, 0.20], [0.90, 0.24], [0.91, 0.28], [0.90, 0.32],
      [0.88, 0.36], [0.86, 0.40], [0.84, 0.44],
      // Southeast coast (Gulf of Oman)
      [0.80, 0.47], [0.76, 0.49], [0.74, 0.50],
      // Strait of Hormuz area
      [0.72, 0.49], [0.70, 0.48],
      // Persian Gulf coast
      [0.68, 0.46], [0.65, 0.44], [0.62, 0.42],
      // Southwest (Iraq border)
      [0.60, 0.38], [0.60, 0.34], [0.60, 0.30],
      [0.62, 0.26], [0.62, 0.22], [0.62, 0.18],
      // Northwest return
      [0.60, 0.15], [0.58, 0.12], [0.58, 0.08], [0.60, 0.04],
    ],
  },
  kuwait: {
    color: 'rgba(100, 100, 100, 0.06)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
    label: 'KWT',
    labelPos: { x: 0.56, y: 0.42 },
    path: [
      [0.54, 0.40], [0.56, 0.40], [0.58, 0.42], [0.57, 0.44],
      [0.55, 0.45], [0.53, 0.43],
    ],
  },
  saudiArabia: {
    color: 'rgba(100, 100, 100, 0.05)',
    borderColor: 'rgba(249, 115, 22, 0.25)',
    label: 'SAUDI ARABIA',
    labelPos: { x: 0.48, y: 0.58 },
    path: [
      [0.38, 0.42], [0.42, 0.40], [0.44, 0.38], [0.46, 0.38], [0.48, 0.40],
      [0.50, 0.42], [0.53, 0.43], [0.55, 0.45], [0.58, 0.46],
      [0.60, 0.48], [0.62, 0.52], [0.64, 0.56],
      [0.62, 0.60], [0.60, 0.64], [0.56, 0.68], [0.52, 0.72],
      [0.48, 0.74], [0.42, 0.75], [0.38, 0.74], [0.34, 0.72],
      [0.30, 0.68], [0.26, 0.64], [0.22, 0.58], [0.20, 0.54],
      [0.22, 0.50], [0.28, 0.45], [0.33, 0.42],
    ],
  },
  uae: {
    color: 'rgba(100, 100, 100, 0.05)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
    label: 'UAE',
    labelPos: { x: 0.68, y: 0.54 },
    path: [
      [0.64, 0.50], [0.66, 0.48], [0.70, 0.48], [0.72, 0.50],
      [0.74, 0.52], [0.72, 0.55], [0.68, 0.56], [0.64, 0.56],
      [0.62, 0.54],
    ],
  },
  oman: {
    color: 'rgba(100, 100, 100, 0.04)',
    borderColor: 'rgba(100, 100, 100, 0.2)',
    label: 'OMAN',
    labelPos: { x: 0.76, y: 0.58 },
    path: [
      [0.72, 0.50], [0.74, 0.50], [0.76, 0.49], [0.80, 0.50],
      [0.82, 0.54], [0.80, 0.58], [0.78, 0.62], [0.74, 0.64],
      [0.70, 0.62], [0.68, 0.58], [0.68, 0.56], [0.72, 0.55],
    ],
  },
  yemen: {
    color: 'rgba(100, 100, 100, 0.05)',
    borderColor: 'rgba(239, 68, 68, 0.35)',
    label: 'YEMEN (HOUTHIS)',
    labelPos: { x: 0.46, y: 0.80 },
    path: [
      [0.34, 0.72], [0.38, 0.74], [0.42, 0.75], [0.48, 0.74], [0.52, 0.72],
      [0.56, 0.72], [0.60, 0.70], [0.62, 0.72], [0.64, 0.76],
      [0.60, 0.82], [0.54, 0.86], [0.48, 0.88], [0.42, 0.88],
      [0.36, 0.86], [0.30, 0.82], [0.28, 0.78], [0.30, 0.74],
    ],
  },
  persian_gulf: {
    color: 'rgba(59, 130, 246, 0.06)',
    borderColor: 'rgba(59, 130, 246, 0.25)',
    label: 'PERSIAN GULF',
    labelPos: { x: 0.60, y: 0.48 },
    path: [
      [0.54, 0.42], [0.56, 0.40], [0.58, 0.42], [0.60, 0.43],
      [0.62, 0.42], [0.65, 0.44], [0.68, 0.46], [0.70, 0.48],
      [0.66, 0.48], [0.64, 0.50], [0.62, 0.52], [0.60, 0.48],
      [0.58, 0.46], [0.55, 0.45],
    ],
    isWater: true,
  },
  gulf_of_oman: {
    color: 'rgba(59, 130, 246, 0.04)',
    borderColor: 'rgba(59, 130, 246, 0.2)',
    label: 'GULF OF OMAN',
    labelPos: { x: 0.78, y: 0.52 },
    path: [
      [0.72, 0.49], [0.74, 0.50], [0.80, 0.50], [0.82, 0.52],
      [0.80, 0.54], [0.76, 0.52], [0.72, 0.51],
    ],
    isWater: true,
  },
  red_sea: {
    color: 'rgba(59, 130, 246, 0.04)',
    borderColor: 'rgba(59, 130, 246, 0.15)',
    label: 'RED SEA',
    labelPos: { x: 0.24, y: 0.68 },
    path: [
      [0.22, 0.55], [0.26, 0.60], [0.28, 0.65], [0.30, 0.72],
      [0.28, 0.78], [0.26, 0.76], [0.22, 0.70], [0.18, 0.62],
      [0.18, 0.58],
    ],
    isWater: true,
  },
  mediterranean: {
    color: 'rgba(59, 130, 246, 0.04)',
    borderColor: 'rgba(59, 130, 246, 0.15)',
    label: 'MEDITERRANEAN',
    labelPos: { x: 0.22, y: 0.12 },
    path: [
      [0.08, 0.00], [0.25, 0.00], [0.25, 0.04], [0.28, 0.07],
      [0.30, 0.11], [0.30, 0.14], [0.25, 0.18], [0.20, 0.20],
      [0.18, 0.24], [0.15, 0.18], [0.10, 0.12], [0.08, 0.06],
    ],
    isWater: true,
  },
  pakistan_west: {
    color: 'rgba(100, 100, 100, 0.04)',
    borderColor: 'rgba(100, 100, 100, 0.2)',
    label: 'PAKISTAN',
    labelPos: { x: 0.92, y: 0.36 },
    path: [
      [0.88, 0.20], [0.92, 0.18], [0.96, 0.22], [0.97, 0.28],
      [0.96, 0.34], [0.94, 0.40], [0.90, 0.44], [0.86, 0.46],
      [0.84, 0.44], [0.86, 0.40], [0.88, 0.36], [0.90, 0.32],
      [0.91, 0.28], [0.90, 0.24],
    ],
  },
  afghanistan_west: {
    color: 'rgba(100, 100, 100, 0.03)',
    borderColor: 'rgba(100, 100, 100, 0.15)',
    label: 'AFGHANISTAN',
    labelPos: { x: 0.88, y: 0.14 },
    path: [
      [0.82, 0.14], [0.85, 0.10], [0.88, 0.08], [0.92, 0.10],
      [0.95, 0.14], [0.92, 0.18], [0.88, 0.20], [0.85, 0.16],
    ],
  },
};

// Strait of Hormuz — BLOCKADED since March 2, 2026
const STRAIT_OF_HORMUZ = {
  start: { x: 0.70, y: 0.48 },
  end: { x: 0.72, y: 0.50 },
  label: 'STRAIT OF HORMUZ [BLOCKADED]',
  blockaded: true,
  detail: 'Iranian mining and interdiction activity continues to threaten commercial and naval transit.',
};

// US regional presence — largest deployment since 2003
const US_BASES = [
  { x: 0.60, y: 0.52, label: 'US 5th Fleet', detail: 'Primary US naval command presence supporting Gulf escort, strike, and missile-defense operations.' },
  { x: 0.55, y: 0.44, label: 'Al Udeid AB', detail: 'Regional air hub for ISR, refueling, command-and-control, and strike coordination.' },
  { x: 0.17, y: 0.12, label: 'USS Lincoln CSG', detail: 'Carrier strike group positioned to project airpower from the Eastern Mediterranean.' },
  { x: 0.23, y: 0.17, label: 'USS Ford CSG', detail: 'Second carrier group reinforcing deterrence and surge strike capacity.' },
  { x: 0.23, y: 0.66, label: 'USS Tripoli ARG', detail: 'Amphibious ready group supporting rapid response, Marines, and littoral operations.' },
];

// Active conflict zone markers
const CONFLICT_ZONES = [
  {
    x: 0.35,
    y: 0.23,
    label: 'HEZBOLLAH FRONT',
    color: [239, 68, 68],
    detail: 'Northern Israel and southern Lebanon remain the most active rocket, drone, and artillery exchange corridor.',
  },
  {
    x: 0.71,
    y: 0.49,
    label: 'HORMUZ MINEFIELD',
    color: [249, 115, 22],
    detail: 'Blockade pressure, naval maneuvering, and mine threats make this the most economically sensitive maritime flashpoint.',
  },
  {
    x: 0.25,
    y: 0.75,
    label: 'RED SEA OPS',
    color: [234, 179, 8],
    detail: 'Missile launches, drone activity, and escort operations continue to stress shipping lanes through the Red Sea corridor.',
  },
];

const CITY_CORES = [
  { x: 0.73, y: 0.22, color: [34, 197, 94], label: 'Tehran', detail: 'Political center of gravity and strategic command node for Iran.' },
  { x: 0.35, y: 0.31, color: [59, 130, 246], label: 'Tel Aviv', detail: 'Israeli economic and military command hub with dense air-defense coverage.' },
  { x: 0.33, y: 0.22, color: [249, 115, 22], label: 'Beirut', detail: 'Lebanese capital and a key reference point for the northern escalation front.' },
  { x: 0.52, y: 0.20, color: [100, 100, 140], label: 'Baghdad', detail: 'Iraqi political center exposed to regional spillover and proxy pressure.' },
  { x: 0.66, y: 0.30, color: [200, 120, 80], label: 'Isfahan', detail: 'Strategic Iranian interior hub tied to military industry and logistics depth.' },
];

const REGION_HOVER_COPY = {
  iran: 'Primary Iranian theater and the core territory driving escalation, mobilization, and retaliation decisions.',
  israel: 'Primary Israeli theater where missile defense, mobilization, and strike decisions concentrate.',
  lebanon: 'Northern front shaped by Hezbollah launches, Israeli responses, and cross-border escalation risk.',
  persian_gulf: 'Most economically sensitive maritime corridor in the simulation, tied directly to oil flow and naval risk.',
  gulf_of_oman: 'Approach waterway to Hormuz where naval shadowing and interdiction risk remain elevated.',
  red_sea: 'Shipping corridor under persistent disruption pressure from missiles, drones, and escort operations.',
  mediterranean: 'Carrier operating area and long-range air/missile launch approach for western actors.',
  yemen: 'Proxy escalation theater affecting Red Sea shipping and regional missile/drone pressure.',
};

const GRID_SPACING = 40;
const TOOLTIP_STYLE = {
  position: 'absolute',
  width: 220,
  padding: '10px 12px',
  borderRadius: 10,
  border: '1px solid rgba(59, 130, 246, 0.18)',
  background: 'rgba(5, 8, 16, 0.94)',
  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.38)',
  backdropFilter: 'blur(6px)',
  pointerEvents: 'none',
  zIndex: 4,
};

const ACTOR_RGB = {
  usa: '239, 68, 68',
  israel: '59, 130, 246',
  iran: '34, 197, 94',
};

function pointInPolygon(point, polygon) {
  const [x, y] = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0];
    const yi = polygon[i][1];
    const xj = polygon[j][0];
    const yj = polygon[j][1];

    const intersects = ((yi > y) !== (yj > y))
      && (x < ((xj - xi) * (y - yi)) / ((yj - yi) || 1e-6) + xi);

    if (intersects) inside = !inside;
  }

  return inside;
}

function distanceToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSq = (dx * dx) + (dy * dy);

  if (lengthSq === 0) {
    return Math.hypot(px - x1, py - y1);
  }

  const t = Math.max(0, Math.min(1, (((px - x1) * dx) + ((py - y1) * dy)) / lengthSq));
  const closestX = x1 + (t * dx);
  const closestY = y1 + (t * dy);

  return Math.hypot(px - closestX, py - closestY);
}

function findMapHoverTarget(mouseX, mouseY, width, height, scale, offset) {
  const toScreenX = (x) => (x * width * scale) + offset.x;
  const toScreenY = (y) => (y * height * scale) + offset.y;
  const normalizedX = (mouseX - offset.x) / (width * scale);
  const normalizedY = (mouseY - offset.y) / (height * scale);

  for (const zone of CONFLICT_ZONES) {
    const sx = toScreenX(zone.x);
    const sy = toScreenY(zone.y);
    if (Math.hypot(mouseX - sx, mouseY - sy) <= Math.max(18, 24 * scale)) {
      return {
        id: `zone-${zone.label}`,
        title: zone.label,
        subtitle: 'Conflict Zone',
        detail: zone.detail,
        accent: `rgba(${zone.color.join(',')}, 0.88)`,
      };
    }
  }

  for (const base of US_BASES) {
    const sx = toScreenX(base.x);
    const sy = toScreenY(base.y);
    if (Math.hypot(mouseX - sx, mouseY - sy) <= Math.max(12, 14 * scale)) {
      return {
        id: `base-${base.label}`,
        title: base.label,
        subtitle: 'US Position',
        detail: base.detail,
        accent: `rgba(${ACTOR_RGB.usa}, 0.88)`,
      };
    }
  }

  for (const core of CITY_CORES) {
    const sx = toScreenX(core.x);
    const sy = toScreenY(core.y);
    if (Math.hypot(mouseX - sx, mouseY - sy) <= Math.max(10, 12 * scale)) {
      return {
        id: `core-${core.label}`,
        title: core.label,
        subtitle: 'Strategic Center',
        detail: core.detail,
        accent: `rgba(${core.color.join(',')}, 0.88)`,
      };
    }
  }

  const straitDistance = distanceToSegment(
    mouseX,
    mouseY,
    toScreenX(STRAIT_OF_HORMUZ.start.x),
    toScreenY(STRAIT_OF_HORMUZ.start.y),
    toScreenX(STRAIT_OF_HORMUZ.end.x),
    toScreenY(STRAIT_OF_HORMUZ.end.y),
  );
  if (straitDistance <= Math.max(8, 10 * scale)) {
    return {
      id: 'strait-of-hormuz',
      title: 'Strait of Hormuz',
      subtitle: STRAIT_OF_HORMUZ.blockaded ? 'Blockaded Chokepoint' : 'Strategic Chokepoint',
      detail: STRAIT_OF_HORMUZ.detail,
      accent: 'rgba(249, 115, 22, 0.88)',
    };
  }

  for (const [key, region] of Object.entries(REGIONS)) {
    if (pointInPolygon([normalizedX, normalizedY], region.path)) {
      return {
        id: `region-${key}`,
        title: region.label,
        subtitle: region.isWater ? 'Maritime Theater' : (region.activeConflict ? 'Active Theater' : 'Regional State'),
        detail: REGION_HOVER_COPY[key] || `Current map context for ${region.label}.`,
        accent: region.borderColor.replace(/[\d.]+\)$/u, '0.88)'),
      };
    }
  }

  return null;
}

export default function MapCanvas({ mapAnimations, escalationLevel, nuclearIndex }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);
  const dragRef = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const touchRef = useRef({ mode: null, lastX: 0, lastY: 0, lastDistance: 0, lastMidpoint: null });
  const timeRef = useRef(0);

  const scaleAroundPoint = useCallback((pointX, pointY, nextScale) => {
    const currentScale = scaleRef.current;
    const clampedScale = Math.max(0.5, Math.min(3, nextScale));
    if (clampedScale === currentScale) return;

    const ratio = clampedScale / currentScale;
    offsetRef.current.x = pointX - ((pointX - offsetRef.current.x) * ratio);
    offsetRef.current.y = pointY - ((pointY - offsetRef.current.y) * ratio);
    scaleRef.current = clampedScale;
  }, []);

  const draw = useCallback((ctx, width, height, time) => {
    timeRef.current = time;
    ctx.clearRect(0, 0, width, height);

    const ox = offsetRef.current.x;
    const oy = offsetRef.current.y;
    const scale = scaleRef.current;

    // Background
    const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.8);
    grad.addColorStop(0, '#0a0f1a');
    grad.addColorStop(1, '#050810');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)';
    ctx.lineWidth = 0.5;
    const gridSize = GRID_SPACING * scale;
    const startX = (ox % gridSize) - gridSize;
    const startY = (oy % gridSize) - gridSize;
    for (let x = startX; x < width + gridSize; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = startY; y < height + gridSize; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Transform helper
    const tx = (nx) => nx * width * scale + ox;
    const ty = (ny) => ny * height * scale + oy;

    // Draw regions
    for (const [key, region] of Object.entries(REGIONS)) {
      ctx.beginPath();
      const pts = region.path;
      ctx.moveTo(tx(pts[0][0]), ty(pts[0][1]));
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(tx(pts[i][0]), ty(pts[i][1]));
      }
      ctx.closePath();

      ctx.fillStyle = region.color;
      ctx.fill();

      ctx.strokeStyle = region.borderColor;
      ctx.lineWidth = region.isWater ? 1 : 1.5;
      ctx.setLineDash(region.isWater ? [4, 4] : []);
      ctx.stroke();
      ctx.setLineDash([]);

      // Region label
      ctx.font = `${10 * scale}px 'JetBrains Mono', monospace`;
      ctx.fillStyle = region.borderColor;
      ctx.textAlign = 'center';
      ctx.fillText(region.label, tx(region.labelPos.x), ty(region.labelPos.y));
    }

    // Strait of Hormuz highlight
    const shPulse = 0.5 + Math.sin(time * 0.003) * 0.3;
    ctx.beginPath();
    ctx.moveTo(tx(STRAIT_OF_HORMUZ.start.x), ty(STRAIT_OF_HORMUZ.start.y));
    ctx.lineTo(tx(STRAIT_OF_HORMUZ.end.x), ty(STRAIT_OF_HORMUZ.end.y));
    ctx.strokeStyle = `rgba(249, 115, 22, ${shPulse})`;
    ctx.lineWidth = 3 * scale;
    ctx.stroke();

    // Strait label
    ctx.font = `bold ${8 * scale}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = `rgba(249, 115, 22, ${shPulse + 0.2})`;
    ctx.textAlign = 'center';
    ctx.fillText(
      STRAIT_OF_HORMUZ.label,
      tx((STRAIT_OF_HORMUZ.start.x + STRAIT_OF_HORMUZ.end.x) / 2),
      ty(STRAIT_OF_HORMUZ.start.y) - 12 * scale,
    );

    // US base markers
    for (const base of US_BASES) {
      const pulse = 0.4 + Math.sin(time * 0.002 + base.x * 10) * 0.3;
      const bx = tx(base.x);
      const by = ty(base.y);

      // Glow
      ctx.beginPath();
      ctx.arc(bx, by, 12 * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACTOR_RGB.usa}, ${pulse * 0.3})`;
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(bx, by, 4 * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACTOR_RGB.usa}, ${0.7 + pulse * 0.3})`;
      ctx.fill();

      // Label
      ctx.font = `${7 * scale}px 'JetBrains Mono', monospace`;
      ctx.fillStyle = `rgba(${ACTOR_RGB.usa}, 0.7)`;
      ctx.textAlign = 'center';
      ctx.fillText(base.label, bx, by + 18 * scale);
    }

    // Active conflict zone markers (pulsing danger zones)
    for (const zone of CONFLICT_ZONES) {
      const zx = tx(zone.x);
      const zy = ty(zone.y);
      const zPulse = 0.3 + Math.sin(time * 0.005 + zone.x * 8) * 0.4;

      // Danger zone pulse ring
      for (let r = 0; r < 2; r++) {
        const ringPhase = ((time * 0.002 + r * 1.5) % 2) / 2;
        ctx.beginPath();
        ctx.arc(zx, zy, (15 + ringPhase * 25) * scale, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${zone.color.join(',')}, ${(1 - ringPhase) * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Zone label
      ctx.font = `bold ${7 * scale}px 'JetBrains Mono', monospace`;
      ctx.fillStyle = `rgba(${zone.color.join(',')}, ${zPulse + 0.3})`;
      ctx.textAlign = 'center';
      ctx.fillText(zone.label, zx, zy - 8 * scale);
    }

    // Hormuz blockade X markers (mines)
    if (STRAIT_OF_HORMUZ.blockaded) {
      const mineCount = 6;
      for (let i = 0; i < mineCount; i++) {
        const t = i / (mineCount - 1);
        const mx = tx(STRAIT_OF_HORMUZ.start.x + (STRAIT_OF_HORMUZ.end.x - STRAIT_OF_HORMUZ.start.x) * t + (Math.sin(i * 3) * 0.02));
        const my = ty(STRAIT_OF_HORMUZ.start.y + (STRAIT_OF_HORMUZ.end.y - STRAIT_OF_HORMUZ.start.y) * t + (Math.cos(i * 2) * 0.015));
        const mp = 0.4 + Math.sin(time * 0.004 + i) * 0.3;

        ctx.beginPath();
        ctx.arc(mx, my, 3 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${mp})`;
        ctx.fill();
      }
    }

    // Country core markers (pulsing dots)
    for (const core of CITY_CORES) {
      const cx = tx(core.x);
      const cy = ty(core.y);
      const p = 0.5 + Math.sin(time * 0.004 + core.x * 5) * 0.5;

      // Outer glow ring
      ctx.beginPath();
      ctx.arc(cx, cy, 16 * scale * (0.8 + p * 0.4), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${core.color.join(',')}, ${p * 0.3})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner dot
      ctx.beginPath();
      ctx.arc(cx, cy, 5 * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${core.color.join(',')}, 0.9)`;
      ctx.fill();

      ctx.font = `${8 * scale}px 'JetBrains Mono', monospace`;
      ctx.fillStyle = `rgba(${core.color.join(',')}, 0.7)`;
      ctx.textAlign = 'center';
      ctx.fillText(core.label, cx, cy - 14 * scale);
    }

    // Draw animations
    const now = Date.now();
    for (const anim of mapAnimations) {
      const elapsed = now - anim.startTime;
      const progress = Math.min(1, elapsed / anim.duration);
      if (progress >= 1) continue;

      const fromX = tx(anim.origin.x);
      const fromY = ty(anim.origin.y);
      const toX = tx(anim.target.x);
      const toY = ty(anim.target.y);

      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      if (anim.type === 'missile') {
        drawMissileTrajectory(ctx, fromX, fromY, toX, toY, eased, time, scale);
      } else if (anim.type === 'nuclearStrike') {
        drawNuclearStrikeSequence(ctx, fromX, fromY, toX, toY, progress, time, scale, anim);
      } else if (anim.type === 'drone') {
        drawDroneSwarm(ctx, fromX, fromY, toX, toY, eased, time, scale);
      } else if (anim.type === 'airstrike') {
        drawAirstrikeArc(ctx, fromX, fromY, toX, toY, eased, time, scale);
      } else if (anim.type === 'naval') {
        drawNavalPath(ctx, fromX, fromY, toX, toY, eased, time, scale);
      } else if (anim.type === 'shield') {
        drawShield(ctx, fromX, fromY, eased, time, scale);
      } else if (anim.type === 'diplomacy') {
        drawDiplomacy(ctx, fromX, fromY, toX, toY, eased, time, scale);
      } else if (anim.type === 'cyber') {
        drawCyber(ctx, fromX, fromY, toX, toY, eased, time, scale);
      } else if (anim.type === 'signal') {
        drawSignal(ctx, fromX, fromY, eased, time, scale);
      } else {
        // Impact pulse
        const impX = fromX + (toX - fromX) * eased;
        const impY = fromY + (toY - fromY) * eased;
        ctx.beginPath();
        ctx.arc(impX, impY, 8 * scale * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${1 - progress})`;
        ctx.fill();
      }
    }

    // Escalation overlay tint
    if (escalationLevel > 40) {
      const intensity = ((escalationLevel - 40) / 60) * 0.08;
      ctx.fillStyle = `rgba(239, 68, 68, ${intensity})`;
      ctx.fillRect(0, 0, width, height);
    }

    // HUD overlay - compass + coordinates
    ctx.font = `${10}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = 'rgba(100, 120, 160, 0.3)';
    ctx.textAlign = 'left';
    ctx.fillText(`SCALE: ${(scale * 100).toFixed(0)}%`, 12, height - 12);

  }, [mapAnimations, escalationLevel, nuclearIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let running = true;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const loop = (time) => {
      if (!running) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      draw(ctx, rect.width, rect.height, time);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [draw]);

  // Mouse handlers for pan/zoom
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const currentScale = scaleRef.current;
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const nextScale = Math.max(0.5, Math.min(3, currentScale * delta));
    if (nextScale === currentScale) return;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    scaleAroundPoint(centerX, centerY, nextScale);
  }, [scaleAroundPoint]);

  const handleMouseDown = useCallback((e) => {
    setHoveredItem(null);
    dragRef.current = { dragging: true, lastX: e.clientX, lastY: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (dragRef.current.dragging) {
      const dx = e.clientX - dragRef.current.lastX;
      const dy = e.clientY - dragRef.current.lastY;
      offsetRef.current.x += dx;
      offsetRef.current.y += dy;
      dragRef.current.lastX = e.clientX;
      dragRef.current.lastY = e.clientY;
      setHoveredItem(null);
      return;
    }

    const target = findMapHoverTarget(
      mouseX,
      mouseY,
      rect.width,
      rect.height,
      scaleRef.current,
      offsetRef.current,
    );

    if (!target) {
      setHoveredItem(null);
      return;
    }

    setHoveredItem({
      ...target,
      x: Math.min(mouseX + 16, Math.max(16, rect.width - 236)),
      y: Math.min(mouseY + 16, Math.max(16, rect.height - 128)),
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    dragRef.current.dragging = false;
  }, []);

  const handleMouseLeave = useCallback(() => {
    dragRef.current.dragging = false;
    setHoveredItem(null);
  }, []);

  const handleTouchStart = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setHoveredItem(null);
    const rect = canvas.getBoundingClientRect();

    if (e.touches.length === 1) {
      touchRef.current = {
        mode: 'pan',
        lastX: e.touches[0].clientX,
        lastY: e.touches[0].clientY,
        lastDistance: 0,
        lastMidpoint: null,
      };
      return;
    }

    if (e.touches.length >= 2) {
      const [a, b] = e.touches;
      touchRef.current = {
        mode: 'pinch',
        lastX: 0,
        lastY: 0,
        lastDistance: Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY),
        lastMidpoint: {
          x: ((a.clientX + b.clientX) / 2) - rect.left,
          y: ((a.clientY + b.clientY) / 2) - rect.top,
        },
      };
    }
  }, []);

  const handleTouchMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    e.preventDefault();
    const rect = canvas.getBoundingClientRect();

    if (touchRef.current.mode === 'pan' && e.touches.length === 1) {
      const touch = e.touches[0];
      const dx = touch.clientX - touchRef.current.lastX;
      const dy = touch.clientY - touchRef.current.lastY;
      offsetRef.current.x += dx;
      offsetRef.current.y += dy;
      touchRef.current.lastX = touch.clientX;
      touchRef.current.lastY = touch.clientY;
      return;
    }

    if (e.touches.length >= 2) {
      const [a, b] = e.touches;
      const distance = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
      const midpoint = {
        x: ((a.clientX + b.clientX) / 2) - rect.left,
        y: ((a.clientY + b.clientY) / 2) - rect.top,
      };

      if (touchRef.current.lastDistance > 0) {
        const nextScale = scaleRef.current * (distance / touchRef.current.lastDistance);
        scaleAroundPoint(midpoint.x, midpoint.y, nextScale);
      }

      if (touchRef.current.lastMidpoint) {
        offsetRef.current.x += midpoint.x - touchRef.current.lastMidpoint.x;
        offsetRef.current.y += midpoint.y - touchRef.current.lastMidpoint.y;
      }

      touchRef.current.mode = 'pinch';
      touchRef.current.lastDistance = distance;
      touchRef.current.lastMidpoint = midpoint;
    }
  }, [scaleAroundPoint]);

  const handleTouchEnd = useCallback((e) => {
    if (e.touches.length === 1) {
      touchRef.current = {
        mode: 'pan',
        lastX: e.touches[0].clientX,
        lastY: e.touches[0].clientY,
        lastDistance: 0,
        lastMidpoint: null,
      };
      return;
    }

    touchRef.current = { mode: null, lastX: 0, lastY: 0, lastDistance: 0, lastMidpoint: null };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', cursor: 'grab' }}>
      <canvas
        ref={canvasRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{ width: '100%', height: '100%', display: 'block', touchAction: 'none' }}
      />
      {hoveredItem && (
        <div
          style={{
            ...TOOLTIP_STYLE,
            left: hoveredItem.x,
            top: hoveredItem.y,
          }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: 1,
              textTransform: 'uppercase',
              color: hoveredItem.accent,
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: 6,
            }}
          >
            {hoveredItem.subtitle}
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: 'rgba(226, 232, 240, 0.96)',
              marginBottom: 6,
            }}
          >
            {hoveredItem.title}
          </div>
          <div
            style={{
              fontSize: 12,
              lineHeight: 1.45,
              color: 'rgba(148, 163, 184, 0.88)',
            }}
          >
            {hoveredItem.detail}
          </div>
        </div>
      )}
      <div style={{
        position: 'absolute', bottom: 8, right: 8,
        fontSize: 9, color: 'rgba(100,120,160,0.4)',
        fontFamily: "'JetBrains Mono', monospace",
        pointerEvents: 'none',
      }}>
        SCROLL TO ZOOM / DRAG TO PAN
      </div>
    </div>
  );
}

// --- Animation Drawing Functions ---

function drawMissileTrajectory(ctx, x1, y1, x2, y2, progress, time, scale) {
  const cx = (x1 + x2) / 2;
  const cy = Math.min(y1, y2) - 60 * scale;

  // Trail
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  const steps = Math.floor(progress * 30);
  for (let i = 0; i <= steps; i++) {
    const t = i / 30;
    const px = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2;
    const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2;
    ctx.lineTo(px, py);
  }
  ctx.strokeStyle = `rgba(239, 68, 68, ${0.8 - progress * 0.5})`;
  ctx.lineWidth = 2 * scale;
  ctx.stroke();

  // Head
  const hx = (1 - progress) * (1 - progress) * x1 + 2 * (1 - progress) * progress * cx + progress * progress * x2;
  const hy = (1 - progress) * (1 - progress) * y1 + 2 * (1 - progress) * progress * cy + progress * progress * y2;

  ctx.beginPath();
  ctx.arc(hx, hy, 4 * scale, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
  ctx.fill();

  // Glow
  ctx.beginPath();
  ctx.arc(hx, hy, 10 * scale, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
  ctx.fill();

  // Impact flash
  if (progress > 0.9) {
    const imp = (progress - 0.9) / 0.1;
    ctx.beginPath();
    ctx.arc(x2, y2, 20 * scale * imp, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 200, 50, ${1 - imp})`;
    ctx.fill();
  }
}

function drawNuclearStrikeSequence(ctx, x1, y1, x2, y2, progress, time, scale, anim) {
  const arcHeight = Math.max(90, Math.abs(x2 - x1) * 0.24);
  const cx = (x1 + x2) / 2;
  const cy = Math.min(y1, y2) - arcHeight;
  const missilePhase = Math.min(1, progress / 0.62);
  const interceptionPoint = pointOnQuadraticBezier(x1, y1, cx, cy, x2, y2, anim.intercepted ? 0.76 : 0.88);
  const missilePoint = pointOnQuadraticBezier(x1, y1, cx, cy, x2, y2, missilePhase);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  const steps = Math.max(8, Math.floor(missilePhase * 34));
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * missilePhase;
    const point = pointOnQuadraticBezier(x1, y1, cx, cy, x2, y2, t);
    ctx.lineTo(point.x, point.y);
  }
  ctx.strokeStyle = 'rgba(239, 68, 68, 0.92)';
  ctx.lineWidth = 2.8 * scale;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(missilePoint.x, missilePoint.y, 5 * scale, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 230, 160, 0.98)';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(missilePoint.x, missilePoint.y, 12 * scale, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(239, 68, 68, 0.20)';
  ctx.fill();

  ctx.font = `bold ${9 * scale}px 'JetBrains Mono', monospace`;
  ctx.textAlign = 'center';

  if (anim.intercepted) {
    const interceptProgress = Math.max(0, Math.min(1, (progress - 0.45) / 0.25));
    const interceptorStartX = x2;
    const interceptorStartY = y2 + 30 * scale;
    const interceptorPoint = {
      x: interceptorStartX + ((interceptionPoint.x - interceptorStartX) * interceptProgress),
      y: interceptorStartY + ((interceptionPoint.y - interceptorStartY) * interceptProgress),
    };

    if (interceptProgress > 0) {
      ctx.beginPath();
      ctx.moveTo(interceptorStartX, interceptorStartY);
      ctx.lineTo(interceptorPoint.x, interceptorPoint.y);
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.9)';
      ctx.lineWidth = 2.2 * scale;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(interceptorPoint.x, interceptorPoint.y, 4 * scale, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(191, 219, 254, 0.98)';
      ctx.fill();
    }

    if (progress > 0.58) {
      const burst = Math.min(1, (progress - 0.58) / 0.22);
      for (let ring = 0; ring < 3; ring++) {
        ctx.beginPath();
        ctx.arc(
          interceptionPoint.x,
          interceptionPoint.y,
          (18 + (ring * 14) + (burst * 20)) * scale,
          0,
          Math.PI * 2,
        );
        ctx.strokeStyle = `rgba(147, 197, 253, ${0.55 - (ring * 0.12) - (burst * 0.22)})`;
        ctx.lineWidth = 2 * scale;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(interceptionPoint.x, interceptionPoint.y, (10 + (burst * 10)) * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.8 - (burst * 0.45)})`;
      ctx.fill();

      ctx.fillStyle = 'rgba(191, 219, 254, 0.92)';
      ctx.fillText('INTERCEPT', interceptionPoint.x, interceptionPoint.y - (28 * scale));
    }
  } else if (progress > 0.72) {
    const detonation = Math.min(1, (progress - 0.72) / 0.24);
    for (let ring = 0; ring < 4; ring++) {
      ctx.beginPath();
      ctx.arc(
        x2,
        y2,
        (18 + (ring * 16) + (detonation * 34)) * scale,
        0,
        Math.PI * 2,
      );
      ctx.strokeStyle = `rgba(249, 115, 22, ${0.65 - (ring * 0.12) - (detonation * 0.2)})`;
      ctx.lineWidth = 2.4 * scale;
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(x2, y2, (18 + (detonation * 24)) * scale, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 215, 96, ${0.75 - (detonation * 0.3)})`;
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 196, 64, 0.95)';
    ctx.fillText('DETONATION', x2, y2 - (34 * scale));
  }
}

function pointOnQuadraticBezier(x1, y1, cx, cy, x2, y2, t) {
  const mt = 1 - t;
  return {
    x: (mt * mt * x1) + (2 * mt * t * cx) + (t * t * x2),
    y: (mt * mt * y1) + (2 * mt * t * cy) + (t * t * y2),
  };
}

function drawDroneSwarm(ctx, x1, y1, x2, y2, progress, time, scale) {
  const count = 5;
  for (let i = 0; i < count; i++) {
    const offset = (i - count / 2) * 8 * scale;
    const wobble = Math.sin(time * 0.008 + i * 2) * 5 * scale;
    const dx = x1 + (x2 - x1) * progress + wobble;
    const dy = y1 + (y2 - y1) * progress + offset + Math.cos(time * 0.006 + i) * 3 * scale;

    ctx.beginPath();
    ctx.arc(dx, dy, 2.5 * scale, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(234, 179, 8, ${0.8 - progress * 0.4})`;
    ctx.fill();

    // Trail
    ctx.beginPath();
    ctx.moveTo(dx, dy);
    ctx.lineTo(dx - (x2 - x1) * 0.05, dy - (y2 - y1) * 0.05);
    ctx.strokeStyle = `rgba(234, 179, 8, ${0.3 - progress * 0.2})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

function drawAirstrikeArc(ctx, x1, y1, x2, y2, progress, time, scale) {
  const midX = (x1 + x2) / 2;
  const midY = Math.min(y1, y2) - 40 * scale;

  // Arc path
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  const steps = Math.floor(progress * 25);
  for (let i = 0; i <= steps; i++) {
    const t = i / 25;
    const px = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * midX + t * t * x2;
    const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * midY + t * t * y2;
    ctx.lineTo(px, py);
  }
  ctx.strokeStyle = `rgba(249, 115, 22, ${0.7 - progress * 0.4})`;
  ctx.lineWidth = 2.5 * scale;
  ctx.setLineDash([6, 3]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Strike indicator
  if (progress > 0.85) {
    const imp = (progress - 0.85) / 0.15;
    for (let r = 0; r < 3; r++) {
      ctx.beginPath();
      ctx.arc(x2, y2, (8 + r * 10) * scale * imp, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(249, 115, 22, ${(1 - imp) * (1 - r * 0.3)})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }
}

function drawNavalPath(ctx, x1, y1, x2, y2, progress, time, scale) {
  const px = x1 + (x2 - x1) * progress;
  const py = y1 + (y2 - y1) * progress + Math.sin(time * 0.003) * 3 * scale;

  // Wake trail
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(px, py);
  ctx.strokeStyle = `rgba(59, 130, 246, ${0.4 - progress * 0.2})`;
  ctx.lineWidth = 3 * scale;
  ctx.setLineDash([8, 4]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Ship dot
  ctx.beginPath();
  ctx.arc(px, py, 5 * scale, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
  ctx.fill();
}

function drawShield(ctx, x, y, progress, time, scale) {
  const radius = 25 * scale * progress;
  const pulse = 0.5 + Math.sin(time * 0.005) * 0.3;

  for (let r = 0; r < 3; r++) {
    ctx.beginPath();
    ctx.arc(x, y, radius + r * 8 * scale, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(34, 197, 94, ${(pulse - r * 0.15) * (1 - progress * 0.5)})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

function drawDiplomacy(ctx, x1, y1, x2, y2, progress, time, scale) {
  // Dashed green line
  const px = x1 + (x2 - x1) * progress;
  const py = y1 + (y2 - y1) * progress;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(px, py);
  ctx.strokeStyle = `rgba(34, 197, 94, ${0.6 - progress * 0.3})`;
  ctx.lineWidth = 2 * scale;
  ctx.setLineDash([4, 6]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Handshake icon at midpoint
  if (progress > 0.4 && progress < 0.8) {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    ctx.font = `${14 * scale}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = `rgba(34, 197, 94, ${0.7})`;
    ctx.fillText('\u{1F91D}', mx, my);
  }
}

function drawCyber(ctx, x1, y1, x2, y2, progress, time, scale) {
  // Glitchy line segments
  const segments = 10;
  ctx.beginPath();
  for (let i = 0; i <= segments * progress; i++) {
    const t = i / segments;
    const px = x1 + (x2 - x1) * t + (Math.random() - 0.5) * 6 * scale;
    const py = y1 + (y2 - y1) * t + (Math.random() - 0.5) * 6 * scale;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.strokeStyle = `rgba(6, 182, 212, ${0.7 - progress * 0.4})`;
  ctx.lineWidth = 1.5 * scale;
  ctx.stroke();
}

function drawSignal(ctx, x, y, progress, time, scale) {
  const rings = 4;
  for (let r = 0; r < rings; r++) {
    const ringProgress = (progress - r * 0.15);
    if (ringProgress < 0 || ringProgress > 1) continue;
    ctx.beginPath();
    ctx.arc(x, y, ringProgress * 40 * scale, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(234, 179, 8, ${(1 - ringProgress) * 0.5})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}
