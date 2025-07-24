import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx'; // Updated import
import HomePage from './pages/HomePage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;