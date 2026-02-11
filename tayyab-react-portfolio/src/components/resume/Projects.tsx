import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-teal-700 border-b-2 border-teal-700 pb-1">Projects</h2>
      <div className="mt-4">
        <p className="font-bold text-lg text-gray-800">Aliam – Doctor Appointment Booking Website</p>
        <p className="mt-1 text-gray-700">A static website designed for scheduling doctor appointments. Patients can explore doctor profiles, view specializations, and check affiliations before booking. Built with a focus on clear UI and smooth user experience.</p>
        <p className="mt-1 text-sm text-gray-600"><strong>Tech Stack:</strong> HTML, CSS, JavaScript, ReactJS</p>
      </div>
      <div className="mt-6">
        <p className="font-bold text-lg text-gray-800">Accrepro Reporting – Integrated Reporting Dashboard</p>
        <p className="mt-1 text-gray-700">Developed an analytical reporting website with robust functionality to store reporting data, upload CSV files, and connect to databases for schema extraction. The platform integrates seamlessly with Power BI, allowing users to configure and display interactive reports directly within the application. Implemented role-based access control (RBAC) and user role management to ensure secure and customized access. This solution empowers users to analyze business statistics effectively and create strategic business plans based on Power BI reports.</p>
        <p className="mt-1 text-sm text-gray-600"><strong>Tech Stack:</strong> ReactJS, JavaScript, Redux, Ant Design, Power BI</p>
      </div>
    </section>
  );
};

export default Projects;

