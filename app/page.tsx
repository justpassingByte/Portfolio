'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Layers,
  Cpu,
  Database,
  Server,
  Zap,
  CheckCircle2,
  Terminal,
  FileCode,
  Lock,
  GitBranch,
  Boxes,
  Bot,
  Network,
  Workflow,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { profileData } from '../data/profile';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { EcosystemDiagram } from '../components/EcosystemDiagram';
import { StageRoadmap } from '../components/StageRoadmap';
import { ContactSection } from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/[0.04] blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-sky-500/[0.03] blur-[140px] rounded-full" />
      </div>

      <div className="space-y-20 sm:space-y-28">
        {/* 1. HERO SECTION */}
        <section className="relative z-10 pt-2 sm:pt-4 pb-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            {/* Left Column: Bio & Positioning */}
            <div className="space-y-6 text-left">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.status}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                  Hi, I&apos;m <span className="text-white">{profileData.name}</span>
                </h1>
                <p className="text-xl sm:text-2xl font-mono text-emerald-400/90 font-medium">
                  {profileData.title}
                </p>
              </div>

              {/* Tagline & Elevator Pitch */}
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
                Product-driven architect building{' '}
                <span className="text-white font-normal">interconnected platform ecosystems</span>,{' '}
                <span className="text-white font-normal">high-trust marketplaces</span>,{' '}
                <span className="text-white font-normal">distributed task queues</span>, and{' '}
                <span className="text-white font-normal">agentic multi-agent engineering workflows</span>.
              </p>

              {/* Core Badges Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-slate-400">
                <span className="text-slate-500 font-sans">Core:</span>
                {[
                  'Next.js',
                  'NestJS',
                  'PostgreSQL',
                  'Redis',
                  'BullMQ',
                  'Multi-Agent & MCP',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="#ecosystems"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-[#07090E] font-semibold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
                >
                  <span>Explore Platform Ecosystems</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/projects/trustbase"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] font-medium text-sm transition-all"
                >
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Trustbase Enterprise Case Study</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Profile Card */}
            <div className="relative">
              <div className="relative mx-auto max-w-sm rounded-3xl bg-[#0A0D16] border border-white/[0.08] p-6 shadow-2xl shadow-black/80 space-y-5">
                {/* Photo & Status */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-emerald-500/20 shadow-inner group">
                  <Image
                    src={profileData.avatar}
                    alt={profileData.name}
                    fill
                    sizes="(min-width: 640px) 380px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D16] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-slate-300">
                    <span>@{profileData.handle}</span>
                    <span className="text-emerald-400">Core Systems</span>
                  </div>
                </div>

                {/* Profile Specs */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">Title:</span>
                    <span className="text-emerald-400 font-medium">Core Systems Architect</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">Current Focus:</span>
                    <span className="text-white font-medium">Trustbase & Ecosystems</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">Distributed Core:</span>
                    <span className="text-slate-200">FSM • Locks • BullMQ</span>
                  </div>
                  
                  {/* Rich AI Stack Showcase */}
                  <div className="pt-2 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Bot className="w-3.5 h-3.5 text-sky-400" />
                        <span>AI-Native Stack:</span>
                      </span>
                      <span className="text-[10px] text-sky-400 font-semibold">Structured Workflows</span>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {[
                        'Subagent Orchestration',
                        'Multi-Agent Delegations',
                        'Custom Skills & Rules',
                        'MCP Protocol',
                        'Automated Code Review',
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] bg-sky-500/10 text-sky-300 border border-sky-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME & CAREER ASPIRATIONS */}
      <section id="about" className="relative z-10 scroll-mt-24">
        <div className="container mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              01 // Background & Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Architecting Core Infrastructure & Closed Operational Loops
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0A0D16] border border-white/[0.08] rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Trustbase Core Platform</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Driving core system architecture at Trustbase: deterministic FSM escrow lifecycles, pessimistic database row locks, Redis distributed locks, and BullMQ background task pipelines.
              </p>
            </div>

            <div className="bg-[#0A0D16] border border-white/[0.08] rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Interconnected Ecosystems</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Connecting standalone touchpoints into complete closed-loop platforms: uniting cybercafe hardware telemetry with tournament SaaS (Netsla ↔ Testictour ↔ TFT Grimoire) and AgriTech supply lot traceability.
              </p>
            </div>

            <div className="bg-[#0A0D16] border border-white/[0.08] rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Agentic AI Workflows</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Engineering multi-agent systems: delegating scoped tasks to hierarchical subagents, enforcing repository domain skills, MCP tool protocols, and automated code review passes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW DEDICATED SECTION: INTERCONNECTED PLATFORM ECOSYSTEMS */}
      <section id="ecosystems" className="relative z-10 scroll-mt-24">
        <div className="container mx-auto max-w-6xl space-y-8">
          <EcosystemDiagram />
        </div>
      </section>

      {/* 4. ENGINEERING MINDSET */}
      <section id="mindset" className="relative z-10 scroll-mt-24">
        <div className="container mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              03 // Engineering Mindset
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Core Principles in Production Architectures
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profileData.mindsets.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#0A0D16] border border-white/[0.08] hover:border-emerald-500/30 rounded-2xl p-6 space-y-3 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    {item.principle}
                  </span>
                  <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Stage-Gated Architecture (MVP to Scale) */}
          <div className="pt-6">
            <StageRoadmap />
          </div>
        </div>
      </section>

      {/* 5. SYSTEM DESIGN & ARCHITECTURE HIGHLIGHTS */}
      <section id="systems" className="relative z-10 scroll-mt-24">
        <div className="container mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                04 // Architecture Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Distributed Systems & Concurrency Patterns
              </h2>
              <p className="text-sm text-slate-400 max-w-xl font-light">
                Key patterns and concurrency challenges tackled across real-world marketplace and asynchronous systems:
              </p>
            </div>
            <Link
              href="/projects/trustbase"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 shrink-0"
            >
              <span>View Trustbase Architecture Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {profileData.systemHighlights.map((highlight) => (
              <div
                key={highlight.id}
                className="bg-[#0A0D16] border border-white/[0.08] hover:border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/[0.04] text-emerald-400 border border-emerald-500/20">
                      {highlight.badge}
                    </span>
                    <Lock className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {highlight.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400/90 font-medium">
                    {highlight.summary}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300/90 font-light leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                  {highlight.keyPatterns.map((pattern) => (
                    <div
                      key={pattern}
                      className="flex items-center gap-2 text-[11px] font-mono text-slate-400"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{pattern}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECH STACK & TOOLING MATRIX */}
      <section id="stack" className="relative z-10 scroll-mt-24">
        <div className="container mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              05 // Technical Stack & Tooling
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tech Stack & Tooling Matrix
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Mastery across distributed backends, frontends, concurrency barriers, and agentic multi-agent systems:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.techStackCategories.map((category) => (
              <div
                key={category.category}
                className="bg-[#0A0D16] border border-white/[0.08] rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold font-mono text-white tracking-tight">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08] hover:border-emerald-500/40 hover:text-white transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED WORK (BENTO GRID) */}
      <section id="projects" className="relative z-10 scroll-mt-24">
        <div className="container mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                06 // Featured Products & Platforms
              </span>
              <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                {projects.length} Core Systems & Platforms
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Architected for Real-World Usage
            </h2>
            <p className="text-sm text-slate-400 max-w-xl font-light">
              From enterprise digital marketplace transaction engines to agentic poker exploit intelligence:
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={project.slug === 'trustbase'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT HUB */}
      <ContactSection />
    </div>
    </>
  );
}
