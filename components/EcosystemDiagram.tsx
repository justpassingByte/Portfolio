'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Monitor,
  Trophy,
  BookOpen,
  ArrowRight,
  Sprout,
  Activity,
  Boxes,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';

export const EcosystemDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gaming' | 'agritech'>('gaming');

  return (
    <div className="w-full bg-[#0A0D16] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header & Cluster Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Interconnected Systems Architecture
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Platform Ecosystems & Closed Operational Loops
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
            Rather than building isolated toys, systems are engineered as complementary nodes where data, telemetry, and users flow between platforms.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex items-center bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.06] font-mono text-xs shrink-0">
          <button
            onClick={() => setActiveTab('gaming')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'gaming'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Esports & Cybercafe O2O
          </button>
          <button
            onClick={() => setActiveTab('agritech')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'agritech'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AgriTech & Nutrition Traceability
          </button>
        </div>
      </div>

      {/* CLUSTER 1: Esports & Cybercafe O2O Gaming Ecosystem */}
      {activeTab === 'gaming' && (
        <div className="space-y-8">
          {/* Ecosystem Context Bar */}
          <div className="bg-emerald-500/[0.04] border border-emerald-500/20 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                The Core Problem Solved:
              </span>
              <p className="text-sm text-slate-200 font-light">
                Net cafes struggle with low-margin hourly rentals, while esports organizers lack physical venue infrastructure. This ecosystem connects <strong>hardware telemetry</strong>, <strong>tournament operations</strong>, and <strong>meta knowledge tools</strong> into a self-reinforcing loop.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-mono text-slate-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                Closed Loop: Telemetry ➔ Tournaments ➔ Community
              </span>
            </div>
          </div>

          {/* Interactive Flow Nodes */}
          <div className="grid lg:grid-cols-3 gap-6 relative">
            {/* Node 1: Netsla */}
            <div className="bg-[#0E1220] border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">
                    Node 01 // Physical Venue
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    Netsla Cybercafe Telemetry
                  </h4>
                  <span className="text-xs font-mono text-blue-400/90">IoT & Station Management</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Monitors real-time workstation health, member check-ins, playtime metrics, and loyalty point accrual across 50+ cybercafe stations.
                </p>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="text-slate-400">Outbound Data Event:</div>
                  <div className="text-emerald-400">→ verified_player_telemetry</div>
                  <div className="text-emerald-400">→ venue_station_availability</div>
                </div>
              </div>

              <Link
                href="/projects/netsla"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 pt-3 border-t border-white/[0.06]"
              >
                <span>Inspect Netsla Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Node 2: Testictour */}
            <div className="bg-[#0E1220] border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">
                    Node 02 // Operational Engine
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    Testictour Tournament Lifecycle
                  </h4>
                  <span className="text-xs font-mono text-amber-400/90">Esports SaaS & Prize Engine</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Ingests verified players from Netsla stations. Automates tournament bracket seeding, real-time match reporting, and leaderboard reward distribution.
                </p>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="text-slate-400">Cross-Platform Sync:</div>
                  <div className="text-amber-300">⇄ bracket_progression_sync</div>
                  <div className="text-amber-300">⇄ rewards_redeemed_in_cafe</div>
                </div>
              </div>

              <Link
                href="/projects/testictour"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 pt-3 border-t border-white/[0.06]"
              >
                <span>Inspect Testictour Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Node 3: TFT Grimoire */}
            <div className="bg-[#0E1220] border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">
                    Node 03 // Knowledge Utility
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                    TFT Grimoire Companion
                  </h4>
                  <span className="text-xs font-mono text-purple-400/90">Meta & Tactical Intel</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Provides competitors with patch-aware meta tier lists, team composition builders, and item decisions, keeping players engaged between tournament rounds.
                </p>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="text-slate-400">Retention Loop:</div>
                  <div className="text-purple-300">↺ active_session_extension</div>
                  <div className="text-purple-300">↺ tournament_readiness_lift</div>
                </div>
              </div>

              <a
                href="https://testictour.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 pt-3 border-t border-white/[0.06]"
              >
                <span>Live Esports Hub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Value Flow Summary */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-slate-300 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-emerald-400 animate-spin-slow" />
              <span>
                <strong>Closed Loop Value:</strong> Cybercafe telemetry verifies player presence ➔ Testictour hosts daily tournaments ➔ TFT Grimoire optimizes competitor meta ➔ Rewards redeemable at venue.
              </span>
            </div>
            <span className="text-emerald-400 font-bold">100% Operational Loop</span>
          </div>
        </div>
      )}

      {/* CLUSTER 2: AgriTech & Farm-to-Table Ecosystem */}
      {activeTab === 'agritech' && (
        <div className="space-y-8">
          {/* Ecosystem Context Bar */}
          <div className="bg-emerald-500/[0.04] border border-emerald-500/20 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                The Core Problem Solved:
              </span>
              <p className="text-sm text-slate-200 font-light">
                Consumer nutrition apps stop at calorie counting without verifying where food is grown. The ChayFood ecosystem connects <strong>individual biometric metrics</strong> directly with <strong>organic farm harvest batches</strong> and supply lot traceability.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-mono text-slate-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                Closed Loop: Soil / Farmer ➔ Sourcing Batch ➔ Consumer Plate
              </span>
            </div>
          </div>

          {/* Interactive Flow Nodes */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Node 1: ChayFood Consumer Engine */}
            <div className="bg-[#0E1220] border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">
                    Core Platform // In Production
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    ChayFood Personal Nutrition Engine
                  </h4>
                  <span className="text-xs font-mono text-emerald-400/90">Biometric & Meal Planning</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Computes daily caloric and micronutrient envelopes based on individual body composition and lifestyle goals, translating metrics into specific ingredient requirements.
                </p>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="text-slate-400">Demand Generation:</div>
                  <div className="text-emerald-400">→ precise_ingredient_demands</div>
                  <div className="text-emerald-400">→ dietary_restriction_filters</div>
                </div>
              </div>

              <Link
                href="/projects/chayfood"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 pt-3 border-t border-white/[0.06]"
              >
                <span>Inspect ChayFood Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Node 2: Farm Management & Supply Traceability */}
            <div className="bg-[#0E1220] border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">
                    Supply Layer // Traceability Model
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors">
                    Farm Management & Lot Traceability
                  </h4>
                  <span className="text-xs font-mono text-teal-400/90">Organic Supply Chain Layer</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  The upstream supply model designed to connect directly with partner organic farms: recording harvest dates, soil batches, and agricultural certifications tied to every meal.
                </p>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="text-slate-400">Supply Verification:</div>
                  <div className="text-teal-300">⇄ harvest_lot_certificate_sync</div>
                  <div className="text-teal-300">⇄ farm_origin_cryptographic_id</div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span>Domain: AgriTech & Relational Modeling</span>
                <span className="text-teal-400">Traceable Loop</span>
              </div>
            </div>
          </div>

          {/* Value Flow Summary */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-slate-300 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-emerald-400 animate-spin-slow" />
              <span>
                <strong>Closed Loop Value:</strong> Consumer biometric goals define meal ingredients ➔ Direct farm lot tracking guarantees organic authenticity ➔ Eliminates untraceable intermediaries.
              </span>
            </div>
            <span className="text-emerald-400 font-bold">Farm-to-Table Loop</span>
          </div>
        </div>
      )}
    </div>
  );
};
