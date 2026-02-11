import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 px-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-teal-700">Tayyab Mushtaq</h1>
      <p className="text-xl text-gray-600 mt-2">Web Application Developer</p>
      <nav className="mt-4">
        <Link to="/" className="text-teal-700 hover:underline mx-2">Home</Link> |
        <Link to="/resume" className="text-teal-700 hover:underline mx-2">Resume</Link>
      </nav>
      <div className="text-gray-500 mt-4 text-sm">
        📧 tayyabmushtaq15@gmail.com |
        📞 +92 341 4536627 |
        📍 Islamabad, Pakistan |
        <a href="https://www.linkedin.com/in/tayyabmushtaq15" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">LinkedIn Profile</a>
      </div>
    </header>
  );
};

export default Header;

