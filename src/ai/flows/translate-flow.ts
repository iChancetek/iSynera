
'use server';

/**
 * @fileOverview Server action for translating text using GPT-4o.
 * Accepts source text and a target language, returns the translation.
 */

import { ai, gpt4o } from '@/ai/genkit';
import { z } from 'genkit';

const TranslateInputSchema = z.object({
  text: z.string().describe('The text to translate.'),
  targetLanguage: z.string().describe('The target language name or code (e.g. "Spanish", "fr", "ja").'),
});
export type TranslateInput = z.infer<typeof TranslateInputSchema>;

const TranslateOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
  detectedSourceLanguage: z.string().optional().describe('The detected source language.'),
});
export type TranslateOutput = z.infer<typeof TranslateOutputSchema>;

const translateFlow = ai.defineFlow(
  {
    name: 'translateFlow',
    inputSchema: TranslateInputSchema,
    outputSchema: TranslateOutputSchema,
  },
  async (input) => {
    const { text: responseText } = await ai.generate({
      model: gpt4o,
      prompt: `You are a professional translator. Translate the following text into ${input.targetLanguage}. 
Return ONLY the translated text, nothing else. Do not add explanations or notes.

Text to translate:
${input.text}`,
    });

    return {
      translatedText: responseText.trim(),
    };
  }
);

/**
 * Translate text to a target language using GPT-4o.
 */
export async function translateText(input: TranslateInput): Promise<TranslateOutput> {
  return translateFlow(input);
}
