import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';

export const RiskPulse = () => {
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    // Animate score on mount
    const timer = setTimeout(() => setScore(82), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-slate-900 text-white rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl mb-12">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider mb-6 border border-red-500/30">
            <Activity size={14} /> Live Risk Monitoring
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Risk Pulse</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            We calculate your safety score by cross-referencing your assets against local crime rates, climate data, and inflation.
          </p>
          
          <div className="flex gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <AlertTriangle className="text-yellow-400" size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Inflation Impact</div>
                <div className="font-bold text-white">+4.2% Risk</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <ShieldCheck className="text-green-400" size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Asset Protection</div>
                <div className="font-bold text-white">Moderate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Score Visualization */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
           {/* SVG Circle Progress */}
           <svg className="w-full h-full -rotate-90 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]" viewBox="0 0 36 36">
              <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
              <motion.path 
                className="text-teal-400" 
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: `${score}, 100` }}
                transition={{ duration: 2, ease: "easeOut" }}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
           </svg>
           
           <div className="absolute flex flex-col items-center text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-6xl md:text-7xl font-bold text-white tracking-tighter"
              >
                {score}
              </motion.div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Health Score</div>
              <div className="mt-2 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold border border-yellow-500/30">
                Gap Detected
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
