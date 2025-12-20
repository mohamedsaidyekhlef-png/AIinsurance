import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Box, Check, Link as LinkIcon, ScanLine, Download, Loader2, AlertTriangle, TrendingDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const EvidenceVault = () => {
  const [scanning, setScanning] = useState(false);
  const [items, setItems] = useState<any[]>([]);
  const [generatingPdf, setGeneratingPdf] = useState(false);

  const startScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setItems([
        { name: "Sony 65-inch OLED TV", replacement: 2400, acv: 1200, confidence: "98%" },
        { name: "Leather Sectional Sofa", replacement: 3500, acv: 1100, confidence: "92%" },
        { name: "MacBook Pro 16 (2021)", replacement: 2100, acv: 950, confidence: "99%" },
        { name: "Vintage Guitar", replacement: 4000, acv: 4000, confidence: "85%" }
      ]);
    }, 2500);
  };

  const generatePdf = () => {
    setGeneratingPdf(true);
    setTimeout(() => {
      setGeneratingPdf(false);
      alert("Proof of Ownership PDF Generated! (Mock Download)");
    }, 2000);
  };

  const totalReplacement = items.reduce((acc, item) => acc + item.replacement, 0);
  const totalACV = items.reduce((acc, item) => acc + item.acv, 0);
  const potentialLoss = totalReplacement - totalACV;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Camera className="text-indigo-600" /> AI "Claim-Ready" Vault
        </h2>
        <p className="text-slate-500 mt-2">Scan your room. Blockchain-timestamp your assets. Compare "Replacement Cost" vs. "Actual Cash Value".</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Scanner View - Mobile Optimized Aspect Ratio */}
         <div className="bg-slate-900 rounded-3xl overflow-hidden relative min-h-[400px] md:h-[600px] flex flex-col items-center justify-center group shadow-2xl">
            {!items.length && !scanning && (
               <>
                 <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Camera className="text-white" size={32} />
                 </div>
                 <h3 className="text-white font-bold text-xl mb-2">Start Room Scan</h3>
                 <p className="text-slate-400 text-center px-8 mb-8 text-sm">Access Camera to identify assets and estimate value using Computer Vision.</p>
                 <Button onClick={startScan} className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(79,70,229,0.4)]">Activate Scanner</Button>
               </>
            )}
            
            {scanning && (
               <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                  <div className="relative w-full h-full">
                     <motion.div 
                       className="absolute top-0 left-0 w-full h-1 bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.5)] z-20"
                       animate={{ top: ["0%", "100%", "0%"] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     />
                     <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-green-400 font-mono text-xs z-30">
                        <div className="bg-black/50 px-2 py-1 rounded border border-green-500/30">REC ●</div>
                        <div className="bg-black/50 px-2 py-1 rounded border border-green-500/30">YOLOv8 MODEL ACTIVE</div>
                     </div>
                     
                     {/* Mock Bounding Boxes Animation */}
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute top-1/3 left-1/4 w-40 h-32 border-2 border-green-500 rounded bg-green-500/10 flex items-start justify-start p-1"
                     >
                        <span className="text-[10px] font-bold bg-green-500 text-black px-1">TV_OLED_65: 98%</span>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.5 }}
                        className="absolute bottom-1/4 right-1/4 w-48 h-24 border-2 border-green-500 rounded bg-green-500/10 flex items-start justify-start p-1"
                     >
                        <span className="text-[10px] font-bold bg-green-500 text-black px-1">SOFA_LTHR: 92%</span>
                     </motion.div>
                  </div>
               </div>
            )}

            {items.length > 0 && (
               <div className="absolute inset-0 bg-slate-900 p-6 overflow-y-auto scrollbar-hide">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-white font-bold flex items-center gap-2">
                        <Check className="text-green-400" /> Scan Complete
                     </h3>
                     <span className="text-xs text-slate-500 font-mono">4 Items Found</span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                     {items.map((item, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                        >
                           <div className="flex justify-between text-white font-bold mb-1">
                              <span>{item.name}</span>
                              <span className="text-green-400">${item.replacement.toLocaleString()}</span>
                           </div>
                           <div className="flex justify-between text-xs">
                              <span className="text-slate-500">Confidence: {item.confidence}</span>
                              <span className="text-slate-400">ACV: ${item.acv.toLocaleString()}</span>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* Summary Card */}
                  <div className="bg-indigo-600/20 border border-indigo-500/30 p-4 rounded-xl mb-6">
                     <div className="flex justify-between text-sm text-slate-300 mb-1">
                        <span>Total Replacement Cost</span>
                        <span className="text-white font-bold">${totalReplacement.toLocaleString()}</span>
                     </div>
                     <div className="flex justify-between text-sm text-slate-300 mb-2">
                        <span>Actual Cash Value (Depreciated)</span>
                        <span className="text-white font-bold">${totalACV.toLocaleString()}</span>
                     </div>
                     <div className="h-px bg-indigo-500/30 my-2" />
                     <div className="flex justify-between text-sm text-red-300 font-bold">
                        <span>Potential Loss (Gap)</span>
                        <span>-${potentialLoss.toLocaleString()}</span>
                     </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/10">
                     <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-mono bg-black/30 p-2 rounded">
                        <LinkIcon size={12} />
                        <span className="truncate">Block: 0x7f3...a29 (Hedera Hashgraph)</span>
                     </div>
                     <Button onClick={generatePdf} disabled={generatingPdf} className="w-full bg-indigo-600 hover:bg-indigo-500 font-bold">
                        {generatingPdf ? <Loader2 className="animate-spin" /> : <><Download size={18} className="mr-2" /> Download Proof PDF</>}
                     </Button>
                  </div>
               </div>
            )}
         </div>

         {/* Info & Education Panel */}
         <div className="flex flex-col h-full">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm mb-6 flex-grow">
               <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-amber-500" /> The "ACV" Trap
               </h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Most standard policies pay "Actual Cash Value" (ACV), which subtracts depreciation. 
                  As seen in the scan, your <strong>$3,500 sofa</strong> might only get you a <strong>$1,100 check</strong> if it's 5 years old.
               </p>
               
               <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
                  <h4 className="font-bold text-blue-900 text-sm mb-2">💡 Recommendation</h4>
                  <p className="text-blue-800 text-xs">
                     Ensure your policy has a <strong>"Replacement Cost Value" (RCV)</strong> endorsement. It costs about 10% more but pays out the full price to buy new items.
                  </p>
               </div>

               <h4 className="font-bold text-slate-900 mb-4 text-sm">How the Vault Works</h4>
               <div className="space-y-4">
                  <div className="flex items-start gap-3">
                     <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 shrink-0">1</div>
                     <p className="text-xs text-slate-500"><strong>AI Recognition:</strong> We use object detection to tag items and query real-time market prices.</p>
                  </div>
                  <div className="flex items-start gap-3">
                     <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 shrink-0">2</div>
                     <p className="text-xs text-slate-500"><strong>Blockchain Proof:</strong> We hash the inventory list and timestamp it on a public ledger. Insurers cannot claim you "didn't own it".</p>
                  </div>
               </div>
            </div>
            
            <Link to="/compare">
               <Button variant="outline" className="w-full border-slate-200 hover:border-indigo-600 hover:text-indigo-600">
                  Find RCV Policies
               </Button>
            </Link>
         </div>
      </div>
    </div>
  );
};
