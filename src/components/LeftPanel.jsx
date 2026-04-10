import React, { useState } from 'react';
import { BASE_ACTORS } from '../engine/actors.js';
import { LATEST_SNAPSHOT } from '../engine/latestSnapshot.js';

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

const METRIC_REASON_PREFIX = {
  militaryPower: 'This reflects usable combat strength, readiness, and force survivability.',
  airSuperiority: 'This reflects control of airspace, sortie freedom, and air-defense pressure.',
  missileCapacity: 'This reflects the ability to sustain precision or saturation missile strikes.',
  droneCapability: 'This reflects drone inventory, production continuity, and operational effectiveness.',
  navalControl: 'This reflects freedom of action at sea, chokepoint influence, and fleet survivability.',
  economy: 'This reflects wartime economic resilience, trade access, and energy or sanctions pressure.',
  internalStability: 'This reflects regime or government cohesion, public strain, and domestic resilience.',
  morale: 'This reflects military and public confidence under ongoing wartime pressure.',
};

function describeValueBand(value) {
  if (value >= 85) return 'It is in a very strong range right now.';
  if (value >= 70) return 'It is strong, but no longer untouchable.';
  if (value >= 55) return 'It is still functional, though clearly under strain.';
  if (value >= 40) return 'It is fragile and can swing quickly with new events.';
  if (value >= 25) return 'It is severely degraded.';
  return 'It is near breakdown level.';
}

function describeDelta(value, baseline) {
  if (!Number.isFinite(baseline)) return '';
  const delta = Math.round(value - baseline);
  if (delta >= 12) return `It is up ${delta} points versus the baseline snapshot.`;
  if (delta >= 5) return `It is modestly above baseline by ${delta} points.`;
  if (delta <= -12) return `It is down ${Math.abs(delta)} points from baseline conditions.`;
  if (delta <= -5) return `It is somewhat below baseline by ${Math.abs(delta)} points.`;
  return 'It is still close to its baseline range.';
}

function describeSnapshotPressure(metricKey) {
  const summary = LATEST_SNAPSHOT.summary || '';
  const ceasefire = LATEST_SNAPSHOT.ceasefire;
  const recentEvents = LATEST_SNAPSHOT.recentEvents || [];

  if (metricKey === 'economy' && /hormuz|shipping|oil/i.test(summary)) {
    return 'Shipping, oil, and corridor pressure are still feeding into this score.';
  }

  if (metricKey === 'internalStability' && ceasefire?.active) {
    return ceasefire.status === 'fragile'
      ? 'The ceasefire is active but fragile, so political and public strain remain elevated.'
      : 'The ceasefire is helping a little, but stability has not fully normalized.';
  }

  if (metricKey === 'morale' && recentEvents.some((event) => /ceasefire|pause|talks/i.test(event.text))) {
    return 'Recent ceasefire signaling is providing some relief, but the broader war picture is still unsettled.';
  }

  if ((metricKey === 'missileCapacity' || metricKey === 'droneCapability') && recentEvents.some((event) => /strike|airstrike|missile/i.test(event.text))) {
    return 'Ongoing strike activity is one of the main reasons this score still matters operationally.';
  }

  if (metricKey === 'navalControl' && /hormuz|shipping|maritime/i.test(summary)) {
    return 'Maritime pressure around regional routes is a direct driver of this rating.';
  }

  if (metricKey === 'airSuperiority' && recentEvents.some((event) => /airstrike|airstrikes/i.test(event.text))) {
    return 'Current air operations are reinforcing this score in the latest snapshot.';
  }

  return '';
}

function buildMetricExplanation(actor, metricKey, value) {
  const baseline = BASE_ACTORS[actor.id]?.metrics?.[metricKey];
  return [
    METRIC_REASON_PREFIX[metricKey],
    describeValueBand(value),
    describeDelta(value, baseline),
    describeSnapshotPressure(metricKey),
  ].filter(Boolean).join(' ');
}

function buildHeaderExplanation(actor) {
  const value = Math.round(actor.metrics.militaryPower);
  return [
    'This header number is the Military Power score, not an average of all metrics.',
    buildMetricExplanation(actor, 'militaryPower', value),
  ].join(' ');
}

function getBarColor(value) {
  if (value >= 70) return '#22c55e';
  if (value >= 45) return '#eab308';
  if (value >= 25) return '#f97316';
  return '#ef4444';
}

function MetricBar({ actor, metricKey, label, value, icon }) {
  const color = getBarColor(value);
  const v = Math.round(value);
  const explanation = buildMetricExplanation(actor, metricKey, v);

  return (
    <div className="metric-row metric-row-with-tooltip" tabIndex={0}>
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
      <div className="metric-tooltip">
        <div className="metric-tooltip-title" style={{ color }}>{label}</div>
        <div className="metric-tooltip-text">{explanation}</div>
      </div>
    </div>
  );
}

function ActorCard({ actor, isExpanded, onToggle }) {
  const headerExplanation = buildHeaderExplanation(actor);

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
        <div className="actor-power actor-power-with-tooltip" style={{ color: actor.color }} tabIndex={0}>
          {Math.round(actor.metrics.militaryPower)}
          <div className="metric-tooltip actor-score-tooltip">
            <div className="metric-tooltip-title" style={{ color: actor.color }}>Header Score</div>
            <div className="metric-tooltip-text">{headerExplanation}</div>
          </div>
        </div>
        <div className="expand-arrow">{isExpanded ? '▲' : '▼'}</div>
      </div>

      {isExpanded && (
        <div className="actor-metrics">
          {Object.entries(actor.metrics).map(([key, val]) => (
            <MetricBar
              key={key}
              actor={actor}
              metricKey={key}
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
