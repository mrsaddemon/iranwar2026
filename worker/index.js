import { getTrackerSnapshot } from '../tracker/liveTracker.js';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'access-control-allow-origin': '*',
    },
  });
}

async function loadTrackerFallback(env, requestUrl) {
  try {
    const fallbackRequest = new Request(new URL('/tracker-fallback.json', requestUrl).toString());
    const response = await env.ASSETS.fetch(fallbackRequest);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/tracker/snapshot') {
      try {
        const wantsFlights = url.searchParams.get('air') === '1';
        const wantsShips = url.searchParams.get('sea') === '1';
        const snapshot = await getTrackerSnapshot(env, {
          fetchFlights: wantsFlights,
          fetchShips: wantsShips,
        });

        if (
          wantsFlights
          && (!Array.isArray(snapshot.flights) || snapshot.flights.length === 0)
          && String(snapshot?.sourceStatus?.flights || '').toLowerCase().includes('unavailable')
        ) {
          const fallback = await loadTrackerFallback(env, request.url);
          const fallbackFlights = Array.isArray(fallback?.flights) ? fallback.flights : [];
          if (fallbackFlights.length > 0) {
            return json({
              ...snapshot,
              flights: fallbackFlights,
              sourceStatus: {
                ...snapshot.sourceStatus,
                flights: `scheduled fallback (${fallbackFlights.length})`,
              },
              fallbackGeneratedAt: fallback.generatedAt || null,
            });
          }
        }

        return json(snapshot);
      } catch (error) {
        return json({ error: error?.message || 'Tracker request failed.' }, 500);
      }
    }

    const assetResponse = await env.ASSETS.fetch(request);
    const contentType = assetResponse.headers.get('content-type') || '';

    if (contentType.includes('text/html')) {
      const headers = new Headers(assetResponse.headers);
      headers.set('cache-control', 'no-store, no-cache, must-revalidate, max-age=0');
      headers.set('pragma', 'no-cache');
      headers.set('expires', '0');

      return new Response(assetResponse.body, {
        status: assetResponse.status,
        statusText: assetResponse.statusText,
        headers,
      });
    }

    return assetResponse;
  },
};
