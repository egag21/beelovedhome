import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutJeff from './components/AboutJeff';
import Services from './components/Services';
import PastWork from './components/PastWork';
import Contact from './components/Contact';
import WorkInProgress from './components/WorkInProgress';
import './App.css';

function App() {
  useEffect(() => {
    // Defaults: Cool Teal palette, Gradient Background design, Modern fonts
    const palette = localStorage.getItem('palette') || 'palette-5';
    const design = localStorage.getItem('design') || 'design-4';
    const font = localStorage.getItem('font') || 'font-2';
    const layout = localStorage.getItem('layout') || '';
    document.documentElement.className = `${palette} ${design} ${font} ${layout}`.trim();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutJeff />} />
            <Route path="/services" element={<Services />} />
            <Route path="/past-work" element={<PastWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wip" element={<WorkInProgress />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
