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

  // Resume details print handler
  const handlePrint = () => {
    window.print();
  };

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
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-purple-secondary">Me</span>
              </h1>
              <p className="font-poppins text-lg sm:text-xl font-bold tracking-wide text-brand-purple-secondary mt-2">
                Business Analyst | Project Manager | QA Enthusiast
              </p>
            </div>

            {/* Headline / Intro Statement */}
            <p className="reveal font-inter text-sm sm:text-base text-brand-dark-textMuted leading-relaxed font-normal max-w-2xl">
              I'm an IT undergraduate with a passion for solving real world problems through technology. I specialize in business analysis, project management, and quality assurance to deliver solutions that create value for users and organizations.
            </p>
            <p className="reveal font-inter text-sm sm:text-base text-brand-dark-textMuted leading-relaxed font-normal max-w-2xl">
              I enjoy working on end-to-end projects — from understanding business needs to delivering efficient, user-friendly solutions.
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

              <button
                onClick={() => setIsResumeOpen(true)}
                className="group inline-flex items-center justify-center gap-2 bg-transparent border border-white/10 hover:border-brand-purple text-white font-poppins font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-purple/5"
              >
                Download Resume
                <svg className="w-4 h-4 text-white/60 group-hover:text-brand-purple transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
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
                Learning Every Day
              </p>
              <div className="flex flex-col items-start mt-1">
                <span className="font-poppins text-3xl font-extrabold text-white leading-none">
                  Always
                </span>
                <div className="w-10 h-1 bg-brand-purple rounded-full mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Interactive Resume Modal ─── */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark-bg/85 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel p-8 sm:p-10 rounded-[18px] shadow-2xl bg-brand-dark-card border border-white/10 flex flex-col justify-between">
            {/* Close Button */}
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-white"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Print View Wrapper */}
            <div id="resume-print-area" className="space-y-6 text-left">
              <div>
                <h3 className="font-poppins text-3xl font-extrabold text-white">
                  Hiruni Dissanayake
                </h3>
                <p className="font-poppins text-sm font-semibold uppercase tracking-wider text-brand-purple mt-1">
                  Business Analyst | IT Business Analyst
                </p>
              </div>

              <div className="h-[1px] bg-white/5" />

              <div className="grid md:grid-cols-12 gap-8 text-sm">
                {/* Left Side: Contact, Education, Skills */}
                <div className="md:col-span-5 space-y-6">
                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-brand-purple mb-2">
                      Contact Info
                    </h4>
                    <p className="text-xs text-brand-dark-textMuted leading-relaxed">
                      📧 hirunidissanayake116@gmail.com
                      <br />
                      🔗 https://www.linkedin.com/in/hiruni-dissanayake-2a7a65396
                      <br />
                      📍 Colombo, Sri Lanka
                    </p>
                  </div>

                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-brand-purple mb-2">
                      Education
                    </h4>
                    <p className="text-xs font-semibold text-white">
                      BSc (Hons) in Information Technology
                    </p>
                    <p className="text-[11px] text-brand-dark-textMuted">
                      Specializing in Information Systems Engineering
                      <br />
                      SLIIT • Undergraduate (Present)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-brand-purple mb-2">
                      Core BA Toolkit
                    </h4>
                    <ul className="text-xs text-brand-dark-textMuted space-y-1 list-disc pl-4">
                      <li>Requirements Gathering</li>
                      <li>Stakeholder Management</li>
                      <li>Wireframing (Figma / Draw.io)</li>
                      <li>System Documentation (SRS / UML)</li>
                      <li>Agile / Scrum Backlogs</li>
                      <li>SQL & Data Analysis</li>
                    </ul>
                  </div>
                </div>

                {/* Right Side: Experience */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-brand-purple mb-2">
                      Professional Statement
                    </h4>
                    <p className="text-xs text-brand-dark-textMuted leading-relaxed">
                      Motivated Information Systems Engineering undergraduate with strong foundational competencies in bridging business problems with scalable IT specifications. Experienced in documenting system flows, managing backlogs, and liaising between engineers and government agencies.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-brand-purple mb-2">
                      Experience Highlight
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-white">
                          Business Analyst Intern
                        </p>
                        <p className="text-[11px] text-brand-purple font-medium">
                          Road Development Authority (RDA) • 2026 - Present
                        </p>
                        <p className="text-xs text-brand-dark-textMuted leading-relaxed mt-1">
                          Analyzing process pipelines for public infrastructure portals, drafting system requirements, and facilitating Agile ceremonies under cross-agency IT projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-white/5">
              <button
                onClick={() => setIsResumeOpen(false)}
                className="font-poppins font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-white"
              >
                Close
              </button>
              <button
                onClick={handlePrint}
                className="font-poppins font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-purple-secondary text-white shadow-md shadow-brand-purple/10"
              >
                Print / Save PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
