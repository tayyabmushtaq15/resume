import React from 'react';

const Languages: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-teal-700 border-b-2 border-teal-700 pb-1">Languages</h2>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>English (Fluent)</li>
        <li>Urdu (Native)</li>
        <li>Punjabi (Conversational)</li>
      </ul>
    </section>
  );
};

export default Languages;

