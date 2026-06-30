import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Project Monitoring Dashboard',
    subtitle: 'Highway construction tracking & budget analytics',
    description: 'Spearheaded requirements gathering sessions with civil engineers and financial controllers. Drafted the Software Requirements Specification (SRS) and wireframed progress trackers to monitor national highway budgets and physical completion milestones.',
    activities: ['Requirements Gathering', 'SRS Documentation', 'Budget Analytics'],
    impact: '35% Real-Time Construction Visibility Boost',
    tags: ['Agile / Jira', 'Confluence', 'SRS', 'Wireframes'],
    icon: '📊',
    highlight: false
  },
  {
    title: 'Highway Cabinet Paper Monitoring System',
    subtitle: 'State approval routing pipeline portal',
    description: 'Conducted requirements analysis workshops to model administrative routing processes. Created wireframes for document flow steps and authored detailed SRS documents for developers to automate cabinet paper progress updates.',
    activities: ['Requirement Analysis', 'Wireframing', 'SRS Documentation'],
    impact: '20% Reduction in Approval Lead Times',
    tags: ['Figma', 'BPMN 2.0', 'SRS', 'Workflows'],
    icon: '📂',
    highlight: true // Orange highlight
  },
  {
    title: 'RDA Cadre Management System',
    subtitle: 'Human resources audit & capacity metrics',
    description: 'Executed organizational analysis of RDA staffing divisions. Led stakeholder alignment interviews across multiple departments to define KPI metrics and support resource capacity modeling.',
    activities: ['Organizational Analysis', 'Stakeholder Meetings', 'KPI Support'],
    impact: 'Optimized Administrative Capacity Allocations',
    tags: ['Stakeholder alignment', 'KPI Modeling', 'Visio'],
    icon: '👥',
    highlight: false
  },
  {
    title: 'Transport Data Collection Platform',
    subtitle: 'Commuter survey metrics mobile portal',
    description: 'Gathered requirements for passenger statistics metrics. Documented user roles and data collection parameters, and wireframed responsive mobile web forms in Figma for field surveyors.',
    activities: ['Requirement Gathering', 'Documentation', 'Figma Wireframes'],
    impact: '40% Survey Data Entry Velocity Gain',
    tags: ['Figma', 'Data Modeling', 'Mobile UI Mockups'],
    icon: '🚌',
    highlight: false
  },
  {
    title: 'Metro Bus Management System',
    subtitle: 'Urban transit scheduling database & application',
    description: 'Analyzed urban transit scheduling bottlenecks. Managed relational database schema models using SQL and built interactive prototyping dashboards for path schedulers.',
    activities: ['SQL', 'Business Analysis', 'Prototype Development'],
    impact: 'Automated Route Optimization & Path Checks',
    tags: ['SQL Querying', 'Database Diagrams', 'Prototyping'],
    icon: '⚡',
    highlight: true // Orange highlight
  },
  {
    title: 'Seva Connect',
    subtitle: 'Citizen grievance & public query dashboard',
    description: 'Facilitated requirements analysis workshops for the public complaint management portal. Mapped workflow paths and designed interactive prototype mockups for support operators.',
    activities: ['Requirements Analysis', 'Prototype Development', 'Workflow Design'],
    impact: '25% Civic Query Resolution Speed-up',
    tags: ['User Flows', 'Interactive Prototypes', 'Workshops'],
    icon: '🤝',
    highlight: false
  }
];

