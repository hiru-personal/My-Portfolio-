import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const milestones = [
  {
    year: '2024',
    title: 'BSc (Hons) in Information Systems Engineering',
    institution: 'SLIIT Admission',
    description: 'Began specialized academic pathway at Sri Lanka Institute of Information Technology, focusing on system analysis, database management, and enterprise software engineering structures.',
  },
  {
    year: '2026',
    title: 'Business Analyst, Project Management, QA Intern',
    institution: 'Road Development Authority (RDA) • Completed',
    description: 'Completed internship at the RDA digital transformation division. Gathered requirements, conducted stakeholder workshops, executed QA testing, wireframed user interfaces, and authored system specifications (SRS).',
  },
  {
    year: '2026 - Present',
    title: 'Business Analysis Intern',
    institution: 'Ministry of Transport, Highways and Urban Development • Active',
    description: 'Currently contributing to ministerial digital transformation, business process optimization, requirements engineering, and workflow automation across transport and urban development divisions.',
  },
  {
    year: '2028',
    title: 'Expected Graduation',
    institution: 'SLIIT Degree Completion',
    description: 'Anticipated honors graduation. Equipped to step into enterprise-level IT Business Analyst roles, bringing technical systems engineering depth to business process design.',
  },
];

const strengths = [
  {
    title: 'Requirements Engineering',
    color: 'cyan', // Palette Cyan highlight
    description: 'Proficient in eliciting, documenting, and managing software requirements. Skilled in authoring SRS, User Stories, and UML diagrams (Use Case, Activity, Class, Sequence and other Diagrams).',
  },
  {
    title: 'Stakeholder Alignment',
    color: 'royal',
    description: 'Experienced in acting as a bridge between corporate stakeholders and engineering teams. Facilitating clear project goals and setting exact acceptance parameters.',
  },
  {
    title: 'Quality Assurance & Testing',
    color: 'violet',
    description: 'Experienced in Frontend Testing, Backend Testing, and API Testing. Skilled in identifying defects, validating system functionality, preparing test cases, and ensuring software quality through comprehensive testing processes.',
  },
  {
    title: 'Project Management',
    color: 'royal',
    description: 'Passionate about planning, coordinating, and tracking project activities to ensure successful delivery. Skilled in stakeholder communication, task management, requirement analysis, and team collaboration throughout the project lifecycle.',
  },
  {
    title: 'Software Development',
    color: 'cyan', // Palette Cyan highlight
    description: 'Hands-on experience in developing academic and personal projects using Java, C, and web technologies. Familiar with software development principles, problem-solving, debugging, and building user-focused applications.',
  },
];

