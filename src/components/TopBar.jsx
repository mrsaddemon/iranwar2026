import React from 'react';
import NuclearIndex from './NuclearIndex.jsx';

const speeds = [1, 5, 20];
function getSimDate(dayCount, simStart) {
  const d = new Date(simStart || '2026-04-07');
  d.setDate(d.getDate() + dayCount);
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export default function TopBar({
  dayCount, warDay, speed, running, nuclearIndex,
  lastUpdated, simStart, onSpeedChange, onToggleRunning, onReset, onFullscreen,
}) {
  const totalWarDay = (warDay || 38) + dayCount;
  const currentDate = getSimDate(dayCount, simStart);

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
        <div className="sim-day">
          <span className="day-label">WAR DAY</span>
          <span className="day-value">{totalWarDay}</span>
        </div>
        <div className="sim-day" style={{ opacity: 0.5 }}>
          <span className="day-label">SIM +</span>
          <span className="day-value" style={{ fontSize: 14 }}>{dayCount}</span>
        </div>
        <div className="sim-day" style={{ opacity: 0.55 }}>
          <span className="day-label">LAST SYNC</span>
          <span className="day-value" style={{ fontSize: 12 }}>{lastUpdated || 'N/A'}</span>
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
