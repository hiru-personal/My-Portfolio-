import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const courses = [
  { name: 'Systems Analysis & Design', desc: 'Analyzing system requirements, modeling workflows, and authoring technical system blueprints.' },
  { name: 'Database Management (DBMS)', desc: 'Relational data design, SQL querying, entity relationships, and transaction tracking.' },
  { name: 'IT Project Management', desc: 'Agile/Scrum principles, project schedules, risk management, and resource estimation.' },
  { name: 'Enterprise Architecture', desc: 'Mapping corporate workflows to software capabilities and data integration layers.' },
  { name: 'Software Quality Assurance', desc: 'Defining acceptance criteria, test execution patterns, and system verification workflows.' },
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
            <div className="w-12 h-[2px] bg-gradient-to-r from-brand-royal via-brand-violet to-brand-cyan rounded-full" />
            <p className="font-poppins text-sm font-semibold text-brand-royal dark:text-brand-violet uppercase tracking-[0.2em]">
              Academic Path
            </p>
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Education
          </h2>
        </div>

        {/* ─── SLIIT Primary Card ─── */}
        <div className="glass-panel p-8 md:p-10 rounded-[18px] mb-12 reveal text-left relative overflow-hidden border border-slate-200/80 dark:border-white/5 shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-royal/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div>
              <span className="inline-block text-[10px] font-poppins font-extrabold uppercase tracking-widest bg-brand-royal/10 text-brand-royal px-3 py-1.5 rounded-full mb-3 border border-brand-royal/20">
                Active Undergraduate
              </span>
              <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                BSc (Hons) in Information Technology
              </h3>
              <p className="font-poppins text-base font-bold text-brand-royal dark:text-brand-violet mt-1">
                Specializing in Information Systems Engineering
              </p>
            </div>
            
            <div className="text-left md:text-right font-poppins text-xs font-semibold">
              <p className="text-slate-900 dark:text-white uppercase tracking-wider font-bold">
                2024 - 2028 (Expected)
              </p>
              <p className="text-slate-500 dark:text-brand-dark-textMuted mt-0.5">
                SLIIT Malabe Campus
              </p>
            </div>
          </div>
          
          <p className="font-inter text-sm md:text-base text-slate-600 dark:text-brand-dark-textMuted leading-relaxed max-w-4xl">
            Pursuing a rigorous Systems Engineering curriculum designed to align core computer science foundations with business architectures. Academically trained to model operational logic, manage relational database designs, structure UML workflows, and deploy enterprise agile solutions.
          </p>
        </div>

        {/* ─── Coursework Grid ─── */}
        <h3 className="font-poppins text-lg font-bold text-slate-900 dark:text-white mb-8 text-left">
          Core Relevant Coursework
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => {
            const isCyanHighlight = i === 1 || i === 3;
            return (
              <div
                key={course.name}
                className={`glass-panel p-6 rounded-[18px] text-left reveal glass-card-hover border border-slate-200/80 dark:border-white/5 flex flex-col justify-between shadow-sm ${
                  isCyanHighlight ? 'hover:border-brand-cyan/30 hover:shadow-brand-cyan/10' : 'hover:border-brand-royal/30 hover:shadow-brand-royal/10'
                }`}
              >
                <div>
                  <h4 className="font-poppins text-base font-bold text-slate-900 dark:text-white mb-2 pt-2">
                    {course.name}
                  </h4>
                  <p className="font-inter text-xs text-slate-600 dark:text-brand-dark-textMuted leading-relaxed">
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
