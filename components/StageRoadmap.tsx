'use client';

import React, { useState } from 'react';
import {
  Rocket,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Boxes,
  Zap,
  Cpu,
  Layers,
} from 'lucide-react';

export const StageRoadmap: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      step: '01',
      title: 'Lean 0-to-1 MVP',
      subtitle: 'Prove the Core User Loop',
      badge: 'Speed & Value Validation',
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      color: 'emerald',
      principles: [
        'Narrow down complex domain trees into pragmatic product primitives (e.g. strategy buckets in RobinHUD, core bracket loop in Testictour).',
        'Build monolithic vertical slices with strict interface boundaries rather than jumping into microservice fragmentation.',
        'Prioritize end-to-end data contracts and typed schemas over speculative infrastructure.',
      ],
      antiPatterns: [
        'NO premature microservices or distributed message brokers (Kafka/RabbitMQ) when a single DB + Redis handles early traffic.',
        'NO boilerplate generic repositories wrapping ORMs without business logic.',
        'NO over-abstracted plugin systems before product-market fit is proven.',
      ],
      quote: 'Build the thinnest slice that delivers real user value with bulletproof data contracts.',
    },
    {
      step: '02',
      title: 'Operational Hardening',
      subtitle: 'Enforce State & Financial Integrity',
      badge: 'Transaction Safety',
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
      color: 'sky',
      principles: [
        'Introduce formal Finite State Machines (FSM) to eliminate illegal state transitions and race conditions under concurrent workloads.',
        'Enforce pessimistic row locks (`SELECT ... FOR UPDATE`) and Redis distributed locks at critical financial mutation boundaries.',
        'Implement webhook idempotency keys and cryptographic signature verification for third-party gateways.',
        'Establish 6-layer trust boundaries to strictly separate public customer bundles from internal administrative logic.',
      ],
      antiPatterns: [
        'NO optimistic concurrency when dealing with real money balances and high checkout contention.',
        'NO calling external HTTP banking gateways inside open database transactions.',
        'NO unvalidated external webhook callbacks without idempotency deduplication.',
      ],
      quote: 'When money and real users enter the loop, deterministic state invariants become non-negotiable.',
    },
    {
      step: '03',
      title: 'Scale & Decoupling',
      subtitle: 'High-Throughput Asynchronous Architecture',
      badge: 'Resilience & Growth',
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
      color: 'purple',
      principles: [
        'Decouple heavy I/O (invoices, emails, media processing) into BullMQ background queues with exponential backoff & Dead Letter Queues (DLQ).',
        'Extract heavily utilized bounded contexts into independent microservices using already-established barrel exports.',
        'Implement query caching layers with strict event-driven cache invalidation and read replicas.',
        'Incorporate structured correlation tracing (Request IDs) across services for end-to-end observability.',
      ],
      antiPatterns: [
        'NO blocking synchronous HTTP request/response lifecycles for heavy background jobs.',
        'NO rewriting existing modules from scratch—clean extraction paths are enabled by design.',
      ],
      quote: 'Scale by decoupling along clean boundaries, not by rewriting code.',
    },
  ];

  return (
    <div className="w-full bg-[#0A0D16] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Product Engineering Strategy
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Stage-Gated Architecture: MVP First, Scale Ready
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
            Knowing what is essential for each stage eliminates premature overengineering while preserving clean extraction paths as traffic grows.
          </p>
        </div>

        {/* Stage Tabs */}
        <div className="flex items-center bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.06] font-mono text-xs shrink-0">
          {stages.map((stage, idx) => (
            <button
              key={stage.step}
              onClick={() => setActiveStage(idx)}
              className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                activeStage === idx
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>{stage.step}.</span>
              <span className="hidden sm:inline">{stage.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Stage Detail Card */}
      <div className="space-y-6">
        {/* Stage Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
              {stages[activeStage].icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-emerald-400">
                  STAGE {stages[activeStage].step}
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                  {stages[activeStage].badge}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight mt-0.5">
                {stages[activeStage].title}: <span className="text-slate-300 font-light">{stages[activeStage].subtitle}</span>
              </h4>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 italic max-w-sm text-left sm:text-right">
            &ldquo;{stages[activeStage].quote}&rdquo;
          </div>
        </div>

        {/* Dual Comparison: What to Build vs What to Defer */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Column 1: What We Focus On & Build */}
          <div className="bg-[#0D111D] border border-emerald-500/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>What We Focus On & Build</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {stages[activeStage].principles.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-mono font-bold shrink-0 mt-0.5">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: What We Deliberately Avoid / Defer */}
          <div className="bg-[#0D111D] border border-red-500/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <XCircle className="w-4 h-4" />
              <span>What We Defer (Anti-Overengineering)</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {stages[activeStage].antiPatterns.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-red-400 font-mono font-bold shrink-0 mt-0.5">✕</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real Codebase Example Footer */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-slate-300 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Real-World Application:</strong> In Trustbase, vertical slices (`api/src/modules/`) are isolated by convention so they run fast today as a modular monolith, but can be extracted to microservices tomorrow without touching customer bundles.
            </span>
          </div>
          <span className="text-emerald-400 font-bold">Zero Re-write Penalty</span>
        </div>
      </div>
    </div>
  );
};
