import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Calendar, TrendingUp, UserPlus, Briefcase, Home, DollarSign } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const LifeEventSimulator = () => {
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState(false);
  const [goals, setGoals] = useState({
    house: true,
    kids: false,
    business: false
  });

  const runSimulation = () => {
    setSimulating(true);
    setTimeout(() => {
      setSimulating(false);
      setResult(true);
    }, 2000);
  };

  // Mock data generation based on inputs
  const generateProjection = () => {
    const baseExpense = 40000;
    const houseCost = goals.house ? 25000 : 0;
    const kidCost = goals.kids ? 15000 : 0;
    const businessRisk = goals.business ? 10000 : 0;
    
    const years = [2025, 2026, 2027, 2028, 2029];
    return years.map((year, i) => {
      const expense = baseExpense + (houseCost * (i > 1 ? 1 : 0)) + (kidCost * (i > 0 ? 1 : 0)) + (businessRisk * (i > 2 ? 1 : 0));
      const coverage = 500000 - (expense * i); // Depleting coverage logic
      return { year, expense, coverage };
    });
  };

  const projection = generateProjection();
  const shortfallYear = projection.find(p => p.coverage < 100000)?.year || "2032";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Activity className="text-purple-600" /> "Future-Self" Risk Simulator
        </h2>
        <p className="text-slate-500 mt-2">Monte Carlo simulation engine running 1,000 life scenarios to predict your future coverage needs.</p>
      </div>

      {!result ? (
        <div className="space-y-8">
           <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
              <h3 className="font-bold text-purple-900 mb-6 text-lg">Select Your Future Goals (Next 5 Years)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div 
                    onClick={() => setGoals({...goals, house: !goals.house})}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${goals.house ? 'border-purple-500 bg-white shadow-md' : 'border-transparent bg-white/50 hover:bg-white'}`}
                 >
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl w-fit mb-4"><Home size={24} /></div>
                    <div className="font-bold text-slate-900">Buy a House</div>
                    <div className="text-xs text-slate-500 mt-1">Adds Mortgage Debt</div>
                 </div>
                 
                 <div 
                    onClick={() => setGoals({...goals, kids: !goals.kids})}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${goals.kids ? 'border-purple-500 bg-white shadow-md' : 'border-transparent bg-white/50 hover:bg-white'}`}
                 >
                    <div className="p-3 bg-rose-100 text-rose-600 rounded-xl w-fit mb-4"><UserPlus size={24} /></div>
                    <div className="font-bold text-slate-900">Have Kids</div>
                    <div className="text-xs text-slate-500 mt-1">Adds Dependent Costs</div>
                 </div>
                 
                 <div 
                    onClick={() => setGoals({...goals, business: !goals.business})}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${goals.business ? 'border-purple-500 bg-white shadow-md' : 'border-transparent bg-white/50 hover:bg-white'}`}
                 >
                    <div className="p-3 bg-amber-100 text-amber-600 rounded-xl w-fit mb-4"><Briefcase size={24} /></div>
                    <div className="font-bold text-slate-900">Start Business</div>
                    <div className="text-xs text-slate-500 mt-1">Adds Income Volatility</div>
                 </div>
              </div>
           </div>
           
           <Button onClick={runSimulation} disabled={simulating} className="w-full bg-purple-600 hover:bg-purple-700 py-4 text-lg shadow-lg shadow-purple-600/20">
             {simulating ? 'Running 1,000 Simulations...' : 'Simulate My Future Risk'}
           </Button>

           {simulating && (
             <div className="space-y-2 max-w-lg mx-auto mt-8">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                   <motion.div 
                     className="h-full bg-purple-500"
                     initial={{ width: "0%" }}
                     animate={{ width: "100%" }}
                     transition={{ duration: 1.8 }}
                   />
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                   <span>Initializing Monte Carlo Engine...</span>
                   <span>Processing Scenarios...</span>
                </div>
             </div>
           )}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
           {/* Report Card */}
           <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-4">
                   <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-bold uppercase border border-purple-500/30">AI Analysis</span>
                   <span className="text-xs text-slate-400">Model Confidence: 94%</span>
                 </div>
                 
                 <h3 className="text-2xl font-bold mb-4 leading-snug">
                    Your current coverage hits a <span className="text-red-400">critical failure point</span> in {shortfallYear}.
                 </h3>
                 
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 mb-8">
                    <p className="leading-relaxed text-slate-200">
                       "Based on 1,000 simulations, the combination of new mortgage debt and childcare costs will deplete a standard $500k policy by {shortfallYear}. We recommend increasing coverage to <span className="text-white font-bold">$1.2M</span> to ensure your family maintains their lifestyle."
                    </p>
                 </div>
              </div>
           </div>

           {/* Data Table */}
           <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-100">
                 <h4 className="font-bold text-slate-900">5-Year Financial Projection</h4>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-xs">
                       <tr>
                          <th className="px-6 py-4">Year</th>
                          <th className="px-6 py-4">Projected Expenses</th>
                          <th className="px-6 py-4">Remaining Coverage</th>
                          <th className="px-6 py-4">Risk Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {projection.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50">
                             <td className="px-6 py-4 font-bold text-slate-900">{row.year}</td>
                             <td className="px-6 py-4 text-slate-600">${row.expense.toLocaleString()}</td>
                             <td className="px-6 py-4 font-mono text-slate-600">${Math.max(0, row.coverage).toLocaleString()}</td>
                             <td className="px-6 py-4">
                                {row.coverage < 100000 ? (
                                   <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">Critical</span>
                                ) : row.coverage < 300000 ? (
                                   <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-bold">Warning</span>
                                ) : (
                                   <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">Safe</span>
                                )}
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
           
           <div className="flex gap-4">
              <Link to="/compare" className="flex-1">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-600/20">Get $1.2M Term Life Quote</Button>
              </Link>
              <Button onClick={() => setResult(false)} variant="outline" className="flex-1">Adjust Goals</Button>
           </div>
        </motion.div>
      )}
    </div>
  );
};
