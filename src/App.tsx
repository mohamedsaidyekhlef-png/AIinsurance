import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Niches } from './pages/Niches';
import { Tools } from './pages/Tools';
import { Compare } from './pages/Compare';
import { SearchProvider } from './pages/SearchProvider';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Disclaimer } from './pages/Disclaimer';

// Tool Pages
import { PolicyAnalyzerPage } from './pages/tools/PolicyAnalyzerPage';
import { PremiumPredictorPage } from './pages/tools/PremiumPredictorPage';
import { GapFinderPage } from './pages/tools/GapFinderPage';
import { LifeEventSimulatorPage } from './pages/tools/LifeEventSimulatorPage';
import { EvidenceVaultPage } from './pages/tools/EvidenceVaultPage';
import { TelematicsOptimizerPage } from './pages/tools/TelematicsOptimizerPage';
import { DisasterAlertPage } from './pages/tools/DisasterAlertPage';
import { ScenarioStressTestPage } from './pages/tools/ScenarioStressTestPage';
import { OneClickOptimizationPage } from './pages/tools/OneClickOptimizationPage';

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
            
            {/* Tools Routes */}
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/policy-analyzer" element={<PolicyAnalyzerPage />} />
            <Route path="/tools/premium-predictor" element={<PremiumPredictorPage />} />
            <Route path="/tools/gap-finder" element={<GapFinderPage />} />
            <Route path="/tools/life-event-simulator" element={<LifeEventSimulatorPage />} />
            <Route path="/tools/evidence-vault" element={<EvidenceVaultPage />} />
            <Route path="/tools/telematics-optimizer" element={<TelematicsOptimizerPage />} />
            <Route path="/tools/disaster-alert" element={<DisasterAlertPage />} />
            <Route path="/tools/scenario-stress-test" element={<ScenarioStressTestPage />} />
            <Route path="/tools/optimization" element={<OneClickOptimizationPage />} />

            <Route path="/compare" element={<Compare />} />
            <Route path="/search" element={<SearchProvider />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
