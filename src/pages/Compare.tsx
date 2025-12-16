import React from 'react';
import { comparisonData, partners } from '../data/mockData';
import { motion } from 'framer-motion';
import { Check, Star, ExternalLink, TrendingUp, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Compare = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Compare & Save on <span className="text-blue-600">Best Insurance</span></h1>
          <p className="text-xl text-slate-600">
            We've curated the best AI-powered <strong>insurance providers</strong>. Compare features, read reviews, and check for exclusive <strong>online insurance</strong> rates.
          </p>
        </div>

        {/* Top Rated AI Insurers */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <TrendingUp className="text-teal-500" />
            <h2 className="text-3xl font-bold text-slate-900">Featured <strong>E Insurance</strong> Offers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.slice(0, 3).map((partner, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center h-full relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                  Top Rated
                </div>

                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{partner.logo}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{partner.name}</h3>
                
                <div className="flex gap-1 text-yellow-400 mb-4 justify-center">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>
                
                <p className="text-slate-600 mb-8 text-sm flex-grow leading-relaxed">
                  {partner.description}
                </p>
                
                <a 
                  href={partner.affiliateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700">
                    View Offer <ExternalLink size={16} />
                  </Button>
                </a>
                <p className="text-xs text-slate-400 mt-3">
                  Links to external partner site
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Regional Pricing Teaser */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 mb-20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="p-4 bg-white/10 rounded-2xl">
                 <Globe size={40} className="text-teal-400" />
              </div>
              <div>
                 <h3 className="text-2xl font-bold mb-2">Location-Based Savings</h3>
                 <p className="text-slate-300 leading-relaxed max-w-2xl">
                    Rates vary significantly by region. Whether you are looking for <strong>insurance quotes Texas</strong>, California, or New York, our AI adjusts to local regulations and risk factors to find you the most competitive <strong>insurance coverage</strong>.
                 </p>
              </div>
              <div className="md:ml-auto">
                 <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900">
                    Check Local Rates
                 </Button>
              </div>
           </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-8 border-b border-slate-100 text-center">
             <h2 className="text-2xl font-bold text-slate-900">Why Switch to AI Insurance?</h2>
             <p className="text-slate-500 mt-2">Comparing traditional vs. modern <strong>insurance providers</strong>.</p>
          </div>
          <div className="grid grid-cols-3 bg-slate-50 text-slate-700 p-4 md:p-6 text-sm md:text-base font-bold border-b border-slate-200">
            <div>Feature</div>
            <div className="text-center text-slate-500">Traditional</div>
            <div className="text-center text-blue-600">AI-First Insurer</div>
          </div>
          
          {comparisonData.map((row, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`grid grid-cols-3 p-4 md:p-6 items-center border-b border-slate-100 last:border-0 ${row.winner === 'ai' ? 'bg-blue-50/10' : ''}`}
            >
              <div className="font-semibold text-slate-800 text-sm md:text-base">{row.feature}</div>
              <div className="text-center text-slate-500 text-sm md:text-base">{row.traditional}</div>
              <div className="text-center font-bold text-blue-700 flex items-center justify-center gap-2 text-sm md:text-base">
                {row.winner === 'ai' && <Check size={16} className="text-teal-500 hidden md:block" />}
                {row.ai}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