function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-brand-purple to-brand-purple-secondary rounded-full" />
            <p className="font-poppins text-sm font-semibold text-brand-purple uppercase tracking-[0.2em]">
              Timeline & Work
            </p>
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-white">
            Professional Experience
          </h2>
        </div>

        {/* ─── Internship Header Banner with 18px rounded corners ─── */}
        <div className="glass-panel p-8 md:p-10 rounded-[18px] mb-16 reveal relative overflow-hidden bg-brand-dark-card/45 border border-white/5 shadow-xl">
          {/* Subtle decoration background */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-brand-purple/5 to-transparent blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div>
              <span className="inline-block text-[10px] font-poppins font-extrabold uppercase tracking-widest bg-brand-purple/15 text-brand-purple px-3 py-1.5 rounded-full mb-3 border border-brand-purple/20">
                Current Role
              </span>
              <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Business Analysis Intern
              </h3>
              <p className="font-poppins text-base font-bold text-white/70 mt-1">
                Road Development Authority (RDA)
              </p>
            </div>

            <div className="text-left md:text-right font-poppins text-xs font-semibold">
              <p className="text-brand-purple uppercase tracking-wider font-bold">
                🗓️ 2026 - Present
              </p>
              <p className="text-brand-dark-textMuted mt-1">
                📍 Colombo, Sri Lanka
              </p>
            </div>
          </div>

          <p className="font-inter text-sm md:text-base text-brand-dark-textMuted leading-relaxed max-w-4xl">
            Contributing to the RDA's digital transformation initiatives through Business Analysis, Quality Assurance, Project Coordination, and Software Development activities. Collaborating with stakeholders and technical teams to gather and analyze requirements, document business processes, conduct frontend, backend, and API testing, and support the development and delivery of digital solutions that enhance operational efficiency and streamline organizational workflows.
          </p>
        </div>

        {/* ─── Projects Vertical Timeline ─── */}
        <h3 className="font-poppins text-xl font-bold text-white mb-10 text-left">
          Key Projects & Case Studies at RDA
        </h3>

        <div className="relative pl-6 border-l border-white/10 space-y-12 text-left">
          {projects.map((project, i) => {
            const isHighlight = project.highlight;
            return (
              <div key={project.title} className="relative reveal">
                {/* Timeline Bullet (Purple with Orange Highlights) */}
                <div className={`absolute -left-[31px] top-2 w-4 h-4 rounded-full border-2 bg-brand-dark-bg flex items-center justify-center shadow-md ${
                  isHighlight ? 'border-brand-orange shadow-brand-orange/15' : 'border-brand-purple shadow-brand-purple/15'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isHighlight ? 'bg-brand-orange' : 'bg-brand-purple'}`} />
                </div>

                {/* Project Card (18px rounded) */}
                <div className={`glass-panel p-6 md:p-8 rounded-[18px] glass-card-hover border border-white/5 bg-brand-dark-card/45 shadow-lg ${
                  isHighlight ? 'hover:border-brand-orange/20' : 'hover:border-brand-purple/20'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`text-2xl w-10 h-10 rounded-xl flex items-center justify-center ${
                        isHighlight ? 'bg-brand-orange/10' : 'bg-brand-purple/10'
                      }`}>
                        {project.icon}
                      </span>
                      <div>
                        <h4 className="font-poppins text-lg md:text-xl font-bold text-white">
                          {project.title}
                        </h4>
                        <p className="font-inter text-xs text-brand-dark-textMuted font-medium mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Impact KPI Tag */}
                    <span className="font-poppins text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                      📈 {project.impact}
                    </span>
                  </div>

                  <p className="font-inter text-xs sm:text-sm text-brand-dark-textMuted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Grid detailing Actions vs Tools */}
                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                    <div>
                      <p className={`font-poppins font-bold uppercase tracking-wider text-[10px] mb-2 ${
                        isHighlight ? 'text-brand-orange' : 'text-brand-purple'
                      }`}>
                        Core BA Contributions
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.activities.map((act) => (
                          <span
                            key={act}
                            className="font-inter text-[11px] font-semibold text-white/80 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg"
                          >
                            ✓ {act}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-poppins font-bold uppercase tracking-wider text-[10px] text-white/50 mb-2">
                        Tools & Methodologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`font-inter text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg border ${
                              isHighlight 
                                ? 'text-brand-orange bg-brand-orange/5 border-brand-orange/15' 
                                : 'text-brand-purple bg-brand-purple/5 border-brand-purple/15'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
