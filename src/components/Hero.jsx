import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Reusable Animated Counter component
function AnimatedCounter({ end, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

function Hero() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleDownloadAndPreview = (e) => {
    e?.preventDefault();
    setIsResumeOpen(true);
    const link = document.createElement('a');
    link.href = '/Hiruni_Dissanayake_CV_v2.pdf?v=2';
    link.download = 'Hiruni_Dissanayake_CV_v2.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Close modal on ESC key press & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };
    if (isResumeOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isResumeOpen]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 z-10"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ─── Left Column: Personal Copy ─── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag / Badge */}
            <div className="reveal inline-flex items-center gap-2 bg-brand-dark-card border border-white/5 text-white rounded-full px-5 py-2.5 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse" />
              <span className="font-poppins text-xs font-semibold tracking-wider text-brand-dark-textMuted">
                Get to know me
              </span>
            </div>

            {/* Name / Heading (SaaS style gradient title) */}
            <div className="reveal space-y-2">
              <h1 className="font-poppins text-5xl sm:text-6xl md:text-[68px] font-extrabold text-white tracking-tight leading-[1.05]">
                Hiruni <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-purple-secondary">Dissanayake</span>
              </h1>
              <p className="font-poppins text-lg sm:text-xl font-bold tracking-wide text-brand-purple-secondary mt-2">
                Business Analyst  | Project Manager  | Quality Assuarance
              </p>
            </div>

            {/* Headline / Intro Statement */}
            <p className="reveal font-inter text-sm sm:text-base text-brand-dark-textMuted leading-relaxed font-normal max-w-2xl">
              I'm an Information Systems Engineering undergraduate with a passion for solving real world problems through technology. I specialize in business analysis, project management, and quality assurance to deliver solutions that create value for users and organizations.
            </p>
            <p className="reveal font-inter text-sm sm:text-base text-brand-dark-textMuted leading-relaxed font-normal max-w-2xl">
              I enjoy working on end-to-end projects - from understanding business needs to delivering efficient, user-friendly solutions.
            </p>

            {/* Pill Tags (SaaS style with purple and orange highlights) */}
            <div className="reveal flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 bg-brand-dark-card border border-white/5 py-2.5 px-4 rounded-[18px] text-xs font-bold text-white/85 shadow-md">
                <svg className="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                Business Analyst
              </div>
              <div className="flex items-center gap-2 bg-brand-dark-card border border-white/5 py-2.5 px-4 rounded-[18px] text-xs font-bold text-white/85 shadow-md">
                <svg className="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0A2.25 2.25 0 004.5 15h15a2.25 2.25 0 002.25-2.25m-19.5 0v.225c0 1.18.91 2.164 2.09 2.201a51.964 51.964 0 009.92 0c1.18-.037 2.09-1.022 2.09-2.201V12.75M12 9.75V6.75m0 3h-3m3 0h3" />
                </svg>
                Project Manager
              </div>
              {/* Highlight Tag in Orange */}
              <div className="flex items-center gap-2 bg-brand-dark-card border border-white/5 py-2.5 px-4 rounded-[18px] text-xs font-bold text-brand-orange shadow-md">
                <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                QA Tester
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="reveal flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-purple-secondary hover:opacity-95 text-white font-poppins font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-lg shadow-brand-purple/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Projects
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a
                href="#experience"
                className="group inline-flex items-center justify-center gap-2 bg-brand-dark-card border border-white/10 hover:border-brand-purple text-white font-poppins font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-purple/5 cursor-pointer shadow-md"
              >
                My Professional Experience
                <svg className="w-4 h-4 text-brand-purple transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>

              <a
                href="/Hiruni_Dissanayake_CV_v2.pdf?v=2"
                download="Hiruni_Dissanayake_CV_v2.pdf"
                onClick={handleDownloadAndPreview}
                className="group inline-flex items-center justify-center gap-2 bg-transparent border border-white/10 hover:border-brand-purple text-white font-poppins font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-purple/5 cursor-pointer"
              >
                Download CV
                <svg className="w-4 h-4 text-white/60 group-hover:text-brand-purple transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>

            {/* Find Me Social Links */}
            <div className="reveal flex items-center gap-4 pt-6">
              <span className="font-poppins text-xs font-semibold tracking-[0.2em] text-brand-dark-textMuted uppercase">
                Find Me
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/hiru-personal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-brand-dark-card/60 border border-white/5 flex items-center justify-center text-white/70 hover:text-brand-purple hover:border-brand-purple/35 transition-all duration-300 shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/hiruni-dissanayake-2a7a65396?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-brand-dark-card/60 border border-white/5 flex items-center justify-center text-white/70 hover:text-brand-purple hover:border-brand-purple/35 transition-all duration-300 shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth={1.5} />
                  </svg>
                </a>
                <a
                  href="mailto:hirunidissanayake116@gmail.com"
                  className="w-10 h-10 rounded-xl bg-brand-dark-card/60 border border-white/5 flex items-center justify-center text-white/70 hover:text-brand-purple hover:border-brand-purple/35 transition-all duration-300 shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Double-Circle Avatar Frame with Orange Highlight ─── */}
          <div className="lg:col-span-5 flex items-center justify-center pt-8 lg:pt-0 reveal-scale">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shrink-0">
              {/* Hollow purple circle on the top left */}
              <div className="absolute w-8 h-8 rounded-full border-2 border-brand-purple/50 -top-4 -left-4 animate-float-1 pointer-events-none" />

              {/* Outer purple circle border with orange dot highlight */}
              <div className="absolute inset-0 rounded-full border border-brand-purple/40 scale-[1.08] pointer-events-none animate-orbit-pulse">
                {/* Small orange dot on the outer orbit */}
                <div className="absolute w-3.5 h-3.5 bg-brand-orange rounded-full right-[-7px] top-1/2 -translate-y-1/2 shadow-md shadow-brand-orange/40" />
              </div>

              {/* Soft purple glowing backdrop */}
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 rounded-full bg-brand-purple/15 blur-3xl -z-10 pointer-events-none" />

              {/* Main Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-purple/60 shadow-2xl relative z-10 flex items-center justify-center bg-brand-dark-card">
                <img
                  src="/images/hiruni_avatar_2.jpg"
                  alt="Hiruni Dissanayake Profile Portrait"
                  className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Statistics Cards Row with 18px rounded corners & Purple/Orange Accents ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-24">
          {/* Card 1: Projects Completed (Purple) */}
          <div className="glass-panel p-6 rounded-[18px] text-left glass-card-hover flex flex-col justify-between min-h-[140px] reveal-scale border border-white/5 relative overflow-hidden bg-brand-dark-card/45">
            <div className="w-10 h-10 rounded-[18px] bg-brand-purple/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .966-.784 1.75-1.75 1.75H5.5a1.75 1.75 0 01-1.75-1.75v-4.25m16.5 0a2.25 2.25 0 00-2.25-2.25H5.5A2.25 2.25 0 003.25 14.15m17 0V9.45A2.247 2.247 0 0018 7.5H6.002a2.247 2.247 0 00-2.25 1.95v4.7m16.5 0a2.25 2.25 0 01-2.25 2.25H5.5a2.25 2.25 0 01-2.25-2.25M12 7.5V3.75c0-.414.336-.75.75-.75h2.5c.414 0 .75.336.75.75V7.5" />
              </svg>
            </div>
            <div>
              <p className="font-inter text-[10px] text-brand-dark-textMuted font-bold uppercase tracking-wider leading-snug">
                Projects Completed
              </p>
              <div className="flex flex-col items-start mt-1">
                <span className="font-poppins text-3xl font-extrabold text-white leading-none">
                  <AnimatedCounter end={10} suffix="+" />
                </span>
                <div className="w-10 h-1 bg-brand-purple rounded-full mt-2" />
              </div>
            </div>
          </div>

          {/* Card 2: Industry Experience (Purple) */}
          <div className="glass-panel p-6 rounded-[18px] text-left glass-card-hover flex flex-col justify-between min-h-[140px] reveal-scale border border-white/5 relative overflow-hidden bg-brand-dark-card/45">
            <div className="w-10 h-10 rounded-[18px] bg-brand-purple/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 21m-5.08-1.214a4.902 4.902 0 01-1.009-3.237c0-2.073 1.2-3.856 2.923-4.693m0 0A4.902 4.902 0 0112 11.25c1.47 0 2.805.647 3.722 1.678m-7.444 0a4.902 4.902 0 016.59 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-inter text-[10px] text-brand-dark-textMuted font-bold uppercase tracking-wider leading-snug">
                Months Experience
              </p>
              <div className="flex flex-col items-start mt-1">
                <span className="font-poppins text-3xl font-extrabold text-white leading-none">
                  <AnimatedCounter end={5} suffix="+" />
                </span>
                <div className="w-10 h-1 bg-brand-purple rounded-full mt-2" />
              </div>
            </div>
          </div>

          {/* Card 3: Technologies Used (Orange Highlight) */}
          <div className="glass-panel p-6 rounded-[18px] text-left glass-card-hover flex flex-col justify-between min-h-[140px] reveal-scale border border-white/5 relative overflow-hidden bg-brand-dark-card/45">
            <div className="w-10 h-10 rounded-[18px] bg-brand-orange/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div>
              <p className="font-inter text-[10px] text-brand-dark-textMuted font-bold uppercase tracking-wider leading-snug">
                Technologies Used
              </p>
              <div className="flex flex-col items-start mt-1">
                <span className="font-poppins text-3xl font-extrabold text-white leading-none">
                  <AnimatedCounter end={15} suffix="+" />
                </span>
                <div className="w-10 h-1 bg-brand-orange rounded-full mt-2" />
              </div>
            </div>
          </div>

          {/* Card 4: Learning Every Day (Purple) */}
          <div className="glass-panel p-6 rounded-[18px] text-left glass-card-hover flex flex-col justify-between min-h-[140px] reveal-scale border border-white/5 relative overflow-hidden bg-brand-dark-card/45">
            <div className="w-10 h-10 rounded-[18px] bg-brand-purple/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-inter text-[10px] text-brand-dark-textMuted font-bold uppercase tracking-wider leading-snug">
                Gov Sector
              </p>
              <div className="flex flex-col items-start mt-1">
                <span className="font-poppins text-3xl font-extrabold text-white leading-none">
                  5+    Projects Experience
                </span>
                <div className="w-10 h-1 bg-brand-purple rounded-full mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PDF Curriculum Vitae Preview & Download Modal ─── */}
      {isResumeOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsResumeOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
        >
          <div className="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] glass-panel p-4 sm:p-6 rounded-[22px] shadow-2xl bg-brand-dark-card border border-white/10 flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-purple/15 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins text-base sm:text-lg font-bold text-white leading-tight flex items-center gap-2">
                    <span>Hiruni Dissanayake CV</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-purple/20 text-brand-purple font-medium border border-brand-purple/30">
                      PDF Document
                    </span>
                  </h3>
                  <p className="font-inter text-xs text-brand-dark-textMuted hidden sm:block">
                    Business Analyst • Project Manager • Quality Assurance
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Download PDF Button */}
                <a
                  href="/Hiruni_Dissanayake_CV_v2.pdf"
                  download="Hiruni_Dissanayake_CV_v2.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-purple-secondary hover:opacity-95 text-white font-poppins font-semibold text-xs uppercase tracking-wider px-4 sm:px-6 py-2.5 rounded-full shadow-lg shadow-brand-purple/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>Download CV</span>
                </a>

                {/* Open in New Tab */}
                <a
                  href="/Hiruni_Dissanayake_CV_v2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white font-poppins font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full border border-white/10 transition-all duration-300"
                  title="Open PDF in new browser tab"
                >
                  <svg className="w-4 h-4 text-brand-dark-textMuted" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span>Open PDF</span>
                </a>

                {/* Close Modal Button */}
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/15 hover:scale-105 active:scale-95 transition-all text-white/80 hover:text-white"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body: PDF Preview Container */}
            <div className="flex-1 w-full mt-3 sm:mt-4 rounded-xl overflow-hidden bg-slate-950/80 border border-white/10 relative">
              <iframe
                src="/Hiruni_Dissanayake_CV_v2.pdf#toolbar=1"
                title="Hiruni Dissanayake CV Preview"
                className="w-full h-full border-0 rounded-xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-3 pt-3 border-t border-white/10 px-1 text-xs text-brand-dark-textMuted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Hiruni_Dissanayake_CV_v2.pdf (Official Document)</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="/Hiruni_Dissanayake_CV_v2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline sm:hidden text-[11px]"
                >
                  Open PDF in New Tab
                </a>
                <a
                  href="/Hiruni_Dissanayake_CV_v2.pdf"
                  download="Hiruni_Dissanayake_CV_v2.pdf"
                  className="font-poppins font-semibold text-brand-purple hover:text-brand-purple-secondary transition-colors flex items-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Click to Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
