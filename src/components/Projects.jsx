import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Reusable animated statistics card
function StatCard({ label, count, isNumeric, color = "purple", delay }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isNumeric) {
      setValue(count);
      return;
    }
    const target = parseInt(count, 10);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / 1200, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    const timer = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timer);
  }, [count, isNumeric, delay]);

  return (
    <div className={`glass-panel p-5 rounded-[18px] flex flex-col justify-center items-center text-center glass-card-hover min-h-[110px] reveal-scale border border-white/5 bg-brand-dark-card/45 shadow-md hover:border-brand-${color}/20`}>
      <p className={`font-poppins text-2xl sm:text-3xl font-extrabold mb-1 ${
        color === "orange" ? "text-brand-orange" : "text-brand-purple"
      }`}>
        {isNumeric ? `${value}+` : count}
      </p>
      <p className="font-inter text-[10px] sm:text-xs text-brand-dark-textMuted font-bold uppercase tracking-wider leading-snug">
        {label}
      </p>
    </div>
  );
}

const academicProjects = [
  {
    id: 'apparel',
    title: 'Apparel Production & Inventory Management System',
    category: 'Software Development',
    categories: ['BA', 'Dev'],
    tools: ['Java', 'MySQL', 'IntelliJ IDEA'],
    description: 'A real-client project developed for an apparel manufacturing company to streamline production management, inventory tracking, and order processing workflows.',
    responsibilities: [
      'Conducted requirements elicitation workshops with the garment factory management team.',
      'Created granular user stories and acceptance criteria in Jira.',
      'Participated in Agile sprints, daily Stand-ups, and retrospective ceremonies.',
      'Authored the Software Requirements Specification (SRS) document, mapping system capabilities.',
      'Developed the secure multi-role Authentication Module.',
      'Built the Order Management Module to handle customer invoices and batch orders.'
    ],
    impact: 'Reduced stock inventory delays and optimized factory production batch scheduling.',
    highlights: [
      'Real industry client project',
      'Agile SCRUM environment',
      'Full business analysis documentation',
      'Inventory optimization analysis support'
    ],
    icon: '👗',
    skills: ['Requirements Elicitation', 'SRS Documentation', 'Database Relational Design', 'Java GUI Core'],
    highlight: false
  },
  {
    id: 'parking',
    title: 'Parking Slot Management System',
    category: 'Software Development',
    categories: ['Dev'],
    tools: ['Java', 'SQL'],
    description: 'An online parking reservation platform enabling users to check slot availability, reserve slots, and manage bookings efficiently.',
    responsibilities: [
      'Engineered the database booking module using standard SQL constraints.',
      'Structured database normalization models to prevent double-booking conflicts.',
      'Designed user reservation workflows to support web portal booking operations.'
    ],
    impact: 'Automated booking controls, saving manual operations and boosting spot utilization.',
    highlights: [
      'End-to-end slot booking process',
      'Database-driven scheduling solution',
      'User-focused UX workflow design'
    ],
    icon: '🚗',
    skills: ['Database Normalization', 'Workflow Blueprinting', 'Software Implementation'],
    highlight: false
  },
  {
    id: 'jcb',
    title: 'JCB Vehicle Booking System',
    category: 'Business Systems Analysis',
    categories: ['BA'],
    tools: ['Java', 'MySQL'],
    description: 'A booking platform designed for managing heavy logistics vehicle reservations, operator accounts, and admin panel records.',
    responsibilities: [
      'Mapped corporate roles and built authentication boundaries for drivers, operators, and administrators.',
      'Designed administrative dashboard features to audit logistics bookings.',
      'Managed database tables for vehicle status flags.'
    ],
    impact: 'Streamlined logistics booking schedules, cutting booking conflicts to 0%.',
    highlights: [
      'Role-based access control policies',
      'Secure transaction database logging',
      'Corporate operational workflow support'
    ],
    icon: '🚜',
    skills: ['Role-based Authorization', 'System Audit Trails', 'Database Operations'],
    highlight: true // Orange highlight
  },
  {
    id: 'greenhouse',
    title: 'Automated Greenhouse Prototype',
    category: 'IoT & Automation',
    categories: ['IoT'],
    tools: ['Arduino Uno', 'C Programming'],
    description: 'A smart greenhouse system capable of monitoring environmental conditions and automatically controlling ventilation based on temperature and humidity data.',
    responsibilities: [
      'Assembled DHT11 temperature-humidity sensors with Arduino circuit boards.',
      'Wrote automated C-code scripts controlling relay outputs and ventilation fans.',
      'Conducted system behavior and extreme condition validation testing.'
    ],
    impact: 'Continuous automated crop status checks, cutting ventilation breakdown risks.',
    highlights: [
      'Automation script deployment',
      'Real-time condition telemetry monitoring',
      'Hands-on embedded systems experience'
    ],
    icon: '🌱',
    skills: ['Embedded C Scripting', 'Hardware Integration', 'Testing & Verification'],
    highlight: false
  }
];

