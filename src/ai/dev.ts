
import { config } from 'dotenv';
config();

import '@/ai/flows/website-query-rag.ts';
import '@/ai/flows/generate-hero-image.ts';
import '@/ai/flows/submit-contact-form.ts';
import '@/ai/flows/menuSuggestionFlow.ts';
import '@/ai/flows/openai-tts-flow.ts';
import '@/ai/flows/generate-ai-agent-image.ts';
import '@/ai/flows/whisper-stt-flow.ts';
import '@/ai/flows/translate-flow.ts';
