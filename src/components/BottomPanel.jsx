import React, { useMemo } from 'react';
import { BASE_ACTORS } from '../engine/actors.js';

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

function ScenarioBar({ label, value, color, icon, detail }) {
  const pct = Math.round(value * 100);

  return (
    <div className="prob-bar-wrap">
      <ProbabilityBar label={label} value={value} color={color} icon={icon} />
      {detail && (
        <div className="prob-bar-tooltip">
          <div className="prob-bar-tooltip-title">{label}</div>
          <div className="prob-bar-tooltip-value" style={{ color }}>{pct}%</div>
          <div className="prob-bar-tooltip-text">{detail}</div>
        </div>
      )}
    </div>
  );
}

function buildShiftTone(delta) {
  if (delta >= 8) return { label: 'up sharply', color: '#ef4444' };
  if (delta >= 3) return { label: 'up', color: '#f97316' };
  if (delta <= -8) return { label: 'down sharply', color: '#22c55e' };
  if (delta <= -3) return { label: 'down', color: '#84cc16' };
  return { label: 'steady', color: '#94a3b8' };
}

function ShiftCard({ title, value, tone, detail }) {
  return (
    <div className="shift-card">
      <div className="shift-card-top">
        <div className="shift-card-title">{title}</div>
        <div className="shift-card-value" style={{ color: tone.color }}>{value}</div>
      </div>
      <div className="shift-card-tag" style={{ color: tone.color }}>{tone.label}</div>
      <div className="shift-card-detail">{detail}</div>
    </div>
  );
}

