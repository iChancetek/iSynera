
'use server';

/**
 * @fileOverview Server action for speech-to-text using OpenAI Whisper.
 * Accepts audio as FormData, transcribes it, and returns the text.
 * Uses push-to-talk pattern: client records audio blob, sends it here.
 */

import OpenAI from 'openai';

let _openaiClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!_openaiClient) {
    _openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return _openaiClient;
}

/**
 * Transcribe audio using OpenAI Whisper.
 * @param formData - FormData containing an 'audio' file field.
 * @returns The transcribed text, or an empty string on failure.
 */
export async function transcribeAudio(formData: FormData): Promise<string> {
  try {
    const audioFile = formData.get('audio') as File;
    if (!audioFile) {
      console.error('whisper-stt-flow: No audio file found in FormData.');
      return '';
    }

    const openai = getOpenAIClient();
    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
    });

    return transcription.text || '';
  } catch (error) {
    console.error('whisper-stt-flow: Transcription failed:', error);
    return '';
  }
}
