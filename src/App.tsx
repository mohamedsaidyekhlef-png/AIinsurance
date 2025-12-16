import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Niches } from './pages/Niches';
import { Tools } from './pages/Tools';
import { Compare } from './pages/Compare';
import { Claims } from './pages/Claims';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/niches" element={<Niches />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/about" element={<div className="pt-32 text-center min-h-[60vh]"><h1 className="text-4xl font-bold">About Page Coming Soon</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
