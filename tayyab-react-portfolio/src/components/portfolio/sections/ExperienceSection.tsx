import React from 'react';
import { Experience } from '../../../types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="w-full py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-12 text-center geist-font tracking-tight">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 md:p-8 text-left">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-medium text-card-foreground mb-2 geist-font">{exp.role}</h3>
                  <p className="text-lg text-foreground font-medium mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm inter-font">{exp.location}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-muted-foreground text-sm inter-font font-medium">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm inter-font flex items-start">
                    <span className="text-foreground mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