function About() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-brand-royal via-brand-violet to-brand-cyan rounded-full" />
            <p className="font-poppins text-sm font-semibold text-brand-royal dark:text-brand-violet uppercase tracking-[0.2em]">
              Professional Profile
            </p>
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ─── Left Column: Professional Narrative ─── */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="font-poppins text-2xl font-bold text-slate-900 dark:text-white">
                Business Strategy, and Project Execution
              </h3>
              <p className="font-inter text-slate-600 dark:text-brand-dark-textMuted text-sm sm:text-base leading-relaxed">
                As an Information Systems Engineering undergraduate at SLIIT, I combine technical knowledge with business understanding to deliver effective digital solutions. Through my academic studies and internship experience, I have gained hands-on exposure to Quality Assurance, including frontend testing, backend testing, and API testing, which has strengthened my understanding of software development lifecycles and system quality.
              </p>
              <p className="font-inter text-slate-600 dark:text-brand-dark-textMuted text-sm sm:text-base leading-relaxed">
                My primary interests lie in Business Analysis and Project Management, where I enjoy gathering requirements, analyzing business processes, identifying improvement opportunities, and ensuring successful project delivery. I am passionate about collaborating with stakeholders, bridging the gap between business and technical teams, and contributing to digital transformation initiatives that create measurable business value.
              </p>
              <p className="font-inter text-slate-600 dark:text-brand-dark-textMuted text-sm sm:text-base leading-relaxed">
                I continuously seek opportunities to enhance my analytical, communication, and leadership skills while building solutions that align technology with organizational goals.
              </p>
            </div>

            {/* Mindset Callout Card */}
            <div className="glass-panel p-6 rounded-[18px] border-l-4 border-l-brand-royal relative overflow-hidden reveal border border-slate-200/80 dark:border-white/5">
              <div className="absolute top-2 right-4 text-5xl text-slate-400/20 dark:text-white/5 font-serif pointer-events-none select-none">“</div>
              <p className="font-poppins text-sm font-bold text-brand-royal dark:text-brand-violet uppercase tracking-wider mb-2">
                Project Management & Business Analysis Focus
              </p>
              <p className="font-inter text-xs sm:text-sm text-slate-600 dark:text-brand-dark-textMuted leading-relaxed italic">
                I'm passionate about Business Analysis and Project Management, with a strong interest in understanding business needs, managing project workflows, and delivering solutions that create value. My goal is to bridge the gap between stakeholders and technical teams to ensure successful project outcomes.
              </p>
            </div>

            {/* Career Goal Summary */}
            <div className="space-y-3">
              <h4 className="font-poppins text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-white/40">
                My Professional Journey
              </h4>
              <p className="font-inter text-xs sm:text-sm text-slate-600 dark:text-brand-dark-textMuted leading-relaxed">
                While I have gained hands-on experience in Frontend Testing, Backend Testing, API Testing, and Software Development through both academic projects and internship experience, my strongest interests lie in Business Analysis and Project Management.
                My technical background in Java, C, software development, and quality assurance allows me to effectively bridge the gap between business needs and technical teams.
              </p>
            </div>
          </div>

          {/* ─── Right Column: Timeline highlights ─── */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-poppins text-xl font-bold text-slate-900 dark:text-white mb-6 text-left">
              Academic & Career Milestones
            </h3>

            {/* Timeline component */}
            <div className="relative pl-6 border-l border-slate-200 dark:border-white/10 space-y-8 text-left">
              {milestones.map((milestone, i) => (
                <div key={milestone.year + i} className="relative reveal">
                  {/* Timeline bullet */}
                  <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${milestone.year.includes('Present')
                    ? 'bg-brand-cyan border-white dark:border-brand-dark-bg shadow-md shadow-brand-cyan/30'
                    : 'bg-white dark:bg-brand-dark-bg border-slate-300 dark:border-white/20'
                    }`}>
                    {milestone.year.includes('Present') && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                  </div>

                  {/* Timeline Content Card */}
                  <div className="glass-panel p-5 rounded-[18px] border border-slate-200/80 dark:border-white/5 hover:border-brand-royal/30 transition-all duration-300 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-poppins font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${milestone.year.includes('Present')
                        ? 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30'
                        : 'bg-brand-royal/10 text-brand-royal'
                        }`}>
                        {milestone.year}
                      </span>
                      <span className="font-poppins text-xs font-bold text-slate-500 dark:text-white/50 uppercase tracking-wider">
                        {milestone.institution}
                      </span>
                    </div>
                    <h4 className="font-poppins text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      {milestone.title}
                    </h4>
                    <p className="font-inter text-xs text-slate-600 dark:text-brand-dark-textMuted leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Strengths Cards Grid ─── */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-slate-200/80 dark:border-white/5">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className={`glass-panel p-6 rounded-[18px] text-left reveal glass-card-hover border border-slate-200/80 dark:border-white/5 hover:border-brand-${strength.color}/30 hover:shadow-brand-${strength.color}/10 shadow-sm`}
            >
              <h4 className="font-poppins text-lg font-bold text-slate-900 dark:text-white mb-2 pt-2">
                {strength.title}
              </h4>
              <p className="font-inter text-xs text-slate-600 dark:text-brand-dark-textMuted leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
