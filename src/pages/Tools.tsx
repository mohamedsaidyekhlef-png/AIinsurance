import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart3, Shield, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Tools = () => {
  const [activeTab, setActiveTab] = useState<'analyzer' | 'predictor' | 'gap'>('analyzer');
  const [policyText, setPolicyText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnalyze = () => {
    if (!policyText) return;
    setAnalyzing(true);
    // Mock AI delay
    setTimeout(() => {
      setAnalyzing(false);
      setResult("Based on the text provided, this policy EXCLUDES water damage from floods but COVERS burst pipes. There is a $1,000 deductible for theft claims.");
    }, 2000);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">AI Insurance Tools</h1>
          <p className="text-xl text-slate-600">
            Powerful utilities to help you understand your coverage and save money.
          </p>
        </div>

        {/* Tool Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => { setActiveTab('analyzer'); setResult(null); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'analyzer' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText size={20} /> Policy Analyzer
          </button>
          <button
            onClick={() => { setActiveTab('predictor'); setResult(null); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'predictor' 
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BarChart3 size={20} /> Premium Predictor
          </button>
          <button
            onClick={() => { setActiveTab('gap'); setResult(null); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'gap' 
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Shield size={20} /> Gap Finder
          </button>
        </div>

        {/* Tool Content Area */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[400px]">
          {activeTab === 'analyzer' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <FileText size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">AI Policy Decoder</h2>
                  <p className="text-slate-500">Paste your confusing policy text below.</p>
                </div>
              </div>

              {!result ? (
                <div className="space-y-4">
                  <textarea 
                    className="w-full h-48 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-slate-700 bg-slate-50"
                    placeholder="Paste policy text here (e.g., 'The insurer shall not be liable for loss caused by...')"
                    value={policyText}
                    onChange={(e) => setPolicyText(e.target.value)}
                  />
                  <Button 
                    onClick={handleAnalyze} 
                    disabled={!policyText || analyzing}
                    className="w-full"
                  >
                    {analyzing ? 'Analyzing with AI...' : 'Simplify This Policy'}
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                      <Check size={20} /> Simplified Explanation
                    </h3>
                    <p className="text-blue-900 leading-relaxed">{result}</p>
                  </div>
                  <Button variant="outline" onClick={() => setResult(null)} className="w-full">Analyze Another</Button>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'predictor' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="p-8 md:p-12"
            >
               <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Rate Predictor</h2>
                  <p className="text-slate-500">Estimate your 2026 premiums based on current trends.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Insurance Type</label>
                  <select className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-teal-500">
                    <option>Auto Insurance</option>
                    <option>Home Insurance</option>
                    <option>Life Insurance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Monthly Premium ($)</label>
                  <input type="number" className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-teal-500" placeholder="150" />
                </div>
              </div>
              <Button className="w-full bg-teal-500 hover:bg-teal-600 shadow-teal-500/30">Calculate Prediction</Button>
            </motion.div>
          )}

          {activeTab === 'gap' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="p-8 md:p-12"
            >
               <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Coverage Gap Finder</h2>
                  <p className="text-slate-500">Identify missing protection in your portfolio.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 border border-slate-200 rounded-xl hover:border-rose-400 cursor-pointer transition-colors flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300" />
                  <span>I work remotely from home</span>
                </div>
                <div className="p-4 border border-slate-200 rounded-xl hover:border-rose-400 cursor-pointer transition-colors flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300" />
                  <span>I own a pet</span>
                </div>
                <div className="p-4 border border-slate-200 rounded-xl hover:border-rose-400 cursor-pointer transition-colors flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300" />
                  <span>I rent out a room on Airbnb</span>
                </div>
                <Button className="w-full mt-4 bg-rose-500 hover:bg-rose-600 shadow-rose-500/30">Find Gaps</Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
