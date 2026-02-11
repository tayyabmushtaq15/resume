import React from 'react';
import Summary from '../components/resume/Summary';
import Skills from '../components/resume/Skills';
import Experience from '../components/resume/Experience';
import Education from '../components/resume/Education';
import Certifications from '../components/resume/Certifications';
import Projects from '../components/resume/Projects';
import Languages from '../components/resume/Languages';

const ResumePage: React.FC = () => {
  return (
    <div>
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Languages />
    </div>
  );
};

export default ResumePage;

