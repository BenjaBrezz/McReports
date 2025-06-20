import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ExtraSalsa from './pages/reports/ExtraSalsa';
import EggMuffin from './pages/reports/EggMuffin';
import CDP from './pages/reports/CDP';
import AgrandaCombos from './pages/reports/AgrandaCombos';
import DigitalChannels from './pages/reports/DigitalChannels';
import McxMenos from './pages/reports/McxMenos';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-roboto transition-colors duration-300">
          <Navigation />
          <main className="pb-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/extra-salsa" element={<ExtraSalsa />} />
              <Route path="/egg-muffin" element={<EggMuffin />} />
              <Route path="/cdp" element={<CDP />} />
              <Route path="/agranda-combos" element={<AgrandaCombos />} />
              <Route path="/digital-channels" element={<DigitalChannels />} />
              <Route path="/mcxmenos" element={<McxMenos />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;