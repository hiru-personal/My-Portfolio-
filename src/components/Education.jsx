import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const courses = [
  { name: 'Systems Analysis & Design', icon: '📐', desc: 'Analyzing system requirements, modeling workflows, and authoring technical system blueprints.' },
  { name: 'Database Management (DBMS)', icon: '🗄️', desc: 'Relational data design, SQL querying, entity relationships, and transaction tracking.' },
  { name: 'IT Project Management', icon: '📅', desc: 'Agile/Scrum principles, project schedules, risk management, and resource estimation.' },
  { name: 'Enterprise Architecture', icon: '🏢', desc: 'Mapping corporate workflows to software capabilities and data integration layers.' },
  { name: 'Software Quality Assurance', icon: '✓', desc: 'Defining acceptance criteria, test execution patterns, and system verification workflows.' },
];

function Education() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-brand-purple to-brand-purple-secondary rounded-full" />
            <p className="font-poppins text-sm font-semibold text-brand-purple uppercase tracking-[0.2em]">
              Academic Path
            </p>
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-white">
            Education
          </h2>
        </div>

        {/* ─── SLIIT Primary Card with 18px rounded corners ─── */}
        <div className="glass-panel p-8 md:p-10 rounded-[18px] mb-12 reveal text-left relative overflow-hidden border border-white/5 bg-brand-dark-card/45 shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-purple/5 to-transparent blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div>
              <span className="inline-block text-[10px] font-poppins font-extrabold uppercase tracking-widest bg-brand-purple/15 text-brand-purple px-3 py-1.5 rounded-full mb-3 border border-brand-purple/20">
                Active Undergraduate
              </span>
              <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-white leading-tight">
                BSc (Hons) in Information Technology
              </h3>
              <p className="font-poppins text-base font-bold text-brand-purple mt-1">
                Specializing in Information Systems Engineering
              </p>
            </div>
            
            <div className="text-left md:text-right font-poppins text-xs font-semibold">
              <p className="text-white uppercase tracking-wider font-bold">
                🎓 2024 - 2028 (Expected)
              </p>
              <p className="text-brand-dark-textMuted mt-1">
                Sri Lanka Institute of Information Technology (SLIIT)
              </p>
            </div>
          </div>
          
          <p className="font-inter text-sm md:text-base text-brand-dark-textMuted leading-relaxed max-w-4xl">
            Pursuing a rigorous Systems Engineering curriculum designed to align core computer science foundations with business architectures. Academically trained to model operational logic, manage relational database designs, structure UML workflows, and deploy enterprise agile solutions.
          </p>
        </div>

        {/* ─── Coursework Grid (Alternating Hover Borders) ─── */}
        <h3 className="font-poppins text-lg font-bold text-white mb-8 text-left">
          Core Relevant Coursework
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => {
            const isOrangeHighlight = i === 1 || i === 3;
            return (
              <div
                key={course.name}
                className={`glass-panel p-6 rounded-[18px] text-left reveal glass-card-hover border border-white/5 bg-brand-dark-card/45 flex flex-col justify-between ${
                  isOrangeHighlight ? 'hover:border-brand-orange/20 hover:shadow-brand-orange/5' : 'hover:border-brand-purple/20 hover:shadow-brand-purple/5'
                }`}
              >
                <div>
                  <span className={`text-2xl w-10 h-10 rounded-[18px] flex items-center justify-center mb-4 ${
                    isOrangeHighlight ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-purple/10 text-brand-purple'
                  }`}>
                    {course.icon}
                  </span>
                  <h4 className="font-poppins text-base font-bold text-white mb-2">
                    {course.name}
                  </h4>
                  <p className="font-inter text-xs text-brand-dark-textMuted leading-relaxed">
                    {course.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
