import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const professionalQuals = [
  {
    title: 'AAT Sri Lanka – Passed Finalist (PF)',
    org: 'AAT Sri Lanka',
    reg: '3577974',
    status: 'Completed',
    desc: 'Completed all final stages of the Association of Accounting Technicians of Sri Lanka, establishing core competence in financial metrics and audit standards.',
    completed: true,
    highlight: false,
  },
  {
    title: 'CA Sri Lanka – Level 2',
    org: 'CA Sri Lanka',
    reg: '002410846',
    status: 'In Progress',
    desc: 'Actively preparing for Chartered Accountants Sri Lanka intermediate examinations, building expertise in corporate finance, auditing, and business laws.',
    completed: false,
    highlight: true, // Orange Highlight
  },
  {
    title: 'British Council English Course',
    org: 'British Council',
    status: 'Completed',
    desc: 'Completed advanced English modules to sharpen verbal reasoning, professional presentation, and corporate communication skills.',
    completed: true,
    highlight: false,
  }
];

const technicalQuals = [
  {
    title: 'GitHub 101 – GitHub for Beginners',
    org: 'GitHub',
    date: 'April 2026',
    desc: 'Certified in remote version control setups, branch merging rules, pull requests coordination, and repository tracking workflows.',
    highlight: false,
  },
  {
    title: 'Introduction to MERN Stack',
    org: 'Simplilearn',
    date: 'April 2026',
    desc: 'Learned foundational frameworks of MongoDB, Express.js, React, and Node.js to bridge business needs with database web models.',
    highlight: false,
  },
  {
    title: 'Git and GitHub 101',
    org: 'Software Engineering Student Community – SLIIT',
    date: 'February 2026',
    desc: 'Participated in hands-on workshops on code management, agile tracking systems, and developer-to-analyst workflow pipelines.',
    highlight: true, // Orange Highlight
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
            <div className="w-12 h-[2px] bg-gradient-to-r from-brand-purple to-brand-purple-secondary rounded-full" />
            <p className="font-poppins text-sm font-semibold text-brand-purple uppercase tracking-[0.2em]">
              Credentials
            </p>
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-white">
            Certifications & Qualifications
          </h2>
          <p className="font-inter text-sm text-brand-dark-textMuted mt-4 max-w-3xl text-left leading-relaxed">
            Bridging financial auditing insights (CA Sri Lanka & AAT) with digital systems management (MERN, Git/GitHub) to bring a dual-domain strategic advantage to enterprise business analysis.
          </p>
        </div>

        {/* ─── Category 1: Professional Qualifications ─── */}
        <div className="space-y-6 mb-16">
          <h3 className="font-poppins text-xl font-bold text-white text-left">
            Professional & Financial Qualifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {professionalQuals.map((qual, i) => {
              const isOrange = qual.highlight;
              return (
                <div
                  key={qual.title}
                  className={`glass-panel p-6 sm:p-7 rounded-[18px] text-left reveal-scale glass-card-hover border border-white/5 bg-brand-dark-card/45 flex flex-col justify-between ${
                    isOrange ? 'hover:border-brand-orange/20 hover:shadow-brand-orange/5' : 'hover:border-brand-purple/20 hover:shadow-brand-purple/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-poppins font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        qual.completed
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20'
                      }`}>
                        {qual.status}
                      </span>
                    </div>
                    
                    <h4 className="font-poppins text-base font-bold text-white">
                      {qual.title}
                    </h4>
                    <p className="font-inter text-xs text-brand-dark-textMuted font-semibold mt-1">
                      {qual.org}
                    </p>
                    
                    <p className="font-inter text-xs text-brand-dark-textMuted leading-relaxed mt-4">
                      {qual.desc}
                    </p>
                  </div>

                  {qual.reg && (
                    <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-poppins font-bold text-brand-dark-textMuted uppercase tracking-wider">
                      <span>Reg Number</span>
                      <span>{qual.reg}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Category 2: Digital & Technical Certifications ─── */}
        <div className="space-y-6">
          <h3 className="font-poppins text-xl font-bold text-white text-left">
            Digital & Technical Credentials
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {technicalQuals.map((qual, i) => {
              const isOrange = qual.highlight;
              return (
                <div
                  key={qual.title}
                  className={`glass-panel p-6 sm:p-7 rounded-[18px] text-left reveal-scale glass-card-hover border border-white/5 bg-brand-dark-card/45 flex flex-col justify-between ${
                    isOrange ? 'hover:border-brand-orange/20 hover:shadow-brand-orange/5' : 'hover:border-brand-purple/20 hover:shadow-brand-purple/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-poppins font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                        isOrange 
                          ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' 
                          : 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20'
                      }`}>
                        Completed
                      </span>
                    </div>
                    
                    <h4 className="font-poppins text-base font-bold text-white">
                      {qual.title}
                    </h4>
                    <p className="font-inter text-xs text-brand-dark-textMuted font-semibold mt-1">
                      {qual.org}
                    </p>
                    
                    <p className="font-inter text-xs text-brand-dark-textMuted leading-relaxed mt-4">
                      {qual.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-poppins font-bold text-brand-dark-textMuted uppercase tracking-wider">
                    <span>Issued Date</span>
                    <span>{qual.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
