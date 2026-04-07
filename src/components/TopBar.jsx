import React from 'react';
import NuclearIndex from './NuclearIndex.jsx';

const speeds = [1, 5, 20];

// War started Feb 28, 2026. Simulation Day 0 = April 6, 2026 (War Day 37).
const WAR_START = new Date('2026-02-28');
const SIM_START = new Date('2026-04-06');

function getSimDate(dayCount) {
  const d = new Date(SIM_START);
  d.setDate(d.getDate() + dayCount);
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export default function TopBar({
  dayCount, warDay, speed, running, nuclearIndex,
  onSpeedChange, onToggleRunning, onReset, onFullscreen,
}) {
  const totalWarDay = (warDay || 37) + dayCount;
  const currentDate = getSimDate(dayCount);

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
