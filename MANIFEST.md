# HeadyMe Repo-Derived Skill Suite

**Source**: HeadyMe/Heady (Heady Latent OS) v3.2.0 Orion
**Generated**: 2026-03-10
**Skills**: 16

## Skill Index

| # | Skill ID | Description | Priority | Source File |
|---|---|---|---|---|
| 1 | heady-bee-agent-factory | Dynamic Agent Worker Factory | 🔴 High | `src/agents/bee-factory.js` |
| 2 | phi-exponential-backoff | Golden Ratio Exponential Backoff | 🔴 High | `src/core/circuit-breaker.js` |
| 3 | circuit-breaker-resilience | Multi-Service Circuit Breaker | 🔴 High | `src/core/circuit-breaker.js` |
| 4 | self-awareness-telemetry | Self-Awareness Telemetry Loop | 🔴 High | `src/core/auto-success-engine.js` |
| 5 | vector-memory-graph-rag | 3D Spatial Vector Memory + Graph RAG | 🔴 High | `src/memory/vector-store.js` |
| 6 | multi-stage-pipeline | 12-Stage Pipeline Orchestration | 🔴 High | `heady-manager.js` |
| 7 | buddy-watchdog | AI Hallucination Detection | 🟡 Medium | `src/agents/heady-buddy.js` |
| 8 | mcp-protocol-integration | Model Context Protocol (MCP) | 🔴 High | `src/mcp/server.js` |
| 9 | swarm-consensus | Swarm Consensus Intelligence | 🟡 Medium | `src/agents/bee-factory.js` |
| 10 | cloud-deployment | Multi-Platform Cloud Deploy | 🔴 High | `deploy/`, `.github/workflows/` |
| 11 | health-monitoring-probes | Kubernetes Health Probes | 🔴 High | `src/routes/health.js` |
| 12 | graceful-shutdown-lifecycle | Graceful Shutdown (LIFO) | 🔴 High | `src/core/graceful-shutdown.js` |
| 13 | documentation-generation | Automated Documentation | 🟡 Medium | `docs/` |
| 14 | security-governance | Security & Governance | 🔴 High | `src/core/soul-governance.js` |
| 15 | monte-carlo-simulation | Monte Carlo Simulation Engine | 🟡 Medium | `src/agents/heady-sims.js` |
| 16 | autonomous-projection | Autonomous Monorepo Projection | 🔴 High | `scripts/` |

## Wiring Verification

All skills map to concrete source files. The `heady-manager.js` entry point
imports and wires: routes → core subsystems → providers → agents.
