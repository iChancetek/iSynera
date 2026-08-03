
'use server';

/**
 * @fileOverview A flow for generating menu suggestions.
 * - suggestionFlow - A function that returns a suggestion based on a prompt.
 */

import { ai, gpt4o } from '@/ai/genkit';
import { z } from 'zod';

export const suggestionFlow = ai.defineFlow(
  {
    name: 'suggestionFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (prompt) => {
    const response = await ai.generate({
      model: gpt4o,
      prompt: prompt,
    });
    return response.text;
  }
);
