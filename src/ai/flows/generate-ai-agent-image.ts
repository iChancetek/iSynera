
'use server';

/**
 * @fileOverview A flow for generating an AI agent hero image using AI.
 *
 * - generateAiAgentImage - A function that generates an AI agent hero image.
 * - GenerateAiAgentImageOutput - The return type for the generateAiAgentImage function.
 */

import { ai } from '@/ai/genkit';
import { gptImage1 } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateAiAgentImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated hero image as a data URI.'),
});
export type GenerateAiAgentImageOutput = z.infer<typeof GenerateAiAgentImageOutputSchema>;

export async function generateAiAgentImage(): Promise<GenerateAiAgentImageOutput> {
  return generateAiAgentImageFlow();
}

const generateAiAgentImageFlow = ai.defineFlow(
  {
    name: 'generateAiAgentImageFlow',
    inputSchema: z.void(),
    outputSchema: GenerateAiAgentImageOutputSchema,
  },
  async () => {
    const response = await ai.generate({
      model: gptImage1,
      prompt: 'A photorealistic image of an advanced humanoid AI robot interacting with a futuristic, holographic interface. The setting is a clean, modern office environment with a sense of depth and soft lighting. The robot should look sleek and intelligent, made of white and silver materials with subtle blue light accents, conveying innovation and enterprise technology.',
    });

    // Hardened extraction: scan all message parts for a media URL
    let imageUrl = response.media?.url;
    
    if (!imageUrl) {
        imageUrl = response.message?.content?.find(part => part.media && part.media.url)?.media?.url;
    }

    if (!imageUrl) {
      console.error('AI Agent Image generation failed. Full response:', JSON.stringify(response, null, 2));
      throw new Error(`AI Agent Image generation failed or did not return a valid URL. finishReason: ${response.finishReason}, response: ${JSON.stringify(response)}`);
    }

    return { imageUrl };
  }
);
