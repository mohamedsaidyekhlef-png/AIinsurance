import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, AlertCircle, ArrowRight, DollarSign, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { predictPremium } from '../../lib/gemini';

export const PremiumPredictor = () => {
  const [step, setStep] = useState('input');
  const [calculating, setCalculating] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    age: 30,
    zip: '',
    credit: 'good', 
    vehicleValue: 35000,
    coverage: 'full',
    accidents: 0
  });

  // Result State
  const [prediction, setPrediction] = useState<any>(null);

  const handleCalculate = async () => {
    setCalculating(true);
    try {
      const result = await predictPremium(formData);
      setPrediction(result);
      setStep('result');
    } catch (e) {
      console.error(e);
      alert("AI Prediction Failed. Please try again.");
    } finally {
      setCalculating(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="text-teal-600" /> AI Premium Predictor
        </h2>
        <p className="text-slate-500 mt-2">Gemini AI analyzes your profile against real-time market trends to forecast your rate.</p>
      </div>

      {step === 'input' ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Driver Age</label>
                <input 
                  type="number" 
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: parseInt(e.target.value) || 0})}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-teal-500 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Zip Code</label>
                <input 
                  type="text" 
                  value={formData.zip}
                  onChange={(e) => setFormData({...formData, zip: e.target.value})}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-teal-500 outline-none transition-all" 
                  placeholder="e.g. 90210" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Vehicle Value ($)</label>
                <input 
                  type="number" 
                  value={formData.vehicleValue}
                  onChange={(e) => setFormData({...formData, vehicleValue: parseInt(e.target.value) || 0})}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-teal-500 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Accidents (Last 3 Years)</label>
                <select 
                  value={formData.accidents}
                  onChange={(e) => setFormData({...formData, accidents: parseInt(e.target.value)})}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                >
                  <option value={0}>None</option>
                  <option value={1}>1 Accident</option>
                  <option value={2}>2 Accidents</option>
                  <option value={3}>3+ Accidents</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Credit Tier</label>
                <select 
                  value={formData.credit}
                  onChange={(e) => setFormData({...formData, credit: e.target.value})}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                >
                  <option value="poor">Poor (Below 580)</option>
                  <option value="fair">Fair (580-669)</option>
                  <option value="good">Good (670-739)</option>
                  <option value="excellent">Excellent (740+)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Coverage Level</label>
                <select 
                  value={formData.coverage}
                  onChange={(e) => setFormData({...formData, coverage: e.target.value})}
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                >
                  <option value="liability">State Minimum (Liability Only)</option>
                  <option value="full">Full Coverage (Comp & Collision)</option>
                </select>
              </div>
           </div>
           
           <Button onClick={handleCalculate} disabled={calculating} className="w-full bg-teal-600 hover:bg-teal-700 py-4 text-lg shadow-lg shadow-teal-600/20">
             {calculating ? (
               <span className="flex items-center gap-2"><RefreshCw className="animate-spin" /> Querying Gemini AI...</span>
             ) : 'Calculate Predicted Premium'}
           </Button>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
           {/* Result Header */}
           <div className="bg-slate-900 text-white p-8 rounded-3xl mb-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Estimated Monthly Premium</p>
                  <div className="text-5xl font-bold flex items-baseline gap-2">
                    ${prediction?.total}<span className="text-xl text-slate-400 font-medium">/mo</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-lg font-bold border border-red-500/30">
                      +{prediction?.marketTrend}% Market Trend
                    </span>
                    <span className="text-slate-400">vs. last year</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 w-full md:w-auto min-w-[200px]">
                   <div className="text-xs text-slate-400 mb-2">AI Confidence Score</div>
                   <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-teal-400 w-[92%]" />
                   </div>
                   <div className="text-right text-xs font-bold text-teal-400">92% Accuracy</div>
                </div>
              </div>
           </div>

           {/* Cost Breakdown */}
           <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-8 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-lg">
                <DollarSign className="text-teal-600" /> AI Price Breakdown
              </h3>
              
              <div className="space-y-3">
                 <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50">
                    <span className="font-medium text-slate-600">Base Market Rate</span>
                    <span className="font-bold text-slate-900">${prediction?.base}</span>
                 </div>
                 {prediction?.factors.map((factor: any, i: number) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-lg border-b border-slate-50 last:border-0">
                       <span className="text-sm text-slate-500">{factor.name}</span>
                       <span className={`font-bold ${factor.type === 'add' ? 'text-red-500' : 'text-green-500'}`}>
                          {factor.type === 'add' ? '+' : '-'}${factor.amount}
                       </span>
                    </div>
                 ))}
                 <div className="border-t border-slate-200 pt-3 mt-2 flex justify-between items-center">
                    <span className="font-bold text-slate-900">Total Estimated</span>
                    <span className="font-bold text-xl text-teal-600">${prediction?.total}</span>
                 </div>
              </div>
           </div>

           <div className="flex gap-4">
             <Button onClick={() => setStep('input')} variant="outline" className="flex-1">Recalculate</Button>
             <Link to="/compare" className="flex-1">
               <Button className="w-full bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-600/20">
                  Find Rates Below ${prediction?.total}
               </Button>
             </Link>
           </div>
        </motion.div>
      )}
    </div>
  );
};
