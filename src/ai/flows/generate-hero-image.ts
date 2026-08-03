
'use server';

/**
 * @fileOverview A flow for generating a hero image using AI.
 *
 * - generateHeroImage - A function that generates a hero image.
 * - GenerateHeroImageOutput - The return type for the generateHeroImage function.
 */

import { ai } from '@/ai/genkit';
import { gptImage1 } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateHeroImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated hero image as a data URI.'),
});
export type GenerateHeroImageOutput = z.infer<typeof GenerateHeroImageOutputSchema>;

export async function generateHeroImage(): Promise<GenerateHeroImageOutput> {
  return generateHeroImageFlow();
}

const generateHeroImageFlow = ai.defineFlow(
  {
    name: 'generateHeroImageFlow',
    inputSchema: z.void(),
    outputSchema: GenerateHeroImageOutputSchema,
  },
  async () => {
    const response = await ai.generate({
      model: gptImage1,
      prompt: 'A sleek black humanoid robot standing against a clean white background. The robot is highly detailed, with smooth, reflective surfaces and subtle blue light accents. The style should be modern, minimalist, and photorealistic, conveying a sense of advanced technology and intelligence.',
    });

    // Hardened extraction: scan all message parts for a media URL
    let imageUrl = response.media?.url;
    
    if (!imageUrl) {
        imageUrl = response.message?.content?.find(part => part.media && part.media.url)?.media?.url;
    }

    if (!imageUrl) {
      console.error('Image generation failed. Full response:', JSON.stringify(response, null, 2));
      throw new Error(`Image generation failed or did not return a valid URL. finishReason: ${response.finishReason}, response: ${JSON.stringify(response)}`);
    }

    return { imageUrl };
  }
);
