import React, { useEffect, useMemo, useRef, useState } from 'react';
import ConclusionShareModal from './ConclusionShareModal.jsx';
import { buildPersonalOutcomeReport } from '../engine/outcomeReport.js';
import { buildEndingArtDirection } from '../engine/endingArtPrompts.js';
import { getEndingArtAssetCandidates } from '../engine/endingArtAssets.js';

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

function splitSvgLabel(value, maxLength = 18, maxLines = 2) {
  const words = String(value || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  let usedWords = 0;

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength && current) {
      lines.push(current);
      usedWords += current.split(/\s+/).filter(Boolean).length;
      current = word;
      if (lines.length === maxLines - 1) break;
    } else {
      current = next;
    }
  }

  if (current && lines.length < maxLines) {
    lines.push(current);
    usedWords += current.split(/\s+/).filter(Boolean).length;
  }

  if (usedWords < words.length && lines.length) {
    lines[lines.length - 1] = `${lines[lines.length - 1].replace(/[. ]+$/u, '')}...`;
  }

  return lines.slice(0, maxLines);
}

function ImpactRadiusMap({ target }) {
  if (!target?.impactRadius) return null;

  const impact = target.impactRadius;
  const isIntercepted = !!impact.intercepted;
  const rings = isIntercepted
    ? [
      { label: 'Debris Scatter', value: impact.debrisScatterKm, color: 'rgba(96, 165, 250, 0.65)' },
      { label: 'Contamination Watch', value: impact.contaminationWatchKm, color: 'rgba(191, 219, 254, 0.28)' },
    ]
    : [
      { label: 'Fallout Zone', value: impact.falloutZoneKm, color: 'rgba(239, 68, 68, 0.16)' },
      { label: 'Thermal Burns', value: impact.thermalRadiationKm, color: 'rgba(249, 115, 22, 0.20)' },
      { label: 'Severe Blast', value: impact.severeBlastKm, color: 'rgba(250, 204, 21, 0.28)' },
      { label: 'Fireball', value: impact.fireballKm, color: 'rgba(255, 255, 255, 0.70)' },
    ].filter((ring) => ring.value);

  const maxRadius = Math.max(...rings.map((ring) => ring.value || 1), 1);
  const center = 110;
  const maxPixelRadius = 84;
  const targetLabelLines = splitSvgLabel(target.city, 20, 2);
  const targetLabelStartY = targetLabelLines.length > 1 ? 102 : 106;
  const targetSubtitleY = targetLabelLines.length > 1 ? 127 : 123;

  return (
    <div style={{ marginTop: 10 }}>
      <div className="nuc-section-label">IMPACT RADIUS MAP</div>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 16, alignItems: 'center' }}>
        <svg width="220" height="220" viewBox="0 0 220 220" style={{ borderRadius: 12, background: 'rgba(2, 6, 23, 0.72)', border: '1px solid rgba(148, 163, 184, 0.12)' }}>
          <rect x="0" y="0" width="220" height="220" fill="rgba(2, 6, 23, 0.72)" />
          <path d="M0 110H220M110 0V220" stroke="rgba(148, 163, 184, 0.08)" strokeWidth="1" />
          {rings.map((ring) => (
            <circle
              key={ring.label}
              cx={center}
              cy={center}
              r={(ring.value / maxRadius) * maxPixelRadius}
              fill={ring.color}
              stroke={ring.color.replace(/0\.\d+\)$/u, '0.85)')}
              strokeWidth="1.5"
            />
          ))}
          <circle cx={center} cy={center} r="4" fill={isIntercepted ? '#93c5fd' : '#f8fafc'} />
          <text x={center} y={targetLabelStartY} textAnchor="middle" fill="rgba(226, 232, 240, 0.96)" fontSize="12" fontWeight="700">
            {targetLabelLines.map((line, index) => (
              <tspan key={`${line}-${index}`} x={center} dy={index === 0 ? 0 : 14}>
                {line}
              </tspan>
            ))}
          </text>
          <text x={center} y={targetSubtitleY} textAnchor="middle" fill="rgba(148, 163, 184, 0.82)" fontSize="10">
            {isIntercepted ? 'Intercept point / debris watch' : 'Estimated strike footprint'}
          </text>
        </svg>

        <div>
          <div style={{ fontSize: 12, color: '#e2e8f0', marginBottom: 8 }}>
            {isIntercepted ? 'High-altitude interception profile' : 'Estimated ground effects around the target center'}
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            {rings.map((ring) => (
              <div key={ring.label} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'rgba(148, 163, 184, 0.9)' }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: ring.color, border: '1px solid rgba(255,255,255,0.15)' }} />
                <span style={{ minWidth: 110, color: 'rgba(226, 232, 240, 0.92)' }}>{ring.label}</span>
                <span>{ring.value} km radius</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getInitialStrikeCasualties(nuclearOutcome) {
  return (nuclearOutcome?.initialTargets || []).reduce((sum, target) => sum + (target?.casualties || 0), 0);
}

