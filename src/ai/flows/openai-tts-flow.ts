
'use server';

/**
 * @fileOverview A flow for generating speech from text using OpenAI's TTS model.
 * - textToSpeech - An async function that converts text to speech.
 * Supports voice selection — defaults to 'shimmer' for a calm, natural tone.
 */

import { ai, tts1 } from '@/ai/genkit';
import { z } from 'genkit';

// Define Zod schemas for input and output internally
const TextToSpeechInputSchema = z.object({
  text: z.string().describe('The text to convert to speech.'),
  voice: z.string().optional().describe('The voice to use. Options: alloy, echo, fable, onyx, nova, shimmer. Defaults to shimmer.'),
});
export type TextToSpeechInput = z.infer<typeof TextToSpeechInputSchema>;


const TextToSpeechOutputSchema = z.object({
  media: z.string().describe("The generated audio as a data URI (e.g., 'data:audio/wav;base64,...')."),
});
export type TextToSpeechOutput = z.infer<typeof TextToSpeechOutputSchema>;

// Define the flow internally, not exported
const textToSpeechFlow = ai.defineFlow(
  {
    name: 'textToSpeechFlow',
    inputSchema: TextToSpeechInputSchema,
    outputSchema: TextToSpeechOutputSchema,
  },
  async (input) => {
    const voice = (input.voice || 'shimmer') as "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
    const { media, finishReason } = await ai.generate({
        model: tts1,
        prompt: input.text,
        config: {
          voice,
        },
    });

    if (!media?.url || finishReason !== 'stop') {
      console.error('TTS generation failed. Finish reason:', finishReason);
      throw new Error(`Text-to-speech generation failed. Reason: ${finishReason}`);
    }
    
    return {
      media: media.url
    };
  }
);


// Export ONLY the async wrapper function
export async function textToSpeech(input: TextToSpeechInput): Promise<TextToSpeechOutput> {
    return textToSpeechFlow(input);
}
