import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Search, Database, Shield, Wifi, Terminal, Plus, ExternalLink, Loader2, Server, Lock } from 'lucide-react';
import { Button } from '../ui/Button';
import { generateMarketData } from '../../lib/gemini';

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
  const [discovered, setDiscovered] = useState<any[]>([]);
  const [scannedCount, setScannedCount] = useState(1402);
  const [searchQuery, setSearchQuery] = useState("AI Insurance");
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

    // Gemini Discovery Interval
    const discoveryInterval = setInterval(async () => {
      if (Math.random() > 0.7) { // 30% chance to fetch real data
        try {
          const newData = await generateMarketData(searchQuery);
          if (newData && newData.length > 0) {
             const item = newData[Math.floor(Math.random() * newData.length)];
             setDiscovered(prev => {
                // Avoid duplicates
                if (prev.find(i => i.name === item.name)) return prev;
                return [item, ...prev];
             });
             setLogs(prev => [...prev, `[SUCCESS] >>> GEMINI AI IDENTIFIED: ${item.name}`]);
          }
        } catch (e) {
          console.error("Discovery error", e);
        }
      }
    }, 4000);

    return () => {
      clearInterval(logInterval);
      clearInterval(discoveryInterval);
    };
  }, [active, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Globe className="text-emerald-500" /> AI Market Scanner
        </h2>
        <p className="text-slate-500 mt-2">
          An autonomous agent powered by Gemini that crawls the web 24/7 to find new insurance companies and arbitrage opportunities.
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

              <div className="mb-6">
                <label className="text-xs text-slate-400 uppercase font-bold">Target Niche</label>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm mt-1 focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="e.g. Cyber Insurance"
                />
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
        </div>

        {/* Middle Column: Terminal Log */}
        <div className="lg:col-span-2 flex flex-col gap-6">
           <div className="bg-black rounded-3xl p-6 font-mono text-xs md:text-sm text-green-400 h-[300px] overflow-hidden flex flex-col shadow-2xl border border-slate-800 relative">
              <div className="absolute top-4 right-4 text-slate-600"><Terminal size={20} /></div>
              <div className="flex-grow overflow-y-auto space-y-2 scrollbar-hide">
                 <div className="opacity-50">root@insuralix-agent:~$ ./init_gemini_crawler.sh</div>
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
                             <a href={item.url} target="_blank" rel="noopener noreferrer">
                               <Button size="sm" variant="outline" className="h-9 w-9 p-0 rounded-full border-slate-200">
                                  <ExternalLink size={16} />
                               </Button>
                             </a>
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
