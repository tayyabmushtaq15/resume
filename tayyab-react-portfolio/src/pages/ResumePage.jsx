import React from 'react';
import Summary from '../components/Summary.jsx';
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx';
import Education from '../components/Education.jsx';
import Certifications from '../components/Certifications.jsx';
import Projects from '../components/Projects.jsx'; //
import Languages from '../components/Languages.jsx';

function ResumePage() {
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
}

export default ResumePage;