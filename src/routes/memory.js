import { Router } from 'express';

export const memoryRouter = Router();

/**
 * 3D Spatial Vector Memory + Graph RAG
 * Endpoints:
 *   POST /api/memory/ingest — store memory
 *   POST /api/memory/query — semantic search
 *   GET  /api/memory/stats — memory stats
 */

memoryRouter.get('/', (_req, res) => {
  res.json({ service: 'memory', status: 'operational', ts: Date.now() });
});

memoryRouter.get('/status', (_req, res) => {
  res.json({ service: 'memory', healthy: true, uptime: process.uptime() });
});
