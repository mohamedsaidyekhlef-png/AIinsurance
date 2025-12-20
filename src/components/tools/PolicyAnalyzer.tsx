import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, Check, ShieldCheck, Search, Database, Lock, UploadCloud, ArrowRight, AlertTriangle, XCircle, Info, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { analyzeDocument, fileToBase64 } from '../../lib/gemini';

export const PolicyAnalyzer = () => {
  const [step, setStep] = useState<'upload' | 'processing' | 'result'>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      handleAnalyze(e.target.files[0]);
    }
  };

  const handleAnalyze = async (uploadedFile: File) => {
    setStep('processing');
    setError('');
    
    try {
      const base64 = await fileToBase64(uploadedFile);
      const result = await analyzeDocument(base64, uploadedFile.type);
      
      if (result.error) {
        setError(result.error);
        setStep('upload');
      } else {
        setAnalysisResult(result);
        setStep('result');
      }
    } catch (err) {
      console.error(err);
      setError("Failed to analyze document. Please try a clear PDF or Image.");
      setStep('upload');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="text-blue-600" /> AI Policy Decoder
        </h2>
        <p className="text-slate-500 mt-2">Upload your actual PDF or Image. Gemini AI extracts limits, exclusions, and hidden clauses instantly.</p>
      </div>

      {step === 'upload' && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center hover:bg-slate-50 transition-colors cursor-pointer group bg-slate-50/50 relative"
          onClick={() => fileInputRef.current?.click()}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="application/pdf,image/jpeg,image/png,image/webp"
            onChange={handleFileChange}
          />
          
          <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <UploadCloud size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Click to Upload Policy</h3>
          <p className="text-slate-500 text-sm mb-8">Supports PDF, JPG, PNG (Max 10MB)</p>
          
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-bold">
              {error}
            </div>
          )}
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm"><Lock size={12} className="text-green-500" /> Gemini 1.5 Flash Secure Analysis</span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm"><ShieldCheck size={12} className="text-green-500" /> Encrypted Transfer</span>
          </div>
        </motion.div>
      )}

      {step === 'processing' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
          <Loader2 size={64} className="text-blue-600 animate-spin mx-auto mb-8" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Analyzing Document...</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            Gemini AI is reading your file, identifying coverage limits, and cross-referencing exclusions. This may take up to 30 seconds.
          </p>
        </motion.div>
      )}

      {step === 'result' && analysisResult && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Scorecard Header */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden mb-8">
            <div className="bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                  <FileText size={14} /> {analysisResult.policyType}
                </div>
                <h3 className="text-2xl font-bold mb-2">Policy Analysis Report</h3>
                <p className="text-slate-300 text-sm max-w-xl">{analysisResult.summary}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-yellow-400 flex items-center justify-center text-3xl font-bold bg-white/10 backdrop-blur-md">
                  {analysisResult.grade}
                </div>
                <span className="text-xs font-bold text-yellow-400 mt-2 uppercase tracking-wider">Coverage Grade</span>
              </div>
            </div>

            {/* Extracted Limits Grid */}
            <div className="p-6 md:p-8 border-b border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Database size={18} className="text-blue-600" /> Extracted Coverage Limits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {analysisResult.extractedLimits?.map((limit: any, i: number) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                    <div>
                      <div className="text-xs text-slate-500 font-medium mb-1">{limit.name}</div>
                      <div className="text-lg font-bold text-slate-900">{limit.limit}</div>
                    </div>
                    {limit.status === 'good' && <CheckCircleIcon className="text-green-500" />}
                    {limit.status === 'warning' && <AlertTriangle className="text-yellow-500" size={20} />}
                    {limit.status === 'danger' && <XCircle className="text-red-500" size={20} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Red Flags / Clauses */}
            <div className="p-6 md:p-8 bg-red-50/30">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600" /> Critical Exclusions & Warnings
              </h4>
              <div className="space-y-3">
                {analysisResult.clauses?.map((clause: any, i: number) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-red-100 shadow-sm flex gap-4">
                    <div className="mt-1">
                      {clause.type === 'exclusion' && <XCircle className="text-red-500" size={20} />}
                      {clause.type === 'limitation' && <AlertTriangle className="text-orange-500" size={20} />}
                      {clause.type === 'deductible' && <Info className="text-blue-500" size={20} />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-bold text-slate-900">{clause.title}</h5>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500">{clause.type}</span>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-red-100 text-red-600">{clause.impact}</span>
                      </div>
                      <p className="text-sm text-slate-600">{clause.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => { setStep('upload'); setFile(null); }} variant="outline" className="flex-1 border-slate-200">Analyze Another Document</Button>
            <Link to="/compare" className="flex-1">
              <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20">
                Fix These Gaps (Compare Quotes) <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Helper icon component
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <div className={`p-1 rounded-full bg-white shadow-sm ${className}`}>
    <Check size={14} />
  </div>
);
