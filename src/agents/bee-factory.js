/**
 * HeadyBees — Dynamic Agent Worker Factory
 * Spawns ephemeral worker agents on demand, retires them when done.
 */
import { AgentBase } from './agent-base.js';

export class BeeFactory {
  #log;
  #bees = new Map();
  #counter = 0;

  constructor({ log }) {
    this.#log = log;
  }

  spawn({ mission, handler }) {
    const id = `bee-${++this.#counter}`;
    const bee = new EphemeralBee({ id, mission, handler });
    this.#bees.set(id, bee);
    this.#log.info({ id, mission }, '🐝 Bee spawned');
    return bee;
  }

  retire(id) {
    const bee = this.#bees.get(id);
    if (bee) {
      bee.status = 'retired';
      this.#bees.delete(id);
      this.#log.info({ id }, '🐝 Bee retired');
    }
  }

  list() {
    return Array.from(this.#bees.values()).map(b => b.health());
  }
}

class EphemeralBee extends AgentBase {
  #handler;

  constructor({ id, mission, handler }) {
    super({ name: id, category: 'Bee', mission, persistent: false });
    this.#handler = handler;
  }

  async run(input) {
    return this.#handler(input);
  }
}
