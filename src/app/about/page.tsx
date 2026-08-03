'use client';

import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle,
  Building,
  Briefcase,
  Target as TargetIcon, 
  Phone,
  BotMessageSquare,
  Wand2,
  BrainCircuit,
  SlidersHorizontal,
  Sparkle,
  Database,
  Workflow,
  ShieldCheck,
  Zap,
  Cpu,
  Globe,
  Activity
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const productIconMapping: { [key: string]: LucideIcon } = {
  'Agentic AI Agents': BrainCircuit,
  'Voice AI Agents': Phone,
  'Executive AI Assistant': Briefcase,
  'AI SDR Agents': TargetIcon,
  'RAG AI Assistants & Chatbots': BotMessageSquare,
  'CAG Agents': Sparkle,
  'Generative AI Tools': Sparkle,
  'LLM Fine-Tuning': SlidersHorizontal,
  'AI SQL Agents': Database,
  'Workflow Automation': Workflow,
};

const ServiceProductCard = ({
  title,
  subtitle,
  features,
  benefits,
  useCases,
  iconName,
}: {
  title: string;
  subtitle: string;
  features?: string[];
  benefits: string;
  useCases: string;
  iconName: string;
}) => {
  const IconComponent = productIconMapping[iconName] || Wand2;
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-md mt-1">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {subtitle && <CardDescription className="text-sm mt-1">{subtitle}</CardDescription>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        {features && features.length > 0 && (
          <ul className="space-y-1 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-primary mr-1 mt-px flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-start text-sm">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-px flex-shrink-0" />
          <p className="text-foreground">{benefits}</p>
        </div>
        <p className="text-xs text-muted-foreground pt-2 border-t border-dashed">
          <strong>Use Cases:</strong> {useCases}
        </p>
      </CardContent>
    </Card>
  );
};

const TechStackCategory = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const InnovationPillar = ({ title, text, icon: Icon }: { title: string, text: string, icon: LucideIcon }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-background/40 backdrop-blur-sm border border-primary/10 p-6 rounded-2xl shadow-sm"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-primary text-primary-foreground p-2 rounded-lg">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-foreground text-lg">{title}</h3>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
  </motion.div>
);

