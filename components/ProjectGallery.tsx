'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, Layers, Play } from 'lucide-react';

interface ProjectGalleryProps {
  paths: string[];
  title: string;
}


const getVideoPoster = (path?: string): string => {
  if (!path) return '/avatarportfo.png';
  if (path.includes('canvas')) return '/canvas-testops-demo.png';
  if (path.includes('trustbase')) return '/trustbase-hero.png';
  return '/avatarportfo.png';
};

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ paths, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!paths || paths.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? paths.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === paths.length - 1 ? 0 : prev + 1));
  };

  // Derive a technical caption from image filename or index
  const getCaption = (path: string, index: number) => {
    const filename = path.split('/').pop()?.toLowerCase() || '';
    if (filename.includes('canvas-demo')) return 'Interactive Spatial Incident Simulation & Dual-Loop RAG Walkthrough Video';
    if (filename.includes('canvas-testops-demo')) return 'Autonomous TestOps & SRE Knowledge Mesh Interactive Architecture';
    if (filename.includes('trustbase-marketplace')) return 'Digital Marketplace Catalog with Multi-Taxonomy Filters & Instant Search';
    if (filename.includes('trustbase-product-detail')) return 'Product Detail & Escrow Purchase Protection Interface';
    if (filename.includes('trustbase-demo')) return 'Live Production User Flow & Real-Time Marketplace Navigation Video';
    if (filename.includes('trustbase')) return 'Production Multi-Vendor Marketplace & Escrow Portal Interface';
    if (filename.includes('chayfood-menu')) return 'Plant-Based Culinary Menu with Real-Time Macro Nutritional Breakdown';
      if (filename.includes('chayfood-nutrition-planner')) return 'Clinical Nutrition Calculator & Personalized Caloric Planning Engine';
      if (filename.includes('chayfood-subscriptions')) return 'Recurring Healthy Meal Plan Subscriptions & Slot Scheduler';
      if (filename.includes('chayfood')) return 'Farm-to-Table Nutrition Engine & Personalized Culinary Flagship';
    if (filename.includes('robinhud-2')) return 'AI Exploit Recommendation & Tactical Range Matrix';
    if (filename.includes('robinhud')) return 'Raw Notes Ingestion & Multi-Dimensional Normalization Interface';
    if (filename.includes('compbuilder')) return 'TFT Grimoire Interactive Team Comp Builder & Synergy Graph';
    if (filename.includes('comptierlist')) return 'Patch-Aware Comp Tier List & Meta Augment Rankings';
    if (filename.includes('tierlist')) return 'Competitive Tier Matrix & Win-Rate Visualization';
    if (filename.includes('testictour2')) return 'Automated Match Bracket & Team Roster Verification Engine';
    if (filename.includes('testictour')) return 'Esports Tournament Management & Real-Time Bracket Progression';
    if (filename.includes('landingpage')) return 'Cybercafe Community Portal & Tournament Hub Landing Experience';
    if (filename.includes('netsla')) return 'Cybercafe IoT Workstation Telemetry & Member Loyalty Dashboard';
    if (filename.includes('smartdeal')) return 'DealSniper In-Browser Comparison Widget & Price Arbitrage HUD';
    if (filename.includes('topic4quizz')) return 'Topic2Test AI Quiz Engine & Grounded Knowledge Extraction HUD';
    return `Visual Screen 0${index + 1} // Production System Interface`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider">
            System Screens & Visual Interfaces
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.08]">
          <span className="text-emerald-400 font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="mx-1">/</span>
          <span>{String(paths.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Main Stage Large Viewer */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#0A0D16] border border-white/[0.08] shadow-2xl group">
        {(paths[currentIndex]?.endsWith('.mp4') || paths[currentIndex]?.endsWith('.webm')) ? (
          <video
            src={paths[currentIndex]}
            poster={getVideoPoster(paths[currentIndex])}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
          />
        ) : (
          <Image
            src={paths[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            className="object-contain transition-all duration-300"
            sizes="(min-width: 1024px) 960px, 100vw"
            priority
          />
        )}

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

        {/* Navigation Arrows */}
        {paths.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-emerald-500 hover:text-[#07090E] text-white border border-white/10 backdrop-blur-md transition-all duration-200 shadow-lg group-hover:opacity-100 opacity-80"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-emerald-500 hover:text-[#07090E] text-white border border-white/10 backdrop-blur-md transition-all duration-200 shadow-lg group-hover:opacity-100 opacity-80"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Bottom Technical Caption Banner */}
        <div className="absolute bottom-0 inset-x-0 p-4 bg-black/70 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-200 truncate pr-4">
            <span className="text-emerald-400 mr-2">SYS_VIEW:</span>
            {getCaption(paths[currentIndex], currentIndex)}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 shrink-0">
            <Maximize2 className="w-3 h-3 text-emerald-400" />
            <span>High-Res In-Production Asset</span>
          </span>
        </div>
      </div>

      {/* Thumbnail Strip (if multiple images) */}
      {paths.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-emerald-500/20">
          {paths.map((path, idx) => {
            const isActive = idx === currentIndex;
            const isVideo = path.endsWith('.mp4') || path.endsWith('.webm');
            const thumbImageSrc = isVideo ? getVideoPoster(path) : path;

            return (
              <button
                key={path}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-[16/10] w-24 sm:w-28 shrink-0 rounded-xl overflow-hidden border transition-all duration-200 bg-[#0F1424] group/thumb ${
                  isActive
                    ? 'border-emerald-400 ring-2 ring-emerald-500/40 opacity-100 scale-105'
                    : 'border-white/[0.08] opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={thumbImageSrc}
                  alt={`${title} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
                {isVideo && (
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-transform group-hover/thumb:scale-110">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                    <span className="text-[8px] font-mono font-semibold text-emerald-300 uppercase tracking-wider bg-black/70 px-1 rounded">
                      Video
                    </span>
                  </div>
                )}
                {isActive && (
                  <div className="absolute inset-0 bg-emerald-500/15 pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
