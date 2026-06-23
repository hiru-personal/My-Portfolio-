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
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* ─── Left Column: Personal Copy ─── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Internship Badge */}
            <div className="reveal inline-flex items-center gap-2 bg-ba-white/60 dark:bg-ba-dark/40 backdrop-blur-md border border-ba-pink/30 dark:border-ba-pink/20 text-ba-pink-dark dark:text-ba-pink rounded-full px-5 py-2.5 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-poppins text-xs font-bold uppercase tracking-[0.15em]">
                Currently Interning at Road Development Authority (RDA)
              </span>
            </div>

            {/* Name and Professional Title */}
            <div className="reveal space-y-2">
              <h1 className="font-poppins text-5xl sm:text-6xl md:text-7xl font-extrabold text-ba-dark dark:text-ba-white tracking-tight leading-[1.05]">
                D. H. Hiruni Dissanayake
              </h1>
              <p className="font-poppins text-lg sm:text-xl font-bold uppercase tracking-wider text-ba-blue dark:text-ba-blue-light">
                Business Analyst | QA | Project Manager 
              </p>
            </div>

            {/* Headline */}
            <h2 className="reveal font-poppins text-xl sm:text-2xl md:text-3xl font-extrabold text-ba-dark/85 dark:text-ba-white/90 leading-tight">
              Transforming Business Needs into Effective Digital Solutions Through Analysis, Strategy, and Innovation.
            </h2>

            {/* Professional Summary */}
            <p className="reveal font-inter text-sm sm:text-base text-ba-dark/70 dark:text-ba-light/70 leading-relaxed font-normal max-w-2xl">
              Information Systems Engineering undergraduate at SLIIT with hands-on experience in business analysis, requirements gathering, stakeholder management, wireframing, QA, Project Management, Software Development and system documentation. Currently contributing to digital transformation initiatives at the Road Development Authority.
            </p>

            {/* CTA Buttons */}
            <div className="reveal flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-ba-blue to-ba-pink/90 text-ba-white font-poppins font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded-2xl shadow-lg shadow-ba-blue/10 hover:shadow-ba-pink/25 hover:scale-[1.01] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                View Projects
              </a>
              
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-ba-white/60 dark:bg-ba-dark/40 backdrop-blur-md border border-ba-dark/10 dark:border-white/10 text-ba-dark dark:text-ba-white font-poppins font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded-2xl hover:border-ba-blue/40 hover:text-ba-blue dark:hover:text-ba-blue-light transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                Download Resume/CV
              </button>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-transparent hover:border-ba-blue/20 dark:hover:border-white/10 font-poppins font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded-2xl text-ba-blue dark:text-ba-blue-light hover:bg-ba-blue/5 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* ─── Right Column: Avatar Portrait + Side Tags ─── */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 pt-8 lg:pt-0 reveal-scale">
            {/* Avatar Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shrink-0">
              {/* Decorative background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-ba-blue/20 to-ba-pink/30 dark:from-ba-blue/10 dark:to-ba-pink/15 blur-2xl animate-pulse-soft -z-10" />
              
              {/* Glass photo frame */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-ba-white/60 dark:border-ba-dark/60 shadow-2xl glass-panel relative z-10 flex items-center justify-center">
                <img
                  src="/images/hiruni_avatar_2.jpg"
                  alt="Hiruni Dissanayake Profile Portrait"
                  className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Static Vertically Stacked Tags Outside Picture */}
            <div className="flex flex-col gap-3.5 items-start shrink-0">
              <div className="glass-panel py-2.5 px-4 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-ba-dark dark:text-ba-white shadow-md whitespace-nowrap transition-transform duration-300 hover:translate-x-1.5 cursor-default">
                <span className="text-sm"></span> Requirements Gathering
              </div>

              <div className="glass-panel py-2.5 px-4 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-ba-dark dark:text-ba-white shadow-md whitespace-nowrap transition-transform duration-300 hover:translate-x-1.5 cursor-default">
                <span className="text-sm"></span> Wireframing / UI Mockups
              </div>
                <div className="glass-panel py-2.5 px-4 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-ba-dark dark:text-ba-white shadow-md whitespace-nowrap transition-transform duration-300 hover:translate-x-1.5 cursor-default">
                <span className="text-sm"></span> Project Management 
              </div>
                <div className="glass-panel py-2.5 px-4 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-ba-dark dark:text-ba-white shadow-md whitespace-nowrap transition-transform duration-300 hover:translate-x-1.5 cursor-default">
                <span className="text-sm"></span> QA Testing & Bug Tracking
              </div>

              <div className="glass-panel py-2.5 px-4 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-ba-dark dark:text-ba-white shadow-md whitespace-nowrap transition-transform duration-300 hover:translate-x-1.5 cursor-default">
                <span className="text-sm"></span> Stakeholder Management
              </div>
            </div>
          </div>
        </div>

        {/* ─── Statistics Cards Row ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-24">
          {/* Card 1 */}
          <div className="glass-panel p-6 rounded-3xl text-center glass-card-hover flex flex-col justify-center items-center min-h-[120px] reveal-scale">
            <p className="font-poppins text-3xl sm:text-4xl font-extrabold text-ba-blue dark:text-ba-blue-light mb-1">
              <AnimatedCounter end={10} suffix="+" />
            </p>
            <p className="font-inter text-[10px] sm:text-xs text-ba-dark/60 dark:text-ba-light/60 font-bold uppercase tracking-wider leading-snug">
              Projects Completed
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-6 rounded-3xl text-center glass-card-hover flex flex-col justify-center items-center min-h-[120px] reveal-scale">
            <p className="font-poppins text-3xl sm:text-4xl font-extrabold text-ba-blue dark:text-ba-blue-light mb-1">
              <AnimatedCounter end={5} suffix="+" />
            </p>
            <p className="font-inter text-[10px] sm:text-xs text-ba-dark/60 dark:text-ba-light/60 font-bold uppercase tracking-wider leading-snug">
              Months Industry Experience
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-6 rounded-3xl text-center glass-card-hover flex flex-col justify-center items-center min-h-[120px] reveal-scale">
            <p className="font-poppins text-3xl sm:text-4xl font-extrabold text-ba-blue dark:text-ba-blue-light mb-1">
              <AnimatedCounter end={8} suffix="+" />
            </p>
            <p className="font-inter text-[10px] sm:text-xs text-ba-dark/60 dark:text-ba-light/60 font-bold uppercase tracking-wider leading-snug">
              Business Analysis Skills
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel p-6 rounded-3xl text-center glass-card-hover flex flex-col justify-center items-center min-h-[120px] reveal-scale border-ba-pink/40 dark:border-ba-pink/20">
            <p className="font-poppins text-lg sm:text-xl font-extrabold text-ba-pink-dark dark:text-ba-pink mb-2">
              Goverment Sector
            </p>
            <p className="font-inter text-[10px] sm:text-xs text-ba-dark/60 dark:text-ba-light/60 font-bold uppercase tracking-wider leading-snug">
              Project Experience
            </p>
          </div>
           {/* Card 5 */}
          <div className="glass-panel p-6 rounded-3xl text-center glass-card-hover flex flex-col justify-center items-center min-h-[120px] reveal-scale">
            <p className="font-poppins text-3xl sm:text-4xl font-extrabold text-ba-blue dark:text-ba-blue-light mb-1">
              <AnimatedCounter end={2} suffix="+" />
            </p>
            <p className="font-inter text-[10px] sm:text-xs text-ba-dark/60 dark:text-ba-light/60 font-bold uppercase tracking-wider leading-snug">
              Projects QA Testing & Bug Tracking Skills
            </p>
          </div>
           {/* Card 2 */}
          <div className="glass-panel p-6 rounded-3xl text-center glass-card-hover flex flex-col justify-center items-center min-h-[120px] reveal-scale">
            <p className="font-poppins text-3xl sm:text-4xl font-extrabold text-ba-blue dark:text-ba-blue-light mb-1">
              <AnimatedCounter end={2} suffix="+" />
            </p>
            <p className="font-inter text-[10px] sm:text-xs text-ba-dark/60 dark:text-ba-light/60 font-bold uppercase tracking-wider leading-snug">
              Project Management Skills
            </p>
          </div>
        </div>
      </div>

      {/* ─── Interactive Resume Modal ─── */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ba-dark/60 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel p-8 sm:p-10 rounded-3xl shadow-2xl bg-ba-white/95 dark:bg-ba-dark/95 border border-ba-blue/20 flex flex-col justify-between">
            {/* Close Button */}
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-ba-dark/5 dark:bg-white/5 hover:bg-ba-dark/10 hover:scale-105 active:scale-95 transition-all text-ba-dark dark:text-ba-white"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Print View Wrapper */}
            <div id="resume-print-area" className="space-y-6 text-left">
              <div>
                <h3 className="font-poppins text-3xl font-extrabold text-ba-dark dark:text-ba-white">
                  Hiruni Dissanayake
                </h3>
                <p className="font-poppins text-sm font-semibold uppercase tracking-wider text-ba-blue dark:text-ba-blue-light mt-1">
                  Business Analyst | IT Business Analyst
                </p>
              </div>

              <div className="h-[1px] bg-ba-blue/10 dark:bg-white/5" />

              <div className="grid md:grid-cols-12 gap-8 text-sm">
                {/* Left Side: Contact, Education, Skills */}
                <div className="md:col-span-5 space-y-6">
                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-ba-blue dark:text-ba-blue-light mb-2">
                      Contact Info
                    </h4>
                    <p className="text-xs text-ba-dark/70 dark:text-ba-light/70 leading-relaxed">
                      📧 hiruni.dissanayake@example.com
                      <br />
                      🔗 linkedin.com/in/hirunidissanayake
                      <br />
                      📍 Colombo, Sri Lanka
                    </p>
                  </div>

                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-ba-blue dark:text-ba-blue-light mb-2">
                      Education
                    </h4>
                    <p className="text-xs font-semibold text-ba-dark dark:text-ba-white">
                      BSc (Hons) in Information Technology
                    </p>
                    <p className="text-[11px] text-ba-dark/60 dark:text-ba-light/60">
                      Specializing in Information Systems Engineering
                      <br />
                      SLIIT • Undergraduate (Present)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-ba-blue dark:text-ba-blue-light mb-2">
                      Core BA Toolkit
                    </h4>
                    <ul className="text-xs text-ba-dark/75 dark:text-ba-light/75 space-y-1 list-disc pl-4">
                      <li>Requirements Gathering</li>
                      <li>Stakeholder Management</li>
                      <li>Wireframing (Figma / Draw.io)</li>
                      <li>System Documentation (SRS / UML)</li>
                      <li>Agile / Scrum Backlogs</li>
                      <li>SQL & Data Analysis</li>
                    </ul>
                  </div>
                </div>

                {/* Right Side: Professional Summary, Experience */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-ba-blue dark:text-ba-blue-light mb-2">
                      Professional Statement
                    </h4>
                    <p className="text-xs text-ba-dark/75 dark:text-ba-light/75 leading-relaxed">
                      Motivated Information Systems Engineering undergraduate with strong foundational competencies in bridging business problems with scalable IT specifications. Experienced in documenting system flows, managing backlogs, and liaising between engineers and government agencies.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-ba-blue dark:text-ba-blue-light mb-2">
                      Experience Highlight
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-ba-dark dark:text-ba-white">
                          Business Analyst Intern
                        </p>
                        <p className="text-[11px] text-ba-blue dark:text-ba-blue-light font-medium">
                          Road Development Authority (RDA) • 2026 - Present
                        </p>
                        <p className="text-xs text-ba-dark/70 dark:text-ba-light/70 leading-relaxed mt-1">
                          Analyzing process pipelines for public infrastructure portals, drafting system requirements, and facilitating Agile ceremonies under cross-agency IT projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-ba-blue/10 dark:border-white/5">
              <button
                onClick={() => setIsResumeOpen(false)}
                className="font-poppins font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl bg-ba-dark/5 dark:bg-white/5 hover:bg-ba-dark/10 transition text-ba-dark dark:text-ba-white"
              >
                Close
              </button>
              <button
                onClick={handlePrint}
                className="font-poppins font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl bg-ba-blue hover:bg-ba-blue-dark transition text-white shadow-md shadow-ba-blue/10"
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
