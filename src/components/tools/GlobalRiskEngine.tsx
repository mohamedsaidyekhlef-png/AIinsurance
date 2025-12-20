import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Database, Zap, MapPin, FileText, ArrowRight, Loader2, AlertTriangle, BarChart3, Lock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';

const COUNTRIES = [
  { name: "USA", code: "usa", cities: ["Miami", "Austin", "Denver", "Seattle", "New-York"] },
  { name: "Canada", code: "canada", cities: ["Toronto", "Vancouver", "Calgary"] },
  { name: "UK", code: "uk", cities: ["London", "Manchester"] },
  { name: "Australia", code: "australia", cities: ["Sydney", "Melbourne"] }
];

const NICHES = [
  { id: "flood", label: "Flood Risk", icon: "🌊" },
  { id: "theft", label: "Auto Theft", icon: "🚗" },
  { id: "fire", label: "Wildfire", icon: "🔥" },
  { id: "uber", label: "Rideshare", icon: "🚕" },
  { id: "tesla", label: "EV/Tesla", icon: "⚡" }
];

export const GlobalRiskEngine = () => {
  const [stats, setStats] = useState({ pages: 30201, traffic: 142050, conversions: 4.2 });
  const [generating, setGenerating] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [selectedCity, setSelectedCity] = useState(COUNTRIES[0].cities[0]);
  const [selectedNiche, setSelectedNiche] = useState(NICHES[0]);
  const navigate = useNavigate();

  // Simulate live stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        pages: prev.pages + 1,
        traffic: prev.traffic + Math.floor(Math.random() * 10),
        conversions: 4.2 + (Math.random() * 0.1 - 0.05)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      navigate(`/insurance/${selectedCountry.code}/${selectedCity.toLowerCase()}/${selectedNiche.id}`);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Globe className="text-blue-600" /> Global Risk-Gap Engine
        </h2>
        <p className="text-slate-500 mt-2">
          PSEO Command Center. Programmatically generating 30,000+ hyper-local landing pages based on real-time risk variables.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* System Status */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                 <span className="font-mono text-xs font-bold text-green-400">SYSTEM ACTIVE</span>
              </div>
              
              <div className="space-y-6">
                 <div>
                    <div className="text-slate-400 text-xs uppercase font-bold mb-1">Total Pages Indexed</div>
                    <div className="text-4xl font-mono font-bold">{stats.pages.toLocaleString()}</div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <div className="text-slate-400 text-xs uppercase font-bold mb-1">Live Traffic</div>
                       <div className="text-xl font-mono font-bold text-blue-400">{stats.traffic.toLocaleString()}</div>
                    </div>
                    <div>
                       <div className="text-slate-400 text-xs uppercase font-bold mb-1">Conv. Rate</div>
                       <div className="text-xl font-mono font-bold text-green-400">{stats.conversions.toFixed(2)}%</div>
                    </div>
                 </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                 <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Gemini 1.5 Flash</span>
                    <span>Latency: 45ms</span>
                 </div>
              </div>
           </div>
        </div>

        {/* The Generator Controls */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
           <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Zap className="text-yellow-500" /> Content Factory Controls
           </h3>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Target Country</label>
                 <select 
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={selectedCountry.code}
                    onChange={(e) => {
                       const c = COUNTRIES.find(c => c.code === e.target.value);
                       if(c) { setSelectedCountry(c); setSelectedCity(c.cities[0]); }
                    }}
                 >
                    {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                 </select>
              </div>
              <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Target City</label>
                 <select 
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                 >
                    {selectedCountry.cities.map(c => <option key={c} value={c}>{c}</option>)}
                 </select>
              </div>
              <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Risk Niche</label>
                 <select 
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={selectedNiche.id}
                    onChange={(e) => {
                       const n = NICHES.find(n => n.id === e.target.value);
                       if(n) setSelectedNiche(n);
                    }}
                 >
                    {NICHES.map(n => <option key={n.id} value={n.id}>{n.icon} {n.label}</option>)}
                 </select>
              </div>
           </div>

           <div className="bg-slate-50 rounded-xl p-4 mb-8 border border-slate-100">
              <div className="flex items-center justify-between text-sm mb-2">
                 <span className="text-slate-500">Projected URL:</span>
                 <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    insuralix.com/insurance/{selectedCountry.code}/{selectedCity.toLowerCase()}/{selectedNiche.id}
                 </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                 <span className="text-slate-500">Affiliate Routing:</span>
                 <span className="font-bold text-green-600">
                    {selectedNiche.id === 'flood' || selectedNiche.id === 'fire' ? 'Hippo / Lemonade Home' : 'Root / Tesla Insurance'}
                 </span>
              </div>
           </div>

           <Button 
              onClick={handleGenerate} 
              disabled={generating}
              className="w-full py-4 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
           >
              {generating ? (
                 <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin" /> Generating Landing Page...
                 </span>
              ) : (
                 <span className="flex items-center gap-2">
                    Generate & View Page <ArrowRight size={20} />
                 </span>
              )}
           </Button>
        </div>
      </div>

      {/* The Matrix Visualization */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
         <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
               <Database className="text-purple-500" /> Active Risk Matrix
            </h3>
            <div className="flex gap-4 text-xs font-bold text-slate-500">
               <span className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full" /> High Risk</span>
               <span className="flex items-center gap-1"><div className="w-2 h-2 bg-yellow-500 rounded-full" /> Moderate</span>
               <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full" /> Stable</span>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COUNTRIES.flatMap(c => c.cities.slice(0, 2).map(city => (
               <div key={`${c.code}-${city}`} className="border border-slate-100 rounded-xl p-4 hover:border-blue-300 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-3">
                     <div className="font-bold text-slate-800">{city}, {c.code.toUpperCase()}</div>
                     <MapPin size={14} className="text-slate-400 group-hover:text-blue-500" />
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Flood Risk</span>
                        <span className="font-bold text-red-500">High</span>
                     </div>
                     <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Theft Rate</span>
                        <span className="font-bold text-yellow-500">Med</span>
                     </div>
                     <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-blue-500 h-full w-[70%]" />
                     </div>
                     <div className="text-[10px] text-slate-400 text-right">70% Coverage Gap</div>
                  </div>
               </div>
            )))}
         </div>
         
         <div className="mt-8 text-center">
            <Link to="/locations">
               <Button variant="outline" className="border-slate-200 text-slate-600">View Full Directory</Button>
            </Link>
         </div>
      </div>
    </div>
  );
};
