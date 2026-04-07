import React, { useState } from 'react';

const SIM_START = new Date('2026-04-06');
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function getDateForDay(simDay) {
  const d = new Date(SIM_START);
  d.setDate(d.getDate() + simDay);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
function fmt(n) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return n.toString();
}

// Standard (non-nuclear) conclusion
function StandardConclusion({ conclusion, dayCount, warDay, oilDisruption, nuclearIndex, onReset }) {
  const totalWarDays = (warDay || 37) + dayCount;
  return (
    <div className="war-conclusion-overlay">
      <div className="war-conclusion-panel" style={{ borderColor: conclusion.color }}>
        <div className="wc-icon" style={{ color: conclusion.color }}>{conclusion.icon}</div>
        <div className="wc-title" style={{ color: conclusion.color }}>{conclusion.title}</div>
        <div className="wc-subtitle">War concluded on {getDateForDay(dayCount)} — Day {totalWarDays}</div>
        <div className="wc-summary">{conclusion.summary}</div>
        <div className="wc-stats">
          <div className="wc-stat"><div className="wc-stat-value">{totalWarDays}</div><div className="wc-stat-label">Days of War</div></div>
          <div className="wc-stat"><div className="wc-stat-value" style={{ color: '#ef4444' }}>~{fmt(conclusion.casualties)}</div><div className="wc-stat-label">Est. Casualties</div></div>
          <div className="wc-stat"><div className="wc-stat-value" style={{ color: '#f97316' }}>{Math.round(oilDisruption)}%</div><div className="wc-stat-label">Oil Disruption</div></div>
          <div className="wc-stat"><div className="wc-stat-value" style={{ color: nuclearIndex > 60 ? '#dc2626' : '#eab308' }}>{Math.round(nuclearIndex)}</div><div className="wc-stat-label">Nuclear Index</div></div>
        </div>
        <div className="wc-detail">{conclusion.detail}</div>
        <div className="wc-disclaimer">This is a probabilistic simulation for educational purposes. Not a prediction of real-world outcomes.</div>
        <button className="wc-restart-btn" onClick={onReset}>RUN SIMULATION AGAIN</button>
      </div>
    </div>
  );
}

