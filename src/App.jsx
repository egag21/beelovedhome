import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutJeff from './components/AboutJeff';
import Services from './components/Services';
import PastWork from './components/PastWork';
import Contact from './components/Contact';
import './App.css';

const showWip = import.meta.env.DEV || import.meta.env.VITE_ENABLE_WIP === 'true';
const WorkInProgress = showWip ? lazy(() => import('./components/WorkInProgress')) : null;

function App() {
  useEffect(() => {
    // Defaults come from theme.css (:root) for colors.
    const design = localStorage.getItem('design') || 'design-6';
    const font = localStorage.getItem('font') || 'font-2';
    const layout = localStorage.getItem('layout') || '';
    document.documentElement.className = `${design} ${font} ${layout}`.trim();
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
            {showWip && WorkInProgress && (
              <Route
                path="/wip"
                element={(
                  <Suspense fallback={null}>
                    <WorkInProgress />
                  </Suspense>
                )}
              />
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
