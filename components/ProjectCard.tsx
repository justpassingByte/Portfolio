'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight, Shield, Layers, Cpu, CheckCircle2, Lock, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured }) => {
  const [imageError, setImageError] = useState(false);
  const primaryImage = project.paths?.[0];

  return (
    <div
      className={`group relative flex flex-col justify-between bg-[#0A0D16] border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5 ${
        featured ? 'lg:col-span-2 xl:col-span-2' : ''
      }`}
    >
      {/* Top Preview Area */}
      <div className="relative w-full aspect-[16/9] bg-[#0F1424] border-b border-white/[0.06] overflow-hidden">
        {/* If image is available and not errored */}
        {primaryImage && !imageError ? (
          <div className="relative w-full h-full">
            <Image
              src={primaryImage}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 600px, 100vw"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D16] via-transparent to-transparent opacity-80" />
          </div>
        ) : (
          /* Sleek fallback visual card when image is not yet loaded */
          <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-emerald-950/30 via-[#0B0E1A] to-[#0A0D16] text-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.06)_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                {project.slug === 'trustbase' ? (
                  <Shield className="w-6 h-6" />
                ) : (
                  <Cpu className="w-6 h-6" />
                )}
              </div>
              <div className="text-sm font-semibold text-white tracking-wide">
                {project.title}
              </div>
              <div className="text-xs font-mono text-emerald-400/90 max-w-sm px-4">
                {project.architectureHighlight || 'State-Driven Architecture & Distributed Workflows'}
              </div>
            </div>
          </div>
        )}

        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#07090E]/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
            {project.category}
          </span>
          {project.isPrivate && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 backdrop-blur-md text-amber-300 border border-amber-500/20">
              <Lock className="w-3 h-3" />
              <span>Production Core</span>
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-[11px] font-mono text-slate-400 shrink-0">
              {project.role.split(',')[0]}
            </span>
          </div>

          <p className="text-sm text-slate-300/90 leading-relaxed font-light line-clamp-3">
            {project.description}
          </p>

          {/* Architecture Highlight Pill */}
          {project.architectureHighlight && (
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-slate-300">
              <span className="text-emerald-400 shrink-0 font-bold">⚡</span>
              <span className="line-clamp-2">{project.architectureHighlight}</span>
            </div>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4 pt-2 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 6 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.02] text-slate-500">
                +{project.stack.length - 6} more
              </span>
            )}
          </div>

          {/* Card Action Links */}
          <div className="flex items-center justify-between pt-1">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group/link transition-colors"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </Link>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  aria-label={`${project.title} GitHub`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{project.githubBackend ? 'FE' : 'Repo'}</span>
                </a>
              )}
              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  aria-label={`${project.title} Backend GitHub`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>BE</span>
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  aria-label={`${project.title} Live Demo`}
                >
                  <span>Live</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.stagingLink && (
                <a
                  href={project.stagingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                  aria-label={`${project.title} Staging`}
                >
                  <span>Staging</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
