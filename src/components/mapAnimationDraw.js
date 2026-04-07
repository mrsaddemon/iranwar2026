export function pointOnQuadraticBezier(x1, y1, cx, cy, x2, y2, t) {
  const mt = 1 - t;
  return {
    x: (mt * mt * x1) + (2 * mt * t * cx) + (t * t * x2),
    y: (mt * mt * y1) + (2 * mt * t * cy) + (t * t * y2),
  };
}

export function drawMissileTrajectory(ctx, x1, y1, x2, y2, progress, time, scale) {
  const cx = (x1 + x2) / 2;
  const cy = Math.min(y1, y2) - (60 * scale);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  const steps = Math.floor(progress * 30);
  for (let i = 0; i <= steps; i += 1) {
    const t = i / 30;
    const px = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2;
    const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2;
    ctx.lineTo(px, py);
  }
  ctx.strokeStyle = `rgba(239, 68, 68, ${0.8 - progress * 0.5})`;
  ctx.lineWidth = 2 * scale;
  ctx.stroke();

  const hx = (1 - progress) * (1 - progress) * x1 + 2 * (1 - progress) * progress * cx + progress * progress * x2;
  const hy = (1 - progress) * (1 - progress) * y1 + 2 * (1 - progress) * progress * cy + progress * progress * y2;

  ctx.beginPath();
  ctx.arc(hx, hy, 4 * scale, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(hx, hy, 10 * scale, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
  ctx.fill();

  if (progress > 0.9) {
    const impact = (progress - 0.9) / 0.1;
    ctx.beginPath();
    ctx.arc(x2, y2, 20 * scale * impact, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 200, 50, ${1 - impact})`;
    ctx.fill();
  }
}

export function drawNuclearStrikeSequence(ctx, x1, y1, x2, y2, progress, time, scale, anim) {
  const arcHeight = Math.max(90, Math.abs(x2 - x1) * 0.24);
  const cx = (x1 + x2) / 2;
  const cy = Math.min(y1, y2) - arcHeight;
  const missilePhase = Math.min(1, progress / 0.62);
  const interceptionPoint = pointOnQuadraticBezier(x1, y1, cx, cy, x2, y2, anim.intercepted ? 0.76 : 0.88);
  const missilePoint = pointOnQuadraticBezier(x1, y1, cx, cy, x2, y2, missilePhase);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  const steps = Math.max(8, Math.floor(missilePhase * 34));
  for (let i = 0; i <= steps; i += 1) {
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
  ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
  ctx.fill();

  ctx.font = `bold ${9 * scale}px 'JetBrains Mono', monospace`;
  ctx.textAlign = 'center';

  if (anim.intercepted) {
    const interceptProgress = Math.max(0, Math.min(1, (progress - 0.45) / 0.25));
    const interceptorStartX = x2;
    const interceptorStartY = y2 + (30 * scale);
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
      for (let ring = 0; ring < 3; ring += 1) {
        ctx.beginPath();
        ctx.arc(interceptionPoint.x, interceptionPoint.y, (18 + (ring * 14) + (burst * 20)) * scale, 0, Math.PI * 2);
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
    for (let ring = 0; ring < 4; ring += 1) {
      ctx.beginPath();
      ctx.arc(x2, y2, (18 + (ring * 16) + (detonation * 34)) * scale, 0, Math.PI * 2);
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

export function drawDroneSwarm(ctx, x1, y1, x2, y2, progress, time, scale) {
  const count = 5;
  for (let i = 0; i < count; i += 1) {
    const offset = (i - (count / 2)) * 8 * scale;
    const wobble = Math.sin(time * 0.008 + i * 2) * 5 * scale;
    const dx = x1 + ((x2 - x1) * progress) + wobble;
    const dy = y1 + ((y2 - y1) * progress) + offset + (Math.cos(time * 0.006 + i) * 3 * scale);

    ctx.beginPath();
    ctx.arc(dx, dy, 2.5 * scale, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(234, 179, 8, ${0.8 - progress * 0.4})`;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(dx, dy);
    ctx.lineTo(dx - ((x2 - x1) * 0.05), dy - ((y2 - y1) * 0.05));
    ctx.strokeStyle = `rgba(234, 179, 8, ${0.3 - progress * 0.2})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

export function drawAirstrikeArc(ctx, x1, y1, x2, y2, progress, time, scale) {
  const midX = (x1 + x2) / 2;
  const midY = Math.min(y1, y2) - (40 * scale);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  const steps = Math.floor(progress * 25);
  for (let i = 0; i <= steps; i += 1) {
    const t = i / 25;
    const px = ((1 - t) * (1 - t) * x1) + (2 * (1 - t) * t * midX) + (t * t * x2);
    const py = ((1 - t) * (1 - t) * y1) + (2 * (1 - t) * t * midY) + (t * t * y2);
    ctx.lineTo(px, py);
  }
  ctx.strokeStyle = `rgba(249, 115, 22, ${0.7 - progress * 0.4})`;
  ctx.lineWidth = 2.5 * scale;
  ctx.setLineDash([6, 3]);
  ctx.stroke();
  ctx.setLineDash([]);
}

export function drawNavalPath(ctx, x1, y1, x2, y2, progress, time, scale) {
  const px = x1 + ((x2 - x1) * progress);
  const py = y1 + ((y2 - y1) * progress) + (Math.sin(time * 0.003) * 3 * scale);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(px, py);
  ctx.strokeStyle = `rgba(59, 130, 246, ${0.4 - progress * 0.2})`;
  ctx.lineWidth = 3 * scale;
  ctx.setLineDash([8, 4]);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.arc(px, py, 5 * scale, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
  ctx.fill();
}

export function drawShield(ctx, x, y, progress, time, scale) {
  const radius = 25 * scale * progress;
  const pulse = 0.5 + (Math.sin(time * 0.005) * 0.3);

  for (let ring = 0; ring < 3; ring += 1) {
    ctx.beginPath();
    ctx.arc(x, y, radius + (ring * 8 * scale), 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(34, 197, 94, ${(pulse - (ring * 0.15)) * (1 - progress * 0.5)})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

export function drawDiplomacy(ctx, x1, y1, x2, y2, progress, time, scale) {
  const px = x1 + ((x2 - x1) * progress);
  const py = y1 + ((y2 - y1) * progress);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(px, py);
  ctx.strokeStyle = `rgba(34, 197, 94, ${0.6 - progress * 0.3})`;
  ctx.lineWidth = 2 * scale;
  ctx.setLineDash([4, 6]);
  ctx.stroke();
  ctx.setLineDash([]);
}

export function drawCyber(ctx, x1, y1, x2, y2, progress, time, scale) {
  const segments = 10;
  ctx.beginPath();
  for (let i = 0; i <= segments * progress; i += 1) {
    const t = i / segments;
    const px = x1 + ((x2 - x1) * t) + ((Math.random() - 0.5) * 6 * scale);
    const py = y1 + ((y2 - y1) * t) + ((Math.random() - 0.5) * 6 * scale);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.strokeStyle = `rgba(6, 182, 212, ${0.7 - progress * 0.4})`;
  ctx.lineWidth = 1.5 * scale;
  ctx.stroke();
}

export function drawSignal(ctx, x, y, progress, time, scale) {
  for (let ring = 0; ring < 4; ring += 1) {
    const ringProgress = progress - (ring * 0.15);
    if (ringProgress < 0 || ringProgress > 1) continue;
    ctx.beginPath();
    ctx.arc(x, y, ringProgress * 40 * scale, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(234, 179, 8, ${(1 - ringProgress) * 0.5})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}
