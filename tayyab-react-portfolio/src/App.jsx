import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import PortfolioPageCustom from './components/ui/PortfolioPageCustom';
import ResumePage from './pages/ResumePage.jsx';
import { ThemeProvider } from './components/ui/ThemeProvider';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioPageCustom />} />
          <Route path="/resume" element={<Layout><ResumePage /></Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;