function OutcomeArtPreview({ artDirection, report, compact = false }) {
  if (!artDirection) return null;
  const [primary, secondary, accent] = artDirection.colors;
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setImageSrc(null);

    if (!report?.factionKey || !report?.outcomeKey) return undefined;

    const candidates = getEndingArtAssetCandidates(report.factionKey, report.outcomeKey);
    if (candidates.length === 0) return undefined;

    const tryLoad = async () => {
      for (const candidate of candidates) {
        try {
          const response = await fetch(candidate, { method: 'HEAD' });
          if (!cancelled && response.ok) {
            setImageSrc(candidate);
            return;
          }
        } catch {
          // Ignore missing assets and keep trying the next candidate.
        }
      }
    };

    tryLoad();
    return () => {
      cancelled = true;
    };
  }, [report?.factionKey, report?.outcomeKey]);

  return (
    <div
      className={`wc-art-preview ${compact ? 'wc-art-preview-compact' : ''} ${imageSrc ? 'wc-art-preview-asset' : ''}`}
      style={{
        '--wc-art-primary': primary,
        '--wc-art-secondary': secondary,
        '--wc-art-accent': accent,
      }}
    >
      {imageSrc ? (
        <>
          <img src={imageSrc} alt={artDirection.title} className="wc-art-image" />
          <div className="wc-art-image-overlay" />
        </>
      ) : (
        <>
          <div className="wc-art-backdrop" />
          <div className="wc-art-grid" />
          <div className="wc-art-glow" />
          <div className="wc-art-orbit wc-art-orbit-lg" />
          <div className="wc-art-orbit wc-art-orbit-md" />
          <div className="wc-art-core" />
          <div className="wc-art-route wc-art-route-main" />
          <div className="wc-art-route wc-art-route-alt" />
          <div className="wc-art-hotspots">
            {artDirection.locations.slice(0, compact ? 2 : 3).map((location) => (
              <span key={location} className="wc-art-hotspot">{location}</span>
            ))}
          </div>
          <div className="wc-art-copy">
            <div className="wc-art-kicker">ENDING VISUAL</div>
            <div className="wc-art-title">{artDirection.title}</div>
            <div className="wc-art-tone">{artDirection.framing}</div>
          </div>
        </>
      )}
    </div>
  );
}

