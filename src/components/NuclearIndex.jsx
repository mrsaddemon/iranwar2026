import React, { useMemo } from 'react';
import { getNuclearState } from '../engine/nuclear.js';

export default function NuclearIndex({ value, explanation }) {
  const state = useMemo(() => getNuclearState(Math.round(value)), [value]);
  const pct = Math.min(100, Math.max(0, value));
  const tooltipId = useMemo(() => `nuclear-tooltip-${Math.round(pct)}`, [pct]);

  return (
    <div
      className="nuclear-index"
      tabIndex={0}
      role="note"
      aria-describedby={explanation ? tooltipId : undefined}
      title={explanation || ''}
      style={{
        border: `1px solid ${state.color}40`,
        boxShadow: `0 0 20px ${state.glowColor}, inset 0 0 10px ${state.glowColor}`,
      }}
    >
      <div
        className="nuclear-index-label"
        style={{
          color: state.color,
          animation: value > 60 ? 'nucPulse 1.5s ease-in-out infinite' : 'none',
        }}
      >
        NUCLEAR
      </div>

      <div className="nuclear-index-bar">
        <div
          className="nuclear-index-fill"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, #22c55e, ${state.color})`,
            boxShadow: `0 0 8px ${state.color}`,
          }}
        />
      </div>

      <div className="nuclear-index-value" style={{ color: state.color }}>
        {Math.round(pct)}
      </div>

      <div className="nuclear-index-state" style={{ color: state.color }}>
        {state.label}
      </div>

      {explanation && (
        <div className="nuclear-index-tooltip" id={tooltipId}>
          <div className="nuclear-index-tooltip-title" style={{ color: state.color }}>
            Threat Rationale
          </div>
          <div className="nuclear-index-tooltip-text">{explanation}</div>
        </div>
      )}
    </div>
  );
}
