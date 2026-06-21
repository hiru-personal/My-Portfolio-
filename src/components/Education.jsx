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
            <div className="w-12 h-[2px] bg-gradient-to-r from-ba-blue to-ba-pink rounded-full" />
            <p className="font-poppins text-sm font-semibold text-ba-blue dark:text-ba-blue-light uppercase tracking-[0.2em]">
              Academic Path
            </p>
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-ba-dark dark:text-ba-white">
            Education
          </h2>
        </div>

        {/* ─── SLIIT Primary Card ─── */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl mb-12 reveal text-left relative overflow-hidden border border-ba-blue/10">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-ba-pink/5 to-transparent blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div>
              <span className="inline-block text-[10px] font-poppins font-extrabold uppercase tracking-widest bg-ba-pink/15 text-ba-dark dark:text-ba-pink-dark px-3 py-1.5 rounded-full mb-3 border border-ba-pink/30">
                Active Undergraduate
              </span>
              <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-ba-dark dark:text-ba-white leading-tight">
                BSc (Hons) in Information Technology
              </h3>
              <p className="font-poppins text-base font-bold text-ba-blue dark:text-ba-blue-light mt-1">
                Specializing in Information Systems Engineering
              </p>
            </div>
            
            <div className="text-left md:text-right font-poppins text-xs font-semibold">
              <p className="text-ba-dark dark:text-ba-white uppercase tracking-wider font-bold">
                🎓 2024 - 2028 (Expected)
              </p>
              <p className="text-ba-dark/45 dark:text-ba-light/45 mt-1">
                Sri Lanka Institute of Information Technology (SLIIT)
              </p>
            </div>
          </div>
          
          <p className="font-inter text-sm md:text-base text-ba-dark/75 dark:text-ba-light/75 leading-relaxed max-w-4xl">
            Pursuing a rigorous Systems Engineering curriculum designed to align core computer science foundations with business architectures. Academically trained to model operational logic, manage relational database designs, structure UML workflows, and deploy enterprise agile solutions.
          </p>
        </div>

        {/* ─── Coursework Grid ─── */}
        <h3 className="font-poppins text-lg font-bold text-ba-dark dark:text-ba-white mb-8 text-left">
          Core Relevant Coursework
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="glass-panel p-6 rounded-3xl text-left reveal glass-card-hover flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl w-10 h-10 rounded-xl bg-ba-blue/10 dark:bg-ba-blue/20 flex items-center justify-center mb-4">
                  {course.icon}
                </span>
                <h4 className="font-poppins text-base font-bold text-ba-dark dark:text-ba-white mb-2">
                  {course.name}
                </h4>
                <p className="font-inter text-xs text-ba-dark/70 dark:text-ba-light/70 leading-relaxed">
                  {course.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
