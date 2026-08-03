
// src/ai/flows/website-query-rag.ts
'use server';

/**
 * @fileOverview An AI agent that answers questions about iSynera's services using RAG.
 *
 * - websiteQueryRAG - A function that handles the question answering process.
 * - WebsiteQueryRAGInput - The input type for the websiteQueryRAG function.
 * - WebsiteQueryRAGOutput - The return type for the websiteQueryRAG function.
 */

import {ai, gpt4o } from '@/ai/genkit';
import {z} from 'genkit';
import { companyInfo } from '@/lib/data'; // Import companyInfo
import { adminDb } from '@/lib/firebase-admin';

const WebsiteQueryRAGInputSchema = z.object({
  query: z.string().describe('The question to answer about iSynera services.'),
  userId: z.string().optional().describe('The ID of the user making the query.'),
  sessionId: z.string().optional().describe('The ID of the chat session.'),
});
export type WebsiteQueryRAGInput = z.infer<typeof WebsiteQueryRAGInputSchema>;

const WebsiteQueryRAGOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about iSynera services.'),
});
export type WebsiteQueryRAGOutput = z.infer<typeof WebsiteQueryRAGOutputSchema>;

export async function websiteQueryRAG(input: WebsiteQueryRAGInput): Promise<WebsiteQueryRAGOutput> {
  return websiteQueryRAGFlow(input);
}

const websiteQueryPrompt = ai.definePrompt({
  name: 'websiteQueryPrompt',
  input: {schema: WebsiteQueryRAGInputSchema},
  output: {schema: WebsiteQueryRAGOutputSchema},
  model: gpt4o,
  prompt: `You are an AI assistant for iSynera. Answer the following question about iSynera's services, its parent company iSynera, and related technologies using the context provided. When summarizing information, use bullet points (e.g., "- Point 1") for a professional and clear presentation. When a user asks where to find information, provide a direct link to the relevant page (e.g., /services, /about, /contact).

IMPORTANT: You MUST format your final response as a JSON object that adheres to the provided output schema.

Context:
- Company Name: ${companyInfo.name}
- Slogan: "${companyInfo.slogan}"
- Sub-Slogan: ${companyInfo.subSlogan}
- Mission: ${companyInfo.mission}
- Founded: ${companyInfo.founded} by ${companyInfo.founders}
- HQ: ${companyInfo.hqAddressLine1}, ${companyInfo.hqAddressLine2}
- Contact: Phone: ${companyInfo.phone}, Email: ${companyInfo.email}

- Available Pages:
  - Home: /
  - Enterprise Solutions: /enterprise
  - Services: /services (provides an overview of all services)
  - About Us: /about
  - Partners: /partnerships
  - Contact Us: /contact
  - Get Started: /get-started

- iSynera's AI Services and Platforms:
  - Executive AI Assistant: A 24/7 assistant that manages emails, schedules meetings, handles tasks, and can even place calls on your behalf.
  - AI SDR Agents (Sales Development Representatives): Automate your sales development pipeline. Qualify leads, nurture prospects, and schedule meetings—speeding up the sales process with minimal human involvement.
  - Voice AI Agents: Deliver advanced customer service through conversational voice agents that manage inbound and outbound calls with natural, human-like interactions.
  - RAG Agents (Retrieval-Augmented Generation): Deliver real-time, accurate answers by connecting LLMs to your company’s documents, policies, and internal knowledge—ensuring precise, confidential responses.
  - CAG Agents (Cache-Augmented Generation): Boost performance and reduce latency by enabling AI agents to quickly access previously retrieved answers from a secure and intelligent cache layer.
  - RAG Chatbots: Conversational chatbots powered by Retrieval-Augmented Generation that provide highly relevant answers sourced directly from your proprietary data in real time.
  - RAG AI Assistants: Task-specific AI assistants enhanced with RAG to perform context-aware actions and provide real-time insights from structured and unstructured internal data.
  - Agentic AI: Autonomous, goal-driven AI agents capable of planning, reasoning, and executing multi-step tasks across various systems with minimal human oversight.
  - LLM Fine-Tuning: Train and fine-tune large language models on your domain-specific data for optimized, custom-tailored AI experiences.
  - Generative AI: Enable powerful creative and productivity tools for content generation, ideation, code generation, and more.
  - AI SQL Agents: Ask business questions in plain English and receive real-time, accurate answers directly from your databases—no SQL knowledge required.
  - Workflow Automation: Automate and orchestrate business processes to eliminate bottlenecks, reduce errors, and boost team productivity.
  - iSynera AI Healthcare Platform: A secure, scalable platform built for the future of digital health. It includes iSynera Scribe (AI-assisted clinical documentation), patient tools, and a multi-tenant EHR infrastructure.
  - iSynera AI Marketing Platform: A complete AI-driven marketing suite for dynamic content generation, campaign automation, and real-time analytics.
  - RegPulse.AI: An AI-native regulatory intelligence platform for life sciences and biotech.
  - iSkylar: A Generative AI-powered Voice Therapist designed to offer support on mental wellness and stress management.
  - MediScribe: An intelligent, AI-powered medical transcription and documentation assistant.
  - Model IQ: An AI-powered system for building, training, and deploying machine learning models.

- iSynera Services (Parent Company):
  - Agentic AI Agents, AI Assistants (RAG, Chroma), Generative AI, DevOps, Data Engineering, Blockchain, Cloud Services (Azure, AWS, GCP), Web Development.

- Technology Stack Expertise:
  - IT Management: Microsoft 365, Azure, Google Cloud (GCP & Firebase Studio AI), AWS.
  - DevOps: Azure DevOps, Jenkins, Terraform, Docker, Kubernetes, GitHub, GitLab.
  - Data & ML: Azure Databricks, Azure Machine Learning, AWS SageMaker, etc.

Question: {{{query}}}`,
});

const websiteQueryRAGFlow = ai.defineFlow(
  {
    name: 'websiteQueryRAGFlow',
    inputSchema: WebsiteQueryRAGInputSchema,
    outputSchema: WebsiteQueryRAGOutputSchema,
  },
  async (input): Promise<WebsiteQueryRAGOutput> => {
    const result = await websiteQueryPrompt(input);
    const output = result.output;

    if (output) {
      return output;
    }
    
    // Fallback for malformed or missing output
    console.error('AI response missing or malformed output. Raw result:', JSON.stringify(result, null, 2));
    return { answer: "I'm sorry, I couldn't retrieve a valid answer at this time. Please try again later or rephrase your question." };
  }
);
