
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, BotMessageSquare, GraduationCap, Mic2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import AiAgentImage from '@/components/sections/AiAgentImage';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import VideoSection from '@/components/sections/VideoSection';
import {
  CarouselItem,
} from "@/components/ui/carousel";
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import SocialWidget from '@/components/shared/SocialWidget';

export const metadata: Metadata = {
  title: 'AI Agents',
  description: 'Deploy intelligent, action-taking AI agents that work like your best employee—solving problems, reducing handle time, and dramatically improving customer self-service.',
  alternates: { canonical: 'https://www.iSynera.com/ai-agents' },
  openGraph: {
    title: 'AI Agents | iSynera',
    description: 'Deploy intelligent, action-taking AI agents that work like your best employee—solving problems, reducing handle time, and dramatically improving customer self-service.',
    url: 'https://www.iSynera.com/ai-agents',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'iSynera AI Agents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents | iSynera',
    description: 'Deploy intelligent, action-taking AI agents with iSynera.',
    images: ['/og-image.png'],
  },
};

const PlatformCard = ({
  id,
  title,
  description,
  href,
  Icon,
}: {
  id: string;
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon;
}) => (
  <Card className="flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <CardHeader>
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="whitespace-pre-line line-clamp-4 text-sm md:text-base">{description}</CardDescription>
    </CardContent>
    <div className="p-6 pt-0">
      <Button asChild className="w-full group">
        <a href={href} target="_blank" rel="noopener noreferrer">
          Explore Platform <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </div>
    <div className="px-6 pb-6 mt-auto">
      <SocialWidget topicId={id} />
    </div>
  </Card>
);

const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
        <span>{children}</span>
    </li>
);

