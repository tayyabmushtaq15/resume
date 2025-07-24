import React from 'react';

function Skills() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-teal-700 border-b-2 border-teal-700 pb-1">Skills</h2>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <li><strong>Programming:</strong> JavaScript, Python</li>
        <li><strong>Frontend Technologies:</strong> ReactJS, NextJS, HTML5, CSS3, Redux Toolkit</li>
        <li><strong>Databases:</strong> PostgreSQL, MongoDB</li>
        <li><strong>Tools:</strong> Git, Postman, Visual Studio Code, Bitbucket, Jira</li>
        <li><strong>Methodologies:</strong> Agile Development, SCRUM</li>
        <li><strong>Soft Skills:</strong> Problem Solving, Communication, Time Management, Team Collaboration</li>
      </ul>
    </section>
  );
}

export default Skills;