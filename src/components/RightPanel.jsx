import React, { useRef, useEffect } from 'react';

const SEVERITY_COLORS = {
  critical: '#ef4444',
  warning: '#eab308',
  stable: '#22c55e',
  info: '#3b82f6',
};

function EventItem({ event }) {
  const color = SEVERITY_COLORS[event.severity] || SEVERITY_COLORS.info;

  return (
    <div className="event-item" style={{ borderLeftColor: color }}>
      <div className="event-top-row">
        <span className="event-icon">{event.icon}</span>
        <span className="event-time" style={{ color: `${color}99` }}>{event.timestamp}</span>
        <span className="event-severity-dot" style={{ background: color }} />
      </div>
      <div className="event-text">{event.text}</div>
      {event.actor !== 'Global' && event.actor !== 'System' && (
        <div className="event-actor" style={{ color: `${color}80` }}>{event.actor}</div>
      )}
    </div>
  );
}

export default function RightPanel({ events }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [events.length]);

  return (
    <div className="right-panel">
      <div className="panel-header">
        <span className="panel-header-icon">📡</span>
        LIVE EVENT FEED
      </div>
      <div className="event-count">{events.length} events</div>
      <div className="event-list" ref={scrollRef}>
        {events.map(evt => (
          <EventItem key={evt.id} event={evt} />
        ))}
        {events.length === 0 && (
          <div className="event-empty">Awaiting simulation start...</div>
        )}
      </div>
    </div>
  );
}
