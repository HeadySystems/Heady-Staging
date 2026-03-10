/**
 * MCP Tool Registry — Central catalog of all available tools.
 */

class ToolRegistry {
  #tools = new Map();

  register(name, schema, handler) {
    this.#tools.set(name, { name, schema, execute: handler });
  }

  get(name) {
    return this.#tools.get(name);
  }

  list() {
    return Array.from(this.#tools.values()).map(t => ({
      name: t.name,
      description: t.schema.description,
      inputSchema: t.schema.input,
    }));
  }
}

export const toolRegistry = new ToolRegistry();

// ── Register core tools ────────────────────────────────────
toolRegistry.register('heady_chat', {
  description: 'Send a message to HeadyBrain for reasoning',
  input: { type: 'object', properties: { message: { type: 'string' } }, required: ['message'] },
}, async ({ message }) => ({ response: `[stub] Brain response to: ${message}` }));

toolRegistry.register('heady_code', {
  description: 'Generate or review code via HeadyCodex',
  input: { type: 'object', properties: { prompt: { type: 'string' }, language: { type: 'string' } }, required: ['prompt'] },
}, async ({ prompt, language }) => ({ code: `[stub] Code for: ${prompt}`, language }));

toolRegistry.register('heady_search', {
  description: 'Web search via HeadyPerplexity',
  input: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] },
}, async ({ query }) => ({ results: `[stub] Search results for: ${query}` }));

toolRegistry.register('heady_memory_store', {
  description: 'Store a memory in 3D vector space',
  input: { type: 'object', properties: { content: { type: 'string' }, tags: { type: 'array', items: { type: 'string' } } }, required: ['content'] },
}, async ({ content, tags }) => ({ stored: true, tags }));

toolRegistry.register('heady_memory_query', {
  description: 'Query memories by semantic similarity',
  input: { type: 'object', properties: { query: { type: 'string' }, limit: { type: 'number' } }, required: ['query'] },
}, async ({ query, limit }) => ({ results: [], query, limit: limit || 10 }));

toolRegistry.register('heady_deploy', {
  description: 'Deploy to Cloudflare Pages or Cloud Run',
  input: { type: 'object', properties: { target: { type: 'string', enum: ['cloudflare', 'gcp'] }, service: { type: 'string' } }, required: ['target', 'service'] },
}, async ({ target, service }) => ({ deployed: false, target, service, message: '[stub] Deploy not yet wired' }));

toolRegistry.register('heady_embed', {
  description: 'Generate embeddings for text',
  input: { type: 'object', properties: { text: { type: 'string' }, model: { type: 'string' } }, required: ['text'] },
}, async ({ text }) => ({ embedding: [], dimensions: 1536, text_length: text.length }));

toolRegistry.register('heady_arena', {
  description: 'Start an Arena Mode competition between solutions',
  input: { type: 'object', properties: { solutions: { type: 'array', items: { type: 'string' } }, criteria: { type: 'string' } }, required: ['solutions'] },
}, async ({ solutions, criteria }) => ({ winner: null, solutions_count: solutions.length, criteria }));
