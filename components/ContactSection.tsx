'use client';

import React, { useState } from 'react';
import { Github, Disc as Discord, Facebook, Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'discord') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.08] relative">
      <div className="container mx-auto max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s build resilient systems <br className="hidden sm:block" />
            <span className="text-gradient">and impactful products.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Interested in discussing distributed task queues, financial state machines, high-concurrency architectures, or agentic workflows? Reach out directly:
          </p>
        </div>

        {/* Large Minimalist Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email */}
          <div className="bg-[#0A0D16] border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-xl hover:shadow-emerald-500/5 group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={() => copyToClipboard(profileData.socials.email, 'email')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-white/[0.04] transition-colors"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Direct Email</div>
              <div className="text-sm font-semibold text-white tracking-tight truncate mt-0.5">
                {profileData.socials.email}
              </div>
            </div>
            <a
              href={`mailto:${profileData.socials.email}`}
              className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors pt-2 border-t border-white/[0.04]"
            >
              <span>{copiedEmail ? 'Copied to clipboard!' : 'Send an Email'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Discord */}
          <div className="bg-[#0A0D16] border border-white/[0.08] hover:border-[#5865F2]/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-xl hover:shadow-[#5865F2]/5 group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center text-[#5865F2] group-hover:scale-110 transition-transform">
                <Discord className="w-5 h-5" />
              </div>
              <button
                onClick={() => copyToClipboard(profileData.socials.discordUsername, 'discord')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#5865F2] hover:bg-white/[0.04] transition-colors"
                title="Copy Discord username"
                aria-label="Copy Discord username"
              >
                {copiedDiscord ? <Check className="w-4 h-4 text-[#5865F2]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Discord Handle</div>
              <div className="text-sm font-semibold text-white tracking-tight mt-0.5">
                @{profileData.socials.discordUsername}
              </div>
            </div>
            <a
              href={profileData.socials.discord}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-[#5865F2] hover:text-[#7289DA] transition-colors pt-2 border-t border-white/[0.04]"
            >
              <span>{copiedDiscord ? 'Username Copied!' : 'Open Discord Profile'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub */}
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="bg-[#0A0D16] border border-white/[0.08] hover:border-white/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-xl group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Code & Repositories</div>
              <div className="text-sm font-semibold text-white tracking-tight mt-0.5">
                github.com/{profileData.handle}
              </div>
            </div>
            <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors pt-2 border-t border-white/[0.04]">
              Explore OSS & Projects
            </span>
          </a>

          {/* Facebook */}
          <a
            href={profileData.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="bg-[#0A0D16] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-xl hover:shadow-blue-500/5 group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Social Connect</div>
              <div className="text-sm font-semibold text-white tracking-tight mt-0.5">
                facebook.com/Leoz666
              </div>
            </div>
            <span className="text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors pt-2 border-t border-white/[0.04]">
              Direct Message
            </span>
          </a>
        </div>

        {/* Closing Quote Banner */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Based in Vietnam • Working with global & distributed engineering teams</span>
          </div>
          <div>© {new Date().getFullYear()} Thang Nguyen. Built with Next.js & TypeScript.</div>
        </div>
      </div>
    </section>
  );
};
