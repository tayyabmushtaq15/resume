import React from 'react';
import { Skill } from '../../../types';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="w-full py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-12 text-center geist-font tracking-tight">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="skills-carousel-container">
          <div className="skills-carousel">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-logo"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.skill-logo-fallback') as HTMLElement;
                    if (!fallback) {
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = 'skill-logo-fallback';
                      fallbackDiv.textContent = skill.name.charAt(0);
                      target.parentElement?.appendChild(fallbackDiv);
                    } else {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="skill-logo-fallback" style={{ display: 'none' }}></div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {skills.map((skill, index) => (
              <div key={`duplicate-${index}`} className="skill-item">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-logo"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.skill-logo-fallback') as HTMLElement;
                    if (!fallback) {
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = 'skill-logo-fallback';
                      fallbackDiv.textContent = skill.name.charAt(0);
                      target.parentElement?.appendChild(fallbackDiv);
                    } else {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="skill-logo-fallback" style={{ display: 'none' }}></div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

