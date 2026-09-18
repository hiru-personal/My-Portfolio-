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
    highlight: false
  },
  {
    title: 'Highway Cabinet Paper Monitoring System',
    subtitle: 'State approval routing pipeline portal',
    description: 'Conducted requirements analysis workshops to model administrative routing processes. Created wireframes for document flow steps and authored detailed SRS documents for developers to automate cabinet paper progress updates.',
    activities: ['Requirement Analysis', 'Wireframing', 'SRS Documentation'],
    impact: '20% Reduction in Approval Lead Times',
    tags: ['Figma', 'BPMN 2.0', 'SRS', 'Workflows'],
    highlight: true // Orange highlight
  },
  {
    title: 'RDA Cadre Management System',
    subtitle: 'Human resources audit & capacity metrics',
    description: 'Executed organizational analysis of RDA staffing divisions. Led stakeholder alignment interviews across multiple departments to define KPI metrics and support resource capacity modeling.',
    activities: ['Organizational Analysis', 'Stakeholder Meetings', 'KPI Support'],
    impact: 'Optimized Administrative Capacity Allocations',
    tags: ['Stakeholder alignment', 'KPI Modeling', 'Visio'],
    highlight: false
  },
  {
    title: 'Highway Letter Management System',
    subtitle: 'Digital Letter Processing & Tracking System',
    description: 'Developed a web-based, mobile-responsive Letter Management System for the Highways Division of the Ministry of Transport, Highways and Urban Development, Sri Lanka. The system digitizes the complete lifecycle of official correspondence, replacing manual Excel-based tracking with an automated workflow for letter registration, routing, tracking, and closure.',
    activities: ['Contributed to requirement engineering, prototype design, and system documentation to support the development of an efficient correspondence management solution with improved visibility, accountability, and workflow control.'],
    impact: 'Replaced Manual Excel-Based Tracking with a Centralized Digital Workflow',
    tags: ['Business Analysis', 'Requirements Engineering', 'SRS', 'UML', 'Prototype Design', 'Workflow Automation', 'Document Management'],
    highlight: true // Orange highlight
  },
  {
    title: 'Transport Data Collection Platform',
    subtitle: 'Commuter survey metrics mobile portal',
    description: 'Gathered requirements for passenger statistics metrics. Documented user roles and data collection parameters, and wireframed responsive mobile web forms in Figma for field surveyors.',
    activities: ['Requirement Gathering', 'Documentation', 'Figma Wireframes'],
    impact: '40% Survey Data Entry Velocity Gain',
    tags: ['Figma', 'Data Modeling', 'Mobile UI Mockups'],
    highlight: false
  },
  {
    title: 'Railway Letter Management System (LMS)',
    subtitle: 'Digital Correspondence User Tracking & Workflow Management System',
    description: 'Developed a web-based Letter Management System for the Letter Department of Sri Lanka Railways to replace manual paper-based letter registers with a centralized digital solution. The system enables incoming letter registration, reply and approval tracking, document management, reminder handling, recipient routing, and activity monitoring through dashboards and audit history.',
    activities: ['Involved throughout the software development lifecycle, including requirement analysis, workflow design, documentation, application development, and QA testing to ensure a reliable and efficient correspondence management solution.'],
    impact: 'Improved Letter Tracking and Administrative Workflow Efficiency',
    tags: ['Business Analysis', 'Requirement Analysis', 'Workflow Design', 'Documentation', 'Application Development', 'QA Testing'],
    highlight: false
  },
   {
    title: 'Railway Headquarters Letter Management System (LMS)',
    subtitle: 'Digital Letter Registration & Tracking Management System',
    description: 'Developed a web-based Letter Management System for Railway Headquarters to digitize the existing manual paper-based letter registration process. The system replaces multiple physical register books with a centralized digital platform for recording, searching, tracking, and managing incoming and outgoing correspondence while maintaining existing business processes and register structures.',
    activities: ['Contributed throughout the software development lifecycle by participating in requirement gathering, business process analysis, system design, documentation, development, and quality assurance activities to deliver an efficient and reliable correspondence management solution.'],
    impact: 'Digitized Manual Letter Processes and Enhanced Correspondence Tracking Efficiency',
    tags: ['Business Analysis • Software Development • Quality Assurance • Requirement Engineering • BRP Documentation • SRS Documentation • UML Modeling • Database Design • Workflow Automation • Document Management'],
    highlight: false
  },
  {
    title: 'Metro Bus Management System',
    subtitle: 'Urban transit scheduling database & application',
    description: 'Analyzed urban transit scheduling bottlenecks. Managed relational database schema models using SQL and built interactive prototyping dashboards for path schedulers.',
    activities: ['SQL', 'Business Analysis', 'Prototype Development'],
    impact: 'Automated Route Optimization & Path Checks',
    tags: ['SQL Querying', 'Database Diagrams', 'Prototyping'],
    highlight: true // Orange highlight
  },
  {
    title: 'Seva Connect',
    subtitle: 'Citizen grievance & public query dashboard',
    description: 'Facilitated requirements analysis workshops for the public complaint management portal. Mapped workflow paths and designed interactive prototype mockups for support operators.',
    activities: ['Requirements Analysis', 'Prototype Development', 'Workflow Design'],
    impact: '25% Civic Query Resolution Speed-up',
    tags: ['User Flows', 'Interactive Prototypes', 'Workshops'],
    highlight: false
  },
  {
    title: 'Highway Toll Management System',
    subtitle: 'UML Modeling',
    description: 'Designed UML models for a Highway Toll Management System. Created system workflows and architectural diagrams to represent vehicle processing, toll collection operations, payment handling, and interactions between system users and components.',
    activities: ['SRS Analysis','UML Modeling','System Workflow Modeling'],
    impact: 'Improved understanding of toll operations through structured system modeling and workflow visualization.',
    tags: ['UserCase Diagrams','Activity diagrams','Workflow Diagrams'],
    highlight: false
  },
  {
    title: 'RDA Construction Personnel Attendance System',
    subtitle: 'UML Modeling',
    description: 'Created system models to represent attendance processes, user roles and system workflows.',
    activities: ['SRS Analysis','UML Modeling','System Workflow Modeling'],
    impact:'Supported efficient attendance management through clear system analysis and design diagrams .',
    tags: ['UserCase Diagrams','Activity diagrams','Workflow Diagrams'],
    highlight: false
  },
  {
    title: 'ETF(Employees Trust Fund ) Taxi System',
    subtitle: 'UML Modeling',
    description: 'Converted TOR requirements into UML models to define workflows, system interactions',
    activities: ['SRS Analysis','UML Modeling','System Workflow Modeling'],
    impact: 'Assisted system analysis and design activities by creating UML diagrams based on identified business requirements.',
    tags: ['UserCase Diagrams','Activity diagrams','Workflow Diagrams'],
    highlight: false
  },
];

