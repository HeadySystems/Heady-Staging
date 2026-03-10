import { AgentBase } from './agent-base.js';

export class HeadyCopilot extends AgentBase {
  constructor() {
    super({
      name: 'HeadyCopilot',
      category: 'Builder',
      mission: 'Pair programming assistance',
      persistent: true,
    });
  }

  async run(input) {
    // TODO: implement HeadyCopilot logic
    return { agent: this.name, input, result: '[stub] Not yet implemented' };
  }
}
