import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutJeff from './components/AboutJeff';
import PastWork from './components/PastWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RouteEffects from './components/RouteEffects';
import './App.css';
import './ResumeSite.css';

function App() {
  useEffect(() => {
    document.documentElement.className = 'resume-site';
  }, []);

  return (
    <Router>
      <div className="App">
        <RouteEffects />
        <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<PastWork />} />
            <Route path="/about" element={<AboutJeff />} />
            <Route path="/cv-contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
