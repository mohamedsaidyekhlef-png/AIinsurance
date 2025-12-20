import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Upload, ArrowRight, AlertOctagon, CheckCircle2, DollarSign, Loader2, FileText } from 'lucide-react';
import { Button } from '../ui/Button';
import { analyzeAndNegotiatePolicy, fileToBase64 } from '../../lib/gemini';

export const FinePrintDetective = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setAnalyzing(true);
      
      try {
        const base64 = await fileToBase64(selectedFile);
        const data = await analyzeAndNegotiatePolicy(base64, selectedFile.type);
        setResult(data);
      } catch (err) {
        console.error(err);
      } finally {
        setAnalyzing(false);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileSearch className="text-indigo-600" /> Fine-Print Detective
        </h2>
        <p className="text-slate-500 mt-2">
          Agentic Policy Review. Upload your policy PDF. Our AI negotiates for you by finding hidden exclusions and comparing them to better offers.
        </p>
      </div>

      {!result ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-300 rounded-3xl p-8 md:p-16 text-center hover:bg-slate-50 transition-all cursor-pointer group relative overflow-hidden"
        >
          <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,image/*" onChange={handleFileChange} />
          
          {analyzing ? (
             <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center z-10">
                <Loader2 size={48} className="text-indigo-600 animate-spin mb-4" />
                <h3 className="text-xl font-bold text-slate-900">Agent is Reading...</h3>
                <p className="text-slate-500">Extracting clauses • Comparing market rates • Finding gotchas</p>
             </div>
          ) : (
             <>
                <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                   <Upload size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Drop Policy PDF Here</h3>
                <p className="text-slate-500">or click to browse</p>
             </>
          )}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Current Policy Status */}
           <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Current Policy</h3>
              <div className="text-3xl font-bold text-slate-900 mb-1">{result.currentPolicy.carrier}</div>
              <div className="text-lg text-slate-500 mb-6">{result.currentPolicy.monthly}/mo</div>
              
              <div className="space-y-4">
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Deductible</span>
                    <span className="font-bold text-slate-900">{result.currentPolicy.deductible}</span>
                 </div>
                 <div className="p-3 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100">
                    <AlertOctagon size={16} className="inline mr-2" />
                    <strong>Risk Detected:</strong> High Deductible
                 </div>
              </div>
           </div>

           {/* The Detective's Findings */}
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="text-indigo-400" /> Hidden Exclusions Found
                 </h3>
                 
                 <div className="space-y-4 relative z-10">
                    {result.hiddenExclusions.map((item: any, i: number) => (
                       <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                          <div className="flex justify-between items-start mb-2">
                             <div className="font-bold text-white">{item.clause}</div>
                             <div className="text-red-300 font-mono text-xs bg-red-900/30 px-2 py-1 rounded">{item.impact}</div>
                          </div>
                          <p className="text-slate-300 text-sm">{item.meaning}</p>
                       </div>
                    ))}
                 </div>
              </div>

              {/* The Better Offer */}
              <div className="bg-green-50 border border-green-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                    <div className="flex items-center gap-2 mb-2">
                       <CheckCircle2 className="text-green-600" />
                       <span className="font-bold text-green-800">Better Option Identified</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">{result.betterOffer.carrier}</h3>
                    <p className="text-slate-600 mt-2 max-w-md">{result.negotiationStrategy}</p>
                 </div>
                 <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-green-100 min-w-[200px] w-full md:w-auto">
                    <div className="text-sm text-slate-400 uppercase font-bold">New Price</div>
                    <div className="text-4xl font-bold text-green-600 mb-1">{result.betterOffer.price}</div>
                    <div className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full inline-block">
                       Save {result.betterOffer.savings}
                    </div>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Switch Now</Button>
                 </div>
              </div>
           </div>
        </motion.div>
      )}
    </div>
  );
};
