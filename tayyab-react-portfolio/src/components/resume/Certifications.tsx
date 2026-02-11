import React from 'react';

const Certifications: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-teal-700 border-b-2 border-teal-700 pb-1">Certifications</h2>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>AWS Certified Solutions Architect - Professional (SAP-C02) Cert Prep</li>
        <li>Next.js: Creating and Hosting a Full-Stack Site</li>
        <li>React: Software Architecture</li>
        <li>Introduction to Front-End Development</li>
        <li>JavaScript Essentials 1</li>
      </ul>
    </section>
  );
};

export default Certifications;

