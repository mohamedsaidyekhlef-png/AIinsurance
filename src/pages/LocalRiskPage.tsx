import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { generateLocalPageContent, LocalPageData } from '../lib/pseo';
import { LocalMap } from '../components/pseo/LocalMap';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowRight, ShieldCheck, TrendingDown, Loader2, Star, X, AlertTriangle, ExternalLink, ThumbsUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LocalRiskPage = () => {
  const { country, city, niche } = useParams<{ country: string; city: string; niche: string }>();
  const [data, setData] = useState<LocalPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (country && city && niche) {
        const result = await generateLocalPageContent(country, city, niche);
        setData(result);
      }
      setLoading(false);
    };
    fetchData();
  }, [country, city, niche]);

  // Exit Intent Logic
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showExitIntent]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <h2 className="text-xl font-bold text-slate-900">Generating Local Risk Report for {city}...</h2>
        <p className="text-slate-500">Accessing Real-Time Risk API...</p>
      </div>
    );
  }

  if (!data) return <div>Error loading page.</div>;

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hyper-Local Hero */}
      <section className="bg-slate-900 text-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/30">
              <ShieldCheck size={14} /> {city} Risk Analysis • 2025 Edition
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {data.heroTitle}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              {data.heroSubtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="bg-blue-600 hover:bg-blue-500 border-none shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                View Top {niche} Insurers
              </Button>
              <Link to="/search">
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  View Local Risk Map
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Risk Map Card */}
            <div className="bg-white p-2 rounded-3xl shadow-xl">
              <LocalMap city={city || 'Local'} riskType={niche || 'General'} />
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase">Local Stat</div>
                  <div className="text-3xl font-bold text-slate-900">{data.localRiskStat.value}</div>
                  <div className="text-sm text-slate-600">{data.localRiskStat.label}</div>
                </div>
                <div className="text-right text-xs text-slate-400">
                  Source: {data.localRiskStat.source}
                </div>
              </div>
            </div>

            {/* AI Guide Content */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Why {city} Residents Need AI Insurance</h2>
              <div 
                className="prose prose-slate max-w-none prose-lg"
                dangerouslySetInnerHTML={{ __html: data.guideContent }} 
              />
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-8 bg-slate-50 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900">The AI Advantage in {city}</h3>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {data.aiAdvantage.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                      <div className="text-slate-500 text-sm">
                        <span className="block font-bold text-slate-400 text-xs uppercase mb-1">Traditional</span>
                        {item.traditional}
                      </div>
                      <div className="text-blue-600 font-bold flex items-center gap-2">
                        <ArrowRight size={16} className="hidden md:block" />
                        {item.aiSolution}
                      </div>
                      <div className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full w-fit">
                        Save {item.savings}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Recommendations Rail */}
          <div className="space-y-6" id="recommendations">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg sticky top-32">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                 <h3 className="text-xl font-bold">Top Picks for {city}</h3>
              </div>
              
              <div className="space-y-4">
                {data.recommendedCompanies.map((company, idx) => (
                  <div key={idx} className="bg-white text-slate-900 p-5 rounded-xl shadow-sm group hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-2xl bg-slate-100 w-10 h-10 flex items-center justify-center rounded-lg">{company.logo}</div>
                      <div className="text-right">
                         <div className="text-xs font-bold text-slate-400 uppercase">Trust Score</div>
                         <div className="text-lg font-bold text-green-600">{company.trustScore}/100</div>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                       <div className="font-bold text-lg">{company.name}</div>
                       <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="flex text-yellow-500"><Star size={12} fill="currentColor" /> {company.rating}</span>
                          <span>•</span>
                          <span className="font-bold text-slate-700">{company.priceLevel}</span>
                       </div>
                    </div>

                    <div className="bg-blue-50 p-2 rounded-lg text-xs text-blue-800 mb-4 flex gap-2 items-start">
                       <ThumbsUp size={12} className="shrink-0 mt-0.5" />
                       {company.reason}
                    </div>

                    <a href={company.url} target="_blank" rel="noreferrer">
                      <Button size="sm" className="w-full bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2">
                        Visit Website <ExternalLink size={12} />
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                <p className="text-xs text-slate-400 mb-2">
                   Insuralix uses AI to analyze thousands of reviews and regulatory data to generate these scores.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Exit Intent Modal */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative"
            >
              <button 
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                   <AlertTriangle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Wait! Don't Overpay.</h3>
                <p className="text-slate-600 mb-6">
                   Data alert: <strong>{city}</strong> zip codes just saw a rate adjustment. You could be eligible for a <strong>15% discount</strong> if you check now.
                </p>
                
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-8 text-left">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-500">Your Potential Savings:</span>
                      <span className="font-bold text-green-600 text-lg">$450/year</span>
                   </div>
                   <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[85%]" />
                   </div>
                </div>

                <div className="flex gap-4">
                   <Button onClick={() => setShowExitIntent(false)} variant="outline" className="flex-1">Close</Button>
                   <a href={data.recommendedCompanies[0]?.url || '/compare'} target="_blank" rel="noreferrer" className="flex-1">
                      <Button className="w-full bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20">
                         Check My Rate
                      </Button>
                   </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
