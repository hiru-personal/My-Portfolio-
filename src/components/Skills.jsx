import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = {
  ba: {
    label: 'Business Analysis',
    skills: [
      { name: 'Requirements Gathering', level: 95, rating: 'Expert', icon: '📊' },
      { name: 'Stakeholder Management', level: 90, rating: 'Expert', icon: '🤝' },
      { name: 'User Stories', level: 92, rating: 'Expert', icon: '📝' },
      { name: 'Agile & Scrum', level: 90, rating: 'Expert', icon: '🔄' },
      { name: 'Wireframing', level: 88, rating: 'Advanced', icon: '🎨' },
      { name: 'Business Process Analysis', level: 92, rating: 'Expert', icon: '📈' },
      { name: 'SRS Documentation', level: 95, rating: 'Expert', icon: '📄' },
      { name: 'Gap Analysis', level: 85, rating: 'Advanced', icon: '🔍' },
      { name: 'Functional & Non-Functional Analysis', level: 90, rating: 'Expert', icon: '📐' },
    ],
  },
  tech: {
    label: 'Technical Toolkit',
    skills: [
      { name: 'SQL', level: 85, rating: 'Advanced', icon: '🗄️' },
      { name: 'Power BI', level: 80, rating: 'Advanced', icon: '📊' },
      { name: 'GitHub', level: 80, rating: 'Advanced', icon: '🐙' },
      { name: 'JIRA', level: 90, rating: 'Expert', icon: '📋' },
      { name: 'Figma', level: 85, rating: 'Advanced', icon: '🎨' },
      { name: 'Java', level: 75, rating: 'Intermediate', icon: '☕' },
      { name: 'MySQL', level: 82, rating: 'Advanced', icon: '💾' },
      { name: 'HTML & CSS', level: 90, rating: 'Expert', icon: '🌐' },
      { name: 'JavaScript', level: 80, rating: 'Advanced', icon: '💛' },
      { name: 'VS Code', level: 90, rating: 'Expert', icon: '💻' },
    ],
  },
  soft: {
    label: 'Soft Skills',
    skills: [
      { name: 'Communication', level: 95, rating: 'Expert', icon: '🗣️' },
      { name: 'Critical Thinking', level: 92, rating: 'Expert', icon: '🧠' },
      { name: 'Problem Solving', level: 95, rating: 'Expert', icon: '💡' },
      { name: 'Team Collaboration', level: 90, rating: 'Expert', icon: '👥' },
      { name: 'Documentation', level: 95, rating: 'Expert', icon: '📂' },
      { name: 'Analytical Thinking', level: 95, rating: 'Expert', icon: '📈' },
    ],
  },
  pm: {
    label: 'Project Management',
    skills: [
      { name: 'Project Planning', level: 95, rating: 'Expert', icon: '📅' },
      { name: 'Task Management', level: 92, rating: 'Expert', icon: '✅' },
      { name: 'Team Collaboration', level: 95, rating: 'Expert', icon: '👥' }
    ],
  },
  qa: {
    label: 'Quality Assurance',
    skills: [
      { name: 'Manual Testing', level: 95, rating: 'Expert', icon: '🧪' },
      { name: 'API Testing (Postman)', level: 90, rating: 'Expert', icon: '🚀' },
      { name: 'Defect Tracking', level: 92, rating: 'Expert', icon: '🐛' },
    ],
  },
};

// Skill Progress bar component with purple gradient
function SkillBar({ level }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-4">
      <div
        className="h-full bg-gradient-to-r from-brand-purple to-brand-purple-secondary rounded-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function Skills() {
  const sectionRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState('ba');

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-brand-purple to-brand-purple-secondary rounded-full" />
              <p className="font-poppins text-sm font-semibold text-brand-purple uppercase tracking-[0.2em]">
                Competencies
              </p>
            </div>
            <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-white">
              Skills & Expertise
            </h2>
          </div>

          {/* Interactive Tab Selector (Gradient active state, 18px rounded) */}
          <div className="inline-flex p-1.5 rounded-[18px] bg-brand-dark-card border border-white/5 relative z-10 max-w-full overflow-x-auto">
            {Object.keys(skillCategories).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`font-poppins text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-300 whitespace-nowrap ${isActive
                      ? 'bg-gradient-to-r from-brand-purple to-brand-purple-secondary text-white shadow-md shadow-brand-purple/10'
                      : 'text-brand-dark-textMuted hover:text-brand-purple'
                    }`}
                >
                  {skillCategories[key].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid with 18px rounded corners */}
        <div
          key={activeTab}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-6 sm:p-7 rounded-[18px] glass-card-hover border border-white/5 bg-brand-dark-card/45 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header: Icon & Badge with staggered colors */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className={`text-[10px] font-poppins font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    skill.rating === 'Expert'
                      ? 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20'
                      : skill.rating === 'Advanced'
                        ? 'bg-brand-purple/5 text-brand-purple-secondary border border-brand-purple/15'
                        : 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' /* Orange highlight */
                    }`}>
                    {skill.rating}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-poppins text-base font-bold text-white">
                  {skill.name}
                </h3>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between items-center text-[10px] font-poppins font-extrabold text-brand-dark-textMuted uppercase tracking-wider">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <SkillBar level={skill.level} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
