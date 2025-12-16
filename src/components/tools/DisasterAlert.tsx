import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CloudLightning, MapPin, Bell, Zap, CheckCircle, Wind, Droplets, Thermometer } from 'lucide-react';
import { Button } from '../ui/Button';

export const DisasterAlert = () => {
  const [active, setActive] = useState(false);
  const [payoutTriggered, setPayoutTriggered] = useState(false);
  const [zip, setZip] = useState('');

  const handleTrigger = () => {
    setPayoutTriggered(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <CloudLightning className="text-amber-600" /> Parametric Predictive Alert
        </h2>
        <p className="text-slate-500 mt-2">Real-time NOAA link. Get paid instantly <strong>before</strong> the disaster hits based on weather triggers.</p>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-xl relative min-h-[500px]">
         <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
         
         <div className="p-8 md:p-12 relative z-10 h-full flex flex-col justify-center">
            {!active ? (
               <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/10">
                     <MapPin className="text-amber-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Activate Location Monitoring</h3>
                  <p className="text-slate-300 mb-10 max-w-lg mx-auto leading-relaxed">
                     We connect to the NOAA API to monitor weather triggers at your property. If a hurricane/flood warning is issued within 48 hours, we trigger your payout automatically.
                  </p>
                  <div className="flex gap-4 justify-center max-w-md mx-auto">
                     <input 
                        type="text" 
                        placeholder="Enter Zip Code" 
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-amber-500 flex-grow text-lg" 
                     />
                     <Button onClick={() => setActive(true)} className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8">Monitor</Button>
                  </div>
               </div>
            ) : !payoutTriggered ? (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                     <div className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span className="font-mono text-sm text-red-400 font-bold tracking-wider">ALERT ACTIVE: {zip || '33139'}</span>
                     </div>
                     <span className="text-xs text-slate-500 font-mono">NOAA-API-V4: CONNECTED</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                     <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <Wind className="mx-auto text-slate-400 mb-2" size={20} />
                        <div className="text-xl font-bold">115 <span className="text-xs font-normal text-slate-500">mph</span></div>
                        <div className="text-xs text-slate-500">Wind Speed</div>
                     </div>
                     <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <Droplets className="mx-auto text-slate-400 mb-2" size={20} />
                        <div className="text-xl font-bold">980 <span className="text-xs font-normal text-slate-500">mb</span></div>
                        <div className="text-xs text-slate-500">Pressure</div>
                     </div>
                     <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <Thermometer className="mx-auto text-slate-400 mb-2" size={20} />
                        <div className="text-xl font-bold">Cat 3 <span className="text-xs font-normal text-slate-500"></span></div>
                        <div className="text-xs text-slate-500">Severity</div>
                     </div>
                  </div>

                  <div className="bg-red-500/20 border border-red-500/50 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                     <div className="flex items-start gap-4">
                        <Bell className="text-red-400 shrink-0 mt-1" />
                        <div>
                           <h4 className="font-bold text-lg text-white mb-1">Hurricane Warning Issued</h4>
                           <p className="text-slate-300 text-sm mb-4">Projected landfall in 36 hours. Parametric threshold (Cat 3) has been exceeded.</p>
                           <div className="bg-black/30 rounded-lg p-3 flex items-center justify-between">
                              <span className="text-xs text-slate-400">Payout Status</span>
                              <span className="text-xs font-bold text-green-400">APPROVED FOR RELEASE</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="text-center">
                     <Button onClick={handleTrigger} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)] animate-pulse py-4 text-lg">
                        <Zap size={20} className="mr-2 fill-white" /> Trigger $500 Instant Payout
                     </Button>
                     <p className="text-xs text-slate-500 mt-4">Funds are released to your linked debit card within 30 seconds.</p>
                  </div>
               </motion.div>
            ) : (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(34,197,94,0.6)]">
                     <CheckCircle size={48} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Funds Sent!</h3>
                  <p className="text-slate-300 mb-8 text-lg">
                     $500.00 has been transferred to your account ending in ****4321.
                  </p>
                  
                  <div className="bg-white/10 rounded-2xl p-6 text-left max-w-sm mx-auto mb-8 border border-white/10">
                     <div className="flex justify-between text-sm mb-3">
                        <span className="text-slate-400">Transaction ID:</span>
                        <span className="font-mono text-white">TXN-89223-NOAA</span>
                     </div>
                     <div className="flex justify-between text-sm mb-3">
                        <span className="text-slate-400">Time:</span>
                        <span className="text-white">10:42:15 AM EST</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Status:</span>
                        <span className="text-green-400 font-bold">COMPLETED</span>
                     </div>
                  </div>
                  
                  <div className="space-y-3">
                     <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Pre-Disaster Checklist</h4>
                     <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle size={16} className="text-green-500" /> Buy Plywood / Shutters
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle size={16} className="text-green-500" /> Stock Non-Perishable Food
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle size={16} className="text-green-500" /> Fill Gas Tanks
                     </div>
                  </div>

                  <Button onClick={() => { setActive(false); setPayoutTriggered(false); }} variant="outline" className="mt-10 border-white/20 text-white hover:bg-white/10 w-full">
                     Return to Dashboard
                  </Button>
               </motion.div>
            )}
         </div>
      </div>
    </div>
  );
};