export default function AboutPage() {
  return (
    <>
      <Section>
        <PageHeader
          title="About Us"
          description="Intelligence, Engineered for Impact"
        />
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-center">
          <p>
            ChanceTEK is a trusted AI partner delivering AI-Native, Agentic AI applications and platforms that transform business operations, amplify productivity, and elevate strategic decision-making. Our solutions are designed to reason, adapt, and execute—bringing intelligence to every layer of the enterprise and turning data into action.
          </p>
          <p>
            As part of ChanceTEK LLC, a technology pioneer with over 25 years of innovation, we combine deep enterprise expertise with cutting-edge AI technologies—including Multimodal Intelligence, Large Reasoning Models (LRMs), Large Language Models (LLMs), and Small Language Models (SLMs). Leveraging RAG-driven architectures, precision fine-tuning, advanced Context Engineering, and next-generation Vibe Coding, we deliver AI that is highly accurate, context-aware, and optimized for real-world impact.
          </p>
          <p>
            Founded by Chancellor Minus, ChanceTEK is committed to making AI practical, powerful, and seamlessly integrated into modern workflows—turning intelligent systems into trusted digital coworkers that actively drive results.
          </p>
          <p>
            Headquartered in New York City, we partner with forward-thinking organizations to deploy secure, scalable AI applications and platforms—designed not just for today, but built for the future of enterprise intelligence.
          </p>
        </div>
      </Section>

      <Section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-6 uppercase">
                Built for <span className="text-primary italic">What’s Next</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
                We create full-native, agentic AI systems where autonomous agents think, reason, and execute with absolute precision.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InnovationPillar 
              icon={BrainCircuit}
              title="Agentic Intelligence"
              text="Powered by multimodal AI and Large Reasoning Models (LRMs), our agents don't just generate text—they think, plan, and execute multi-step workflows."
            />
            <InnovationPillar 
              icon={Globe}
              title="Hybrid Operations"
              text="Combining RAG-driven intelligence with edge + physical AI to deliver real-time, context-aware action across digital and physical environments."
            />
            <InnovationPillar 
              icon={ShieldCheck}
              title="Sovereign Security"
              text="Enterprise-grade security at the core. Our platforms ensure your intelligence remains private, secure, and fully under your control."
            />
            <InnovationPillar 
              icon={Zap}
              title="Vibe Coding"
              text="Accelerating innovation through vibe coding and repository intelligence, enabling rapid system development that scales with your growth."
            />
            <InnovationPillar 
              icon={Activity}
              title="GEO Layering"
              text="Generative Engine Optimization (GEO) ensures your AI outputs remain visible, relevant, and impactful in an AI-first world."
            />
            <InnovationPillar 
              icon={Cpu}
              title="Autonomous Action"
              text="This is AI that doesn’t just generate—it operates. We build systems that take action to solve problems and drive real-world results."
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16 p-8 md:p-12 bg-primary text-primary-foreground rounded-3xl text-center shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl md:text-4xl font-bold mb-4">The ChanceTEK Standard</h3>
            <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto">
              We don’t follow trends—we define standards. No AI washing. No slop. No noise. Just intelligent systems built to perform.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <PageHeader title="Our Mission" />
        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed text-center">
          <p className="text-xl text-foreground">
            To empower individuals and enterprises with intelligent AI-driven systems that simplify complexity, automate workflows, and drive productivity—through solutions that think, learn, and act with purpose.
          </p>
          <p>
            We don’t just integrate AI—we deliver applied intelligence, deeply aligned to your goals, your data, and your industry.
          </p>
        </div>
      </Section>
      
      <Section className="bg-muted/30">
        <PageHeader title="Propelled by a Brilliant Engine of Innovation" />
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <p className="text-muted-foreground leading-relaxed">
            Backed by the deep technology heritage of ChanceTEK LLC, ChanceTEK combines over two decades of enterprise success with a modern vision of AI. Our goal: to deliver practical, powerful AI solutions that make businesses faster, smarter, and more resilient.
          </p>
          
          <div className="max-w-2xl mx-auto p-8 bg-primary/5 border border-primary/10 rounded-2xl shadow-sm">
            <p className="text-primary font-medium text-lg leading-relaxed italic">
              "ChanceTEK develops all of its applications and platforms using Progressive Web App (PWA) technology, delivering reliable performance, cross-device accessibility, and a seamless, app-like user experience."
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <PageHeader title="Our Intelligent AI Solution Products" description="Our platform includes a growing suite of AI products built to scale intelligence, automate operations, and transform business outcomes." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceProductCard
            iconName="Agentic AI Agents"
            title="Agentic AI Agents"
            subtitle="Autonomous, Goal-Oriented Intelligence"
            features={[
              "Autonomy: Self-directed action and decision-making", 
              "Proactivity: Anticipates needs and responds dynamically", 
              "Adaptability: Learns from data and outcomes to improve"
            ]}
            benefits="Boost productivity by offloading complex, repetitive workflows to intelligent agents."
            useCases="Healthcare diagnostics, logistics, financial trading, process automation"
          />
          <ServiceProductCard
            iconName="Voice AI Agents"
            title="Voice AI Agents"
            subtitle="Real-Time, Conversational AI at Scale"
            features={[
              "Conversational Intelligence: Understands and responds with human-like clarity",
              "Instant Reaction: Handles calls and commands in real time",
              "Frictionless Access: Enables voice-first workflows and interfaces"
            ]}
            benefits="Increase operational efficiency and enhance customer experience through voice automation."
            useCases="Customer service, voice search, smart devices, healthcare check-ins"
          />
          <ServiceProductCard
            iconName="Executive AI Assistant"
            title="Executive AI Assistant"
            subtitle="Your Intelligent, 24/7 Chief of Staff"
            benefits="Manages emails, schedules meetings, and handles admin tasks—so you can focus on high-impact decisions."
            useCases="Email management, calendar scheduling, task delegation, information retrieval"
          />
          <ServiceProductCard
            iconName="AI SDR Agents"
            title="AI SDR Agents"
            subtitle="Automated Sales Development"
            benefits="Qualify leads, nurture prospects, and book meetings—streamlining your pipeline and accelerating revenue."
            useCases="Lead qualification, automated outreach, meeting scheduling, CRM updates"
          />
          <ServiceProductCard
            iconName="RAG AI Assistants & Chatbots"
            title="RAG AI Assistants & Chatbots"
            subtitle="Insightful, Context-Aware Interactions"
            benefits="Pull real-time answers from internal knowledge sources to support fast, relevant conversations with employees and customers."
            useCases="Internal knowledge base querying, customer support chatbots, HR policy assistants"
          />
          <ServiceProductCard
            iconName="CAG Agents"
            title="CAG Agents"
            subtitle="Speed Meets Intelligence"
            benefits="Deliver instant responses via intelligent cache—ideal for FAQs, customer support, and internal knowledge access."
            useCases="High-volume FAQ handling, instant customer support, rapid information retrieval"
          />
          <ServiceProductCard
            iconName="Generative AI Tools"
            title="Generative AI Tools"
            subtitle="Creativity Amplified"
            benefits="Generate marketing copy, content, or production-ready code to accelerate ideation and output."
            useCases="Content creation, marketing campaigns, code generation, design assistance"
          />
          <ServiceProductCard
            iconName="LLM Fine-Tuning"
            title="LLM Fine-Tuning"
            subtitle="Custom Intelligence"
            benefits="Tailor large language models to your business, data, and terminology for greater relevance and precision."
            useCases="Domain-specific chatbots, custom content generation, specialized data analysis"
          />
           <ServiceProductCard
            iconName="AI SQL Agents"
            title="AI SQL Agents"
            subtitle="Ask in Plain English. Get Answers from Data."
            benefits="Enable business users to query structured databases using natural language—no SQL required."
            useCases="Business intelligence queries, data exploration for non-technical users, report generation"
          />
           <ServiceProductCard
            iconName="Workflow Automation"
            title="Workflow Automation"
            subtitle="Automate End-to-End Processes"
            benefits="Design intelligent workflows that connect tools, eliminate friction, and reduce manual errors."
            useCases="Process automation, data entry, system integrations, approval workflows"
          />
        </div>
      </Section>

      <Section className="bg-muted/30">
        <PageHeader title="LLM Expertise" description="Leading Proprietary Frontier and Open-Weight Models" />
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-muted-foreground leading-relaxed text-center">
            ChanceTEK specializes in leveraging the world's most advanced large language models (LLMs). We maintain deep expertise across both proprietary frontier systems and high-performance open-weight models to ensure every solution is built on the optimal engine for its specific requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Proprietary "Frontier" Models
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground block">OpenAI GPT-5.4 / GPT-5.4 Pro (March 2026)</strong>
                  Unifies general-purpose capabilities with coding and offers native computer use. Features configurable reasoning effort.
                </li>
                <li>
                  <strong className="text-foreground block">Anthropic Claude 4.6 (Opus/Sonnet) (Feb/Mar 2026)</strong>
                  Renowned for reasoning and coding with adaptive "thinking" modes. Claude Sonnet 4.6 is a top-tier AI coding model.
                </li>
                <li>
                  <strong className="text-foreground block">Google Gemini 3.1 Pro/Flash (Feb 2026)</strong>
                  Features context windows up to 1M+ tokens and multimodal capabilities (text, image, audio, video) with strong agentic performance.
                </li>
                <li>
                  <strong className="text-foreground block">xAI Grok 4.1 (Nov 2025)</strong>
                  Known for real-time integration with X (formerly Twitter) and high-performance reasoning capabilities.
                </li>
                <li>
                  <strong className="text-foreground block">Amazon Nova (2 Pro/Lite/Omni)</strong>
                  Competitive frontier models optimized for performance and reliability within the AWS ecosystem.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                <Zap className="h-5 w-5" /> Open-Weight / Open-Source Models
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground block">DeepSeek-V3.2 / R1 (Jan-Mar 2025)</strong>
                  Offers reasoning capabilities comparable to proprietary models, released under the MIT license for maximum flexibility.
                </li>
                <li>
                  <strong className="text-foreground block">Meta Llama 4 (Scout/Maverick) (April 2025)</strong>
                  Leading open-weight family using MoE structure. Llama 4 Scout features a massive 10M token context window.
                </li>
                <li>
                  <strong className="text-foreground block">Alibaba Qwen3 / Qwen 2.5-Max (April 2025)</strong>
                  Top-tier open models excelling in multilingual tasks, mathematics, and advanced coding.
                </li>
                <li>
                  <strong className="text-foreground block">Mistral Large 3 / Mixtral 8x22B</strong>
                  European models known for efficiency and Mixture-of-Experts (MoE) architectures with permissive licensing.
                </li>
                <li>
                  <strong className="text-foreground block">Microsoft Phi-4 (3.8B/14B)</strong>
                  State-of-the-art Small Language Models (SLMs) designed for high performance on resource-constrained devices.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed text-center pt-4 border-t">
            By combining proprietary and open-source technologies, ChanceTEK delivers tailored LLM solutions—from secure enterprise chatbots to fine-tuned domain-specific models—empowering businesses with state-of-the-art natural language processing.
          </p>
        </div>
      </Section>

      <Section>
        <PageHeader title="Our Technology Stack" description="We work with today’s most advanced AI frameworks, vector databases, and automation tools to ensure high performance, flexibility, and real-world reliability:" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <TechStackCategory title="AI & Agent Frameworks" items={["OpenAI", "OpenAI Agents SDK", "LangChain", "LangGraph", "LangSmith", "CrewAI", "Flowise AI"]} />
          <TechStackCategory title="Voice & Communication Tools" items={["Twilio", "VAPI", "11elevenlabs"]} />
          <TechStackCategory title="Vector Search & Retrieval" items={["Pinecone", "ChromaDB", "Supabase"]} />
          <TechStackCategory title="Automation & Integration" items={["Google Firebase Studio", "Zapier", "Make.com", "N8N", "Windsurf", "Airtable"]} />
        </div>
      </Section>

      <Section className="bg-muted/30">
        <PageHeader title="Our Location" />
        <div className="max-w-xs mx-auto">
          <Card>
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Headquarters</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>447 Broadway, Suite 1110</p>
              <p>New York, NY 10013</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <PageHeader title="Why Choose ChanceTEK?" />
        <div className="max-w-2xl mx-auto space-y-3">
          {[
            "25+ Years of Proven Enterprise Technology (via ChanceTEK LLC)",
            "Intelligent AI Solutions that Increase Productivity",
            "Scalable, Secure, and Customizable Architectures",
            "Deep Integration into Your Tech Ecosystem",
            "Future-Ready AI with Practical Business Impact",
          ].map((item, index) => (
            <div key={index} className="flex items-start p-3 bg-card rounded-md shadow-sm">
              <CheckCircle className="h-6 w-6 text-primary mr-3 mt-px flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">Let’s Build the Future of Work—With AI</h2>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          From sales acceleration and voice engagement to autonomous decision-making and seamless workflow automation, ChanceTEK delivers intelligent AI solutions that work—so you can work smarter.
        </p>
        <p className="text-2xl font-bold text-foreground">
          ChanceTEK — Where Applied AI Meets Real-World Results.
        </p>
      </Section>
    </>
  );
}
