# Contributing to Heady

Thank you for your interest in contributing to the Heady Latent OS!

## Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Install dependencies: `npm install`
4. Run tests: `npm test`

## Development Workflow

- Use `npm run dev` for hot-reloading development
- All changes must pass `npm test` and `npm run lint`
- Write tests for new features in `tests/`
- Follow the existing code patterns and naming conventions

## Agent Development

When adding a new agent:

1. Create a new file in `src/agents/` extending `AgentBase`
2. Register the agent in the agent roster
3. Add health probes
4. Define handoff contracts for upstream/downstream agents
5. Add tests

## MCP Tool Development

When adding a new MCP tool:

1. Register the tool in `src/mcp/tool-registry.js`
2. Define the input schema (JSON Schema)
3. Implement the handler
4. Add a test in `tests/mcp/`

## Commit Messages

Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`

## Code of Conduct

We follow the Heady values: fractal integrity, sacred geometry alignment, and maximizing global happiness.
