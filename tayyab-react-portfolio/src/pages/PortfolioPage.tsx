import React from 'react';
import { PortfolioLayout } from '../components/portfolio/PortfolioLayout';
import { ExperienceSection } from '../components/portfolio/sections/ExperienceSection';
import { SkillsSection } from '../components/portfolio/sections/SkillsSection';
import { StatsSection } from '../components/portfolio/sections/StatsSection';
import { portfolioConfig, experiences, skills } from '../config/portfolio.config';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <PortfolioLayout {...portfolioConfig} />
      <ExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
      <StatsSection stats={portfolioConfig.stats} />
    </>
  );
};

export default PortfolioPage;

