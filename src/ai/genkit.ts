
import { genkit, Genkit, modelRef } from 'genkit';
import { openAI } from 'genkitx-openai';
import { gpt4o, tts1 } from 'genkitx-openai';

let _ai: Genkit | null = null;

// Lazy initialization of Genkit to prevent Node.js v24 module-level crashes during SSR
const getAi = () => {
  if (!_ai) {
    _ai = genkit({
      plugins: [
        openAI({
          apiKey: process.env.OPENAI_API_KEY,
        }),
      ],
    });
  }
  return _ai;
};

// Model references for the new image models
export const gptImage1 = modelRef('openai/gpt-image-1' as any);
export const gptImage1Mini = modelRef('openai/gpt-image-1-mini' as any);

// Use a Proxy to delegate all Genkit methods/properties to the lazy-loaded instance
export const ai = new Proxy({} as Genkit, {
  get(_, prop) {
    const instance = getAi();
    const value = (instance as any)[prop];
    if (typeof value === 'function') {
      return value.bind(instance);
    }
    return value;
  },
  apply(target, thisArg, argumentsList) {
    const instance = getAi();
    return (instance as any).apply(thisArg, argumentsList);
  }
});

export { gpt4o, tts1 };
