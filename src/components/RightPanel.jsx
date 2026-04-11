import React, { useRef, useEffect } from 'react';

const SEVERITY_COLORS = {
  critical: '#ef4444',
  warning: '#eab308',
  stable: '#22c55e',
  info: '#3b82f6',
};

function EventItem({ event }) {
  const color = SEVERITY_COLORS[event.severity] || SEVERITY_COLORS.info;
  const content = (
    <>
      <div className="event-top-row">
        <span className="event-icon">{event.icon}</span>
        <span className="event-time" style={{ color: `${color}99` }}>{event.timestamp}</span>
        {event.isLatest && <span className="latest-badge">🔥 Latest</span>}
        <span className="event-severity-dot" style={{ background: color }} />
      </div>
      <div className="event-text">{event.text}</div>
      {event.actor !== 'Global' && event.actor !== 'System' && (
        <div className="event-actor" style={{ color: `${color}80` }}>{event.actor}</div>
      )}
      {event.sourceName && (
        <div className="event-source-label">{event.sourceName}</div>
      )}
    </>
  );

  if (event.sourceUrl) {
    return (
      <a
        className="event-item event-item-link"
        style={{ borderLeftColor: color }}
        href={event.sourceUrl}
        target="_blank"
        rel="noreferrer"
        title={`Open source${event.sourceName ? `: ${event.sourceName}` : ''}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="event-item" style={{ borderLeftColor: color }}>
      {content}
    </div>
  );
}

export default function RightPanel({ events, updateSequence }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [events]);

  return (
    <div className="right-panel">
      <div className="panel-header">
        <span className="panel-header-icon">📡</span>
        LIVE EVENT FEED
      </div>
      <div className="event-count">{events.length} events</div>
      <div className="event-list" ref={scrollRef}>
        {events.map(evt => (
          <EventItem
            key={evt.id}
            event={{
              ...evt,
              isLatest: evt.latestSinceUpdate !== undefined && ((updateSequence || 0) - evt.latestSinceUpdate) < 4,
            }}
          />
        ))}
        {events.length === 0 && (
          <div className="event-empty">Awaiting simulation start...</div>
        )}
      </div>
    </div>
  );
}
