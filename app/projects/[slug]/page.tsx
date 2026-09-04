import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Layers,
  Cpu,
  CheckCircle2,
  Lock,
  Boxes,
  ArrowRight,
  Github,
} from 'lucide-react';
import { projects, getProjectBySlug } from '../../../data/projects';
import { ArchitectureDiagram } from '../../../components/ArchitectureDiagram';
import { ChayFoodDiagram } from '../../../components/ChayFoodDiagram';
import { RobinHudDiagram } from '../../../components/RobinHudDiagram';
import { TestictourDiagram } from '../../../components/TestictourDiagram';
import { ProjectGallery } from '../../../components/ProjectGallery';
import { ContactSection } from '../../../components/ContactSection';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom pagination
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="py-12 space-y-16">
      {/* Top Header / Breadcrumb */}
      <div className="container mx-auto max-w-5xl space-y-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Systems & Projects</span>
        </Link>

        {/* Project Hero Title */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]">
              {project.role}
            </span>
            {project.isPrivate && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Lock className="w-3 h-3" />
                <span>Private Production Engine</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-[#07090E] font-semibold text-xs hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.stagingLink && (
              <a
                href={project.stagingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold text-xs hover:bg-sky-500/20 transition-all"
              >
                <span>Staging Portal Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] text-xs font-mono transition-all"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>{project.githubBackend ? 'Frontend Repository (PoNotesFE)' : 'Source Code (GitHub)'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] text-xs font-mono transition-all"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>Backend API Repository (PoNotesBE)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
          </div>
        </div>

        {/* SPECIAL ARCHITECTURE HIGHLIGHT: Dynamic Diagram for Core Pillars */}
        {project.slug === 'trustbase' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Deep-Dive System Architecture (FSM & Saga Engine)
              </h2>
            </div>
            <ArchitectureDiagram />
          </div>
        )}

        {project.slug === 'chayfood' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Precision Nutrition & Atomic Inventory Architecture
              </h2>
            </div>
            <ChayFoodDiagram />
          </div>
        )}

        {project.slug === 'robinhud' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                AI Reasoning Pipeline & Bucketed Game Tree Architecture
              </h2>
            </div>
            <RobinHudDiagram />
          </div>
        )}

        {project.slug === 'testictour' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Tournament Lifecycle Engine & O2O Cybercafe Telemetry Sync
              </h2>
            </div>
            <TestictourDiagram />
          </div>
        )}

        {/* Interactive Screenshots Showcase */}
        {project.paths && project.paths.length > 0 && (
          <ProjectGallery paths={project.paths} title={project.title} />
        )}

        {/* Key Highlights List */}
        <div className="bg-[#0A0D16] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold font-mono text-emerald-400 uppercase tracking-wider">
            Engineering Highlights & Technical Patterns
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Case Study Sections */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Case Study & Architecture Walkthrough
          </h2>
          <div className="space-y-6">
            {project.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-[#0A0D16] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-3"
              >
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-xs font-mono text-emerald-400">0{idx + 1}.</span>
                  <span>{section.title}</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiter & Engineering Team Takeaways */}
        <div className="bg-gradient-to-br from-emerald-950/20 via-[#0A0D16] to-[#0A0D16] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <Cpu className="w-4 h-4" />
            <span>Key Takeaways for Engineering Teams</span>
          </div>
          <div className="space-y-2.5">
            {project.recruiterTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-200 font-light">
                <span className="text-emerald-400 font-mono font-bold">→</span>
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Footer */}
        <div className="space-y-3 pt-4 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-slate-400">Technologies Utilized:</span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Pagination */}
        <div className="flex items-center justify-between pt-8 border-t border-white/[0.08]">
          <Link
            href="/#projects"
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            ← All Projects
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
