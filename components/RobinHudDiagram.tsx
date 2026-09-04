'use client';

import React, { useState } from 'react';
import {
  Brain,
  GitFork,
  CheckCircle2,
  FileCode,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Sliders,
  Terminal,
} from 'lucide-react';

export const RobinHudDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'buckets' | 'schema'>('pipeline');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeBucket, setActiveBucket] = useState<'btn_bb' | 'co_btn' | 'sb_bb'>('btn_bb');

  // Pipeline steps
  const pipelineSteps = [
    {
      title: '01. Raw Notes Ingestion',
      subtitle: 'Unstructured, messy human observation',
      content: '"villain folds way too much to turn check-raise on Ace high boards, especially when he bets 1/3 pot flop. limps sb with weak broadways"',
      status: 'Raw Input Stream',
      badge: 'Unconstrained Text',
    },
    {
      title: '02. Multi-Dimensional Normalization',
      subtitle: 'Structured Extraction via LLM Parser',
      content: {
        position: 'BB vs BTN / SB vs BB',
        street: 'Flop & Turn',
        boardTexture: 'A-High Dry (A♠ 8♦ 2♣)',
        stackDepth: '60bb - 100bb eff',
        leakType: 'High-frequency fold to Turn Check-Raise (Estimated 74%)',
      },
      status: 'Normalized Dimensions',
      badge: 'Zod Validated',
    },
    {
      title: '03. Vector RAG & Baseline Retrieval',
      subtitle: 'Relational lookup against game tree baselines',
      content: 'Retrieving baseline GTO equilibrium for [BTN_vs_BB_SRP_DryFlop]. Equilibrium check-raise frequency: 11.5%. Opponent defense threshold: 52% minimum defense frequency (MDF).',
      status: 'Equilibrium Anchor',
      badge: 'Vector DB + Relational',
    },
    {
      title: '04. EV-Positive Exploit Synthesis',
      subtitle: 'Tactical recommendation with risk boundaries',
      content: 'Shift check-raise frequency from 11.5% -> 36.8% (adding all backdoor flush draws and gutshots). Sizing: 3.4x. EV Delta: +3.8bb/100 hands.',
      status: 'Actionable Exploit Signal',
      badge: 'Deterministic JSON',
    },
  ];

  // Bucketed Game Tree Archetypes
  const buckets = {
    btn_bb: {
      name: 'BTN vs BB — Single-Raised Pot (Dry High-Card)',
      board: 'A♠ 8♦ 3♣ 9♥',
      gtoBaseline: 'Check-Raise Freq: 11.2% | Sizing: 3.2x',
      leakObserved: 'Opponent folds 74% against turn raises after small flop c-bet',
      exploitShift: 'Check-Raise Freq: 38.5% | Sizing: 3.5x',
      evGain: '+4.2 bb/100',
      handBluffs: 'Gutshots (54s, 76s), Backdoor broadways turning equity',
      riskCaveat: 'If opponent 3-bets turn, fold entire bluff range instantly (pure zero-equity surrender).',
    },
    co_btn: {
      name: 'CO vs BTN — 3-Bet Pot (Monotone Low Board)',
      board: '7♠ 5♠ 4♠ 2♦',
      gtoBaseline: 'Check Freq: 68.0% | Small C-Bet: 32.0%',
      leakObserved: 'Opponent over-calls flop then gives up turn without a spade',
      exploitShift: 'Double-Barrel Freq: 82.0% on offsuit turns',
      evGain: '+5.6 bb/100',
      handBluffs: 'Single offsuit broadways with block to the flush nut card',
      riskCaveat: 'Shut down completely on spade river cards; opponent range polarizes to flushes.',
    },
    sb_bb: {
      name: 'SB vs BB — Limped / Blind vs Blind (Paired Texture)',
      board: 'K♦ K♣ 6♠ T♥',
      gtoBaseline: 'Delayed Stab Freq: 28.4%',
      leakObserved: 'Opponent check-folds turn when missing an immediate pair',
      exploitShift: 'Delayed Float Freq: 64.0%',
      evGain: '+2.9 bb/100',
      handBluffs: 'Any two high cards or unmade wheel cards',
      riskCaveat: 'Avoid bluffing if BB checked behind flop in multiway pot.',
    },
  };

  return (
    <div className="bg-[#0A0D16] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-white/[0.08] bg-gradient-to-r from-emerald-950/40 via-[#0A0D16] to-[#0A0D16]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                AI DECISION-SUPPORT ENGINE
              </span>
              <span className="text-xs font-mono text-slate-400">RAG Retrieval • Game Tree Buckets • JSON Schema</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>RobinHUD Poker Intelligence Architecture</span>
            </h3>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-emerald-500 text-[#07090E] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>AI ETL Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab('buckets')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'buckets'
                  ? 'bg-emerald-500 text-[#07090E] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>Game Tree Buckets</span>
            </button>

            <button
              onClick={() => setActiveTab('schema')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'schema'
                  ? 'bg-emerald-500 text-[#07090E] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Structured Output</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: AI ETL Pipeline */}
      {activeTab === 'pipeline' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              End-to-End Extraction & Exploit Synthesis Pipeline
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Transforming unconstrained, noisy player notes into verified, high-EV strategic exploit recommendations:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {pipelineSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeStep === idx
                    ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                    {step.badge}
                  </span>
                  {activeStep === idx && <Sparkles className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-sm font-bold text-white mb-1">{step.title}</div>
                <div className="text-xs text-slate-400 font-light">{step.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Step Detail Card */}
          <div className="bg-[#0F1424] border border-white/[0.08] rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono">
              <span className="text-emerald-400 font-semibold">{pipelineSteps[activeStep].title}</span>
              <span className="text-slate-400">{pipelineSteps[activeStep].status}</span>
            </div>

            {typeof pipelineSteps[activeStep].content === 'string' ? (
              <div className="p-4 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-xs sm:text-sm text-slate-200 leading-relaxed">
                {pipelineSteps[activeStep].content as string}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs">
                {Object.entries(pipelineSteps[activeStep].content as Record<string, string>).map(
                  ([key, val]) => (
                    <div key={key} className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                      <div className="text-[11px] text-emerald-400/90 font-semibold uppercase">{key}</div>
                      <div className="text-slate-200 mt-1">{val}</div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Bucketed Game Tree Model */}
      {activeTab === 'buckets' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              Pragmatic MVP Strategy Buckets vs Unbounded GTO Trees
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Full Texas Hold&apos;em game trees contain billions of permutations. For low-latency inference, RobinHUD
              classifies spots into discrete strategy buckets with pre-computed equilibrium baselines:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {(['btn_bb', 'co_btn', 'sb_bb'] as const).map((bucketKey) => {
              const item = buckets[bucketKey];
              const isSelected = activeBucket === bucketKey;
              return (
                <button
                  key={bucketKey}
                  onClick={() => setActiveBucket(bucketKey)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">
                    BOARD: {item.board}
                  </div>
                  <div className="text-sm font-bold text-white mb-2 leading-snug">{item.name}</div>
                  <div className="text-xs font-mono text-emerald-400 font-semibold">{item.evGain} Exploit</div>
                </button>
              );
            })}
          </div>

          {/* Active Bucket Strategic Detail */}
          <div className="bg-[#0F1424] border border-white/[0.08] rounded-xl p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
              <div className="text-sm font-bold text-white">{buckets[activeBucket].name}</div>
              <div className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 text-emerald-400 border border-emerald-500/20">
                Texture: {buckets[activeBucket].board}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
                <div className="text-slate-400 uppercase text-[10px]">Game-Theoretic Equilibrium (GTO)</div>
                <div className="text-slate-200">{buckets[activeBucket].gtoBaseline}</div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                <div className="text-emerald-400 uppercase text-[10px] font-bold">Recommended Exploit Shift</div>
                <div className="text-emerald-300 font-bold">{buckets[activeBucket].exploitShift}</div>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="text-slate-300">
                <span className="text-emerald-400 font-semibold">Bluff Range Construction:</span>{' '}
                {buckets[activeBucket].handBluffs}
              </div>
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300">
                <span className="font-semibold text-amber-400">Risk Caveat (Surrender Barrier):</span>{' '}
                {buckets[activeBucket].riskCaveat}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Structured Output Schema */}
      {activeTab === 'schema' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              Deterministic Zod-Enforced JSON Output Schema
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Eliminating chatbot ambiguity: The LLM reasoning stage is strictly constrained by TypeScript interfaces and Zod schemas:
            </p>
          </div>

          <div className="bg-[#0F1424] border border-white/[0.08] rounded-xl p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/[0.06]">
              <span>src/ai/schemas/exploit-output.schema.ts</span>
              <span className="text-emerald-400 font-semibold">Strict JSON Mode</span>
            </div>

            <pre className="p-4 rounded-lg bg-black/60 border border-white/[0.06] text-slate-300 overflow-x-auto leading-relaxed">
              <code>{`{
  "spotId": "BTN_vs_BB_SRP_TURN_CHECK_RAISE",
  "recommendedAction": "CHECK_RAISE",
  "sizingFactor": 3.4,
  "recommendedSizingChips": 1850,
  "gtoBaselineFrequency": 0.112,
  "exploitFrequency": 0.385,
  "expectedValueDelta": "+4.2 bb/100",
  "handRangeShape": "POLARIZED_VALUE_AND_COMBO_DRAWS",
  "bluffCandidates": ["7s6s", "5s4s", "Ts9s", "JhTh"],
  "exploitRationale": "Opponent folds 74% to turn raises, well above 52% MDF. Any check-raise with >20% equity is immediately pure positive EV.",
  "riskBoundary": {
    "onThreeBetAction": "SURRENDER_FOLD",
    "dangerousRiverRunouts": ["FlushCompletingSpade", "OffsuitFour"]
  }
}`}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
