import React, { useState } from 'react';

const METRIC_ICONS = {
  militaryPower: '⚔',
  airSuperiority: '✈',
  missileCapacity: '🚀',
  droneCapability: '🛩',
  navalControl: '🚢',
  economy: '💰',
  internalStability: '🏛',
  morale: '💪',
};

const METRIC_LABELS = {
  militaryPower: 'Military Power',
  airSuperiority: 'Air Superiority',
  missileCapacity: 'Missile Capacity',
  droneCapability: 'Drone Capability',
  navalControl: 'Naval Control',
  economy: 'Economy',
  internalStability: 'Internal Stability',
  morale: 'Morale',
};

function getBarColor(value) {
  if (value >= 70) return '#22c55e';
  if (value >= 45) return '#eab308';
  if (value >= 25) return '#f97316';
  return '#ef4444';
}

function MetricBar({ label, value, icon }) {
  const color = getBarColor(value);
  const v = Math.round(value);

  return (
    <div className="metric-row">
      <div className="metric-label">
        <span className="metric-icon">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="metric-bar-track">
        <div
          className="metric-bar-fill"
          style={{
            width: `${v}%`,
            background: `linear-gradient(90deg, ${color}90, ${color})`,
            boxShadow: `0 0 6px ${color}40`,
          }}
        />
      </div>
      <div className="metric-value" style={{ color }}>{v}%</div>
    </div>
  );
}

function ActorCard({ actor, isExpanded, onToggle }) {
  return (
    <div
      className="actor-card"
      style={{ borderLeftColor: actor.color }}
    >
      <div className="actor-header" onClick={onToggle}>
        <div className="actor-name">
          <span className="actor-flag">{actor.flag}</span>
          <span>{actor.shortName}</span>
        </div>
        <div className="actor-power" style={{ color: actor.color }}>
          {Math.round(actor.metrics.militaryPower)}
        </div>
        <div className="expand-arrow">{isExpanded ? '▲' : '▼'}</div>
      </div>

      {isExpanded && (
        <div className="actor-metrics">
          {Object.entries(actor.metrics).map(([key, val]) => (
            <MetricBar
              key={key}
              label={METRIC_LABELS[key]}
              value={val}
              icon={METRIC_ICONS[key]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function LeftPanel({ actors }) {
  const [expanded, setExpanded] = useState({ usa: true, israel: true, iran: true });

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="left-panel">
      <div className="panel-header">
        <span className="panel-header-icon">🎯</span>
        FORCE STATUS
      </div>
      <div className="actor-list">
        {['usa', 'israel', 'iran'].map(id => (
          <ActorCard
            key={id}
            actor={actors[id]}
            isExpanded={expanded[id]}
            onToggle={() => toggle(id)}
          />
        ))}
      </div>
    </div>
  );
}
