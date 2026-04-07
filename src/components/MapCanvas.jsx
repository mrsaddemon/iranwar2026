import React, { useRef, useEffect, useCallback } from 'react';

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
    color: 'rgba(239, 68, 68, 0.14)',
    borderColor: 'rgba(239, 68, 68, 0.6)',
    label: 'LEB',
    labelPos: { x: 0.34, y: 0.22 },
    activeConflict: true,
    path: [
      [0.32, 0.19], [0.34, 0.18], [0.36, 0.20], [0.37, 0.22], [0.36, 0.25],
      [0.34, 0.26], [0.32, 0.24], [0.31, 0.21],
    ],
  },
  israel: {
    color: 'rgba(168, 85, 247, 0.22)',
    borderColor: 'rgba(168, 85, 247, 0.7)',
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
    color: 'rgba(239, 68, 68, 0.16)',
    borderColor: 'rgba(239, 68, 68, 0.65)',
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
};

// US regional presence — largest deployment since 2003
const US_BASES = [
  { x: 0.60, y: 0.52, label: 'US 5th Fleet' },
  { x: 0.55, y: 0.44, label: 'Al Udeid AB' },
  { x: 0.16, y: 0.32, label: 'USS Lincoln CSG' },
  { x: 0.20, y: 0.38, label: 'USS Ford CSG' },
  { x: 0.24, y: 0.44, label: 'USS Tripoli ARG' },
];

// Active conflict zone markers
const CONFLICT_ZONES = [
  { x: 0.35, y: 0.23, label: 'HEZBOLLAH FRONT', color: [239, 68, 68] },
  { x: 0.71, y: 0.49, label: 'HORMUZ MINEFIELD', color: [249, 115, 22] },
  { x: 0.25, y: 0.75, label: 'RED SEA OPS', color: [234, 179, 8] },
];

const GRID_SPACING = 40;

export default function MapCanvas({ mapAnimations, escalationLevel, nuclearIndex }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);
  const dragRef = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const timeRef = useRef(0);

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
      ctx.fillStyle = `rgba(59, 130, 246, ${pulse * 0.3})`;
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(bx, by, 4 * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${0.7 + pulse * 0.3})`;
      ctx.fill();

      // Label
      ctx.font = `${7 * scale}px 'JetBrains Mono', monospace`;
      ctx.fillStyle = `rgba(59, 130, 246, 0.7)`;
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
    const cores = [
      { x: 0.73, y: 0.22, color: [239, 68, 68], label: 'Tehran' },
      { x: 0.35, y: 0.31, color: [168, 85, 247], label: 'Tel Aviv' },
      { x: 0.33, y: 0.22, color: [239, 100, 100], label: 'Beirut' },
      { x: 0.52, y: 0.20, color: [100, 100, 140], label: 'Baghdad' },
      { x: 0.66, y: 0.30, color: [200, 120, 80], label: 'Isfahan' },
    ];
    for (const core of cores) {
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
      ctx.scale(devicePixelRatio, devicePixelRatio);
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
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    scaleRef.current = Math.max(0.5, Math.min(3, scaleRef.current * delta));
  }, []);

  const handleMouseDown = useCallback((e) => {
    dragRef.current = { dragging: true, lastX: e.clientX, lastY: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.lastX;
    const dy = e.clientY - dragRef.current.lastY;
    offsetRef.current.x += dx;
    offsetRef.current.y += dy;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
  }, []);

  const handleMouseUp = useCallback(() => {
    dragRef.current.dragging = false;
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', cursor: 'grab' }}>
      <canvas
        ref={canvasRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
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
