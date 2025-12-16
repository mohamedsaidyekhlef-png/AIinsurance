import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Check, ShieldCheck, Search, Database, Lock, UploadCloud, ArrowRight, AlertTriangle, XCircle, Info } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const PolicyAnalyzer = () => {
  const [step, setStep] = useState<'upload' | 'processing' | 'result'>('upload');
  const [progress, setProgress] = useState(0);
  const [processStatus, setProcessStatus] = useState('');
  
  // Mock analysis data structure
  const analysisResult = {
    policyType: "HO-3 Special Form (Homeowners)",
    carrier: "Global Shield Insurance",
    grade: "B-",
    summary: "This policy provides strong Dwelling coverage but has significant gaps in Water Damage and Personal Property limits. It uses 'Actual Cash Value' for roof damage, which may lead to high out-of-pocket costs.",
    extractedLimits: [
      { name: "Dwelling (Coverage A)", limit: "$450,000", status: "good" },
      { name: "Other Structures (Coverage B)", limit: "$45,000", status: "warning" },
      { name: "Personal Property (Coverage C)", limit: "$225,000", status: "good" },
      { name: "Loss of Use (Coverage D)", limit: "$90,000", status: "good" },
      { name: "Liability (Coverage E)", limit: "$100,000", status: "danger" }, // Too low
    ],
    clauses: [
      { id: 1, title: "Water Backup Exclusion", type: "exclusion", desc: "Damages caused by sump pump failure or sewer backup are NOT covered.", impact: "High Risk" },
      { id: 2, title: "Roof Valuation", type: "limitation", desc: "Roof claims paid at Actual Cash Value (depreciated), not Replacement Cost.", impact: "Medium Risk" },
      { id: 3, title: "Wind/Hail Deductible", type: "deductible", desc: "Separate deductible of 2% of dwelling coverage ($9,000) applies to wind storms.", impact: "High Cost" }
    ]
  };

  const handleUpload = () => {
    setStep('processing');
    const stages = [
      { p: 10, text: "Initializing Secure Upload..." },
      { p: 25, text: "Scrubbing PII (Privacy Layer)..." },
      { p: 40, text: "OCR Text Extraction (Unstructured.io)..." },
      { p: 60, text: "Vectorizing Clauses (OpenAI Embeddings)..." },
      { p: 80, text: "Cross-Referencing State Laws..." },
      { p: 90, text: "Generating Risk Score..." },
      { p: 100, text: "Finalizing Report..." }
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage >= stages.length) {
        clearInterval(interval);
        setStep('result');
      } else {
        setProgress(stages[currentStage].p);
        setProcessStatus(stages[currentStage].text);
        currentStage++;
      }
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="text-blue-600" /> AI Policy Decoder
        </h2>
        <p className="text-slate-500 mt-2">Upload your PDF. Our RAG engine extracts limits, exclusions, and hidden clauses instantly.</p>
      </div>

      {step === 'upload' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center hover:bg-slate-50 transition-colors cursor-pointer group bg-slate-50/50" onClick={handleUpload}>
          <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
            <UploadCloud size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Drop your Policy PDF here</h3>
          <p className="text-slate-500 text-sm mb-8">Supports HO-3, Auto Declarations, and Term Life Documents</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm"><Lock size={12} className="text-green-500" /> PII Scrubbed Locally</span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm"><ShieldCheck size={12} className="text-green-500" /> 256-bit Encryption</span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm"><Database size={12} className="text-blue-500" /> No Data Storage</span>
          </div>
        </motion.div>
      )}

      {step === 'processing' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center">
          <div className="w-full max-w-md mx-auto mb-10">
             <div className="flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
               <span>Analysis Progress</span>
               <span>{progress}%</span>
             </div>
             <div className="h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
               <motion.div 
                 className="h-full bg-gradient-to-r from-blue-500 to-teal-400"
                 initial={{ width: 0 }}
                 animate={{ width: `${progress}%` }}
               />
             </div>
             <p className="mt-4 text-slate-700 font-medium animate-pulse flex items-center justify-center gap-2">
               <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
               {processStatus}
             </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs text-slate-500">
             <div className={`p-4 rounded-xl border transition-all duration-300 ${progress > 25 ? 'border-green-200 bg-green-50 text-green-700 shadow-sm' : 'border-slate-100 bg-slate-50'}`}>
               <div className="font-bold mb-1">1. Privacy Layer</div>
               Removing Names & Addresses
             </div>
             <div className={`p-4 rounded-xl border transition-all duration-300 ${progress > 60 ? 'border-blue-200 bg-blue-50 text-blue-700 shadow-sm' : 'border-slate-100 bg-slate-50'}`}>
               <div className="font-bold mb-1">2. Vector Analysis</div>
               Matching Clauses to Database
             </div>
             <div className={`p-4 rounded-xl border transition-all duration-300 ${progress > 90 ? 'border-purple-200 bg-purple-50 text-purple-700 shadow-sm' : 'border-slate-100 bg-slate-50'}`}>
               <div className="font-bold mb-1">3. Risk Scoring</div>
               Calculating Coverage Grade
             </div>
          </div>
        </motion.div>
      )}

      {step === 'result' && (
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
                {analysisResult.extractedLimits.map((limit, i) => (
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
                {analysisResult.clauses.map((clause) => (
                  <div key={clause.id} className="bg-white p-4 rounded-xl border border-red-100 shadow-sm flex gap-4">
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
            <Button onClick={() => setStep('upload')} variant="outline" className="flex-1 border-slate-200">Analyze Another Document</Button>
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
