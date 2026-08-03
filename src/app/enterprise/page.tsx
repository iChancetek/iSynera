import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CloudCog,
  FileText,
  GitFork,
  HeartPulse,
  Lightbulb,
  Megaphone,
  Music,
  ShieldCheck,
  Sparkles,
  Briefcase,
  Layers,
  Users,
  Mic2,
  BrainCircuit,
  BotMessageSquare,
  GraduationCap,
  ShoppingBag,
  Activity,
  Zap,
  LayoutGrid,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import VideoSection from '@/components/sections/VideoSection';
import { CarouselItem } from "@/components/ui/carousel";
import AiAgentsCarousel from '@/components/sections/AiAgentsCarousel';
import SocialWidget from '@/components/shared/SocialWidget';

export const metadata: Metadata = {
  title: 'Enterprise Solutions',
  description: "Discover ChanceTEK's enterprise-grade AI SaaS platforms powered by Agentic AI — built to accelerate innovation, boost productivity, and optimize operations.",
  alternates: { canonical: 'https://www.ChanceTEK.com/enterprise' },
  openGraph: {
    title: 'Enterprise Solutions | ChanceTEK',
    description: 'AI-native enterprise SaaS by ChanceTEK — iCareOS, StrideIQ, Famio & more. Built to accelerate innovation and optimize operations.',
    url: 'https://www.ChanceTEK.com/enterprise',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ChanceTEK Enterprise Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Solutions | ChanceTEK',
    description: 'AI-native enterprise SaaS platforms by ChanceTEK.',
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

const FeaturePill = ({ text, Icon }: { text: string; Icon: LucideIcon }) => (
  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg shadow-sm">
    <Icon className="h-6 w-6 text-primary flex-shrink-0" />
    <span className="font-medium text-foreground">{text}</span>
  </div>
);

const IndustryItem = ({ name, Icon }: { name: string; Icon: LucideIcon }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="bg-primary/10 p-4 rounded-full mb-3">
            <Icon className="h-8 w-8 text-primary" />
        </div>
        <p className="font-semibold text-foreground">{name}</p>
    </div>
);

export default function EnterprisePage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-background to-primary/5 pt-16 pb-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="block text-primary">Enterprise SaaS Solutions</span>
          <span className="block text-foreground">Powered by Agentic AI</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          ChanceTEK builds intelligent, scalable, and secure SaaS platforms that accelerate innovation, boost
          productivity, and optimize operations across industries.
        </p>
      </Section>
 
      <VideoSection videoSrc="/iCareOS.mp4" />
 
      <Section>
        <PageHeader title="Featured Platforms" />
        <div className="mt-16 max-w-7xl mx-auto px-12" id="featured-platforms">
          <AiAgentsCarousel>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="elitebooks"
                title="EliteBooks"
                description={"Accounting that runs itself.\n\nEliteBooks is an AI-powered financial operating system with autonomous agents handling invoicing, expenses, payroll, reporting, FinOps, and personal finances — all automated and clearly explained. Everything your business needs.\n\nFull QuickBooks-class accounting, supercharged with AI autonomy."}
                href="https://EliteBooks.us/"
                Icon={BarChart3}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="chancellorhr"
                title="ChancellorHR"
                description={"The Autonomous HR Workforce Operating System\n\nNine specialized AI agents working in concert to manage, optimize, and execute every HR operation — from hiring to retention — with minimal human intervention. Nine Agents. One HR Intelligence.\n\nEach agent specializes in an HR domain. Together, they form a unified workforce orchestration system."}
                href="https://chancellorhr.us/"
                Icon={Users}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="chancellor"
                title="Chancellor"
                description={"Chancellor — ChancellorOS ERP & CRM Platform\n\nA platform built for a new way of working.\n\nUnify your operations, automate your workflows, and scale with intelligence—all in one system.\n\nWhat would you like to manage with Chancellor Work OS?\n\nPowered by ChancellorOS"}
                href="https://chancellor--ichancellor.us-east4.hosted.app/"
                Icon={LayoutGrid}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="workspaceiq"
                title="WorkSpaceIQ"
                description="Power your thinking with WorkSpaceIQ. our AI Research & Dictation Partner. Dictate, research, and create. Upload any source, ask anything, and listen to an AI podcast of your own content — all in one place."
                href="https://workspaceiq.us/"
                Icon={BrainCircuit}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="icareos-premium"
                title="iCareOS Premium"
                description="Transform Healthcare with Intelligent AI. iCareOS Health revolutionizes medical documentation and workflow management with cutting-edge AI technology. Streamline patient intake, automate SOAP notes, and enhance clinical decision-making with HIPAA-compliant intelligence. https://iCareOS.us."
                href="https://iCareOS.us"
                Icon={HeartPulse}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="famio"
                title="Famio"
                description="AI Powered Social Media Platform"
                href="https://famio.us/"
                Icon={Users}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="icareos"
                title="iCareOS"
                description="iCareOS by ChanceTEK is an AI-native clinical operating system that automates documentation, analyzes medical images, orchestrates patient intake, optimizes billing, monitors clinical risk, and coordinates care through a network of agentic AI modules—delivering smarter workflows, faster insights, and safer healthcare."
                href="https://iCareOS.tech"
                Icon={HeartPulse}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="strideiq"
                title="StrideIQ"
                description="StrideIQ is a fitness and wellness app designed to help you track your running, walking, biking, hiking, mediation, intermittent fasting and journaling—all in one place."
                href="https://StrideIQ.fit/"
                Icon={Activity}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="modeliq"
                title="Model IQ"
                description="AI-powered solutions for building, training, and deploying machine learning models at scale."
                href="https://modelIQ.us"
                Icon={BrainCircuit}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="evolvable"
                title="eVolvable"
                description="AI Powered Vibe Coding-No Code Platform"
                href="https://eVolvable.us/"
                Icon={Zap}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="woundiq"
                title="WoundIQ"
                description="An AI-powered platform for intelligent wound analysis, measurement, and management - designed to enhance clinical decision-making and improve patient outcomes. Using advanced GenAI, it analyzes wound images to assist clinicians with accurate diagnoses and evidence-based treatment recommendations."
                href="https://WoundiQ.us"
                Icon={HeartPulse}
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
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="mediscribe"
                title="MediScribe"
                description="AI-powered medical transcription and documentation service to reduce administrative burden for clinicians."
                href="https://MediScribe.us"
                Icon={FileText}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="memoiq"
                title="MemoIQ"
                description="Capture, organize, and recall information effortlessly with an AI-powered personal knowledge base."
                href="https://memoIQ.us"
                Icon={Lightbulb}
              />
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 md:basis-1/2">
              <PlatformCard
                id="nestobanks"
                title="Nesto Banks"
                description="Nesto Banks is a digital e-commerce music platform that provides both downloadable and streaming content. The platform is designed to deliver a seamless user experience for music discovery, purchase, and playback. Secure transactions powered by the Stripe payment system, ensuring fast, reliable, and trusted payment processing."
                href="https://nestobanks.us"
                Icon={Music}
              />
            </CarouselItem>
          </AiAgentsCarousel>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <PageHeader title="Core Features" description="Our platforms are built on a foundation of cutting-edge technology designed for the modern enterprise." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <FeaturePill text="Enterprise-Grade Security & Compliance" Icon={ShieldCheck} />
            <FeaturePill text="Multi-Tenant Architecture" Icon={Building2} />
            <FeaturePill text="Scalable Cloud Infrastructure" Icon={CloudCog} />
            <FeaturePill text="Seamless Integrations" Icon={GitFork} />
            <FeaturePill text="Generative AI for Content & Workflow" Icon={Sparkles} />
            <FeaturePill text="Real-Time Analytics & Reporting" Icon={BarChart3} />
        </div>
      </Section>

      <Section>
        <PageHeader title="Industries We Serve" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto text-center">
          <IndustryItem name="Healthcare" Icon={HeartPulse} />
          <IndustryItem name="Marketing & Ads" Icon={Megaphone} />
          <IndustryItem name="SaaS/Tech" Icon={Layers} />
          <IndustryItem name="Enterprise Services" Icon={Briefcase} />
          <IndustryItem name="Human Resources" Icon={Users} />
          <IndustryItem name="Finance & Equity" Icon={BarChart3} />
        </div>
      </Section>

      <Section className="bg-primary/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Build the Future?</h2>
          <p className="text-muted-foreground mb-8">
            Whether you need a demo of our existing platforms or a strategic partner to build your next-generation enterprise solution, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
                <Link href="/contact?subject=SaaS Demo Request">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <Link href="#featured-platforms">Explore the Platforms</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link href="/contact?subject=Partnership Inquiry">Partner with Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
