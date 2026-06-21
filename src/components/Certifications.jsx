import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const professionalQuals = [
  {
    title: 'AAT Sri Lanka – Passed Finalist (PF)',
    org: 'AAT Sri Lanka',
    reg: '3577974',
    status: 'Completed',
    desc: 'Completed all final stages of the Association of Accounting Technicians of Sri Lanka, establishing core competence in financial metrics and audit standards.',
    icon: '📊',
    completed: true,
  },
  {
    title: 'CA Sri Lanka – Level 2',
    org: 'CA Sri Lanka',
    reg: '002410846',
    status: 'In Progress',
    desc: 'Actively preparing for Chartered Accountants Sri Lanka intermediate examinations, building expertise in corporate finance, auditing, and business laws.',
    icon: '🏛️',
    completed: false,
  },
  {
    title: 'British Council English Course',
    org: 'British Council',
    status: 'Completed',
    desc: 'Completed advanced English modules to sharpen verbal reasoning, professional presentation, and corporate communication skills.',
    icon: '🗣️',
    completed: true,
  }
];

const technicalQuals = [
  {
    title: 'GitHub 101 – GitHub for Beginners',
    org: 'GitHub',
    date: 'April 2026',
    desc: 'Certified in remote version control setups, branch merging rules, pull requests coordination, and repository tracking workflows.',
    icon: '🐙',
  },
  {
    title: 'Introduction to MERN Stack',
    org: 'Simplilearn',
    date: 'April 2026',
    desc: 'Learned foundational frameworks of MongoDB, Express.js, React, and Node.js to bridge business needs with database web models.',
    icon: '💻',
  },
  {
    title: 'Git and GitHub 101',
    org: 'Software Engineering Student Community – SLIIT',
    date: 'February 2026',
    desc: 'Participated in hands-on workshops on code management, agile tracking systems, and developer-to-analyst workflow pipelines.',
    icon: '🎓',
  }
];

function Certifications() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-ba-blue to-ba-pink rounded-full" />
            <p className="font-poppins text-sm font-semibold text-ba-blue dark:text-ba-blue-light uppercase tracking-[0.2em]">
              Credentials
            </p>
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-ba-dark dark:text-ba-white">
            Certifications & Qualifications
          </h2>
          <p className="font-inter text-sm text-ba-dark/60 dark:text-ba-light/60 mt-4 max-w-3xl text-left leading-relaxed">
            Bridging financial auditing insights (CA Sri Lanka & AAT) with digital systems management (MERN, Git/GitHub) to bring a dual-domain strategic advantage to enterprise business analysis.
          </p>
        </div>

        {/* ─── Category 1: Professional Qualifications ─── */}
        <div className="space-y-6 mb-16">
          <h3 className="font-poppins text-xl font-bold text-ba-dark dark:text-ba-white text-left flex items-center gap-2">
            <span>💼</span> Professional & Financial Qualifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {professionalQuals.map((qual) => (
              <div
                key={qual.title}
                className="glass-panel p-6 sm:p-7 rounded-3xl text-left reveal-scale glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{qual.icon}</span>
                    <span className={`text-[10px] font-poppins font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      qual.completed
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        : 'bg-ba-blue/10 text-ba-blue dark:text-ba-blue-light border border-ba-blue/20'
                    }`}>
                      {qual.status}
                    </span>
                  </div>
                  
                  <h4 className="font-poppins text-base font-bold text-ba-dark dark:text-ba-white">
                    {qual.title}
                  </h4>
                  <p className="font-inter text-xs text-ba-dark/50 dark:text-ba-light/50 font-semibold mt-1">
                    {qual.org}
                  </p>
                  
                  <p className="font-inter text-xs text-ba-dark/70 dark:text-ba-light/70 leading-relaxed mt-4">
                    {qual.desc}
                  </p>
                </div>

                {qual.reg && (
                  <div className="mt-6 pt-3 border-t border-ba-blue/10 dark:border-white/5 flex items-center justify-between text-[10px] font-poppins font-bold text-ba-dark/40 dark:text-ba-light/45 uppercase tracking-wider">
                    <span>Reg Number</span>
                    <span>{qual.reg}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ─── Category 2: Digital & Technical Certifications ─── */}
        <div className="space-y-6">
          <h3 className="font-poppins text-xl font-bold text-ba-dark dark:text-ba-white text-left flex items-center gap-2">
            <span>🐙</span> Digital & Technical Credentials
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {technicalQuals.map((qual) => (
              <div
                key={qual.title}
                className="glass-panel p-6 sm:p-7 rounded-3xl text-left reveal-scale glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{qual.icon}</span>
                    <span className="text-[10px] font-poppins font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-ba-pink/20 text-ba-dark dark:text-ba-pink-dark border border-ba-pink/30">
                      Completed
                    </span>
                  </div>
                  
                  <h4 className="font-poppins text-base font-bold text-ba-dark dark:text-ba-white">
                    {qual.title}
                  </h4>
                  <p className="font-inter text-xs text-ba-dark/50 dark:text-ba-light/50 font-semibold mt-1">
                    {qual.org}
                  </p>
                  
                  <p className="font-inter text-xs text-ba-dark/70 dark:text-ba-light/70 leading-relaxed mt-4">
                    {qual.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-ba-blue/10 dark:border-white/5 flex items-center justify-between text-[10px] font-poppins font-bold text-ba-dark/40 dark:text-ba-light/45 uppercase tracking-wider">
                  <span>Issued Date</span>
                  <span>{qual.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
