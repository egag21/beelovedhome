import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './app/SiteLayout';
import AboutPage from './pages/AboutPage';
import CvContactPage from './pages/CvContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';
import './ResumeSite.css';

function App() {
  useEffect(() => {
    document.documentElement.className = 'resume-site';
  }, []);

  return (
    <Router>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cv-contact" element={<CvContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </Router>
  );
}

export default App;