// Multi-page nuclear conclusion
function NuclearConclusion({ conclusion, dayCount, warDay, onReset }) {
  const [page, setPage] = useState(0);
  const nuc = conclusion._nuclearOutcome;
  if (!nuc) return <StandardConclusion conclusion={conclusion} dayCount={dayCount} warDay={warDay} oilDisruption={100} nuclearIndex={100} onReset={onReset} />;

  const totalWarDays = (warDay || 37) + dayCount;
  const totalPages = 4;

  const pages = [
    // Page 0: The Strike
    () => (
      <div className="nuc-page">
        <div className="nuc-page-tag">1 / {totalPages} — THE STRIKE</div>
        <div className="nuc-page-title" style={{ color: '#dc2626' }}>{nuc.attackerName} LAUNCHES NUCLEAR WEAPONS</div>
        <div className="nuc-page-subtitle">War Day {totalWarDays} — {getDateForDay(dayCount)}</div>
        <div className="nuc-page-desc">{nuc.description}</div>

        <div className="nuc-section-label">INITIAL TARGETS</div>
        {nuc.initialTargets.map((t, i) => (
          <div key={i} className="nuc-target-card">
            <div className="nuc-target-header">
              <span className="nuc-target-city">{t.city}</span>
              <span className="nuc-target-yield">{t.yield}</span>
            </div>
            <div className="nuc-target-desc">{t.description}</div>
            <div className="nuc-target-cas" style={{ color: t.casualties > 0 ? '#ef4444' : '#22c55e' }}>
              {t.casualties > 0 ? `~${fmt(t.casualties)} casualties` : 'No ground casualties'}
            </div>
          </div>
        ))}

        <div className="nuc-immediate-box">
          <span>Immediate death toll:</span>
          <span className="nuc-big-number" style={{ color: '#dc2626' }}>~{fmt(nuc.totalCasualties.immediate)}</span>
        </div>
      </div>
    ),

    // Page 1: Retaliation Chain
    () => (
      <div className="nuc-page">
        <div className="nuc-page-tag">2 / {totalPages} — RETALIATION</div>
        <div className="nuc-page-title" style={{ color: '#f97316' }}>CHAIN REACTION</div>

        {nuc.retaliationChain.length === 0 ? (
          <div className="nuc-page-desc">No nuclear retaliation occurred — Iran possesses no nuclear weapons capable of responding. However, the consequences are still catastrophic.</div>
        ) : (
          nuc.retaliationChain.map((r, i) => (
            <div key={i} className="nuc-retaliation-card">
              <div className="nuc-ret-header">
                <span className="nuc-ret-actor">{r.actor}</span>
                <span className="nuc-ret-action">{r.action}</span>
              </div>
              <div className="nuc-ret-reason">{r.reason}</div>
              {r.targets && r.targets.map((t, j) => (
                <div key={j} className="nuc-ret-target">
                  {t.city} — <span style={{ color: '#ef4444' }}>~{fmt(t.casualties)} casualties</span>
                </div>
              ))}
            </div>
          ))
        )}

        <div className="nuc-immediate-box">
          <span>Casualties within first year:</span>
          <span className="nuc-big-number" style={{ color: '#ef4444' }}>~{fmt(nuc.totalCasualties.withinYear)}</span>
        </div>
      </div>
    ),

    // Page 2: World Response
    () => (
      <div className="nuc-page">
        <div className="nuc-page-tag">3 / {totalPages} — WORLD RESPONSE</div>
        <div className="nuc-page-title" style={{ color: '#eab308' }}>HOW THE WORLD REACTS</div>

        <div className="nuc-countries-grid">
          {nuc.otherCountries.map((c, i) => (
            <div key={i} className="nuc-country-card">
              <div className="nuc-country-header">
                <span className="nuc-country-icon">{c.icon}</span>
                <span className="nuc-country-name">{c.country}</span>
              </div>
              <div className="nuc-country-action">{c.action}</div>
              <div className="nuc-country-reason">{c.reason}</div>
            </div>
          ))}
        </div>
      </div>
    ),

    // Page 3: Post-Nuclear Earth
    () => (
      <div className="nuc-page">
        <div className="nuc-page-tag">4 / {totalPages} — THE AFTERMATH</div>
        <div className="nuc-page-title" style={{ color: '#94a3b8' }}>POST-NUCLEAR EARTH</div>
        <div className="nuc-page-desc">{nuc.postWarEarth.description}</div>

        <div className="nuc-effects-grid">
          {Object.entries(nuc.globalEffects).map(([key, val]) => {
            const labels = { nuclearWinter: 'Nuclear Winter', falloutZones: 'Fallout Zones', economicCollapse: 'Economic Collapse', refugeeCrisis: 'Refugee Crisis', famine: 'Famine' };
            const icons = { nuclearWinter: '\u2744', falloutZones: '\u2622', economicCollapse: '\u{1F4C9}', refugeeCrisis: '\u{1F6B6}', famine: '\u{1F33E}' };
            return (
              <div key={key} className="nuc-effect-card">
                <div className="nuc-effect-header"><span>{icons[key]}</span> {labels[key]}</div>
                <div className="nuc-effect-text">{val}</div>
              </div>
            );
          })}
        </div>

        <div className="nuc-section-label">TIMELINE OF CONSEQUENCES</div>
        <div className="nuc-timeline">
          {nuc.postWarEarth.timelineEvents.map((evt, i) => (
            <div key={i} className="nuc-timeline-item">
              <div className="nuc-timeline-time">{evt.time}</div>
              <div className="nuc-timeline-event">{evt.event}</div>
            </div>
          ))}
        </div>

        <div className="nuc-final-stats">
          <div className="nuc-final-stat">
            <div className="nuc-final-value" style={{ color: '#ef4444' }}>~{fmt(nuc.totalCasualties.immediate)}</div>
            <div className="nuc-final-label">Immediate Dead</div>
          </div>
          <div className="nuc-final-stat">
            <div className="nuc-final-value" style={{ color: '#f97316' }}>~{fmt(nuc.totalCasualties.withinYear)}</div>
            <div className="nuc-final-label">Dead Within 1 Year</div>
          </div>
          <div className="nuc-final-stat">
            <div className="nuc-final-value" style={{ color: '#dc2626' }}>~{fmt(nuc.totalCasualties.longTerm)}</div>
            <div className="nuc-final-label">Long-Term Deaths</div>
          </div>
          <div className="nuc-final-stat">
            <div className="nuc-final-value" style={{ color: '#eab308' }}>{nuc.economicDamage}%</div>
            <div className="nuc-final-label">Economic Damage</div>
          </div>
        </div>
      </div>
    ),
  ];

  return (
    <div className="war-conclusion-overlay nuc-overlay">
      <div className="war-conclusion-panel nuc-panel" style={{ borderColor: '#dc2626', maxWidth: 680 }}>
        <div className="nuc-header-bar">
          <span className="nuc-header-icon">{'\u2622'}</span>
          <span className="nuc-header-text">NUCLEAR EXCHANGE</span>
          <span className="nuc-header-icon">{'\u2622'}</span>
        </div>

        <div className="nuc-page-content">
          {pages[page]()}
        </div>

        <div className="nuc-nav">
          <button className="nuc-nav-btn" onClick={() => setPage(p => p - 1)} disabled={page === 0}>
            BACK
          </button>
          <div className="nuc-nav-dots">
            {pages.map((_, i) => (
              <span key={i} className={`nuc-dot ${i === page ? 'active' : ''}`} onClick={() => setPage(i)} />
            ))}
          </div>
          {page < totalPages - 1 ? (
            <button className="nuc-nav-btn" onClick={() => setPage(p => p + 1)}>NEXT</button>
          ) : (
            <button className="wc-restart-btn" onClick={onReset} style={{ padding: '6px 20px', fontSize: 10 }}>RUN AGAIN</button>
          )}
        </div>

        <div className="wc-disclaimer" style={{ marginTop: 8 }}>
          Probabilistic simulation for educational purposes. Not a prediction.
        </div>
      </div>
    </div>
  );
}

export default function WarConclusion({ conclusion, dayCount, warDay, oilDisruption, nuclearIndex, onReset }) {
  if (!conclusion) return null;

  if (conclusion.type === 'nuclearExchange') {
    return <NuclearConclusion conclusion={conclusion} dayCount={dayCount} warDay={warDay} onReset={onReset} />;
  }

  return <StandardConclusion conclusion={conclusion} dayCount={dayCount} warDay={warDay} oilDisruption={oilDisruption} nuclearIndex={nuclearIndex} onReset={onReset} />;
}
