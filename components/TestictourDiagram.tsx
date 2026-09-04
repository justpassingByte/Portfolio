'use client';

import React, { useState } from 'react';
import {
  Trophy,
  Wifi,
  Swords,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Monitor,
  Gift,
  Crown,
} from 'lucide-react';

export const TestictourDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lifecycle' | 'o2o_sync' | 'grimoire'>('lifecycle');
  const [activeStage, setActiveStage] = useState<number>(1);
  const [selectedComp, setSelectedComp] = useState<'invokers' | 'storyweaver' | 'fated'>('invokers');

  // Tournament lifecycle stages
  const lifecycleStages = [
    {
      stage: 1,
      name: 'Team Registration',
      subtitle: 'Roster lock & IGN verification',
      details: 'Automated team signup, Riot Games / Steam IGN verification, substitute roster locks, and check-in confirmation.',
      metric: 'Admin time cut by 85%',
    },
    {
      stage: 2,
      name: 'Bracket Seeding',
      subtitle: 'Deterministic bracket generation',
      details: 'Supports Single Elimination, Double Elimination, Swiss Rounds, and Round Robin with seeding based on past Elo ratings.',
      metric: 'Zero manual Excel tiebreaks',
    },
    {
      stage: 3,
      name: 'Match Reporting',
      subtitle: 'Score verification & referee signoff',
      details: 'Players submit match scores and screenshot proof directly into the match room with automated conflict detection.',
      metric: '<60s dispute resolution',
    },
    {
      stage: 4,
      name: 'Leaderboard & Payouts',
      subtitle: 'Instant ranking update & prize ledger',
      details: 'Instant Elo recalculation, seasonal community ranking update, and automated cybercafe gaming credit / cash prize distribution.',
      metric: 'Real-time leaderboard sync',
    },
  ];

  // TFT Grimoire Comps
  const tftComps = {
    invokers: {
      title: 'Mythic Invoker Hyper-Cap',
      tier: 'S-Tier (54.2% Top 4 Rate)',
      coreUnits: ['Alune', 'Lillia', 'Annie', 'Azir', 'Hwei'],
      keySynergies: ['6 Invoker (+50 Mana/3s)', '3 Mythic (+15% HP & AP)', '2 Behemoth'],
      bisItems: ['Blue Buff + Rabadon on Lillia', 'Gargoyle + Warmog on Annie'],
      patchNotes: 'Dominates late-game boards with instant AoE mana battery rotations.',
    },
    storyweaver: {
      title: 'Fast 9 Storyweaver Kayle Ascended',
      tier: 'S-Tier (52.8% Top 4 Rate)',
      coreUnits: ['Garen', 'Riven', 'Zoe', 'Galio', 'Irelia'],
      keySynergies: ['7 Storyweaver (Ascended Kayle)', '2 Warden', '2 Bruiser'],
      bisItems: ['Guinsoo + Giant Slayer on Kayle', 'Dragon Claw + Bramble on Galio'],
      patchNotes: 'Stable mid-game tempo into high-cap stage 5 boards.',
    },
    fated: {
      title: 'Fated Dryad Dual Carry (Kindred & Thresh)',
      tier: 'A-Tier (51.0% Top 4 Rate)',
      coreUnits: ['Ahri', 'Yasuo', 'Kindred', 'Thresh', 'Syndra'],
      keySynergies: ['5 Fated (Thresh + Yasuo pair)', '2 Dryad', '2 Arcanist'],
      bisItems: ['Blue Buff + Jeweled Gauntlet on Kindred', 'Sunfire + Ionic on Thresh'],
      patchNotes: 'Consistent top 3 finish with high shield survivability.',
    },
  };

  return (
    <div className="bg-[#0A0D16] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Banner */}
      <div className="p-4 sm:p-6 border-b border-white/[0.08] bg-gradient-to-r from-emerald-950/40 via-[#0A0D16] to-[#0A0D16]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                ESPORTS SAAS & O2O ECOSYSTEM
              </span>
              <span className="text-xs font-mono text-slate-400">Testictour Engine ↔ Netsla IoT ↔ TFT Grimoire</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Testictour Tournament Lifecycle & O2O Telemetry</span>
            </h3>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('lifecycle')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'lifecycle'
                  ? 'bg-emerald-500 text-[#07090E] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Tournament Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('o2o_sync')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'o2o_sync'
                  ? 'bg-emerald-500 text-[#07090E] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wifi className="w-3.5 h-3.5" />
              <span>O2O Netsla Sync</span>
            </button>

            <button
              onClick={() => setActiveTab('grimoire')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'grimoire'
                  ? 'bg-emerald-500 text-[#07090E] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Swords className="w-3.5 h-3.5" />
              <span>TFT Grimoire</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Tournament Lifecycle Engine */}
      {activeTab === 'lifecycle' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              End-to-End Tournament Automation (Replacing Excel & Discord)
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Managing complete tournament lifecycles with deterministic state progressions and automated score arbitration:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {lifecycleStages.map((item) => (
              <button
                key={item.stage}
                onClick={() => setActiveStage(item.stage)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeStage === item.stage
                    ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    STAGE 0{item.stage}
                  </span>
                  {activeStage === item.stage && <Zap className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-sm font-bold text-white mb-1">{item.name}</div>
                <div className="text-xs text-slate-400 font-light">{item.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Active Stage Detail */}
          <div className="bg-[#0F1424] border border-white/[0.08] rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono">
              <span className="text-emerald-400 font-semibold">
                ACTIVE PHASE: {lifecycleStages[activeStage - 1].name}
              </span>
              <span className="px-2.5 py-1 rounded bg-black/60 text-slate-300 border border-white/10">
                {lifecycleStages[activeStage - 1].metric}
              </span>
            </div>

            <p className="text-sm text-slate-200 font-light leading-relaxed">
              {lifecycleStages[activeStage - 1].details}
            </p>

            <div className="p-4 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-xs text-slate-300 space-y-1.5">
              <div className="text-emerald-400 text-[11px] font-semibold">STATE_TRANSITION_INVARIANT:</div>
              <div>
                MatchStatus.PENDING ➔ MatchStatus.LIVE ➔ MatchStatus.AWAITING_VERIFICATION ➔ MatchStatus.COMPLETED
              </div>
              <div className="text-slate-500 text-[11px]">
                Upon COMPLETED event: Elo rating calculation worker triggered via background queue.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: O2O Cybercafe Telemetry Sync (Netsla Link) */}
      {activeTab === 'o2o_sync' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              O2O Gaming Ecosystem: Testictour ↔ Netsla Closed Loop
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Physical cybercafe hardware telemetry connects directly with digital esports tournament brackets to drive player retention and venue revenue:
            </p>
          </div>

          {/* Closed Loop Architecture Visual */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#0F1424] border border-white/[0.08] rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                <Monitor className="w-4 h-4" />
                <span>01. Physical Station Check-In</span>
              </div>
              <div className="text-sm font-bold text-white">Netsla Station IoT Client</div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Player logs into Cybercafe PC #24. Netsla IoT daemon verifies session credentials, hardware state, and unlocks tournament network port.
              </p>
            </div>

            <div className="bg-[#0F1424] border border-emerald-500/30 rounded-xl p-5 space-y-3 bg-gradient-to-b from-emerald-950/20 to-transparent">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                <Trophy className="w-4 h-4" />
                <span>02. Bracket Competition</span>
              </div>
              <div className="text-sm font-bold text-white">Testictour Tournament Hub</div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Player joins local venue bracket. Testictour binds match room to workstation station IP, verifying physical presence and eliminating spoofing.
              </p>
            </div>

            <div className="bg-[#0F1424] border border-white/[0.08] rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                <Gift className="w-4 h-4" />
                <span>03. Closed-Loop Redemption</span>
              </div>
              <div className="text-sm font-bold text-white">Netsla Loyalty & Rewards</div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Victories immediately credit 2 hours of free gaming time and beverage vouchers into the player Netsla member account.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: TFT Grimoire Meta Companion */}
      {activeTab === 'grimoire' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                TFT Grimoire: Team Comp Builder & Meta Companion
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                Tactical companion sub-product for competitive Teamfight Tactics players between tournament rounds:
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
              Live Patch 16.8 Meta
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {(['invokers', 'storyweaver', 'fated'] as const).map((compKey) => {
              const comp = tftComps[compKey];
              const isSelected = selectedComp === compKey;
              return (
                <button
                  key={compKey}
                  onClick={() => setSelectedComp(compKey)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">
                    {comp.tier}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{comp.title}</div>
                  <div className="text-xs text-slate-400 font-light truncate">{comp.coreUnits.join(', ')}</div>
                </button>
              );
            })}
          </div>

          {/* Active Comp Breakdown */}
          <div className="bg-[#0F1424] border border-white/[0.08] rounded-xl p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
              <div className="text-base font-bold text-white">{tftComps[selectedComp].title}</div>
              <span className="px-2.5 py-1 rounded bg-black/60 text-emerald-400 text-xs font-mono border border-emerald-500/20 font-semibold">
                {tftComps[selectedComp].tier}
              </span>
            </div>

            {/* Core Units */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400">CORE SQUAD FORMATION:</span>
              <div className="flex flex-wrap gap-2">
                {tftComps[selectedComp].coreUnits.map((unit) => (
                  <span
                    key={unit}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-black/50 text-slate-200 border border-white/10"
                  >
                    ★ {unit}
                  </span>
                ))}
              </div>
            </div>

            {/* Synergies & Items */}
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
                <span className="text-emerald-400 font-semibold">ACTIVE TRAITS & SYNERGIES:</span>
                <ul className="text-slate-300 space-y-1 pt-1">
                  {tftComps[selectedComp].keySynergies.map((syn) => (
                    <li key={syn}>• {syn}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
                <span className="text-sky-400 font-semibold">BEST-IN-SLOT (BIS) ITEM PATHS:</span>
                <div className="text-slate-300 pt-1 leading-relaxed">
                  {tftComps[selectedComp].bisItems}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-semibold">TACTICAL COMMENTARY:</span>{' '}
              {tftComps[selectedComp].patchNotes}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
