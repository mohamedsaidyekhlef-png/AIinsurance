import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Satellite, MapPin, AlertTriangle, CheckCircle, Loader2, Trees, Droplets, Home } from 'lucide-react';
import { Button } from '../ui/Button';
import { analyzePropertyRisk } from '../../lib/gemini';

export const SatelliteGuardian = () => {
  const [address, setAddress] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!address) return;
    setAnalyzing(true);
    try {
      const data = await analyzePropertyRisk(address);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Satellite className="text-sky-600" /> Satellite Guardian
        </h2>
        <p className="text-slate-500 mt-2">
          Enter your address. Our AI simulates a satellite analysis to find vegetation, roof, and drainage risks before insurers do.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Side */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                 <h3 className="text-xl font-bold mb-4">Property Health Check</h3>
                 <div className="relative mb-6">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                       type="text" 
                       value={address}
                       onChange={(e) => setAddress(e.target.value)}
                       placeholder="Enter full property address..."
                       className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500 outline-none"
                    />
                 </div>
                 <Button onClick={handleAnalyze} disabled={analyzing} className="w-full bg-sky-500 hover:bg-sky-600 font-bold">
                    {analyzing ? <Loader2 className="animate-spin" /> : 'Launch Satellite Analysis'}
                 </Button>
              </div>
           </div>

           {/* Results */}
           {result && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
                 <div className="flex items-center justify-between mb-6">
                    <div>
                       <div className="text-xs text-slate-500 uppercase font-bold">Risk Score</div>
                       <div className={`text-4xl font-bold ${result.riskScore > 50 ? 'text-red-500' : 'text-green-500'}`}>{result.riskScore}/100</div>
                    </div>
                    <div className="text-right">
                       <div className="text-xs text-slate-500 uppercase font-bold">Status</div>
                       <div className="font-bold text-slate-900">{result.riskScore > 50 ? 'Action Required' : 'Good Condition'}</div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    {result.redZones?.map((zone: any, i: number) => (
                       <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <div className="flex items-center gap-2 mb-1">
                             {zone.title.includes("Vegetation") ? <Trees size={16} className="text-green-600" /> : 
                              zone.title.includes("Drainage") ? <Droplets size={16} className="text-blue-600" /> :
                              <Home size={16} className="text-slate-600" />}
                             <span className="font-bold text-slate-900">{zone.title}</span>
                             <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${zone.severity === 'high' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                {zone.severity}
                             </span>
                          </div>
                          <p className="text-sm text-slate-600">{zone.desc}</p>
                       </div>
                    ))}
                 </div>

                 <div className="mt-6 bg-sky-50 p-4 rounded-xl border border-sky-100">
                    <p className="text-sm text-sky-800 font-medium">
                       <strong>💡 Recommendation:</strong> {result.affiliateHook}
                    </p>
                 </div>
              </motion.div>
           )}
        </div>

        {/* Visualizer (Mock) */}
        <div className="bg-slate-100 rounded-3xl overflow-hidden relative min-h-[400px] flex items-center justify-center">
           {analyzing ? (
              <div className="text-center">
                 <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                 <p className="text-slate-500 font-mono text-sm">Acquiring NASA GIBS Data...</p>
                 <p className="text-slate-400 font-mono text-xs mt-2">Analyzing Vegetation Index (NDVI)...</p>
              </div>
           ) : !result ? (
              <div className="text-center p-8">
                 <Satellite size={64} className="text-slate-300 mx-auto mb-4" />
                 <p className="text-slate-400 font-bold">Awaiting Coordinates</p>
              </div>
           ) : (
              <div className="relative w-full h-full bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center">
                 <div className="absolute inset-0 bg-slate-900/40" />
                 {/* Augmented Reality Overlays */}
                 <div className="absolute top-1/4 left-1/4 p-2 bg-red-500/80 text-white text-xs font-bold rounded backdrop-blur-md border border-white/20">
                    <AlertTriangle size={12} className="inline mr-1" /> Tree Overhang
                 </div>
                 <div className="absolute bottom-1/3 right-1/3 p-2 bg-yellow-500/80 text-white text-xs font-bold rounded backdrop-blur-md border border-white/20">
                    <Droplets size={12} className="inline mr-1" /> Drainage Risk
                 </div>
                 <div className="absolute bottom-4 left-4 bg-black/70 text-green-400 font-mono text-xs p-2 rounded border border-green-500/30">
                    LAT: 34.0522 N <br/>
                    LON: 118.2437 W <br/>
                    ELEV: 235ft
                 </div>
              </div>
           )}
        </div>
      </div>
    </div>
  );
};
