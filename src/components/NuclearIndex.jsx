import React, { useMemo } from 'react';
import { getNuclearState } from '../engine/nuclear.js';

export default function NuclearIndex({ value }) {
  const state = useMemo(() => getNuclearState(Math.round(value)), [value]);
  const pct = Math.min(100, Math.max(0, value));

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '6px 14px',
      background: 'rgba(0,0,0,0.4)',
      borderRadius: 8,
      border: `1px solid ${state.color}40`,
      boxShadow: `0 0 20px ${state.glowColor}, inset 0 0 10px ${state.glowColor}`,
      transition: 'all 0.8s ease',
    }}>
      <div style={{
        fontSize: 10, fontWeight: 700, color: state.color,
        textTransform: 'uppercase', letterSpacing: 1,
        fontFamily: "'JetBrains Mono', monospace",
        whiteSpace: 'nowrap',
        animation: value > 60 ? 'nucPulse 1.5s ease-in-out infinite' : 'none',
      }}>
        NUCLEAR
      </div>

      <div style={{
        width: 100, height: 6, background: 'rgba(255,255,255,0.06)',
        borderRadius: 3, overflow: 'hidden', position: 'relative',
      }}>
        <div style={{
          width: `${pct}%`, height: '100%',
          background: `linear-gradient(90deg, #22c55e, ${state.color})`,
          borderRadius: 3,
          transition: 'width 0.8s ease',
          boxShadow: `0 0 8px ${state.color}`,
        }} />
      </div>

      <div style={{
        fontSize: 13, fontWeight: 700, color: state.color,
        fontFamily: "'JetBrains Mono', monospace",
        minWidth: 28, textAlign: 'right',
      }}>
        {Math.round(pct)}
      </div>

      <div style={{
        fontSize: 9, color: state.color, opacity: 0.8,
        fontFamily: "'JetBrains Mono', monospace",
        textTransform: 'uppercase', letterSpacing: 0.5,
      }}>
        {state.label}
      </div>
    </div>
  );
}
