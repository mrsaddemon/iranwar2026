import React, { useEffect, useMemo, useState } from 'react';
import NuclearIndex from './NuclearIndex.jsx';

const speeds = [1, 5, 20];
const UPDATE_CADENCE_MS = 15 * 60 * 1000;

function getSimDate(dayCount, simStart) {
  const d = new Date(simStart || '2026-04-07');
  d.setDate(d.getDate() + dayCount);
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function formatUtcSyncLabel(lastUpdated, lastSyncedAt) {
  if (!lastUpdated && !lastSyncedAt) return 'N/A';

  const source = lastSyncedAt ? new Date(lastSyncedAt) : new Date(`${lastUpdated}T00:00:00.000Z`);
  const sourceMs = source.getTime();
  if (!Number.isFinite(sourceMs)) return lastUpdated || 'N/A';

  const dateText = lastUpdated || source.toISOString().split('T')[0];
  const timeText = source.toISOString().slice(11, 16);
  return `${dateText} ${timeText} UTC`;
}

function buildNuclearExplanation({ nuclearIndex, escalationLevel, summary, ceasefireStatus, recentEvents }) {
  const reasons = [];
  const roundedIndex = Math.round(nuclearIndex || 0);
  const roundedEscalation = Math.round(escalationLevel || 0);
  const ceasefireState = ceasefireStatus?.status || 'none';

  if (ceasefireState === 'active') {
    reasons.push('A monitored ceasefire is holding across the main fronts, which is helping keep nuclear risk below crisis peaks.');
  } else if (ceasefireState === 'fragile') {
    reasons.push('A fragile ceasefire is moderating the threat level, but the pause is still reversible under renewed violations or proxy activity.');
  } else if (ceasefireState === 'collapsed') {
    reasons.push('The ceasefire picture has deteriorated, removing one of the main brakes on escalation and nuclear signaling risk.');
  }

  if (roundedEscalation >= 75) {
    reasons.push('Conventional escalation is still high enough to keep deterrence signaling and miscalculation risk elevated.');
  } else if (roundedEscalation >= 50) {
    reasons.push('Regional escalation remains meaningfully elevated, so nuclear signaling risk stays active even without immediate use scenarios.');
  } else if (roundedEscalation <= 35) {
    reasons.push('Broader military pressure is lower than recent peaks, which is helping suppress immediate nuclear danger.');
  }

  const eventDrivers = (recentEvents || [])
    .filter((event) => ['warning', 'critical'].includes(event.severity))
    .slice(0, 2)
    .map((event) => event.text);

  if (eventDrivers.length > 0) {
    reasons.push(`Recent pressure points include ${eventDrivers.join(' and ').toLowerCase()}`);
  } else if (summary) {
    reasons.push(summary);
  }

  if (roundedIndex >= 61) {
    reasons.push('At this level, the main concern is brinkmanship, miscalculation, or strikes near strategic infrastructure rather than immediate large-scale nuclear exchange.');
  } else if (roundedIndex >= 41) {
    reasons.push('This level points to crisis conditions: real deterrence pressure exists, but the model still sees room for de-escalation.');
  } else {
    reasons.push('The current reading reflects persistent strategic tension, but not the kind of immediate trigger pattern associated with brinkmanship or extreme risk.');
  }

  return reasons.join(' ');
}

export default function TopBar({
  dayCount, warDay, speed, running, nuclearIndex,
  escalationLevel, summary, recentEvents, ceasefireStatus,
  lastUpdated, lastSyncedAt, simStart, onSpeedChange, onToggleRunning, onReset, onFullscreen,
}) {
  const [relativeNow, setRelativeNow] = useState(() => Date.now());
  const totalWarDay = (warDay || 39) + dayCount;
  const currentDate = getSimDate(dayCount, simStart);
  const syncLabel = useMemo(() => formatUtcSyncLabel(lastUpdated, lastSyncedAt), [lastUpdated, lastSyncedAt]);
  const relativeSyncText = useMemo(() => {
    if (!lastSyncedAt) return null;

    const syncedAt = new Date(lastSyncedAt);
    const syncedMs = syncedAt.getTime();
    if (!Number.isFinite(syncedMs)) return null;

    const diffMs = Math.max(0, relativeNow - syncedMs);
    const diffMinutes = Math.floor(diffMs / 60000);

    if (diffMinutes < 1) return 'just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) {
      const remMinutes = diffMinutes % 60;
      return remMinutes === 0 ? `${diffHours}h ago` : `${diffHours}h ${remMinutes}m ago`;
    }

    const diffDays = Math.floor(diffHours / 24);
    return diffDays === 1 ? '1d ago' : `${diffDays}d ago`;
  }, [lastSyncedAt, relativeNow]);

  const nextUpdateText = useMemo(() => {
    const nextUpdateMs = (Math.floor(relativeNow / UPDATE_CADENCE_MS) + 1) * UPDATE_CADENCE_MS;
    const remainingMs = Math.max(0, nextUpdateMs - relativeNow);
    const totalSeconds = Math.floor(remainingMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, [relativeNow]);
  const nuclearExplanation = useMemo(() => buildNuclearExplanation({
    nuclearIndex,
    escalationLevel,
    summary,
    recentEvents,
    ceasefireStatus,
  }), [nuclearIndex, escalationLevel, summary, recentEvents, ceasefireStatus]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRelativeNow(Date.now());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <div className="logo">
          <span className="logo-icon">&#x1F310;</span>
          <span className="logo-text">2026 IRAN WAR SIMULATION</span>
        </div>
        <div className="sim-date">
          <span className="date-value">{currentDate}</span>
        </div>
        <div className="sim-day sim-day-primary">
          <span className="day-label">WAR DAY</span>
          <span className="day-value">{totalWarDay}</span>
        </div>
        <div className="sim-day sim-day-secondary" style={{ opacity: 0.5 }}>
          <span className="day-label">SIM +</span>
          <span className="day-value" style={{ fontSize: 14 }}>{dayCount}</span>
        </div>
        <div className="sim-day sim-day-sync" style={{ opacity: 0.55 }}>
          <span className="day-label">LAST SYNC UTC</span>
          <span className="day-value" style={{ fontSize: 12 }}>
            {syncLabel}
            {relativeSyncText ? ` • ${relativeSyncText}` : ''}
          </span>
        </div>
        <div className="sim-day sim-day-next-update" style={{ opacity: 0.55 }}>
          <span className="day-label">NEXT UPDATE UTC</span>
          <span className="day-value" style={{ fontSize: 12 }}>{nextUpdateText}</span>
        </div>
      </div>

      <div className="top-bar-center">
        <NuclearIndex value={nuclearIndex} explanation={nuclearExplanation} />
      </div>

      <div className="top-bar-right">
        <div className="speed-controls">
          {speeds.map(s => (
            <button
              key={s}
              className={`speed-btn ${speed === s ? 'active' : ''}`}
              onClick={() => onSpeedChange(s)}
            >
              {s}x
            </button>
          ))}
        </div>

        <button className="ctrl-btn" onClick={onToggleRunning}>
          {running ? '⏸' : '▶'}
        </button>

        <button className="ctrl-btn" onClick={onReset} title="Reset">
          ↻
        </button>

        <button className="ctrl-btn" onClick={onFullscreen} title="Fullscreen">
          ⛶
        </button>
      </div>
    </div>
  );
}
