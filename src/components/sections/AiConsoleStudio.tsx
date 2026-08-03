'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Mic, Cpu, Sparkles, Play, CheckCircle2, Copy, Send, RefreshCw, Volume2, ShieldCheck, Zap } from 'lucide-react';
import Section from '@/components/shared/Section';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';

export default function AiConsoleStudio() {
  const [activeTab, setActiveTab] = useState<'reasoning' | 'speech' | 'rag' | 'media'>('reasoning');
  const [prompt, setPrompt] = useState('Build an autonomous financial agent that reconciles invoices, detects anomalies, and drafts weekly audit reports.');
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '[INIT] Connecting to LangGraph AgentRuntime...',
    '[MODEL] Loaded GPT-5.6 Luna (Context Window: 200k tokens)',
    '[SECURITY] Verification passed: Zero-Data-Retention active.',
    '[READY] Agentic AI pipeline online.',
  ]);

  const presetPrompts = [
    'Build an autonomous financial agent that reconciles invoices, detects anomalies, and drafts weekly audit reports.',
    'Transcribe voice notes, summarize key action items, and trigger automated calendar invites.',
    'Execute RAG search over internal clinical trial documents with instant citation links.',
    'Generate cinematic AI video presentation script and voiceover for product launch.',
  ];

  const handleRun = () => {
    setIsSimulating(true);
    setLogs(prev => [...prev, `[USER_QUERY] "${prompt}"`]);

    setTimeout(() => {
      setLogs(prev => [...prev, '[AGENT_PLAN] Formulating 4-step execution strategy...']);
    }, 600);

    setTimeout(() => {
      setLogs(prev => [...prev, '[TOOL_CALL] Querying internal database vector store via RAG...']);
    }, 1200);

    setTimeout(() => {
      setLogs(prev => [...prev, '[RESULT] Successfully executed agentic workflow in 142ms. Output delivered.']);
      setIsSimulating(false);
    }, 2000);
  };

  return (
    <Section className="relative overflow-hidden bg-background py-20 w-full">
      {/* Glow Orbs */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-primary/10 blur-[180px] rounded-full pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <PageHeader
          title="Interactive Agentic AI Studio"
          description="Test live AI reasoning, whisper speech-to-text processing, and autonomous multi-step workflow execution in real time."
        />

        {/* Console Hub Container */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl border border-primary/30 bg-card/90 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_-15px_hsla(var(--primary)/0.3)] glow-border">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-black/70 border-b border-border/40 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-muted-foreground ml-2">iSynera AI Console v5.6</span>
            </div>

            {/* Tab Selectors */}
            <div className="flex items-center gap-1 bg-card/60 p-1 rounded-xl border border-border/30 mt-2 sm:mt-0">
              {[
                { id: 'reasoning', label: 'Agent Reasoning', icon: Cpu },
                { id: 'speech', label: 'Whisper STT', icon: Mic },
                { id: 'rag', label: 'RAG Pipeline', icon: Zap },
                { id: 'media', label: 'AI Media Studio', icon: Sparkles },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card/40'
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Console Body */}
          <div className="p-6 md:p-8 space-y-6">
            
            {/* Preset Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-accent" /> Select Sample Prompt or Type Below:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {presetPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPrompt(p)}
                    className={`text-left p-3 rounded-xl border text-xs leading-relaxed transition-all ${
                      prompt === p
                        ? 'border-primary bg-primary/10 text-foreground font-medium'
                        : 'border-border/40 bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    }`}
                  >
                    "{p}"
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Prompt Input */}
            <div className="relative">
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                rows={3}
                className="w-full rounded-2xl bg-black/50 border border-primary/30 p-4 text-sm font-mono text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter prompt for Agentic AI..."
              />

              <Button
                onClick={handleRun}
                disabled={isSimulating || !prompt.trim()}
                className="absolute bottom-4 right-4 bg-primary-gradient text-white font-bold px-5 h-10 rounded-xl shadow-lg hover:shadow-primary/40"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Simulating...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4 fill-current" /> Execute Flow
                  </>
                )}
              </Button>
            </div>

            {/* Live Terminal Log Output */}
            <div className="rounded-2xl bg-black/80 border border-border/40 p-4 font-mono text-xs text-emerald-400 space-y-2 min-h-[140px] max-h-[220px] overflow-y-auto">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20 text-emerald-500/70">
                <span>TERMINAL STREAM LOGS</span>
                <span>STATUS: {isSimulating ? 'EXECUTING' : 'IDLE'}</span>
              </div>
              {logs.map((log, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-muted-foreground select-none">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-black/60 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
            <div className="flex items-center gap-2 text-accent">
              <ShieldCheck className="w-3.5 h-3.5" /> Zero Data Retention Guarantee
            </div>
            <div>Powered by GPT-5.6 Luna</div>
          </div>
        </div>

      </div>
    </Section>
  );
}
