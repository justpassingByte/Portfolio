'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight, Shield, Cpu, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const getVideoPoster = (src?: string, slug?: string) => {
  if (!src) return undefined;
  if (src.includes('canvas') || slug === 'autonomous-testops-sre-mesh') {
    return '/canvas-testops-demo.png';
  }
  if (src.includes('trustbase') || slug === 'trustbase') {
    return '/trustbase-hero.png';
  }
  return undefined;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const [imageError, setImageError] = useState(false);
  const primaryImage = project.paths?.[0];
  const isReversed = index % 2 === 1;

  return (
    <article className="group relative rounded-2xl bg-[#090C15] border border-white/[0.07] hover:border-white/[0.18] transition-all duration-300 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10">
        {/* Media Preview Column */}
        <div
          className={`w-full lg:col-span-7 ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/[0.08] bg-[#06080F] group-hover:border-white/[0.16] transition-all shadow-xl">
            {primaryImage && (primaryImage.endsWith('.mp4') || primaryImage.endsWith('.webm')) ? (
              <video
                src={primaryImage}
                poster={getVideoPoster(primaryImage, project.slug)}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            ) : primaryImage && !imageError ? (
              <Image
                src={primaryImage}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 700px, 100vw"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-[#07090E] text-center">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 mb-3">
                  {project.slug === 'trustbase' ? (
                    <Shield className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Cpu className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
                <span className="text-base font-bold text-white tracking-wide">
                  {project.title}
                </span>
                <span className="text-xs font-mono text-slate-400 max-w-sm mt-1">
                  {project.category}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Narrative & Technical Spec Column */}
        <div
          className={`flex flex-col justify-between space-y-5 lg:col-span-5 ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="space-y-4">
            {/* Meta Header */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-emerald-400 font-medium">{project.category}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{project.role.split(',')[0]}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Architecture Highlight Invariant */}
            {project.architectureHighlight && (
              <div className="border-l-2 border-emerald-500/50 pl-3.5 py-0.5 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-medium block">
                  Core Invariant
                </span>
                <p className="text-xs font-mono text-slate-300 leading-relaxed font-normal">
                  {project.architectureHighlight}
                </p>
              </div>
            )}
          </div>

          {/* Tech Stack & Action Links */}
          <div className="space-y-5 pt-4 border-t border-white/[0.06]">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Actions Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] text-xs font-mono font-medium transition-all group/btn"
              >
                <span>Case Study & Specs</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover/btn:translate-x-1" />
              </Link>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors"
                  aria-label={`${project.title} Live Demo`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                  aria-label={`${project.title} GitHub`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
