import React, { useState, useRef } from 'react';
import { Search, MapPin, Building2, ExternalLink, Globe, Star, Phone, Navigation, Filter, FileBadge, ShieldCheck, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { partners, niches, officialDirectories } from '../data/mockData';
import { searchProvidersByLocation } from '../lib/gemini';

export const SearchProvider = () => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('USA');
  const [hasSearched, setHasSearched] = useState(false);
  const [localResults, setLocalResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setHasSearched(true);
    setLocalResults([]); // Clear previous
    
    try {
      // Call Gemini Location-Aware Search
      const results = await searchProvidersByLocation(`${query}, ${region}`);
      setLocalResults(results);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
      // Scroll to results safely
      setTimeout(() => {
        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
         {/* Hero / Search Section */}
         <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Globe size={14} /> Location-Aware Intelligence
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Find <span className="text-blue-600">Verified</span> Providers</h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Our AI scans local directories, BBB records, and consumer complaints to give you the "Real Score" on insurers in your area.
              </p>

              <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-12 bg-white p-2 rounded-3xl shadow-xl border border-slate-100 flex flex-col md:flex-row gap-2">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter Zip Code or City..."
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border-none focus:ring-0 outline-none text-lg bg-transparent"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                
                <div className="relative md:w-48 border-t md:border-t-0 md:border-l border-slate-100">
                  <select 
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full h-full px-4 py-3 rounded-2xl border-none focus:ring-0 outline-none text-slate-600 bg-transparent cursor-pointer appearance-none"
                  >
                    <option value="USA">🇺🇸 USA</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Europe">🇪🇺 Europe</option>
                    <option value="Australia">🇦🇺 Australia</option>
                  </select>
                  <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>

                <Button type="submit" className="rounded-2xl px-8 py-3 h-auto" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
                </Button>
              </form>
            </motion.div>
         </div>

         {/* Search Results Section */}
         <div ref={resultsRef} className="scroll-mt-32">
           <AnimatePresence>
             {hasSearched && (
               <motion.div
                 initial={{ opacity: 0, height: 0 }}
                 animate={{ opacity: 1, height: 'auto' }}
                 exit={{ opacity: 0, height: 0 }}
                 className="max-w-6xl mx-auto mb-20"
               >
                 <div className="flex items-center justify-between mb-8">
                   <h2 className="text-2xl font-bold text-slate-900">
                     AI Analysis for <span className="text-blue-600 capitalize">{query}</span>
                   </h2>
                   {loading && <span className="text-slate-500 text-sm animate-pulse">Scanning BBB records...</span>}
                 </div>

                 {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {[1,2,3,4].map(i => (
                          <div key={i} className="h-64 bg-slate-100 rounded-3xl animate-pulse" />
                       ))}
                    </div>
                 ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {localResults.map((agent, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group relative overflow-hidden"
                        >
                          {/* Insuralix Score Badge */}
                          <div className="absolute top-0 right-0 p-6">
                             <div className="flex flex-col items-center">
                                <div className={`text-2xl font-bold ${agent.insuralixScore > 80 ? 'text-green-600' : 'text-yellow-600'}`}>
                                   {agent.insuralixScore}
                                </div>
                                <div className="text-[10px] uppercase font-bold text-slate-400">Insuralix Score</div>
                             </div>
                          </div>

                          <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
                               {agent.name.charAt(0)}
                            </div>
                            <div>
                               <h3 className="text-xl font-bold text-slate-900">{agent.name}</h3>
                               <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                                  <MapPin size={14} /> {agent.address}
                               </p>
                               <div className="flex gap-2 mt-2">
                                  {agent.badges?.map((badge: string, i: number) => (
                                     <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                                        {badge}
                                     </span>
                                  ))}
                               </div>
                            </div>
                          </div>

                          {/* The Real Review */}
                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">AI Review Summary</h4>
                             <p className="text-sm text-slate-700 italic">"{agent.reviewSummary}"</p>
                          </div>

                          {/* Legal Steps */}
                          <div className="mb-6">
                             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                <ShieldCheck size={12} /> Protection Steps
                             </h4>
                             <ul className="space-y-2">
                                {agent.legalSteps?.map((step: string, i: number) => (
                                   <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                      <span className="text-blue-500 mt-0.5">•</span> {step}
                                   </li>
                                ))}
                             </ul>
                          </div>

                          <div className="flex gap-3">
                             <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Get Quote</Button>
                             <Button variant="outline" className="flex-1">View Profile</Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                 )}
               </motion.div>
             )}
           </AnimatePresence>
         </div>

         {/* Official Directories Section (Kept from previous version) */}
         <div className="max-w-6xl mx-auto mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <FileBadge size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Official Regulatory Directories
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {officialDirectories.map((dir) => (
                <div key={dir.region} className="space-y-4">
                  <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2">{dir.region}</h3>
                  <div className="space-y-3">
                    {dir.links.map((link, idx) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="block bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-slate-800 group-hover:text-blue-600 text-sm">{link.name}</span>
                          <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-600" />
                        </div>
                        <p className="text-xs text-slate-500 leading-snug">{link.desc}</p>
                      </motion.a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
};
