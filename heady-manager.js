#!/usr/bin/env node
/**
 * HeadyManager — Central orchestration entry point for the Heady Latent OS.
 * Routes requests, manages agent lifecycles, optimizes resource allocation.
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { createServer } from 'http';
import { pino } from 'pino';

import { healthRouter }       from './src/routes/health.js';
import { brainRouter }        from './src/routes/brain.js';
import { mcpRouter }          from './src/routes/mcp.js';
import { memoryRouter }       from './src/routes/memory.js';
import { agentRouter }        from './src/routes/agents.js';
import { gatewayRouter }      from './src/routes/gateway.js';
import { arenaRouter }        from './src/routes/arena.js';

import { AutoSuccessEngine }  from './src/core/auto-success-engine.js';
import { SoulGovernance }     from './src/core/soul-governance.js';
import { LiquidArchitecture } from './src/core/liquid-architecture.js';
import { CircuitBreaker }     from './src/core/circuit-breaker.js';
import { GracefulShutdown }   from './src/core/graceful-shutdown.js';

const log = pino({ level: process.env.LOG_LEVEL || 'info' });
const app = express();
const server = createServer(app);

// ── Middleware ──────────────────────────────────────────────
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use((req, _res, next) => { req.log = log; next(); });

// ── Routes ─────────────────────────────────────────────────
app.use('/health',   healthRouter);
app.use('/api/brain', brainRouter);
app.use('/api/mcp',   mcpRouter);
app.use('/api/memory', memoryRouter);
app.use('/api/agents', agentRouter);
app.use('/api/gateway', gatewayRouter);
app.use('/api/arena',  arenaRouter);

// ── Core subsystems ────────────────────────────────────────
const circuitBreaker     = new CircuitBreaker({ log });
const liquidArch         = new LiquidArchitecture({ log, circuitBreaker });
const soulGovernance     = new SoulGovernance({ log });
const autoSuccess        = new AutoSuccessEngine({ log, liquidArch, soulGovernance });

// ── Start ──────────────────────────────────────────────────
const PORT = process.env.PORT || 3301;

server.listen(PORT, () => {
  log.info({ port: PORT }, '🧠 HeadyManager online');
  if (process.env.ENABLE_AUTO_SUCCESS === 'true') autoSuccess.start();
});

// ── Graceful shutdown ──────────────────────────────────────
const shutdown = new GracefulShutdown({ log, server, subsystems: [autoSuccess, liquidArch] });
process.on('SIGTERM', () => shutdown.execute());
process.on('SIGINT',  () => shutdown.execute());
