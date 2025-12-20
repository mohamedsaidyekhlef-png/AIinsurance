import React, { useState, useMemo } from 'react';
import { partners, officialDirectories } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ExternalLink, TrendingUp, Globe, ShieldCheck, Filter, MapPin, Search, ArrowUpDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Compare = () => {
  const [filterRegion, setFilterRegion] = useState('All');
  const [filterNiche, setFilterNiche] = useState('All');
  const [filterCity, setFilterCity] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'trust'>('rating');

  const regions = ['All', 'USA', 'Canada', 'UK', 'Australia', 'Europe'];
  const niches = ['All', 'Auto', 'Home', 'Health', 'Life', 'Business', 'Travel', 'Pet', 'Cyber'];

  // Filter Logic
  const filteredPartners = useMemo(() => {
    return partners.filter(p => {
      const regionMatch = filterRegion === 'All' || p.region === filterRegion;
      const nicheMatch = filterNiche === 'All' || p.categories.some(c => c.toLowerCase().includes(filterNiche.toLowerCase()));
      // Simple city simulation: if city is typed, we just show all (since we don't have city data in mock), 
      // but in a real app this would filter by serviceable area.
      // For now, let's just use it to filter by name if it matches, or ignore.
      const searchMatch = filterCity === '' || p.name.toLowerCase().includes(filterCity.toLowerCase()) || p.description.toLowerCase().includes(filterCity.toLowerCase());
      
      return regionMatch && nicheMatch && searchMatch;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'trust') return b.trustScore - a.trustScore;
      return 0;
    });
  }, [filterRegion, filterNiche, filterCity, sortBy]);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Top <span className="text-blue-600">50+</span> Insurance Offers
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Compare ratings, trust scores, and exclusive online rates from the world's leading carriers.
            </p>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-4 mb-12 shadow-lg max-w-5xl mx-auto">
           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Region & Niche */}
              <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                 <select 
                    value={filterRegion} 
                    onChange={(e) => setFilterRegion(e.target.value)}
                    className="px-4 py-2 rounded-xl bg-slate-100 border-none text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                 >
                    {regions.map(r => <option key={r} value={r}>{r === 'All' ? '🌍 Global' : r}</option>)}
                 </select>
                 
                 <select 
                    value={filterNiche} 
                    onChange={(e) => setFilterNiche(e.target.value)}
                    className="px-4 py-2 rounded-xl bg-slate-100 border-none text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                 >
                    {niches.map(n => <option key={n} value={n}>{n === 'All' ? '🛡️ All Niches' : n}</option>)}
                 </select>
              </div>

              {/* Search City/Name */}
              <div className="relative w-full md:w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                 <input 
                    type="text" 
                    placeholder="Search Company or City..." 
                    value={filterCity}
                    onChange={(e) => setFilterCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 border-none text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                 />
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                 <span className="text-xs font-bold text-slate-400 uppercase hidden md:inline">Sort:</span>
                 <button 
                    onClick={() => setSortBy('rating')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${sortBy === 'rating' ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:bg-slate-100'}`}
                 >
                    Rating
                 </button>
                 <button 
                    onClick={() => setSortBy('trust')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${sortBy === 'trust' ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:bg-slate-100'}`}
                 >
                    Trust Score
                 </button>
              </div>
           </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
           <AnimatePresence>
              {filteredPartners.map((partner, idx) => (
                 <motion.div
                    key={partner.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full"
                 >
                    <div className="flex justify-between items-start mb-4">
                       <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center p-2 border border-slate-100 overflow-hidden">
                          <img 
                             src={partner.logoUrl} 
                             alt={partner.name} 
                             className="w-full h-full object-contain mix-blend-multiply"
                             onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).parentElement!.innerText = partner.name.charAt(0);
                             }}
                          />
                       </div>
                       <div className="text-right">
                          <div className="flex items-center gap-1 justify-end text-yellow-400 font-bold">
                             <Star size={14} fill="currentColor" /> {partner.rating}
                          </div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase mt-1">
                             Trust: <span className="text-green-600">{partner.trustScore}/100</span>
                          </div>
                       </div>
                    </div>

                    <div className="mb-4">
                       <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                          {partner.name}
                          {partner.trustScore > 95 && <ShieldCheck size={16} className="text-blue-500" />}
                       </h3>
                       <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">{partner.region}</span>
                          {partner.categories.slice(0, 2).map(cat => (
                             <span key={cat} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-md font-medium capitalize">{cat}</span>
                          ))}
                       </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                       {partner.description}
                    </p>

                    <div className="mt-auto">
                       <a 
                          href={partner.affiliateLink} 
                          target="_blank" 
                          rel="noopener noreferrer nofollow"
                          className="block"
                       >
                          <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white transition-colors flex items-center justify-center gap-2">
                             View Offer <ExternalLink size={14} />
                          </Button>
                       </a>
                       <p className="text-[10px] text-center text-slate-400 mt-3">
                          Official Site • Secure Link
                       </p>
                    </div>
                 </motion.div>
              ))}
           </AnimatePresence>
        </div>

        {filteredPartners.length === 0 && (
           <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No companies found</h3>
              <p className="text-slate-500">Try adjusting your filters or search for a different city.</p>
              <Button 
                 variant="outline" 
                 className="mt-6"
                 onClick={() => { setFilterRegion('All'); setFilterNiche('All'); setFilterCity(''); }}
              >
                 Clear Filters
              </Button>
           </div>
        )}

        {/* Regional Pricing Teaser */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 mb-20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                 <Globe size={40} className="text-white" />
              </div>
              <div>
                 <h3 className="text-2xl font-bold mb-2">Location-Based Savings</h3>
                 <p className="text-blue-100 leading-relaxed max-w-2xl">
                    Rates vary significantly by region. Whether you are looking for <strong>insurance quotes Texas</strong>, California, or New York, our AI adjusts to local regulations and risk factors to find you the most competitive <strong>insurance coverage</strong>.
                 </p>
              </div>
              <div className="md:ml-auto w-full md:w-auto">
                 <Link to="/search">
                   <Button variant="secondary" className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50 py-4 font-bold">
                      Check Local Rates
                   </Button>
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