const internships = [
  {
    role: 'Business Analysis Intern',
    organization: 'Ministry of Transport, Highways and Urban Development',
    status: 'Active Internship',
    isActive: true,
    period: 'Started 1 Month Ago • Present',
    year: '2026 – Present',
    location: 'Battaramulla / Colombo, Sri Lanka',
    description: 'Involved in GovTech-related government digitalization programs, contributing to Business Analysis (BA) activities across various ministerial divisions. Spearheading requirement elicitation and digital process re-engineering for key ministerial digitalization initiatives across transport, highways, and urban development divisions. Collaborating closely with ministerial executives, administrative directors, and technical teams to gather functional specifications, draft Software Requirements Specifications (SRS), and streamline government correspondence and project approval pipelines.',
    contributions: [
      'Business Process Re-engineering (BPR)',
      'Requirements Elicitation & SRS Documentation',
      'Digital Correspondence & Workflow Automation',
      'Stakeholder Alignment Across Ministerial Divisions',
      'User Acceptance Testing (UAT) & QA Validation'
    ]
  },
  {
    role: 'Business Analysis Intern',
    organization: 'Road Development Authority (RDA)',
    status: 'Completed Internship',
    isActive: false,
    period: '2026 (Completed)',
    year: '2026',
    location: 'Colombo, Sri Lanka',
    description: "Contributed to the RDA's digital transformation initiatives through Business Analysis, Quality Assurance, Project Coordination, and Software Development activities. Collaborated with stakeholders and technical teams to gather and analyze requirements, document business processes, conduct frontend, backend, and API testing, and support the development and delivery of digital solutions that enhance operational efficiency and streamline organizational workflows.",
    contributions: [
      'Requirements Analysis & System Modeling (UML)',
      'Frontend, Backend & API Testing Execution',
      'Stakeholder Alignment & Cadre Audit Workshops',
      'Software Requirements Specification (SRS) Authoring'
    ]
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

        {/* ─── Internships Section ─── */}
        <div className="space-y-8 mb-16">
          {internships.map((internship) => {
            return (
              <div
                key={internship.organization}
                className={`glass-panel p-8 md:p-10 rounded-[18px] reveal relative overflow-hidden bg-brand-dark-card/45 border shadow-xl transition-all duration-300 ${
                  internship.isActive
                    ? 'border-emerald-500/25 hover:border-emerald-500/40 shadow-emerald-500/5'
                    : 'border-white/5 hover:border-brand-purple/20'
                }`}
              >
                {/* Subtle decoration background */}
                <div className={`absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl pointer-events-none blur-3xl ${
                  internship.isActive ? 'from-emerald-500/10 to-transparent' : 'from-brand-purple/5 to-transparent'
                }`} />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                  <div>
                    {internship.isActive ? (
                      <span className="inline-flex items-center gap-2 text-[10px] font-poppins font-extrabold uppercase tracking-widest bg-emerald-500/15 text-emerald-400 px-3 py-1.5 rounded-full mb-3 border border-emerald-500/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Active Internship • 1 Month
                      </span>
                    ) : (
                      <span className="inline-block text-[10px] font-poppins font-extrabold uppercase tracking-widest bg-brand-purple/15 text-brand-purple px-3 py-1.5 rounded-full mb-3 border border-brand-purple/20">
                        Completed Internship
                      </span>
                    )}
                    <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-white leading-tight">
                      {internship.role}
                    </h3>
                    <p className={`font-poppins text-base font-bold mt-1 ${internship.isActive ? 'text-emerald-400/90' : 'text-white/70'}`}>
                      {internship.organization}
                    </p>
                  </div>

                  <div className="text-left md:text-right font-poppins text-xs font-semibold">
                    <p className={`uppercase tracking-wider font-bold ${internship.isActive ? 'text-emerald-400' : 'text-brand-purple'}`}>
                      {internship.period}
                    </p>
                    <p className="text-brand-dark-textMuted mt-1">
                      {internship.location}
                    </p>
                  </div>
                </div>

                <p className="font-inter text-sm md:text-base text-brand-dark-textMuted leading-relaxed max-w-4xl mb-6">
                  {internship.description}
                </p>

                {/* Key Contributions */}
                <div className="pt-4 border-t border-white/5">
                  <p className={`font-poppins font-bold uppercase tracking-wider text-[10px] mb-2.5 ${
                    internship.isActive ? 'text-emerald-400' : 'text-brand-purple'
                  }`}>
                    Key Focus Areas & BA Contributions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {internship.contributions.map((item) => (
                      <span
                        key={item}
                        className="font-inter text-xs font-semibold text-white/85 bg-white/5 border border-white/5 px-3 py-1 rounded-lg"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Projects Vertical Timeline ─── */}
        <div className="reveal mb-10 text-left">
          <h3 className="font-poppins text-2xl font-bold text-white mb-2">
            Key Ministerial & Public Sector Case Studies
          </h3>
          <p className="font-inter text-sm text-brand-dark-textMuted">
            Comprehensive system architectures, business analysis, and digital transformation initiatives conducted across the Ministry, RDA, and Sri Lanka Railways.
          </p>
        </div>

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
                      Impact: {project.impact}
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
