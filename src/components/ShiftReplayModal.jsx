import React, { useEffect, useMemo, useState } from 'react';

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

function buildScenarioShift(predictions, baselinePredictions) {
  const entries = Object.keys(predictions || {}).map((key) => {
    const current = Number(predictions?.[key] || 0);
    const previous = Number(baselinePredictions?.[key] || 0);
    return {
      key,
      label: formatScenarioLabel(key),
      current: Math.round(current * 100),
      previous: Math.round(previous * 100),
      delta: Math.round((current - previous) * 100),
    };
  });

  return entries.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta)).slice(0, 3);
}

function buildMetricShift(label, current, previous, suffix = '%') {
  const currentValue = Math.round(Number(current || 0));
  const previousValue = Math.round(Number(previous || 0));
  return {
    label,
    currentValue,
    previousValue,
    delta: currentValue - previousValue,
    suffix,
  };
}

function buildReplayFrames(state) {
  const baseline = state?.syncedBaseline || {};
  const scenarioShift = buildScenarioShift(state?.predictions || {}, baseline?.predictions || {});
  const escalationShift = buildMetricShift('Escalation', state?.escalationLevel, baseline?.escalationLevel);
  const nuclearShift = buildMetricShift('Nuclear Index', state?.nuclearIndex, baseline?.nuclearIndex);
  const oilShift = buildMetricShift('Oil Disruption', state?.oilDisruption, baseline?.oilDisruption);
  const ceasefireBefore = baseline?.ceasefireStatus?.status || 'none';
  const ceasefireNow = state?.ceasefireStatus?.status || 'none';

  return [
    {
      id: 'baseline',
      title: 'Where the last sync left us',
      kicker: 'Baseline',
      summary: `The last synced model snapshot started with escalation at ${escalationShift.previousValue}, nuclear risk at ${nuclearShift.previousValue}, and oil disruption at ${oilShift.previousValue}.`,
      bullets: [
        `Ceasefire status was ${ceasefireBefore}.`,
        `The current replay compares that synced state against what the model looks like now.`,
      ],
    },
    {
      id: 'pressure',
      title: 'How the pressure picture shifted',
      kicker: 'Pressure track',
      summary: `Escalation is now ${escalationShift.currentValue} and nuclear risk is ${nuclearShift.currentValue}, while oil disruption sits at ${oilShift.currentValue}.`,
      bullets: [
        `${escalationShift.label} ${escalationShift.delta >= 0 ? 'rose' : 'fell'} ${Math.abs(escalationShift.delta)} points.`,
        `${nuclearShift.label} ${nuclearShift.delta >= 0 ? 'rose' : 'fell'} ${Math.abs(nuclearShift.delta)} points.`,
        `${oilShift.label} ${oilShift.delta >= 0 ? 'rose' : 'fell'} ${Math.abs(oilShift.delta)} points.`,
      ],
    },
    {
      id: 'scenarios',
      title: 'What the model now thinks is more likely',
      kicker: 'Scenario movement',
      summary: scenarioShift.length
        ? `${scenarioShift[0].label} is now the most meaningful mover since the last sync.`
        : 'Scenario weights are broadly stable relative to the last sync.',
      bullets: scenarioShift.length
        ? scenarioShift.map((entry) => `${entry.label} moved ${entry.delta >= 0 ? 'up' : 'down'} ${Math.abs(entry.delta)} points, from ${entry.previous}% to ${entry.current}%.`)
        : ['No scenario moved enough to qualify as a major shift.'],
    },
    {
      id: 'outlook',
      title: 'What this means now',
      kicker: 'Current outlook',
      summary: state?.snapshotSummary || 'The latest snapshot does not include a summary.',
      bullets: [
        ceasefireBefore !== ceasefireNow
          ? `Ceasefire status changed from ${ceasefireBefore} to ${ceasefireNow}.`
          : `Ceasefire status remains ${ceasefireNow}.`,
        'Use this replay as a concise story of what changed since the last sync, not just a pile of numbers.',
      ],
    },
  ];
}

export default function ShiftReplayModal({ open, onClose, state }) {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const frames = useMemo(() => buildReplayFrames(state), [state]);
  const frame = frames[index] || frames[0];

  useEffect(() => {
    if (!open) return undefined;
    setIndex(0);
    setAutoplay(true);
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open || !autoplay || frames.length <= 1) return undefined;
    const id = window.setInterval(() => {
      setIndex((current) => {
        if (current >= frames.length - 1) return 0;
        return current + 1;
      });
    }, 2800);
    return () => window.clearInterval(id);
  }, [open, autoplay, frames.length]);

  if (!open) return null;

  return (
    <div className="replay-modal-overlay" onClick={onClose}>
      <div className="replay-modal" onClick={(event) => event.stopPropagation()}>
        <div className="replay-modal-top">
          <div>
            <div className="replay-modal-label">Shift replay</div>
            <div className="replay-modal-title">{frame.title}</div>
            <div className="replay-modal-subtitle">
              A quick replay of how the current model moved since the last synced baseline.
            </div>
          </div>
          <button className="replay-modal-close" onClick={onClose} aria-label="Close replay">
            ×
          </button>
        </div>

        <div className="replay-progress">
          {frames.map((item, itemIndex) => (
            <button
              key={item.id}
              className={`replay-progress-dot ${itemIndex === index ? 'active' : ''}`}
              onClick={() => {
                setAutoplay(false);
                setIndex(itemIndex);
              }}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>

        <div className="replay-kicker">{frame.kicker}</div>
        <div className="replay-summary-card">
          <div className="replay-summary">{frame.summary}</div>
          <div className="replay-bullets">
            {frame.bullets.map((bullet) => (
              <div key={bullet} className="replay-bullet">{bullet}</div>
            ))}
          </div>
        </div>

        <div className="replay-controls">
          <button
            className="replay-action-btn"
            onClick={() => {
              setAutoplay(false);
              setIndex((current) => (current === 0 ? frames.length - 1 : current - 1));
            }}
          >
            Previous
          </button>
          <button
            className="replay-action-btn"
            onClick={() => setAutoplay((value) => !value)}
          >
            {autoplay ? 'Pause auto-play' : 'Resume auto-play'}
          </button>
          <button
            className="replay-action-btn primary"
            onClick={() => {
              setAutoplay(false);
              setIndex((current) => (current >= frames.length - 1 ? 0 : current + 1));
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
