'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Disc as Discord, Facebook, Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Mindset', href: '#mindset' },
    { name: 'Systems', href: '#systems' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Featured Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090E]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40 py-2.5 sm:py-3'
          : 'bg-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-emerald-500/30 group-hover:border-emerald-500 transition-colors shadow-sm shadow-emerald-500/10">
            <Image
              src="/me.jpg"
              alt="Thang Nguyen"
              fill
              className="object-cover"
              sizes="36px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                {profileData.name}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-400/80 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                @{profileData.handle}
              </span>
            </div>
            <span className="text-[11px] text-emerald-400/90 font-mono tracking-tight font-medium">
              Core Systems & Full-Stack Architect
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
          {[
            { name: 'About', href: '#about' },
            { name: 'Ecosystems', href: '#ecosystems' },
            { name: 'Mindset', href: '#mindset' },
            { name: 'Systems', href: '#systems' },
            { name: 'Tech Stack', href: '#stack' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] px-3 py-1.5 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions & Socials */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profileData.socials.discord}
            target="_blank"
            rel="noreferrer"
            aria-label="Discord Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-[#5865F2] hover:bg-[#5865F2]/10 border border-transparent hover:border-[#5865F2]/20 transition-all"
          >
            <Discord className="w-4 h-4" />
          </a>
          <a
            href={profileData.socials.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <Link
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 px-3.5 py-1.5 rounded-lg transition-all"
          >
            <span>View Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-white/[0.06] border border-white/[0.08]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#07090E]/95 border-b border-white/[0.08] backdrop-blur-2xl px-6 py-5 mt-3 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-emerald-400 py-2 transition-colors border-b border-white/[0.04]"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08]"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.discord}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-[#5865F2] bg-white/[0.04] border border-white/[0.08]"
            >
              <Discord className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-blue-400 bg-white/[0.04] border border-white/[0.08]"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
