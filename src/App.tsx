import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
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
import { MarketScannerPage } from './pages/tools/MarketScannerPage';
import { GlobalRiskEnginePage } from './pages/tools/GlobalRiskEnginePage'; // New Page

// New Tools
import { SatelliteGuardian } from './components/tools/SatelliteGuardian';
import { FinePrintDetective } from './components/tools/FinePrintDetective';
import { LegacyHeartbeat } from './components/tools/LegacyHeartbeat';
import { ToolPageLayout } from './components/tools/ToolPageLayout';
import { Satellite, FileSearch, Heart } from 'lucide-react';

// PSEO Pages
import { LocalRiskPage } from './pages/LocalRiskPage';
import { LocationsDirectory } from './pages/LocationsDirectory';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper components for new tools to maintain layout consistency
const SatelliteGuardianPage = () => (
  <ToolPageLayout
    title="Satellite Guardian"
    subtitle="Property Health Check. We analyze vegetation, roof, and drainage risks from space."
    icon={Satellite}
    colorClass="text-sky-600"
    bgClass="bg-sky-50"
    seoContent={{
      howItWorks: ["Enter address", "AI simulates satellite view", "Risk report generated"],
      benefits: ["Find risks early", "Avoid claim denials"],
      faq: [{ q: "Is this real-time?", a: "We use simulated data based on regional averages for this demo." }]
    }}
  >
    <SatelliteGuardian />
  </ToolPageLayout>
);

const FinePrintDetectivePage = () => (
  <ToolPageLayout
    title="Fine-Print Detective"
    subtitle="Agentic Policy Review. Upload your policy and let our AI negotiate for you."
    icon={FileSearch}
    colorClass="text-indigo-600"
    bgClass="bg-indigo-50"
    seoContent={{
      howItWorks: ["Upload PDF", "AI extracts clauses", "Compares to market"],
      benefits: ["Find hidden exclusions", "Negotiate better rates"],
      faq: [{ q: "Is my data safe?", a: "Yes, we scrub PII before analysis." }]
    }}
  >
    <FinePrintDetective />
  </ToolPageLayout>
);

const LegacyHeartbeatPage = () => (
  <ToolPageLayout
    title="Legacy Heartbeat"
    subtitle="AI Inheritance Planner. Map your digital & financial estate."
    icon={Heart}
    colorClass="text-rose-500"
    bgClass="bg-rose-50"
    seoContent={{
      howItWorks: ["Input assets", "AI projects future value", "Gap calculated"],
      benefits: ["Protect your family", "Plan for inflation"],
      faq: [{ q: "What is the Heartbeat Protocol?", a: "A system to ensure assets transfer smoothly." }]
    }}
  >
    <LegacyHeartbeat />
  </ToolPageLayout>
);

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
            <Route path="/blog/:id" element={<BlogPost />} />
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
            <Route path="/tools/market-scanner" element={<MarketScannerPage />} />
            <Route path="/tools/global-risk-engine" element={<GlobalRiskEnginePage />} /> {/* New Route */}
            
            {/* New Tools */}
            <Route path="/tools/satellite-guardian" element={<SatelliteGuardianPage />} />
            <Route path="/tools/fine-print-detective" element={<FinePrintDetectivePage />} />
            <Route path="/tools/legacy-heartbeat" element={<LegacyHeartbeatPage />} />

            {/* PSEO Dynamic Routes */}
            <Route path="/locations" element={<LocationsDirectory />} />
            <Route path="/insurance/:country/:city/:niche" element={<LocalRiskPage />} />

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
