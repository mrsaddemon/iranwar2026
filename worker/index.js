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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/tracker/snapshot') {
      try {
        const snapshot = await getTrackerSnapshot(env, {
          fetchFlights: url.searchParams.get('air') === '1',
          fetchShips: url.searchParams.get('sea') === '1',
        });
        return json(snapshot);
      } catch (error) {
        return json({ error: error?.message || 'Tracker request failed.' }, 500);
      }
    }

    return env.ASSETS.fetch(request);
  },
};
