import React, { useState, useRef } from 'react';
import { Search, MapPin, Building2, ExternalLink, Globe, Star, Phone, Navigation, Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { partners, niches, officialDirectories } from '../data/mockData';

// Mock data generator for local results
const generateLocalAgents = (location: string, region: string) => {
  const suffixes = region === 'USA' ? ['Agency', 'Group', 'Associates'] : 
                   region === 'Canada' ? ['Insurance', 'Brokers', 'Partners'] :
                   region === 'Europe' ? ['Consulting', 'Assurance', 'Underwriting'] :
                   ['Pty Ltd', 'Group', 'Advisors'];
                   
  return [
    {
      id: 1,
      name: `Premier ${region} Insurance ${suffixes[0]}`,
      address: `Downtown, ${location}`,
      rating: 4.8,
      reviews: 124,
      type: "Exclusive Agent"
    },
    {
      id: 2,
      name: `${location} City Brokers`,
      address: `Financial District, ${location}`,
      rating: 4.6,
      reviews: 89,
      type: "Independent Broker"
    },
    {
      id: 3,
      name: `Global Shield ${suffixes[1]}`,
      address: `High Street, ${location}`,
      rating: 4.9,
      reviews: 215,
      type: "Corporate Office"
    }
  ];
};

export const SearchProvider = () => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('USA');
  const [hasSearched, setHasSearched] = useState(false);
  const [localResults, setLocalResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setHasSearched(true);
    
    // Simulate API call
    setTimeout(() => {
      setLocalResults(generateLocalAgents(query, region));
      setLoading(false);
      // Scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 800);
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
                <Globe size={14} /> Global Database
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Find Providers Worldwide</h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Access the largest database of AI-verified insurers, local agents, and regulatory bodies across USA, Canada, Europe, and Australia.
              </p>

              <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-12 bg-white p-2 rounded-3xl shadow-xl border border-slate-100 flex flex-col md:flex-row gap-2">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="City, State, or Zip..."
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
                  {loading ? '...' : <Search size={20} />}
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
                 className="max-w-5xl mx-auto mb-20"
               >
                 <div className="flex items-center justify-between mb-6">
                   <h2 className="text-2xl font-bold text-slate-900">
                     Top Agents in <span className="text-blue-600 capitalize">{query}</span> ({region})
                   </h2>
                   <a 
                     href={`https://www.google.com/maps/search/${encodeURIComponent(query + ' insurance ' + region)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                   >
                     View all on Map <ExternalLink size={14} />
                   </a>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {localResults.map((agent, idx) => (
                     <motion.div
                       key={agent.id}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: idx * 0.1 }}
                       className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                     >
                       <div className="flex justify-between items-start mb-4">
                         <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                           <Building2 size={24} />
                         </div>
                         <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-600">{agent.type}</span>
                       </div>
                       <h3 className="font-bold text-slate-900 mb-1">{agent.name}</h3>
                       <p className="text-sm text-slate-500 mb-3">{agent.address}</p>
                       
                       <div className="flex items-center gap-1 mb-4">
                         <Star className="text-yellow-400 fill-current" size={16} />
                         <span className="font-bold text-slate-900">{agent.rating}</span>
                         <span className="text-slate-400 text-sm">({agent.reviews} reviews)</span>
                       </div>

                       <div className="flex gap-2 mt-auto">
                         <a 
                           href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(agent.name + ' ' + agent.address)}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex-1"
                         >
                           <Button variant="outline" size="sm" className="w-full text-xs">
                             <Navigation size={14} className="mr-1" /> Map
                           </Button>
                         </a>
                         <Button variant="ghost" size="sm" className="flex-1 text-xs">
                           <Phone size={14} className="mr-1" /> Call
                         </Button>
                       </div>
                     </motion.div>
                   ))}
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
         </div>

         {/* Niche Recommendations (Filtered by Region if possible, or global) */}
         <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Top {region} Providers by Niche</h2>
              <p className="text-slate-600">AI-verified recommendations for {region === 'USA' ? 'the United States' : region}.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {niches.map((niche) => {
                // Filter partners for this niche AND region (or Global)
                const recommendedPartners = partners.filter(p => 
                  p.categories?.includes(niche.id) && 
                  (p.region === region || p.region === 'Global')
                );
                
                if (recommendedPartners.length === 0) return null;

                return (
                  <div key={niche.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className={`p-6 ${niche.bg} border-b border-slate-100 flex items-center gap-4`}>
                      <div className={`p-3 bg-white rounded-xl shadow-sm ${niche.color}`}>
                        <niche.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-slate-900">{niche.title}</h3>
                        <p className="text-sm text-slate-600 line-clamp-1">{niche.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Top Recommendations</h4>
                      <div className="space-y-4">
                        {recommendedPartners.slice(0, 3).map((partner, idx) => (
                          <div key={idx} className="flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl w-8 text-center">{partner.logo}</span>
                              <div>
                                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                  {partner.name}
                                  {partner.region !== region && partner.region === 'Global' && (
                                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Global</span>
                                  )}
                                </div>
                                <div className="text-xs text-slate-500 line-clamp-1 max-w-[200px]">{partner.description}</div>
                              </div>
                            </div>
                            <a href={partner.affiliateLink} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="outline" className="text-xs h-8">View</Button>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
         </div>

         {/* Official Directories Section */}
         <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Globe size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Official Regulatory Directories & Libraries
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
