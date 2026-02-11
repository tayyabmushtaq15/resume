import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-teal-700 border-b-2 border-teal-700 pb-1">Professional Experience</h2>
      <div className="mt-4">
        <p className="font-bold text-lg text-gray-800">Associate Frontend Developer</p>
        <p className="text-gray-600 text-sm">31 Green | Hybrid | Islamabad, Pakistan | <em className="text-gray-500">March 2024 – Present</em></p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Developed and deployed 2+ responsive web applications using ReactJS, Material Ui Redux Toolkit.</li>
          <li>Integrated RESTful APIs and improved web app load times.</li>
          <li>Designed dynamic user interfaces utilizing React Hooks and Redux for state management.</li>
          <li>Collaborated with cross-functional teams including backend developers and UI/UX designers to deliver seamless and scalable web solutions.</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="font-bold text-lg text-gray-800">Web Developer</p>
        <p className="text-gray-600 text-sm">Geek Axon Limited | Hybrid | Rawalpindi, Pakistan | <em className="text-gray-500">Jan 2023 – Dec 2023 </em></p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Web developement using HTML, Css, Javascript and Bootstrape</li>
          <li>Colllaborate with Backend team to ensure project work smoothly.</li>
          <li>Collaborated with cross-functional teams including backend developers and UI/UX designers to deliver seamless and scalable web solutions.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

