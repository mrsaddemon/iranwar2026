import React, { useMemo, useState } from 'react';

function formatScenarioLabel(key) {
  const labels = {
    deescalation: 'De-escalation',
    prolongedConflict: 'Prolonged Conflict',
    regionalExpansion: 'Regional Expansion',
    strategicBrinkmanship: 'Strategic Brinkmanship',
    internalInstability: 'Internal Instability',
  };
  return labels[key] || key;
}

function buildShiftData(state) {
  const baseline = state?.syncedBaseline || {};
  const predictions = state?.predictions || {};
  const baselinePredictions = baseline?.predictions || {};
  const shifts = [];

  for (const [key, value] of Object.entries(predictions)) {
    const baseValue = baselinePredictions?.[key];
    if (!Number.isFinite(baseValue)) continue;
    const delta = Math.round((value - baseValue) * 100);
    if (Math.abs(delta) < 4) continue;
    shifts.push({
      kind: 'scenario',
      label: formatScenarioLabel(key),
      delta,
      value: Math.round(value * 100),
      detail: `${formatScenarioLabel(key)} moved ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since the last sync.`,
    });
  }

  const scalarMetrics = [
    ['Escalation', state?.escalationLevel, baseline?.escalationLevel],
    ['Nuclear index', state?.nuclearIndex, baseline?.nuclearIndex],
    ['Oil disruption', state?.oilDisruption, baseline?.oilDisruption],
    ['Global pressure', state?.globalPressure, baseline?.globalPressure],
  ];

  for (const [label, current, base] of scalarMetrics) {
    if (!Number.isFinite(current) || !Number.isFinite(base)) continue;
    const delta = Math.round(current - base);
    if (Math.abs(delta) < 5) continue;
    shifts.push({
      kind: 'metric',
      label,
      delta,
      value: Math.round(current),
      detail: `${label} is ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since the last sync.`,
    });
  }

  const baselineCeasefire = baseline?.ceasefireStatus?.status || 'none';
  const currentCeasefire = state?.ceasefireStatus?.status || 'none';
  if (baselineCeasefire !== currentCeasefire) {
    shifts.push({
      kind: 'ceasefire',
      label: 'Ceasefire status',
      delta: currentCeasefire === 'active' ? 15 : currentCeasefire === 'collapsed' ? -15 : 8,
      value: currentCeasefire,
      detail: `Ceasefire status changed from ${baselineCeasefire} to ${currentCeasefire}.`,
    });
  }

  return shifts.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
}

function getShiftTone(shifts) {
  const strongest = shifts[0];
  if (!strongest) return { label: 'Watchlist update', color: '#60a5fa' };
  if (strongest.kind === 'ceasefire' && String(strongest.value) === 'active') {
    return { label: 'Pause holding', color: '#22c55e' };
  }
  if (strongest.label === 'Nuclear index' || strongest.label === 'Escalation') {
    return strongest.delta > 0
      ? { label: 'Risk acceleration', color: '#ef4444' }
      : { label: 'Cooling signal', color: '#22c55e' };
  }
  return strongest.delta > 0
    ? { label: 'Breaking shift', color: '#f97316' }
    : { label: 'Model reversal', color: '#60a5fa' };
}

function buildHeadline(shifts, state) {
  const strongest = shifts[0];
  if (!strongest) return 'No major shift detected';
  if (strongest.kind === 'ceasefire') {
    return strongest.value === 'active'
      ? 'The ceasefire picture has materially improved'
      : 'The ceasefire picture has materially deteriorated';
  }
  if (strongest.kind === 'scenario') {
    return `${strongest.label} just moved ${strongest.delta > 0 ? 'sharply higher' : 'meaningfully lower'}`;
  }
  if (strongest.label === 'Nuclear index') {
    return strongest.delta > 0
      ? 'Nuclear risk is climbing again'
      : 'Nuclear pressure has eased materially';
  }
  if (strongest.label === 'Escalation') {
    return strongest.delta > 0
      ? 'Escalation is running hotter than the last sync'
      : 'Escalation is cooling from the last sync';
  }
  return state?.snapshotSummary || 'The conflict model has materially shifted since the last sync';
}

function buildAlertCopy(headline, shifts, state) {
  const topLines = shifts.slice(0, 3).map((shift) => `• ${shift.detail}`).join('\n');
  return [
    headline,
    `${state?.lastUpdated || 'Latest snapshot'} • War Day ${(state?.warDay || 39) + (state?.dayCount || 0)}`,
    topLines,
    `Summary: ${state?.snapshotSummary || 'No summary available.'}`,
    'war.limboidtech.com',
  ].join('\n');
}

export default function BreakingShiftModal({ open, onClose, state }) {
  const [copied, setCopied] = useState(false);
  const shifts = useMemo(() => buildShiftData(state), [state]);
  const tone = useMemo(() => getShiftTone(shifts), [shifts]);
  const headline = useMemo(() => buildHeadline(shifts, state), [shifts, state]);
  const alertCopy = useMemo(() => buildAlertCopy(headline, shifts, state), [headline, shifts, state]);

  if (!open) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(alertCopy);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="breaking-modal-overlay" onClick={onClose}>
      <div className="breaking-modal" onClick={(event) => event.stopPropagation()} style={{ '--breaking-accent': tone.color }}>
        <div className="breaking-modal-top">
          <div>
            <div className="breaking-modal-label">{tone.label}</div>
            <div className="breaking-modal-title">{headline}</div>
            <div className="breaking-modal-subtitle">
              This is the kind of model movement people miss if they only look at the map or the headline feed.
            </div>
          </div>
          <button className="breaking-modal-close" onClick={onClose} aria-label="Close breaking shift">
            ×
          </button>
        </div>

        <div className="breaking-hero-card">
          <div className="breaking-hero-stat">
            <span>Current date</span>
            <strong>{state?.lastUpdated || 'N/A'}</strong>
          </div>
          <div className="breaking-hero-stat">
            <span>War day</span>
            <strong>{(state?.warDay || 39) + (state?.dayCount || 0)}</strong>
          </div>
          <div className="breaking-hero-stat">
            <span>Escalation</span>
            <strong>{Math.round(state?.escalationLevel || 0)}</strong>
          </div>
          <div className="breaking-hero-stat">
            <span>Nuclear</span>
            <strong>{Math.round(state?.nuclearIndex || 0)}</strong>
          </div>
        </div>

        <div className="breaking-shift-list">
          {shifts.slice(0, 4).map((shift) => (
            <div key={`${shift.kind}-${shift.label}`} className="breaking-shift-item">
              <div className="breaking-shift-item-top">
                <div className="breaking-shift-item-title">{shift.label}</div>
                <div className="breaking-shift-item-delta" style={{ color: shift.delta >= 0 ? '#f97316' : '#22c55e' }}>
                  {shift.delta >= 0 ? '+' : ''}{shift.delta}
                </div>
              </div>
              <div className="breaking-shift-item-text">{shift.detail}</div>
            </div>
          ))}
          {shifts.length === 0 && (
            <div className="breaking-shift-empty">No major shift is currently strong enough to justify a breaking alert.</div>
          )}
        </div>

        <div className="breaking-copy-card">
          <div className="breaking-copy-title">Alert copy</div>
          <div className="breaking-copy-text">{alertCopy}</div>
        </div>

        <div className="breaking-modal-actions">
          <button className="breaking-action-btn" onClick={handleCopy}>
            {copied ? 'Copied' : 'Copy alert'}
          </button>
          <button className="breaking-action-btn primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
