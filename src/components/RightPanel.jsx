import React, { useRef, useEffect } from 'react';

const SEVERITY_COLORS = {
  critical: '#ef4444',
  warning: '#eab308',
  stable: '#22c55e',
  info: '#3b82f6',
};

function extractGoogleArticleId(url) {
  const normalizedUrl = String(url || '').trim();
  const match = normalizedUrl.match(/news\.google\.com\/rss\/articles\/([^?/#]+)/i);
  return match?.[1] || null;
}

function buildGoogleArticlePageUrl(articleId) {
  if (!articleId) return null;
  return `https://news.google.com/articles/${articleId}?hl=en-US&gl=US&ceid=US:en`;
}

function isGoogleOwnedUrl(url) {
  const normalizedUrl = String(url || '').trim();
  if (!/^https?:\/\//i.test(normalizedUrl)) return false;

  try {
    const parsedUrl = new URL(normalizedUrl);
    const hostname = parsedUrl.hostname.toLowerCase();
    return hostname === 'news.google.com'
      || hostname === 'google.com'
      || hostname.endsWith('.google.com')
      || hostname.endsWith('.googleusercontent.com');
  } catch {
    return false;
  }
}

function getEventHref(event) {
  const sourceUrl = String(event?.sourceUrl || '').trim();
  if (!sourceUrl) return null;

  const googleArticleId = extractGoogleArticleId(sourceUrl);
  if (googleArticleId) {
    return buildGoogleArticlePageUrl(googleArticleId);
  }

  if (/^https?:\/\//i.test(sourceUrl)) {
    return sourceUrl;
  }

  return null;
}

function formatHostAsSourceLabel(url) {
  try {
    const hostname = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    const sourceMap = {
      'apnews.com': 'AP News',
      'theguardian.com': 'The Guardian',
      'nytimes.com': 'The New York Times',
      'npr.org': 'NPR',
      'usatoday.com': 'USA Today',
      'reuters.com': 'Reuters',
      'aljazeera.com': 'Al Jazeera',
      'bbc.com': 'BBC',
      'bbc.co.uk': 'BBC',
      'cnn.com': 'CNN',
    };
    return sourceMap[hostname] || hostname;
  } catch {
    return null;
  }
}

function getEventSourceLabel(event, href) {
  const currentSourceName = String(event?.sourceName || '').trim();
  if (currentSourceName && !/^google news rss$/i.test(currentSourceName)) {
    return currentSourceName;
  }

  if (href && !isGoogleOwnedUrl(href)) {
    return formatHostAsSourceLabel(href) || currentSourceName || null;
  }

  if (/^google news rss$/i.test(currentSourceName)) {
    return 'Google News';
  }

  return currentSourceName || null;
}

function EventItem({ event }) {
  const color = SEVERITY_COLORS[event.severity] || SEVERITY_COLORS.info;
  const href = getEventHref(event);
  const sourceLabel = getEventSourceLabel(event, href);
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
      {sourceLabel && (
        <div className="event-source-label">{sourceLabel}</div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className="event-item event-item-link"
        style={{ borderLeftColor: color }}
        href={href}
        target="_blank"
        rel="noreferrer"
        title={`Open source${sourceLabel ? `: ${sourceLabel}` : ''}`}
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
