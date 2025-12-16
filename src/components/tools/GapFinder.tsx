import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const GapFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const questions = [
    { id: 'wfh', text: "Do you work from home or run a side business?", icon: "💻" },
    { id: 'pet', text: "Do you own a dog or cat?", icon: "🐕" },
    { id: 'crypto', text: "Do you hold more than $5,000 in Cryptocurrency?", icon: "₿" },
    { id: 'pool', text: "Do you have a swimming pool or trampoline?", icon: "🏊" },
    { id: 'jewelry', text: "Do you have single items (jewelry/art) worth over $2,000?", icon: "💎" }
  ];

  const handleAnswer = (val: boolean) => {
    setAnswers({ ...answers, [questions[step].id]: val });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Results
    }
  };

  const calculateRiskScore = () => {
    const gapCount = Object.values(answers).filter(Boolean).length;
    return Math.min(100, gapCount * 20);
  };

  const riskScore = calculateRiskScore();
  const gapCount = Object.values(answers).filter(Boolean).length;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="text-rose-600" /> Smart Coverage Gap Finder
        </h2>
        <p className="text-slate-500 mt-2">Decision Tree logic identifies what you actually need vs. what you have.</p>
      </div>

      {step < questions.length ? (
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: -20 }}
          className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center shadow-lg shadow-slate-200/50"
        >
           <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm">
             {questions[step].icon}
           </div>
           <div className="text-xs font-bold text-rose-500 mb-4 uppercase tracking-widest">Question {step + 1} of {questions.length}</div>
           <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 leading-tight">{questions[step].text}</h3>
           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
             <button onClick={() => handleAnswer(false)} className="px-10 py-4 rounded-xl border-2 border-slate-200 font-bold text-slate-600 hover:border-slate-400 hover:bg-slate-50 transition-all flex-1">No</button>
             <button onClick={() => handleAnswer(true)} className="px-10 py-4 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700 shadow-lg shadow-rose-500/30 transition-all flex-1">Yes</button>
           </div>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
           {/* Risk Meter */}
           <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Risk Analysis Complete</h3>
                    <p className="text-slate-300">We found <span className="text-white font-bold">{gapCount} critical gaps</span> in your protection profile.</p>
                 </div>
                 <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                       <path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                       <path className="text-rose-500" strokeDasharray={`${riskScore}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                       <span className="text-2xl font-bold">{riskScore}%</span>
                       <span className="text-[10px] uppercase tracking-wider text-rose-400">Risk Level</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Detailed Gaps */}
           <div className="grid grid-cols-1 gap-4">
              {answers['wfh'] && (
                <GapCard 
                  title="Business Equipment & Liability Gap" 
                  desc="Homeowners policies specifically EXCLUDE business liability and equipment. If a client slips in your home office, you are personally liable."
                  solution="Add a 'Business Pursuits' Endorsement (~$20/yr) or a BOP policy."
                  icon={AlertTriangle}
                />
              )}
              {answers['pet'] && (
                <GapCard 
                  title="Pet Liability Exclusion" 
                  desc="Many standard policies exclude dog bite liability or have low sub-limits. Veterinary bills for accidents are also not covered."
                  solution="Get Pet Insurance for health + Umbrella Policy for liability."
                  icon={AlertTriangle}
                />
              )}
              {answers['crypto'] && (
                <GapCard 
                  title="Digital Asset Exclusion" 
                  desc="Standard policies only cover up to $200 of 'money'. Crypto theft from hacking is completely uninsured."
                  solution="Look for specialized 'Cyber Insurance' or cold-storage insurance."
                  icon={AlertTriangle}
                />
              )}
              {answers['pool'] && (
                <GapCard 
                  title="Attractive Nuisance Liability" 
                  desc="Pools increase your liability risk exponentially. Your standard $100k liability limit is likely insufficient for a drowning lawsuit."
                  solution="Increase Liability to $500k and add a $1M Umbrella Policy."
                  icon={AlertTriangle}
                />
              )}
              {answers['jewelry'] && (
                <GapCard 
                  title="Valuable Items Sub-Limit" 
                  desc="Theft of jewelry is typically capped at $1,500 total. If your $5,000 ring is stolen, you lose $3,500."
                  solution="Schedule' the item (Personal Articles Floater) for full value."
                  icon={AlertTriangle}
                />
              )}
              
              {!Object.values(answers).some(Boolean) && (
                 <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={56} />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">You're in great shape!</h3>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">No obvious gaps detected based on your answers. However, it's always smart to review your rates.</p>
                    <Link to="/compare">
                      <Button className="bg-green-600 hover:bg-green-700">Check for Lower Rates</Button>
                    </Link>
                 </div>
              )}
           </div>
           
           {Object.values(answers).some(Boolean) && (
             <div className="flex gap-4">
               <Button onClick={() => setStep(0)} variant="outline" className="flex-1">Retake Quiz</Button>
               <Link to="/compare" className="flex-1">
                 <Button className="w-full bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-600/20">
                    Fix These Gaps Now
                 </Button>
               </Link>
             </div>
           )}
        </motion.div>
      )}
    </div>
  );
};

const GapCard = ({ title, desc, solution, icon: Icon }: { title: string, desc: string, solution: string, icon: any }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow flex gap-4 items-start">
     <div className="p-3 bg-rose-50 text-rose-600 rounded-xl shrink-0">
        <Icon size={24} />
     </div>
     <div>
        <h4 className="font-bold text-slate-900 text-lg mb-1">{title}</h4>
        <p className="text-slate-600 text-sm mb-3">{desc}</p>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-800 font-medium">
           <span className="font-bold">💡 Solution:</span> {solution}
        </div>
     </div>
  </div>
);