function PersonalOutcomePanel({ report, artDirection, onOpenShare }) {
  if (!report) {
    return (
      <div className="wc-personal-card wc-personal-card-muted">
        <div className="wc-personal-label">PERSONAL ENDING LOCKED</div>
        <div className="wc-personal-title">Take command in the next run to unlock a personal after-action report.</div>
        <div className="wc-personal-text">
          Enter a commander name, choose a side, and issue at least one manual order before the war ends.
        </div>
      </div>
    );
  }

  return (
    <div className="wc-personal-card">
      <div className="wc-personal-head">
        <div className="wc-personal-copy">
          <div className="wc-personal-label">COMMANDER REPORT</div>
          <div className="wc-personal-title">{report.title}</div>
        </div>
        <div className="wc-personal-verdict" style={{ color: report.verdict.color }}>
          <span>{report.verdict.icon}</span>
          <span>{report.verdict.label}</span>
        </div>
      </div>
      <div className="wc-personal-subtitle">{report.subtitle}</div>
      <div className="wc-personal-text">{report.debrief}</div>
      <OutcomeArtPreview artDirection={artDirection} report={report} />
      <div className="wc-personal-stats">
        {report.reportStats.map((item) => (
          <div key={item.label} className="wc-personal-stat">
            <div className="wc-personal-stat-label">{item.label}</div>
            <div className="wc-personal-stat-value">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="wc-personal-actions">
        <button className="wc-share-btn" onClick={onOpenShare}>SHARE MY OUTCOME</button>
      </div>
    </div>
  );
}

// Standard (non-nuclear) conclusion
function StandardConclusion({ conclusion, dayCount, warDay, oilDisruption, nuclearIndex, onReset, onDismiss, personalReport, artDirection, onOpenShare }) {
  const totalWarDays = (warDay || 37) + dayCount;
  return (
    <div className="war-conclusion-overlay">
      <div className="war-conclusion-panel" style={{ borderColor: conclusion.color }}>
        <button className="wc-close-btn" onClick={onDismiss} aria-label="Close conclusion overlay">×</button>
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
        <PersonalOutcomePanel report={personalReport} artDirection={artDirection} onOpenShare={onOpenShare} />
        <div className="wc-disclaimer">This is a probabilistic simulation for educational purposes. Not a prediction of real-world outcomes.</div>
        <button className="wc-restart-btn" onClick={onReset}>RUN SIMULATION AGAIN</button>
      </div>
    </div>
  );
}

// Multi-page nuclear conclusion
function NuclearConclusion({ conclusion, dayCount, warDay, onReset, onDismiss, personalReport, artDirection, onOpenShare }) {
  const [page, setPage] = useState(0);
  const [impactIndex, setImpactIndex] = useState(0);
  const pageContentRef = useRef(null);
  const nuc = conclusion._nuclearOutcome;
  if (!nuc) return <StandardConclusion conclusion={conclusion} dayCount={dayCount} warDay={warDay} oilDisruption={100} nuclearIndex={100} onReset={onReset} personalReport={personalReport} onOpenShare={onOpenShare} />;

  const totalWarDays = (warDay || 37) + dayCount;
  const totalPages = 5;
  const impactTarget = nuc.initialTargets[Math.min(impactIndex, Math.max(0, nuc.initialTargets.length - 1))];
  const initialStrikeCasualties = getInitialStrikeCasualties(nuc);

  useEffect(() => {
    if (pageContentRef.current) {
      pageContentRef.current.scrollTop = 0;
    }
  }, [page]);

  const pages = [
    // Page 0: The Strike
    () => (
      <div className="nuc-page">
        <div className="nuc-page-tag">1 / {totalPages} — THE STRIKE</div>
        <div className="nuc-page-title" style={{ color: '#dc2626' }}>{nuc.attackerName} LAUNCHES NUCLEAR WEAPONS</div>
        <div className="nuc-page-subtitle">War Day {totalWarDays} — {getDateForDay(dayCount)}</div>
        <div className="nuc-page-desc">{nuc.description}</div>
        {nuc.selectedWarhead && (
          <div className="nuc-target-card" style={{ marginBottom: 12 }}>
            <div className="nuc-target-header">
              <span className="nuc-target-city">WARHEAD USED</span>
              <span className="nuc-target-yield">{nuc.selectedWarhead.shortLabel}</span>
            </div>
            <div className="nuc-target-desc">{nuc.selectedWarhead.delivery}</div>
            <div className="nuc-target-cas" style={{ color: '#fca5a5' }}>{nuc.selectedWarhead.summary}</div>
          </div>
        )}

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

        {nuc.initialTargets.length > 1 && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
            {nuc.initialTargets.map((target, index) => (
              <button
                key={`${target.city}-${index}`}
                className="nuc-nav-btn"
                onClick={() => setImpactIndex(index)}
                style={{
                  padding: '6px 10px',
                  background: index === impactIndex ? 'rgba(220, 38, 38, 0.18)' : undefined,
                  borderColor: index === impactIndex ? 'rgba(220, 38, 38, 0.55)' : undefined,
                }}
              >
                {target.city}
              </button>
            ))}
          </div>
        )}

        <ImpactRadiusMap target={impactTarget} />

        <div className="nuc-immediate-box">
          <span>{nuc.intercepted ? 'Immediate deaths at target:' : 'Immediate deaths from initial strike:'}</span>
          <span className="nuc-big-number" style={{ color: initialStrikeCasualties > 0 ? '#dc2626' : '#22c55e' }}>
            {initialStrikeCasualties > 0 ? `~${fmt(initialStrikeCasualties)}` : '0'}
          </span>
        </div>
        {nuc.intercepted && (
          <div className="nuc-page-desc" style={{ marginTop: 10 }}>
            The launch was intercepted before ground detonation. The larger death toll in later pages comes from the retaliation chain and wider regional escalation, not from the intercepted warhead itself.
          </div>
        )}
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
          <span>Immediate deaths after retaliation cycle:</span>
          <span className="nuc-big-number" style={{ color: '#ef4444' }}>~{fmt(nuc.totalCasualties.immediate)}</span>
        </div>

        <div className="nuc-immediate-box">
          <span>Casualties within first year:</span>
          <span className="nuc-big-number" style={{ color: '#f97316' }}>~{fmt(nuc.totalCasualties.withinYear)}</span>
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

    () => (
      <div className="nuc-page">
        <div className="nuc-page-tag">5 / {totalPages} — COMMANDER REPORT</div>
        <div className="nuc-page-title" style={{ color: personalReport?.verdict?.color || '#93c5fd' }}>
          YOUR FINAL RESULT
        </div>
        <div className="nuc-page-subtitle">Personalized from your side, name, and issued commands</div>
        <PersonalOutcomePanel report={personalReport} artDirection={artDirection} onOpenShare={onOpenShare} />
      </div>
    ),
  ];

  return (
    <div className="war-conclusion-overlay nuc-overlay">
      <div className="war-conclusion-panel nuc-panel" style={{ borderColor: '#dc2626', maxWidth: 680 }}>
        <button className="wc-close-btn nuc-close-btn" onClick={onDismiss} aria-label="Close conclusion overlay">×</button>
        <div className="nuc-header-bar">
          <span className="nuc-header-icon">{'\u2622'}</span>
          <span className="nuc-header-text">NUCLEAR EXCHANGE</span>
          <span className="nuc-header-icon">{'\u2622'}</span>
        </div>

        <div className="nuc-page-content" ref={pageContentRef}>
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

export default function WarConclusion({
  conclusion,
  dayCount,
  warDay,
  oilDisruption,
  nuclearIndex,
  onReset,
  playerName,
  playerControlledActor,
  commandIssuedCount,
}) {
  const [shareOpen, setShareOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const personalReport = useMemo(() => buildPersonalOutcomeReport({
    conclusion,
    actorId: playerControlledActor,
    playerName,
    commandIssuedCount,
    dayCount,
    warDay,
    oilDisruption,
    nuclearIndex,
  }), [conclusion, playerControlledActor, playerName, commandIssuedCount, dayCount, warDay, oilDisruption, nuclearIndex]);
  const artDirection = useMemo(
    () => buildEndingArtDirection(personalReport, conclusion),
    [conclusion, personalReport],
  );
  useEffect(() => {
    setDismissed(false);
    setShareOpen(false);
  }, [conclusion]);
  if (!conclusion) return null;
  if (dismissed) return null;

  return (
    <>
      {conclusion.type === 'nuclearExchange' ? (
        <NuclearConclusion
          conclusion={conclusion}
          dayCount={dayCount}
          warDay={warDay}
          onReset={onReset}
          onDismiss={() => setDismissed(true)}
          personalReport={personalReport}
          artDirection={artDirection}
          onOpenShare={() => setShareOpen(true)}
        />
      ) : (
        <StandardConclusion
          conclusion={conclusion}
          dayCount={dayCount}
          warDay={warDay}
          oilDisruption={oilDisruption}
          nuclearIndex={nuclearIndex}
          onReset={onReset}
          onDismiss={() => setDismissed(true)}
          personalReport={personalReport}
          artDirection={artDirection}
          onOpenShare={() => setShareOpen(true)}
        />
      )}

      <ConclusionShareModal
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        report={personalReport}
        conclusion={conclusion}
        artDirection={artDirection}
      />
    </>
  );
}
