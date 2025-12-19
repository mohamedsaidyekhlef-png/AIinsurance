import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Search, Database, Shield, Wifi, Terminal, Plus, ExternalLink, Loader2, Server, Lock } from 'lucide-react';
import { Button } from '../ui/Button';

// Mock data for the simulation to "discover"
const DISCOVERY_POOL = [
  { name: "Nebula Cover", type: "Space/Satellite", region: "Global", rating: 4.8, url: "https://nebula-cover.example.com" },
  { name: "Oasis Flood", type: "Parametric", region: "Florida, USA", rating: 4.5, url: "https://oasis-flood.example.com" },
  { name: "CyberWall", type: "Cyber Security", region: "Europe", rating: 4.9, url: "https://cyberwall.example.com" },
  { name: "PetPulse", type: "Pet Health", region: "UK", rating: 4.2, url: "https://petpulse.example.com" },
  { name: "DroneGuard", type: "Commercial Drone", region: "Asia", rating: 4.6, url: "https://droneguard.example.com" },
  { name: "GigProtect", type: "Freelancer Liability", region: "USA", rating: 4.4, url: "https://gigprotect.example.com" },
  { name: "CryptoShield", type: "Digital Asset", region: "Global", rating: 4.7, url: "https://cryptoshield.example.com" },
  { name: "BioLife", type: "Health Tech", region: "Canada", rating: 4.3, url: "https://biolife.example.com" },
  { name: "AgriSure", type: "Crop Parametric", region: "Australia", rating: 4.5, url: "https://agrisure.example.com" },
  { name: "NanoInsure", type: "Micro-Policies", region: "India", rating: 4.1, url: "https://nanoinsure.example.com" }
];

const LOG_MESSAGES = [
  "Initializing crawler bot v4.2...",
  "Bypassing captcha on search_node_8...",
  "Scanning SERP for 'insurtech startups 2025'...",
  "Analyzing meta tags...",
  "Verifying SSL certificate...",
  "Extracting pricing data...",
  "Ping 45ms...",
  "Cross-referencing with AM Best database...",
  "Sentiment analysis: Positive...",
  "Indexing to local graph...",
  "Optimizing connection route...",
  "Scraping competitor rates...",
  "Updating affiliate potential score..."
];

export const MarketScanner = () => {
  const [active, setActive] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [discovered, setDiscovered] = useState<typeof DISCOVERY_POOL>([]);
  const [scannedCount, setScannedCount] = useState(1402);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Simulation Effect
  useEffect(() => {
    if (!active) return;

    const logInterval = setInterval(() => {
      const randomLog = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const newLog = `[${timestamp}] ${randomLog}`;
      
      setLogs(prev => [...prev.slice(-15), newLog]); // Keep last 15 logs
      setScannedCount(prev => prev + Math.floor(Math.random() * 5));
    }, 800);

    const discoveryInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to find something
        const newItem = DISCOVERY_POOL[Math.floor(Math.random() * DISCOVERY_POOL.length)];
        // Only add if not already in list (simple check for demo)
        setDiscovered(prev => {
           if (prev.find(i => i.name === newItem.name)) return prev;
           return [newItem, ...prev];
        });
        setLogs(prev => [...prev, `[SUCCESS] >>> ENTITY IDENTIFIED: ${newItem.name}`]);
      }
    }, 2500);

    return () => {
      clearInterval(logInterval);
      clearInterval(discoveryInterval);
    };
  }, [active]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Globe className="text-emerald-500" /> AI Market Scanner
        </h2>
        <p className="text-slate-500 mt-2">
          An autonomous agent that crawls the web 24/7 to find new insurance companies, data leaks, and arbitrage opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Control & Stats */}
        <div className="space-y-6">
           <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${active ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                    <span className="font-mono text-sm font-bold">{active ? 'ONLINE' : 'OFFLINE'}</span>
                 </div>
                 <Wifi size={16} className="text-slate-500" />
              </div>

              <div className="text-center mb-8">
                 <div className="text-4xl font-bold font-mono mb-1">{scannedCount.toLocaleString()}</div>
                 <div className="text-xs text-slate-400 uppercase tracking-widest">URLs Scanned</div>
              </div>

              <Button 
                onClick={() => setActive(!active)} 
                className={`w-full font-bold py-4 ${active ? 'bg-red-500 hover:bg-red-600' : 'bg-emerald-500 hover:bg-emerald-600'}`}
              >
                {active ? 'Terminate Agent' : 'Deploy Agent'}
              </Button>
           </div>

           <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <Server size={18} className="text-blue-500" /> Network Status
              </h3>
              <div className="space-y-4">
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Proxy Nodes</span>
                    <span className="font-mono font-bold text-slate-700">12/12 Active</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Bandwidth</span>
                    <span className="font-mono font-bold text-slate-700">{active ? '1.2 GB/s' : '0 KB/s'}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Encryption</span>
                    <span className="font-mono font-bold text-green-600 flex items-center gap-1"><Lock size={12} /> AES-256</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Middle Column: Terminal Log */}
        <div className="lg:col-span-2 flex flex-col gap-6">
           <div className="bg-black rounded-3xl p-6 font-mono text-xs md:text-sm text-green-400 h-[300px] overflow-hidden flex flex-col shadow-2xl border border-slate-800 relative">
              <div className="absolute top-4 right-4 text-slate-600"><Terminal size={20} /></div>
              <div className="flex-grow overflow-y-auto space-y-2 scrollbar-hide">
                 <div className="opacity-50">root@insuralix-agent:~$ ./init_crawler.sh</div>
                 {logs.map((log, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      className={log.includes("SUCCESS") ? "text-emerald-300 font-bold bg-emerald-900/20 p-1 rounded" : ""}
                    >
                       {log}
                    </motion.div>
                 ))}
                 <div ref={logsEndRef} />
                 {active && (
                    <motion.div 
                      animate={{ opacity: [0, 1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-2 h-4 bg-green-400 inline-block align-middle"
                    />
                 )}
              </div>
           </div>

           {/* Results Feed */}
           <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex-grow min-h-[300px]">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Database size={18} className="text-purple-500" /> Live Discovery Feed
                 </h3>
                 <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {discovered.length} New
                 </span>
              </div>

              <div className="space-y-3">
                 <AnimatePresence>
                    {discovered.length === 0 && (
                       <div className="text-center text-slate-400 py-10">
                          <Loader2 className={`mx-auto mb-2 ${active ? 'animate-spin' : ''}`} />
                          {active ? 'Scanning for entities...' : 'Agent is offline.'}
                       </div>
                    )}
                    {discovered.map((item, i) => (
                       <motion.div
                          key={`${item.name}-${i}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-blue-400 transition-colors"
                       >
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-700 text-lg">
                                {item.name.charAt(0)}
                             </div>
                             <div>
                                <div className="font-bold text-slate-900">{item.name}</div>
                                <div className="text-xs text-slate-500 flex items-center gap-2">
                                   <span>{item.type}</span>
                                   <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                   <span>{item.region}</span>
                                </div>
                             </div>
                          </div>
                          <div className="flex items-center gap-3">
                             <div className="text-right hidden sm:block">
                                <div className="text-xs text-slate-400">Trust Score</div>
                                <div className="font-bold text-green-600">{item.rating}/5.0</div>
                             </div>
                             <Button size="sm" variant="outline" className="h-9 w-9 p-0 rounded-full border-slate-200">
                                <Plus size={16} />
                             </Button>
                          </div>
                       </motion.div>
                    ))}
                 </AnimatePresence>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
