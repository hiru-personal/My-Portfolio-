import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = {
  ba: {
    label: 'Business Analysis',
    skills: [
      { name: 'Requirements Gathering', level: 95, rating: 'Expert' },
      { name: 'Stakeholder Management', level: 90, rating: 'Expert' },
      { name: 'User Stories', level: 92, rating: 'Expert' },
      { name: 'Agile & Scrum', level: 90, rating: 'Expert' },
      { name: 'Wireframing', level: 88, rating: 'Advanced' },
      { name: 'Business Process Analysis', level: 92, rating: 'Expert' },
      { name: 'SRS Documentation', level: 95, rating: 'Expert' },
      { name: 'Gap Analysis', level: 85, rating: 'Advanced' },
      { name: 'Funtional & Non Fontional Requiremnets Analysis', level: 90, rating: 'Expert' },

    ],
  },
  tech: {
    label: 'Technical Toolkit',
    skills: [
      { name: 'SQL', level: 85, rating: 'Advanced', },
      { name: 'Power BI', level: 80, rating: 'Advanced' },
      { name: 'GitHub', level: 80, rating: 'Advanced' },
      { name: 'JIRA', level: 90, rating: 'Expert' },
      { name: 'Figma', level: 85, rating: 'Advanced' },
      { name: 'Java', level: 75, rating: 'Intermediate' },
      { name: 'MySQL', level: 82, rating: 'Advanced' },
      { name: 'HTML', level: 90, rating: 'Expert' },
      { name: 'CSS', level: 85, rating: 'Advanced' },
      { name: 'JavaScript', level: 80, rating: 'Advanced' },
      { name: 'VS Code', level: 90, rating: 'Expert' },
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
      { name: 'Project Planning', level: 95, rating: 'Expert' },
      { name: 'Task Management', level: 92, rating: 'Expert' },
      { name: 'Team Collaboration', level: 95, rating: 'Expert', }
    ],
  },
  qa: {
    label: 'Quality Assurance',
    skills: [
      { name: 'Manual Testing', level: 95, rating: 'Expert' },
      { name: 'API Testing', level: 90, rating: 'Expert' },
      { name: 'Defect Tracking', level: 92, rating: 'Expert' },
    ],
  },
};


// Skill Progress bar component to trigger animation on render
function SkillBar({ level }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Small timeout ensures the transition executes after the DOM render
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full h-1.5 bg-ba-blue/10 dark:bg-white/5 rounded-full overflow-hidden mt-4">
      <div
        className="h-full bg-gradient-to-r from-ba-blue to-ba-pink rounded-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
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
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-ba-blue to-ba-pink rounded-full" />
              <p className="font-poppins text-sm font-semibold text-ba-blue dark:text-ba-blue-light uppercase tracking-[0.2em]">
                Competencies
              </p>
            </div>
            <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-ba-dark dark:text-ba-white">
              Skills & Expertise
            </h2>
          </div>

          {/* Interactive Tab Selector (Pill style) */}
          <div className="inline-flex p-1.5 rounded-2xl glass-panel relative z-10">
            {Object.keys(skillCategories).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`font-poppins text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-300 ${isActive
                      ? 'bg-gradient-to-r from-ba-blue to-ba-pink/90 text-white shadow-md shadow-ba-blue/15'
                      : 'text-ba-dark/60 dark:text-ba-light/60 hover:text-ba-blue dark:hover:text-ba-blue-light'
                    }`}
                >
                  {skillCategories[key].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display Grid */}
        <div
          key={activeTab} // Unmounts and remounts grid to trigger enter transitions
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-6 sm:p-7 rounded-3xl glass-card-hover flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className={`text-[10px] font-poppins font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${skill.rating === 'Expert'
                      ? 'bg-ba-blue/10 text-ba-blue dark:text-ba-blue-light border border-ba-blue/20 dark:border-ba-blue/10'
                      : skill.rating === 'Advanced'
                        ? 'bg-ba-pink/20 text-ba-dark dark:text-ba-pink-dark border border-ba-pink/30'
                        : 'bg-ba-dark/5 text-ba-dark/60 dark:bg-white/5 dark:text-ba-light/50 border border-ba-dark/10 dark:border-white/5'
                    }`}>
                    {skill.rating}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-poppins text-base font-bold text-ba-dark dark:text-ba-white">
                  {skill.name}
                </h3>
              </div>

              {/* Progress bar container */}
              <div className="mt-4">
                <div className="flex justify-between items-center text-[10px] font-poppins font-extrabold text-ba-dark/40 dark:text-ba-light/45 uppercase tracking-wider">
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
