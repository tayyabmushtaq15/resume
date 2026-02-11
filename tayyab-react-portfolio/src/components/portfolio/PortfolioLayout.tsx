import React from 'react';
import { PortfolioPageProps } from '../../types';
import { AuroraBackground } from './AuroraBackground';
import { PortfolioNavigation } from './PortfolioNavigation';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';

export const PortfolioLayout: React.FC<PortfolioPageProps> = ({
  logo,
  navLinks,
  resume,
  hero,
  ctaButtons,
  projects,
  showAnimatedBackground = true,
}) => {
  return (
    <div className="bg-background text-foreground geist-font min-h-screen transition-colors duration-300">
      {showAnimatedBackground && <AuroraBackground />}
      <div className="relative">
        <PortfolioNavigation logo={logo} navLinks={navLinks} resume={resume} />
        <div className="h-16" /> {/* Spacer for fixed nav */}
        <AboutSection logo={logo} hero={hero} ctaButtons={ctaButtons} />
        <div className="max-w-6xl mx-auto w-full px-6">
          <ProjectsSection projects={projects} />
        </div>
      </div>
    </div>
  );
};

