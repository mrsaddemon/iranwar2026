import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { getTrackerSnapshot } from './tracker/liveTracker.js'

function trackerApiPlugin(env) {
  return {
    name: 'tracker-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/tracker/snapshot', async (req, res) => {
        try {
          const requestUrl = new URL(req.url || '/', 'http://localhost');
          const snapshot = await getTrackerSnapshot(env, {
            fetchFlights: requestUrl.searchParams.get('air') === '1',
            fetchShips: requestUrl.searchParams.get('sea') === '1',
          });
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.setHeader('Cache-Control', 'no-store');
          res.end(JSON.stringify(snapshot));
        } catch (error) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ error: error?.message || 'Tracker request failed.' }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), trackerApiPlugin(env)],
    base: './', // Relative paths for portable build
    server: { port: 3000 },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  }
})
