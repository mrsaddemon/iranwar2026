import React, { useMemo } from 'react';

const SCENARIO_CONFIG = {
  deescalation: { label: 'De-escalation', color: '#22c55e', icon: '🕊' },
  prolongedConflict: { label: 'Prolonged Conflict', color: '#eab308', icon: '⚔' },
  regionalExpansion: { label: 'Regional Expansion', color: '#ef4444', icon: '🌍' },
  strategicBrinkmanship: { label: 'Strategic Brinkmanship', color: '#f97316', icon: '⚠' },
  internalInstability: { label: 'Internal Instability', color: '#a855f7', icon: '🏛' },
};

function ProbabilityBar({ label, value, color, icon }) {
  const pct = Math.round(value * 100);

  return (
    <div className="prob-bar-row">
      <div className="prob-label">
        <span className="prob-icon">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="prob-track">
        <div
          className="prob-fill"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}60, ${color})`,
            boxShadow: `0 0 8px ${color}30`,
          }}
        />
      </div>
      <div className="prob-value" style={{ color }}>{pct}%</div>
    </div>
  );
}

function MiniGauge({ label, value, maxVal, color, unit }) {
  const pct = typeof value === 'number' ? Math.min(100, (value / maxVal) * 100) : 50;

  return (
    <div className="mini-gauge">
      <div className="mini-gauge-label">{label}</div>
      <div className="mini-gauge-ring">
        <svg width="56" height="56" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <circle
            cx="28" cy="28" r="22"
            fill="none" stroke={color} strokeWidth="4"
            strokeDasharray={`${pct * 1.38} ${138 - pct * 1.38}`}
            strokeDashoffset="34.5"
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.8s ease', filter: `drop-shadow(0 0 4px ${color}40)` }}
          />
        </svg>
        <div className="mini-gauge-value" style={{ color, fontSize: typeof value === 'string' ? 9 : 12 }}>
          {typeof value === 'number' ? Math.round(value) : value}
          {unit && <span className="mini-gauge-unit">{unit}</span>}
        </div>
      </div>
    </div>
  );
}

export default function BottomPanel({
  predictions, escalationProbability, warDurationRange,
  nuclearPredictions, oilDisruption, escalationLevel,
}) {
  const explanation = useMemo(() => {
    if (escalationLevel > 85) return 'ACTIVE WAR: Multi-front conflict intensifying. Hormuz blockaded, Hezbollah engaged, GCC states under fire. Regime collapse and regional expansion both possible.';
    if (escalationLevel > 70) return 'War continues with high intensity. US-Israel coalition maintains air dominance but Iran\u2019s asymmetric strategy (missiles, drones, Hormuz mines) sustains pressure.';
    if (escalationLevel > 50) return 'Conflict persists but intensity declining. Diplomatic backchannels may be forming. Oil disruption remains critical concern.';
    if (escalationLevel > 30) return 'Significant de-escalation underway. Ceasefire discussions possible. Iranian internal instability may force regime concessions.';
    return 'Conflict winding down. Ceasefire framework emerging. Focus shifting to post-war stability and reconstruction.';
  }, [escalationLevel]);

  return (
    <div className="bottom-panel">
      <div className="bottom-section scenario-section">
        <div className="section-title">
          <span className="section-icon">📊</span>
          SCENARIO DISTRIBUTION
        </div>
        <div className="scenario-bars">
          {Object.entries(predictions).map(([key, val]) => {
            const cfg = SCENARIO_CONFIG[key];
            return (
              <ProbabilityBar
                key={key}
                label={cfg.label}
                value={val}
                color={cfg.color}
                icon={cfg.icon}
              />
            );
          })}
        </div>
      </div>

      <div className="bottom-section gauges-section">
        <div className="section-title">
          <span className="section-icon">🎯</span>
          KEY INDICATORS
        </div>
        <div className="gauges-grid">
          <MiniGauge
            label="Escalation"
            value={escalationProbability * 100}
            maxVal={100}
            color={escalationProbability > 0.6 ? '#ef4444' : escalationProbability > 0.35 ? '#eab308' : '#22c55e'}
            unit="%"
          />
          <MiniGauge
            label="Oil Disruption"
            value={oilDisruption}
            maxVal={100}
            color={oilDisruption > 50 ? '#ef4444' : '#f97316'}
            unit="%"
          />
          <MiniGauge
            label="Duration"
            value={`${warDurationRange.min}-${warDurationRange.max}`}
            maxVal={365}
            color="#3b82f6"
            unit="d"
          />
          <MiniGauge
            label="Miscalc."
            value={nuclearPredictions.miscalculationProbability * 100}
            maxVal={100}
            color={nuclearPredictions.miscalculationProbability > 0.2 ? '#ef4444' : '#eab308'}
            unit="%"
          />
        </div>
      </div>

      <div className="bottom-section explain-section">
        <div className="section-title">
          <span className="section-icon">💬</span>
          ANALYSIS
        </div>
        <div className="explain-text">{explanation}</div>
        <div className="disclaimer">
          Probabilistic model — not a prediction of real-world outcomes.
        </div>
      </div>
    </div>
  );
}
