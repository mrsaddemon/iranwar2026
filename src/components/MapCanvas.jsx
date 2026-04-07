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
  STRAIT_OF_HORMUZ,
  TOOLTIP_STYLE,
  US_BASES,
  distanceToSegment,
  formatTooltipPosition,
  getCountryStyle,
  getFeatureTooltip,
  getRegionFeatures,
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

function findOverlayHoverTarget(mouseX, mouseY, width, height, projection, viewTransform) {
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

export default function MapCanvas({ mapAnimations, escalationLevel }) {
  const containerRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const dragRef = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const touchRef = useRef({ mode: null, lastX: 0, lastY: 0, lastDistance: 0, lastMidpoint: null });
  const viewTransformRef = useRef(DEFAULT_VIEW);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [viewTransform, setViewTransform] = useState(DEFAULT_VIEW);
  const [hoveredItem, setHoveredItem] = useState(null);

  const regionFeatures = useMemo(() => getRegionFeatures(), []);
  const featureCollection = useMemo(() => ({ type: 'FeatureCollection', features: regionFeatures }), [regionFeatures]);

  const projection = useMemo(() => {
    if (!size.width || !size.height) return null;
    return geoMercator().fitExtent([[24, 14], [size.width - 24, size.height - 16]], featureCollection);
  }, [featureCollection, size.height, size.width]);

  const pathGenerator = useMemo(() => (projection ? geoPath(projection) : null), [projection]);

  const commitViewTransform = useCallback((nextTransform) => {
    viewTransformRef.current = nextTransform;
    setViewTransform(nextTransform);
  }, []);

  const scaleAroundPoint = useCallback((pointX, pointY, nextScale) => {
    const current = viewTransformRef.current;
    const clampedScale = Math.max(0.5, Math.min(3, nextScale));
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
      gradient.addColorStop(0, '#0a0f1a');
      gradient.addColorStop(1, '#050810');
      bgCtx.fillStyle = gradient;
      bgCtx.fillRect(0, 0, size.width, size.height);

      bgCtx.strokeStyle = 'rgba(59, 130, 246, 0.04)';
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
        bgCtx.fillStyle = `rgba(239, 68, 68, ${intensity})`;
        bgCtx.fillRect(0, 0, size.width, size.height);
      }

      overlayCtx.clearRect(0, 0, size.width, size.height);
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
        overlayCtx.fillStyle = `rgba(249, 115, 22, ${pulse + 0.2})`;
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
        overlayCtx.fillStyle = `rgba(${ACTOR_RGB.usa}, 0.7)`;
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
        overlayCtx.fillStyle = `rgba(${zone.color.join(',')}, ${pulse + 0.3})`;
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
        overlayCtx.fillStyle = `rgba(${core.color.join(',')}, 0.72)`;
        overlayCtx.textAlign = 'center';
        overlayCtx.fillText(core.label, point.x, point.y - (13 * visualScale));
      }

      const now = Date.now();
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
      overlayCtx.fillStyle = 'rgba(100, 120, 160, 0.3)';
      overlayCtx.textAlign = 'left';
      overlayCtx.fillText(`SCALE: ${(scale * 100).toFixed(0)}%`, 12, size.height - 12);

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [escalationLevel, mapAnimations, projection, size]);

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

    const overlayTarget = findOverlayHoverTarget(mouseX, mouseY, rect.width, rect.height, projection, viewTransformRef.current);
    if (overlayTarget) {
      setHoveredItem(overlayTarget);
      return;
    }

    if (!event.target?.getAttribute?.('data-map-country')) {
      setHoveredItem(null);
    }
  }, [commitViewTransform, projection]);

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
        <div style={{ ...TOOLTIP_STYLE, left: hoveredItem.x, top: hoveredItem.y }}>
          <div style={{ fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: hoveredItem.accent, fontFamily: "'JetBrains Mono', monospace", marginBottom: 6 }}>{hoveredItem.subtitle}</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(226, 232, 240, 0.96)', marginBottom: 6 }}>{hoveredItem.title}</div>
          <div style={{ fontSize: 12, lineHeight: 1.45, color: 'rgba(148, 163, 184, 0.88)' }}>{hoveredItem.detail}</div>
        </div>
      )}
      <div style={{ position: 'absolute', bottom: 8, right: 8, fontSize: 9, color: 'rgba(100,120,160,0.4)', fontFamily: "'JetBrains Mono', monospace", pointerEvents: 'none' }}>
        SCROLL TO ZOOM / DRAG TO PAN / PINCH TO ZOOM
      </div>
    </div>
  );
}
