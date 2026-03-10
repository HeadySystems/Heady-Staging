import { AgentBase } from './agent-base.js';

export class HeadyBuddy extends AgentBase {
  constructor() {
    super({
      name: 'HeadyBuddy',
      category: 'Assistant',
      mission: 'Browser-based assistant with context memory',
      persistent: true,
    });
  }

  async run(input) {
    // TODO: implement HeadyBuddy logic
    return { agent: this.name, input, result: '[stub] Not yet implemented' };
  }
}