export default function BottomPanel({
  predictions, escalationProbability, warDurationRange,
  nuclearPredictions, oilDisruption, escalationLevel, ceasefireStatus, narratives, lastNarrativeUpdate, updateSequence,
  actors, globalPressure, tradeImpact, allianceInfluence,
  syncedBaseline,
}) {
  const explanation = useMemo(() => {
    if (ceasefireStatus?.active && ceasefireStatus?.status === 'active') return 'ACTIVE CEASEFIRE: Direct large-scale strikes are paused. The model still tracks proxy friction, mistrust, and Hormuz risk for signs of renewed breakdown.';
    if (ceasefireStatus?.active && ceasefireStatus?.status === 'fragile') return 'FRAGILE CEASEFIRE: A ceasefire framework exists, but violations, proxy activity, or ultimatums could rapidly restore a high-escalation path.';
    if (ceasefireStatus?.status === 'collapsed') return 'CEASEFIRE COLLAPSED: The previous pause has broken down and the model is now weighting renewed confrontation much more heavily.';
    if (escalationLevel > 85) return 'ACTIVE WAR: Multi-front conflict intensifying. Hormuz blockaded, Hezbollah engaged, GCC states under fire. Regime collapse and regional expansion both possible.';
    if (escalationLevel > 70) return 'War continues with high intensity. US-Israel coalition maintains air dominance but Iran\u2019s asymmetric strategy (missiles, drones, Hormuz mines) sustains pressure.';
    if (escalationLevel > 50) return 'Conflict persists but intensity declining. Diplomatic backchannels may be forming. Oil disruption remains critical concern.';
    if (escalationLevel > 30) return 'Significant de-escalation underway. Ceasefire discussions possible. Iranian internal instability may force regime concessions.';
    return 'Conflict winding down. Ceasefire framework emerging. Focus shifting to post-war stability and reconstruction.';
  }, [ceasefireStatus, escalationLevel]);

  const currentShifts = useMemo(() => {
    const baselineActors = syncedBaseline?.actors || BASE_ACTORS;
    const baselineGlobals = syncedBaseline || {};
    const usaBase = baselineActors.usa?.metrics || BASE_ACTORS.usa.metrics;
    const israelBase = baselineActors.israel?.metrics || BASE_ACTORS.israel.metrics;
    const iranBase = baselineActors.iran?.metrics || BASE_ACTORS.iran.metrics;
    const usa = actors?.usa?.metrics || {};
    const israel = actors?.israel?.metrics || {};
    const iran = actors?.iran?.metrics || {};

    const cards = [];

    const coalitionAirDelta = Math.round((((usa.airSuperiority ?? usaBase.airSuperiority) + (israel.airSuperiority ?? israelBase.airSuperiority)) / 2)
      - ((usaBase.airSuperiority + israelBase.airSuperiority) / 2));
    const coalitionAirTone = buildShiftTone(coalitionAirDelta);
    cards.push({
      title: 'Coalition Air Posture',
      value: `${Math.round(((usa.airSuperiority ?? usaBase.airSuperiority) + (israel.airSuperiority ?? israelBase.airSuperiority)) / 2)}%`,
      tone: coalitionAirTone,
      detail: coalitionAirDelta === 0
        ? 'US and Israeli air dominance is broadly unchanged since the last sync.'
        : `US-Israeli air control is ${coalitionAirDelta > 0 ? 'stronger' : 'weaker'} than the last synced state by ${Math.abs(coalitionAirDelta)} points.`,
    });

    const iranResilienceValue = Math.round(((iran.militaryPower ?? iranBase.militaryPower) + (iran.internalStability ?? iranBase.internalStability) + (iran.morale ?? iranBase.morale)) / 3);
    const iranResilienceBase = Math.round((iranBase.militaryPower + iranBase.internalStability + iranBase.morale) / 3);
    const iranResilienceDelta = iranResilienceValue - iranResilienceBase;
    const iranTone = buildShiftTone(iranResilienceDelta);
    cards.push({
      title: 'Iranian Resilience',
      value: `${iranResilienceValue}%`,
      tone: iranTone,
      detail: iranResilienceDelta === 0
        ? 'Iranian resilience is holding near the last synced state.'
        : `Iranian staying power is ${iranResilienceDelta > 0 ? 'higher' : 'lower'} than the last sync by ${Math.abs(iranResilienceDelta)} points across military strength, morale, and stability.`,
    });

    const escalationBase = baselineGlobals.escalationLevel ?? escalationLevel ?? 0;
    const escalationDelta = Math.round((escalationLevel ?? 0) - escalationBase);
    const escalationTone = buildShiftTone(escalationDelta);
    cards.push({
      title: 'Escalation Track',
      value: `${Math.round(escalationLevel ?? 0)}%`,
      tone: escalationTone,
      detail: escalationDelta === 0
        ? 'The conflict is tracking close to the last synced escalation level.'
        : `Escalation is ${escalationDelta > 0 ? 'running hotter' : 'cooler'} than the last sync by ${Math.abs(escalationDelta)} points.`,
    });

    const oilBase = baselineGlobals.oilDisruption ?? 50;
    const oilDelta = Math.round((oilDisruption ?? 0) - oilBase);
    const oilTone = buildShiftTone(oilDelta);
    cards.push({
      title: 'Energy Shock',
      value: `${Math.round(oilDisruption ?? 0)}%`,
      tone: oilTone,
      detail: oilDelta === 0
        ? 'Shipping and energy markets are holding near the last synced disruption level.'
        : `Energy disruption is ${oilDelta > 0 ? 'more severe' : 'easing'} than the last sync by ${Math.abs(oilDelta)} points.`,
    });

    const pressureBase = baselineGlobals.globalPressure ?? 55;
    const pressureDelta = Math.round((globalPressure ?? 0) - pressureBase);
    const pressureTone = buildShiftTone(pressureDelta);
    cards.push({
      title: 'External Pressure',
      value: `${Math.round(globalPressure ?? 0)}%`,
      tone: pressureTone,
      detail: pressureDelta === 0
        ? 'Outside-power pressure is broadly unchanged since the last sync.'
        : ceasefireStatus?.active
          ? `Mediator and outside-power pressure is ${pressureDelta > 0 ? 'stronger' : 'softer'} than the last sync by ${Math.abs(pressureDelta)} points.`
          : `Trade impact ${Math.round(tradeImpact ?? 0)}% and alliance influence ${Math.round(allianceInfluence ?? 0)}% are keeping pressure ${pressureDelta > 0 ? 'above' : 'below'} the last synced level.`,
    });

    return cards;
  }, [actors, oilDisruption, globalPressure, tradeImpact, allianceInfluence, ceasefireStatus, escalationLevel, syncedBaseline]);

  const scenarioDetails = useMemo(() => ({
    deescalation: `${ceasefireStatus?.active
      ? 'The active ceasefire and external mediation are the main reasons de-escalation still has weight in the model.'
      : 'De-escalation is held back because the current snapshot still shows active military pressure and unresolved war aims.'} ${(() => {
        const delta = Math.round(((predictions?.deescalation ?? 0) - (syncedBaseline?.predictions?.deescalation ?? predictions?.deescalation ?? 0)) * 100);
        if (!delta) return 'This path is unchanged since the last sync.';
        return `This path is ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since the last sync.`;
      })()}`,
    prolongedConflict: `This stays elevated when neither side is close to collapse and enough force remains to keep trading limited strikes over time. ${(() => {
      const delta = Math.round(((predictions?.prolongedConflict ?? 0) - (syncedBaseline?.predictions?.prolongedConflict ?? predictions?.prolongedConflict ?? 0)) * 100);
      if (!delta) return 'This path is unchanged since the last sync.';
      return `This path is ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since the last sync.`;
    })()}`,
    regionalExpansion: oilDisruption >= 70 || allianceInfluence >= 50
      ? `Regional expansion is supported by high shipping-energy disruption and the possibility of additional allied or proxy involvement. ${(() => {
        const delta = Math.round(((predictions?.regionalExpansion ?? 0) - (syncedBaseline?.predictions?.regionalExpansion ?? predictions?.regionalExpansion ?? 0)) * 100);
        if (!delta) return 'This path is unchanged since the last sync.';
        return `This path is ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since the last sync.`;
      })()}`
      : `Regional spillover remains possible, but current cross-border pressure is not yet overwhelming. ${(() => {
        const delta = Math.round(((predictions?.regionalExpansion ?? 0) - (syncedBaseline?.predictions?.regionalExpansion ?? predictions?.regionalExpansion ?? 0)) * 100);
        if (!delta) return 'This path is unchanged since the last sync.';
        return `This path is ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since the last sync.`;
      })()}`,
    strategicBrinkmanship: nuclearPredictions.miscalculationProbability >= 0.15 || escalationLevel >= 60
      ? `Brinkmanship rises when escalation is high and the model sees room for miscalculation, coercive signaling, or red-line testing. ${(() => {
        const delta = Math.round(((predictions?.strategicBrinkmanship ?? 0) - (syncedBaseline?.predictions?.strategicBrinkmanship ?? predictions?.strategicBrinkmanship ?? 0)) * 100);
        if (!delta) return 'This path is unchanged since the last sync.';
        return `This path is ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since the last sync.`;
      })()}`
      : `Brinkmanship is present but not dominating because immediate nuclear and command-risk indicators are below their worst levels. ${(() => {
        const delta = Math.round(((predictions?.strategicBrinkmanship ?? 0) - (syncedBaseline?.predictions?.strategicBrinkmanship ?? predictions?.strategicBrinkmanship ?? 0)) * 100);
        if (!delta) return 'This path is unchanged since the last sync.';
        return `This path is ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since the last sync.`;
      })()}`,
    internalInstability: (() => {
      const usaStability = actors?.usa?.metrics?.internalStability ?? BASE_ACTORS.usa.metrics.internalStability;
      const israelStability = actors?.israel?.metrics?.internalStability ?? BASE_ACTORS.israel.metrics.internalStability;
      const iranStability = actors?.iran?.metrics?.internalStability ?? BASE_ACTORS.iran.metrics.internalStability;
      const weakest = Math.min(usaStability, israelStability, iranStability);
      const baseText = weakest < 45
        ? 'Internal instability is being pulled up by visible political strain, morale pressure, or economic stress inside at least one core actor.'
        : 'Internal instability remains in play, but current domestic pressure is not yet the model’s dominant failure path.';
      const delta = Math.round(((predictions?.internalInstability ?? 0) - (syncedBaseline?.predictions?.internalInstability ?? predictions?.internalInstability ?? 0)) * 100);
      if (!delta) return `${baseText} This path is unchanged since the last sync.`;
      return `${baseText} This path is ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since the last sync.`;
    })(),
  }), [actors, ceasefireStatus, escalationLevel, nuclearPredictions.miscalculationProbability, oilDisruption, allianceInfluence, predictions, syncedBaseline]);

  return (
    <div className="bottom-panel">
      <div className="bottom-section scenario-section">
        <div className="section-title">
          <span className="section-icon">📊</span>
          SCENARIO DISTRIBUTION
        </div>
        <div className="section-helper-text">
          Hover a bar to see what is driving it and how it changed since the last sync.
        </div>
        <div className="scenario-bars">
          {Object.entries(predictions).map(([key, val]) => {
            const cfg = SCENARIO_CONFIG[key];
            return (
              <ScenarioBar
                key={key}
                label={cfg.label}
                value={val}
                color={cfg.color}
                icon={cfg.icon}
                detail={scenarioDetails[key]}
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
        {ceasefireStatus && ceasefireStatus.status !== 'none' && (
          <div className={`ceasefire-status ceasefire-${ceasefireStatus.status}`}>
            <div className="ceasefire-status-top">
              <span className="ceasefire-status-label">
                {ceasefireStatus.status === 'active' ? 'ACTIVE CEASEFIRE' : ceasefireStatus.status.toUpperCase()}
              </span>
              <span className="ceasefire-status-confidence">{Math.round((ceasefireStatus.confidence || 0) * 100)}%</span>
            </div>
            <div className="ceasefire-status-text">{ceasefireStatus.summary}</div>
          </div>
        )}
        <div className="disclaimer">
          Probabilistic model — not a prediction of real-world outcomes.
        </div>
      </div>

      <div className="bottom-section shifts-section">
        <div className="section-title">
          <span className="section-icon">📈</span>
          CURRENT SHIFTS
        </div>
        <div className="disclaimer" style={{ marginBottom: 10 }}>
          Snapshot-driven comparison against the last synced state.
        </div>
        <div className="shift-grid">
          {currentShifts.map((item) => (
            <ShiftCard
              key={item.title}
              title={item.title}
              value={item.value}
              tone={item.tone}
              detail={item.detail}
            />
          ))}
        </div>
      </div>

      <div className="bottom-section narratives-section">
        <div className="section-title">
          <span className="section-icon">🧭</span>
          CURRENT NARRATIVES
        </div>
        <div className="disclaimer" style={{ marginBottom: 10 }}>
          Updated daily from source-driven sentiment and geopolitical framing.
          {lastNarrativeUpdate ? ` Last refresh: ${lastNarrativeUpdate}.` : ''}
        </div>
        <div className="narratives-grid">
          {(narratives || []).map((item) => (
            <div
              key={item.perspective}
              className="narrative-card"
            >
              <div className="narrative-card-top">
                <div className="narrative-perspective">
                  {item.perspective}
                </div>
                {item.latestSinceUpdate !== undefined && ((updateSequence || 0) - item.latestSinceUpdate) < 4 && (
                  <span className="latest-badge">🔥 Latest</span>
                )}
              </div>
              <div className="narrative-headline">
                {item.headline}
              </div>
              <div className="narrative-summary">
                {item.summary}
              </div>
            </div>
          ))}
          {(!narratives || narratives.length === 0) && (
            <div className="disclaimer">Narrative update pending.</div>
          )}
        </div>
      </div>
    </div>
  );
}
