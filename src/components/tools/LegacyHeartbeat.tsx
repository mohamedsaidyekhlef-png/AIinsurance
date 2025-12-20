import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, Users, DollarSign, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { planLegacy } from '../../lib/gemini';

export const LegacyHeartbeat = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [formData, setFormData] = useState({
    age: 35,
    kids: 2,
    mortgage: 450000,
    savings: 50000
  });

  const handlePlan = async () => {
    setLoading(true);
    try {
      const data = await planLegacy(formData);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Heart className="text-rose-500" /> Legacy Heartbeat
        </h2>
        <p className="text-slate-500 mt-2">
          AI Inheritance Planner. Map your digital & financial estate. Calculate your "Heartbeat Gap" based on inflation and future liabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Input Panel */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm h-fit">
           <h3 className="font-bold text-slate-900 mb-6">Your Profile</h3>
           <div className="space-y-4">
              <div>
                 <label className="text-xs font-bold text-slate-500 uppercase">Current Age</label>
                 <input type="number" value={formData.age} onChange={e => setFormData({...formData, age: +e.target.value})} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 mt-1" />
              </div>
              <div>
                 <label className="text-xs font-bold text-slate-500 uppercase">Children</label>
                 <input type="number" value={formData.kids} onChange={e => setFormData({...formData, kids: +e.target.value})} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 mt-1" />
              </div>
              <div>
                 <label className="text-xs font-bold text-slate-500 uppercase">Mortgage Balance</label>
                 <input type="number" value={formData.mortgage} onChange={e => setFormData({...formData, mortgage: +e.target.value})} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 mt-1" />
              </div>
              <Button onClick={handlePlan} disabled={loading} className="w-full bg-rose-500 hover:bg-rose-600 mt-4">
                 {loading ? <Loader2 className="animate-spin" /> : 'Run Heartbeat Protocol'}
              </Button>
           </div>
        </div>

        {/* Visualization */}
        <div className="md:col-span-2">
           {!result ? (
              <div className="h-full bg-slate-50 rounded-3xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 p-12 text-center">
                 <div>
                    <Heart size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Enter details to map your legacy.</p>
                 </div>
              </div>
           ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                 {/* The Gap Card */}
                 <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10">
                       <div className="flex justify-between items-start mb-6">
                          <div>
                             <div className="text-sm text-slate-400 uppercase font-bold mb-1">Projected Need (2045)</div>
                             <div className="text-4xl font-bold text-white">{result.projectedNeed}</div>
                          </div>
                          <div className="text-right">
                             <div className="text-sm text-red-400 uppercase font-bold mb-1">Heartbeat Gap</div>
                             <div className="text-4xl font-bold text-red-500">{result.currentGap}</div>
                          </div>
                       </div>
                       <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
                          <div className="h-full bg-red-500 w-[65%]" />
                       </div>
                       <p className="text-slate-300 text-sm italic">"{result.gapReason}"</p>
                    </div>
                 </div>

                 {/* Protocol Recommendation */}
                 <div className="bg-white border border-rose-100 rounded-3xl p-8 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <TrendingUp className="text-rose-500" /> Recommended Protocol
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                       {result.heartbeatProtocol}
                    </p>
                    <div className="flex items-center justify-between bg-rose-50 p-4 rounded-xl">
                       <div className="font-bold text-rose-900">Estimated Cost</div>
                       <div className="text-2xl font-bold text-rose-600">{result.monthlyCost}</div>
                    </div>
                    <Button className="w-full mt-6 bg-rose-600 hover:bg-rose-700">Activate Coverage</Button>
                 </div>
              </motion.div>
           )}
        </div>
      </div>
    </div>
  );
};
