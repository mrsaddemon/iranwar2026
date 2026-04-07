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

export default function TopBar({
  dayCount, warDay, speed, running, nuclearIndex,
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
        <NuclearIndex value={nuclearIndex} />
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
