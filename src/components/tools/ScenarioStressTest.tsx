import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, AlertTriangle, DollarSign, CloudRain, Car } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const ScenarioStressTest = () => {
  const [fenderBender, setFenderBender] = useState(0); // 0 to 100 severity
  const [stormSeverity, setStormSeverity] = useState(0); // 0 to 100 severity
  
  const deductible = 1000;
  
  // Calculate Impact
  // Fender Bender: Severity * $50
  // Storm: Severity * $100
  const accidentCost = fenderBender * 50;
  const stormCost = stormSeverity * 100;
  
  const totalDamage = accidentCost + stormCost;
  const outOfPocket = Math.min(totalDamage, deductible) + (totalDamage > 0 ? 200 : 0); // +200 hidden fees
  const insurancePays = Math.max(0, totalDamage - outOfPocket);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Sliders className="text-orange-600" /> Scenario Stress Test
        </h2>
        <p className="text-slate-500 mt-2">Slide to simulate disasters. See exactly how much you lose out-of-pocket instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-10">
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Car className="text-blue-500" /> Minor Fender Bender
                 </div>
                 <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">{fenderBender}% Severity</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={fenderBender} 
                onChange={(e) => setFenderBender(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <p className="text-xs text-slate-500 mt-3">Simulates repair costs from bumper scratches to hood replacement.</p>
           </div>

           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2 font-bold text-slate-900">
                    <CloudRain className="text-slate-500" /> Storm Damage
                 </div>
                 <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">{stormSeverity}% Severity</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={stormSeverity} 
                onChange={(e) => setStormSeverity(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600"
              />
              <p className="text-xs text-slate-500 mt-3">Simulates roof leaks, wind damage, and debris impact.</p>
           </div>
           
           <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex gap-3">
              <AlertTriangle className="text-yellow-600 shrink-0" />
              <p className="text-sm text-yellow-800">
                 <strong>Insight:</strong> Most people don't realize they have to pay their deductible <em>per incident</em>, not per year.
              </p>
           </div>
        </div>

        {/* Results Chart */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           
           <div>
              <h3 className="text-xl font-bold mb-6">Financial Impact</h3>
              
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-sm mb-2 text-slate-400">
                       <span>Total Estimated Damage</span>
                       <span>${totalDamage.toLocaleString()}</span>
                    </div>
                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                       <motion.div 
                         className="h-full bg-red-500"
                         initial={{ width: 0 }}
                         animate={{ width: `${Math.min(100, totalDamage / 100)}%` }}
                       />
                    </div>
                 </div>

                 <div>
                    <div className="flex justify-between text-sm mb-2 text-white font-bold">
                       <span>Your Out-of-Pocket Cost</span>
                       <span className="text-red-400">-${outOfPocket.toLocaleString()}</span>
                    </div>
                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                       <motion.div 
                         className="h-full bg-orange-500"
                         initial={{ width: 0 }}
                         animate={{ width: `${Math.min(100, outOfPocket / 50)}%` }}
                       />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Based on $1,000 deductible + fees</p>
                 </div>
              </div>
           </div>

           <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                 "You would lose <strong>${outOfPocket.toLocaleString()}</strong> today. We recommend lowering your deductible to $500 for an extra $4/mo."
              </p>
              <Link to="/compare">
                 <Button className="w-full bg-orange-500 hover:bg-orange-600 font-bold text-slate-900">
                    See Lower Deductible Plans
                 </Button>
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};
