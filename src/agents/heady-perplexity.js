import { AgentBase } from './agent-base.js';

export class HeadyPerplexity extends AgentBase {
  constructor() {
    super({
      name: 'HeadyPerplexity',
      category: 'Validator',
      mission: 'Web research and fact verification',
      persistent: true,
    });
  }

  async run(input) {
    // TODO: implement HeadyPerplexity logic
    return { agent: this.name, input, result: '[stub] Not yet implemented' };
  }
}