function Projects() {
  const sectionRef = useScrollReveal();
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  // Filter project lists
  const filteredProjects = academicProjects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ba') return project.categories.includes('BA');
    if (filter === 'dev') return project.categories.includes('Dev');
    if (filter === 'iot') return project.categories.includes('IoT');
    return true;
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="reveal mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-brand-purple to-brand-purple-secondary rounded-full" />
              <p className="font-poppins text-sm font-semibold text-brand-purple uppercase tracking-[0.2em]">
                Academic Projects
              </p>
            </div>
            <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Academic Projects
            </h2>
            <p className="font-inter text-xs sm:text-sm text-brand-dark-textMuted leading-relaxed mt-4">
              A collection of university projects demonstrating business analysis, software development, system design, problem-solving, stakeholder-focused thinking, and technical implementation skills.
            </p>
          </div>

          {/* Interactive Filters (Pill Selector, 18px rounded) */}
          <div className="inline-flex p-1.5 rounded-[18px] bg-brand-dark-card border border-white/5 relative z-10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ba', label: 'Business Analysis' },
              { id: 'dev', label: 'Software Dev' },
              { id: 'iot', label: 'IoT & Automation' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`font-poppins text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-brand-purple to-brand-purple-secondary text-white shadow-md shadow-brand-purple/10'
                    : 'text-brand-dark-textMuted hover:text-brand-purple'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Animated Statistics Row with Subtle Orange Highlight ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard label="Academic Projects" count="4" isNumeric={true} color="purple" delay={100} />
          <StatCard label="Real Client Experience" count="👗 Garment" isNumeric={false} color="purple" delay={200} />
          <StatCard label="Agile Participation" count="✓ Scrum" isNumeric={false} color="orange" delay={300} /> {/* Orange highlight */}
          <StatCard label="BA Documentation Experience" count="📄 SRS" isNumeric={false} color="purple" delay={400} />
        </div>

        {/* ─── Projects Grid ─── */}
        <div
          key={filter}
          className="grid sm:grid-cols-2 gap-6 text-left"
        >
          {filteredProjects.map((project) => {
            const isHighlight = project.highlight;
            return (
              <div
                key={project.id}
                className={`glass-panel p-6 sm:p-8 rounded-[18px] glass-card-hover border border-white/5 bg-brand-dark-card/45 flex flex-col justify-between ${
                  isHighlight ? 'hover:border-brand-orange/20' : 'hover:border-brand-purple/20'
                }`}
              >
                <div>
                  {/* Header info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-[18px] flex items-center justify-center text-2xl ${
                      isHighlight ? 'bg-brand-orange/10' : 'bg-brand-purple/10'
                    }`}>
                      {project.icon}
                    </div>
                    <span className={`text-[10px] font-poppins font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full border ${
                      isHighlight 
                        ? 'text-brand-orange bg-brand-orange/10 border-brand-orange/15' 
                        : 'text-brand-purple bg-brand-purple/10 border-brand-purple/15'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-poppins text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-brand-dark-textMuted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-inter text-[10px] font-bold uppercase tracking-wider text-white/60 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action and Metrics */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="font-poppins text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                    🎯 Impact Verified
                  </span>
                  
                  <button
                    onClick={() => setActiveProject(project)}
                    className="font-poppins font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-purple-secondary hover:opacity-90 text-white shadow-md shadow-brand-purple/10 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Interactive Learn More Case Study Modal ─── */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark-bg/85 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel p-8 sm:p-10 rounded-[18px] shadow-2xl bg-brand-dark-card border border-white/10 flex flex-col justify-between">
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-white"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="space-y-6 text-left">
              <div>
                <span className="inline-block text-[9px] font-poppins font-extrabold uppercase tracking-widest bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full border border-brand-purple/15 mb-2">
                  {activeProject.category}
                </span>
                <h3 className="font-poppins text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {activeProject.title}
                </h3>
              </div>

              <div className="h-[1px] bg-white/5" />

              {/* Description Block */}
              <div className="space-y-2">
                <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-brand-purple">
                  Project Overview
                </h4>
                <p className="font-inter text-xs sm:text-sm text-brand-dark-textMuted leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
                {/* Left Side: Responsibilities */}
                <div>
                  <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-brand-purple mb-3">
                    Core Responsibilities
                  </h4>
                  <ul className="text-xs text-brand-dark-textMuted space-y-2 list-disc pl-4 leading-relaxed">
                    {activeProject.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Achievements, Impact & Tools */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-brand-purple mb-3">
                      Key Highlights & Impact
                    </h4>
                    <ul className="text-xs text-brand-dark-textMuted space-y-2 list-disc pl-4 leading-relaxed mb-4">
                      {activeProject.highlights.map((high, index) => (
                        <li key={index}>{high}</li>
                      ))}
                    </ul>
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                      <p className="font-poppins text-[10px] font-extrabold uppercase tracking-wide text-emerald-400">
                        📈 Estimated Outcome:
                      </p>
                      <p className="font-inter text-xs text-brand-dark-textMuted mt-1 leading-snug">
                        {activeProject.impact}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-poppins font-bold uppercase tracking-wider text-xs text-white/50 mb-2.5">
                      Tool & Methodology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tools.concat(activeProject.skills).map((tag) => (
                        <span
                          key={tag}
                          className="font-inter text-[10px] font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/5 border border-brand-purple/15 px-2 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-white/5">
              <button
                onClick={() => setActiveProject(null)}
                className="font-poppins font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
