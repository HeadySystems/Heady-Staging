/**
 * 3D Spatial Vector Memory with Graph RAG
 * Organizes memories in octant-based spatial structure.
 */
export class VectorStore {
  #memories = [];
  #octants = new Map();

  async ingest({ content, embedding, tags = [], metadata = {} }) {
    const id = `mem-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const octant = this.#computeOctant(embedding);
    const memory = { id, content, embedding, tags, metadata, octant, ts: Date.now() };

    this.#memories.push(memory);
    if (!this.#octants.has(octant)) this.#octants.set(octant, []);
    this.#octants.get(octant).push(memory);

    return { id, octant };
  }

  async query({ embedding, limit = 10 }) {
    // Cosine similarity search
    const scored = this.#memories.map(m => ({
      ...m,
      score: this.#cosineSim(embedding, m.embedding),
    }));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, limit);
  }

  #cosineSim(a, b) {
    if (!a || !b || a.length !== b.length) return 0;
    let dot = 0, magA = 0, magB = 0;
    for (let i = 0; i < a.length; i++) {
      dot += a[i] * b[i];
      magA += a[i] ** 2;
      magB += b[i] ** 2;
    }
    return dot / (Math.sqrt(magA) * Math.sqrt(magB) || 1);
  }

  #computeOctant(embedding) {
    if (!embedding || embedding.length < 3) return '+++';
    return (embedding[0] >= 0 ? '+' : '-') +
           (embedding[1] >= 0 ? '+' : '-') +
           (embedding[2] >= 0 ? '+' : '-');
  }

  stats() {
    return {
      totalMemories: this.#memories.length,
      octants: this.#octants.size,
      oldestTs: this.#memories[0]?.ts || null,
      newestTs: this.#memories[this.#memories.length - 1]?.ts || null,
    };
  }
}
