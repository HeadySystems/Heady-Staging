# 🧠 Heady — The Latent OS

> Self-aware, self-correcting intelligence infrastructure.
> 20 AI nodes · 12-stage pipeline · Monte Carlo validation · Sacred Geometry at every layer.

[![License](https://img.shields.io/badge/license-Proprietary-blue)]()
[![Node](https://img.shields.io/badge/node-20%2B-green)]()
[![MCP](https://img.shields.io/badge/MCP-v3.2_Orion-purple)]()

## Quick Start

```bash
git clone https://github.com/HeadyMe/Heady-8f71ffc8.git ~/Heady
cd ~/Heady
cp .env.example .env          # fill in API keys
npm install
node heady-manager.js          # http://localhost:3301
```

### Container

```bash
podman build -t heady:latest .
podman run -d -p 3301:3301 -v heady-data:/app/data heady:latest
```

## Architecture at a Glance

```
┌──────────────────────────────────────────────────────┐
│                    AI GATEWAY                         │
│          (Auth · Rate Limit · Router)                 │
└──────────┬───────────────────────────┬───────────────┘
           │                           │
     ┌─────▼─────┐             ┌───────▼───────┐
     │ HeadyBrain │────────────▶  HeadySoul    │
     │ (Reasoning)│             │ (Alignment)  │
     └─────┬─────┘             └───────┬───────┘
           │                           │
     ┌─────▼─────────────────────────▼──────┐
     │           HeadyBattle (QA Gate)       │
     │  HeadySims (Monte Carlo Validation)   │
     └──────────────┬───────────────────────┘
                    │
     ┌──────────────▼──────────────────────┐
     │         Arena Mode (A/B Eval)        │
     │   Winners auto-promoted to prod      │
     └──────────────┬──────────────────────┘
                    │
     ┌──────────────▼──────────────────────┐
     │         HeadyVinci (Learning)        │
     │     Pattern spotting & memory        │
     └─────────────────────────────────────┘
```

## Agent Roster

| Category | Agents |
|---|---|
| **Thinkers** | HeadyBrain, HeadySoul, HeadyVinci |
| **Builders** | HeadyCoder, HeadyCodex, HeadyCopilot, HeadyJules |
| **Validators** | HeadyPerplexity, HeadyGrok, HeadyBattle, HeadySims |
| **Creatives** | HeadyCreative, HeadyVinci Canvas |
| **Ops** | HeadyManager, HeadyConductor, HeadyLens, HeadyOps, HeadyMaintenance |
| **Assistant** | HeadyBuddy |

## Domains

| Domain | Purpose |
|---|---|
| headyme.com | Personal dashboard / Command Center |
| headysystems.com | Infrastructure hub |
| headyconnection.org | Nonprofit community |
| headymcp.com | MCP Protocol portal |
| headyio.com | Developer platform |
| headybuddy.org | Assistant hub |
| headybot.com | Automation |
| headyapi.com | Public API gateway |

## Tech Stack

- **Runtime**: Node.js 20 (Express)
- **Frontend**: React + Vite
- **Local AI**: Ollama
- **Cloud AI**: Gemini, Claude, GPT, Groq, Perplexity
- **Infra**: Cloudflare (DNS, Tunnels, Workers, KV, Pages, Access), GCP (Vertex AI, Cloud Run, Storage)
- **CI/CD**: GitHub Actions → Cloudflare Pages / Cloud Run

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Proprietary — HeadySystems Inc. & HeadyConnection Inc.