export default function AiAgentsPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-background to-primary/5 pt-16 pb-24 text-center">
        <p className="text-2xl font-bold text-primary mb-4">
            ✨ iSynera — Enterprise AI That Works Like Your Best Employee
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
          Better Customer Experiences. Built on iSynera.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          iSynera helps businesses deliver customer experiences that feel more human, more intelligent, and more effortless. Your iSynera AI Agent doesn’t just answer questions—it takes action to solve problems, reduce handle time, and dramatically improve self-service resolution.
        </p>
      </Section>

      <VideoSection videoSrc="/iSkylar.MP4" />
      
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
             <Suspense fallback={<Skeleton className="w-full aspect-video rounded-xl" />}>
                <AiAgentImage />
             </Suspense>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">💡 The iSynera AI Agent</h2>
            <h3 className="text-2xl font-semibold text-foreground">Your Intelligent, Action-Taking Digital Workforce</h3>
            
            <div className="space-y-4 text-muted-foreground">
                <p>
                    AI Agents are becoming the centerpiece of modern businesses—more critical than websites, apps, or static digital content. A website can only show information. An AI Agent can guide, recommend, respond, automate, learn, and personalize every experience.
                </p>
                <p className="font-semibold text-foreground">
                    Companies that deploy intelligent AI Agents gain a powerful advantage:
                </p>

              <h4 className="text-lg font-semibold text-foreground">Your Expertise, Amplified</h4>
              <p>
                Equip your agent with your business knowledge—policies, workflows, guidelines, and brand voice—so it thinks, communicates, and acts exactly the way your organization needs.
              </p>
              
              <h4 className="text-lg font-semibold text-foreground">Instant, Intelligent Action</h4>
              <p>
                Connect iSynera to your systems of record—CRM, order management, billing, reservations, and more. Your agent can instantly:
              </p>
              <ul className="space-y-2">
                <FeatureListItem>Process exchanges</FeatureListItem>
                <FeatureListItem>Update subscriptions</FeatureListItem>
                <FeatureListItem>Modify reservations</FeatureListItem>
                <FeatureListItem>Retrieve account details</FeatureListItem>
                <FeatureListItem>Execute multi-step workflows</FeatureListItem>
              </ul>
              <p>All securely. All autonomously.</p>

              <h4 className="text-lg font-semibold text-foreground">Empowered Human Teams</h4>
              <p>
                When issues require human attention, iSynera gathers all essential details, summarizes the conversation, and hands it off cleanly—so your support team is fully informed and ready to jump in.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
          <PageHeader
            title="🚀 Transform Every Customer Interaction"
            description="Anytime. Any Channel. Any Language."
          />
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Engage & Delight</h3>
                  <p className="text-muted-foreground">Deploy an AI agent that is always available and always on-brand—empathetic, accurate, and aligned with your voice.</p>
              </div>
               <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Real-Time Support</h3>
                  <p className="text-muted-foreground">Whether customers need to change an order, manage a subscription, or navigate multi-step processes, iSynera handles it instantly.</p>
              </div>
               <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Adapts. Learns. Improves.</h3>
                  <p className="text-muted-foreground">With built-in analytics, your AI agent continuously improves—uncovering insights that elevate customer experience.</p>
              </div>
          </div>
      </Section>
      
      <Section>
        <PageHeader title="Featured AI Agent Platforms" />
        <div className="mt-16 max-w-7xl mx-auto px-12">
          <AiAgentsCarousel>
              <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
                <PlatformCard
                    id="workspaceiq-ai"
                    title="WorkSpaceIQ"
                    description="Power your thinking with WorkSpaceIQ. our AI Research & Dictation Partner. Dictate, research, and create. Upload any source, ask anything, and listen to an AI podcast of your own content — all in one place."
                    href="https://workspaceiq.us/"
                    Icon={BotMessageSquare}
                />
              </CarouselItem>
              <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
                <PlatformCard
                    id="isydney"
                    title="ISydney - The Study Companion"
                    description="The Official Intelligent Chatbot for Howard University Students. iSydney is your smart study companion, an AI-powered voice assistant built to support, guide, and empower students throughout their academic journey. She provides instant answers on university resources, helps with course registration, and offers personalized study support to keep students on track."
                    href="https://iSydney.us"
                    Icon={GraduationCap}
                />
              </CarouselItem>
              <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
                <PlatformCard
                    id="ihailey"
                    title="iHailey - The Everyday Chatbot"
                    description="iHailey is a Retrieval-Augmented Generation (RAG) AI Chatbot that combines advanced language understanding with real-time access to relevant data from connected knowledge sources. Designed for both students and businesses, iHailey offers intelligent, context-aware support for research, productivity, customer interaction, and decision-making. It’s the perfect companion for homework help, team collaboration, and enterprise efficiency."
                    href="https://iHailey.us"
                    Icon={BotMessageSquare}
                />
              </CarouselItem>
              <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
                <PlatformCard
                    id="iskylar"
                    title="iSkylar, Your Friendly AI Therapist"
                    description="iSkylar is your AI Voice Therapist — calm, compassionate, and always ready to listen. Powered by Generative AI, she offers mindful guidance on self-care, emotional balance, and healthy living. Experience natural, soothing conversations designed to help you become the best version of yourself."
                    href="https://iSkylar.us"
                    Icon={Mic2}
                />
              </CarouselItem>
          </AiAgentsCarousel>
        </div>
      </Section>

      <Section className="bg-primary/10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">🏢 iSynera — Building the Future of Enterprise AI</h2>
          <p className="text-muted-foreground mb-6">
            iSynera designs next-generation enterprise software powered by Generative AI and Agentic AI for organizations across every major industry. Our technology integrates the best of the GenAI ecosystem: Google Gemini, OpenAI, Anthropic, Llama, DeepSeek, Hugging Face, and leading open-source models.
          </p>
          <p className="font-semibold text-foreground mb-4">We specialize in:</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-muted-foreground mb-8">
              <span>Custom AI Agents</span>
              <span>AI-driven Web Applications</span>
              <span>Intelligent Automation</span>
              <span>Enterprise SaaS Platforms</span>
              <span>Multi-Agent GenAI Workflows</span>
              <span>RAG & LLM Fine-Tuning</span>
          </div>
           <p className="text-lg text-foreground">
            By combining advanced LLMs, RAG architectures, action-taking AI, and intelligent automation, iSynera helps businesses scale, reduce costs, streamline operations, and unlock new levels of innovation.
          </p>
        </div>
      </Section>
    </>
  );
}
