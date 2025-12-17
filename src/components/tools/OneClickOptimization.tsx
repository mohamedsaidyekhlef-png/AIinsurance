import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, RefreshCw, ArrowRight, Check, TrendingDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const OneClickOptimization = () => {
  const [optimizing, setOptimizing] = useState(false);
  const [result, setResult] = useState(false);

  const handleOptimize = () => {
    setOptimizing(true);
    setTimeout(() => {
      setOptimizing(false);
      setResult(true);
    }, 2500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="text-yellow-500" /> Risk Re-Balancer Agent
        </h2>
        <p className="text-slate-500 mt-2">Our AI scans your current setup and proposes a "Swap" to better carriers instantly.</p>
      </div>

      {!result ? (
        <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-200">
           <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative">
              <Zap size={40} className="text-yellow-500" />
              {optimizing && (
                 <motion.div 
                   className="absolute inset-0 border-4 border-yellow-400 rounded-full border-t-transparent"
                   animate={{ rotate: 360 }}
                   transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                 />
              )}
           </div>
           
           <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Optimize?</h3>
           <p className="text-slate-600 max-w-md mx-auto mb-8">
              We will scan 20+ carriers against your profile to find a "Perfect Swap" that lowers cost while increasing coverage.
           </p>
           
           <Button onClick={handleOptimize} disabled={optimizing} size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 text-lg shadow-xl shadow-slate-900/20">
              {optimizing ? 'AI Agent Working...' : 'Re-Balance My Risk'}
           </Button>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white border-2 border-green-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
              OPTIMIZATION COMPLETE
           </div>
           
           <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="text-center md:text-left">
                 <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Proposed Swap</div>
                 <h3 className="text-3xl font-bold text-slate-900">Root + Hippo Bundle</h3>
              </div>
              
              <div className="flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-xl border border-slate-200">
                 <div className="text-center">
                    <div className="text-xs text-slate-400 line-through">$182/mo</div>
                    <div className="font-bold text-red-500">Current</div>
                 </div>
                 <ArrowRight className="text-slate-300" />
                 <div className="text-center">
                    <div className="text-xl font-bold text-green-600">$140/mo</div>
                    <div className="font-bold text-slate-900">New Rate</div>
                 </div>
              </div>
           </div>
           
           <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                 <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                 <span className="text-slate-700"><strong>Auto:</strong> Switched to Root (Telematics Discount applied)</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                 <span className="text-slate-700"><strong>Home:</strong> Switched to Hippo (Smart Home Discount)</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="p-1 bg-green-100 rounded-full text-green-600"><TrendingDown size={14} /></div>
                 <span className="text-slate-700"><strong>Total Savings:</strong> $42/mo ($504/yr)</span>
              </div>
           </div>
           
           <Link to="/compare">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-4 shadow-lg shadow-green-600/20">
                 Confirm Swap & Save
              </Button>
           </Link>
           <p className="text-center text-xs text-slate-400 mt-4">
              Redirects to partner checkout pages. Rates subject to final approval.
           </p>
        </motion.div>
      )}
    </div>
  );
};
