import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Lock, Server, ArrowRight, Gauge, Activity, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const TelematicsOptimizer = () => {
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    savings: number;
    metrics: { name: string; grade: string; score: number; color: string }[];
  } | null>(null);

  const handleUpload = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setResult({
        score: 92,
        savings: 340,
        metrics: [
          { name: "Hard Braking", grade: "A", score: 98, color: "text-green-500" },
          { name: "Acceleration", grade: "A-", score: 92, color: "text-green-500" },
          { name: "Phone Distraction", grade: "B+", score: 88, color: "text-yellow-500" },
          { name: "Late Night Driving", grade: "A", score: 95, color: "text-green-500" },
          { name: "Cornering", grade: "B", score: 85, color: "text-yellow-500" }
        ]
      });
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Smartphone className="text-emerald-600" /> Telematics Data Sandbox
        </h2>
        <p className="text-slate-500 mt-2">Privacy-First. Analyze your driving data locally to see your "Driver Score" before sharing it with insurers.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
         {/* Privacy Badge */}
         <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-bl-2xl text-xs font-bold flex items-center gap-2 z-10">
            <Lock size={12} /> Edge AI / WebAssembly
         </div>

         {!result ? (
            <div className="text-center py-12">
               <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-slate-200 group-hover:border-emerald-400 transition-colors">
                  <Server className="text-slate-400" size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Data Source</h3>
               <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
                  Connect Apple Health or Tesla Driving Data. Your data is processed <strong>in your browser</strong> via WebAssembly and never hits our servers.
               </p>
               
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button onClick={handleUpload} disabled={processing} variant="outline" className="border-slate-200 hover:border-emerald-500 hover:text-emerald-600">
                     {processing ? 'Processing Wasm...' : 'Connect Apple Health'}
                  </Button>
                  <Button onClick={handleUpload} disabled={processing} variant="outline" className="border-slate-200 hover:border-emerald-500 hover:text-emerald-600">
                     {processing ? 'Processing Wasm...' : 'Connect Tesla API'}
                  </Button>
               </div>
               
               {processing && (
                  <div className="mt-8 max-w-xs mx-auto">
                     <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                           className="h-full bg-emerald-500"
                           initial={{ width: 0 }}
                           animate={{ width: "100%" }}
                           transition={{ duration: 2 }}
                        />
                     </div>
                     <p className="text-xs text-emerald-600 mt-2 font-mono animate-pulse">Running Regression Model (Local)...</p>
                  </div>
               )}
            </div>
         ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
               <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
                  {/* Score Circle */}
                  <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
                     <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        <path className="text-emerald-500" strokeDasharray={`${result.score}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                     </svg>
                     <div className="absolute flex flex-col items-center">
                        <span className="text-4xl font-bold text-slate-900">{result.score}</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Driver Score</span>
                     </div>
                  </div>
                  
                  <div className="text-center md:text-left">
                     <h3 className="text-2xl font-bold text-emerald-700 mb-2">Excellent Driver Profile</h3>
                     <p className="text-slate-600 mb-4">
                        Your driving habits qualify you for the <span className="font-bold text-slate-900">Top Tier</span> of safe driver discounts.
                     </p>
                     <div className="inline-block bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-xl">
                        <span className="text-emerald-800 font-bold text-sm">Estimated Savings: ${result.savings}/year</span>
                     </div>
                  </div>
               </div>

               {/* Report Card */}
               <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                     <Activity size={18} /> Driving Report Card
                  </h4>
                  <div className="space-y-3">
                     {result.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-100">
                           <span className="text-sm font-medium text-slate-600">{metric.name}</span>
                           <div className="flex items-center gap-3">
                              <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                                 <div className={`h-full ${metric.score > 90 ? 'bg-green-500' : 'bg-yellow-500'}`} style={{ width: `${metric.score}%` }} />
                              </div>
                              <span className={`font-bold w-6 text-right ${metric.color}`}>{metric.grade}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 p-4 rounded-xl hover:border-emerald-500 transition-colors cursor-pointer group">
                     <div className="text-xs text-slate-500 mb-1">Root Insurance</div>
                     <div className="font-bold text-slate-900 group-hover:text-emerald-600">$96/mo <span className="text-xs font-normal text-slate-400">(was $145)</span></div>
                  </div>
                  <div className="bg-white border border-slate-200 p-4 rounded-xl hover:border-emerald-500 transition-colors cursor-pointer group">
                     <div className="text-xs text-slate-500 mb-1">Progressive Snapshot</div>
                     <div className="font-bold text-slate-900 group-hover:text-emerald-600">$102/mo <span className="text-xs font-normal text-slate-400">(was $138)</span></div>
                  </div>
               </div>
               
               <div className="mt-8 flex gap-4">
                  <Link to="/compare" className="flex-1">
                     <Button className="w-full bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20">Unlock These Rates</Button>
                  </Link>
                  <Button onClick={() => setResult(null)} variant="ghost" className="text-slate-400">Clear Data & Reset</Button>
               </div>
            </motion.div>
         )}
      </div>
    </div>
  );
};
