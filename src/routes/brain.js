import { Router } from 'express';

export const brainRouter = Router();

/**
 * HeadyBrain reasoning endpoint
 * Endpoints:
 *   POST /api/brain/think — primary reasoning
 *   POST /api/brain/chain — chain-of-thought
 *   GET  /api/brain/status — brain status
 */

brainRouter.get('/', (_req, res) => {
  res.json({ service: 'brain', status: 'operational', ts: Date.now() });
});

brainRouter.get('/status', (_req, res) => {
  res.json({ service: 'brain', healthy: true, uptime: process.uptime() });
});
