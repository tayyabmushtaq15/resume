import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/resume/Layout';
import PortfolioPage from '../pages/PortfolioPage';
import ResumePage from '../pages/ResumePage';
import { ThemeProvider } from '../components/shared/ThemeProvider';
import '../styles/index.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/resume" element={<Layout><ResumePage /></Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

