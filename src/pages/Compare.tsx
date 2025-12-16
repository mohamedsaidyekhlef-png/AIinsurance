import React from 'react';
import { comparisonData, partners } from '../data/mockData';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Compare = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The AI Advantage</h1>
          <p className="text-xl text-slate-600">
            See exactly how modern InsurTech companies outperform traditional carriers in speed, price, and service.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-20">
          <div className="grid grid-cols-3 bg-slate-900 text-white p-6 md:p-8 text-lg font-bold">
            <div>Feature</div>
            <div className="text-center text-slate-400">Traditional</div>
            <div className="text-center text-blue-400">AI-First Insurer</div>
          </div>
          
          {comparisonData.map((row, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`grid grid-cols-3 p-6 md:p-8 items-center border-b border-slate-100 ${row.winner === 'ai' ? 'bg-blue-50/30' : ''}`}
            >
              <div className="font-semibold text-slate-800">{row.feature}</div>
              <div className="text-center text-slate-500">{row.traditional}</div>
              <div className="text-center font-bold text-blue-700 flex items-center justify-center gap-2">
                {row.winner === 'ai' && <Check size={18} className="text-teal-500" />}
                {row.ai}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top Rated AI Insurers */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Top Rated AI Insurers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.slice(0, 3).map((partner, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center h-full">
              <div className="text-6xl mb-4">{partner.logo}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{partner.name}</h3>
              <div className="flex gap-1 text-yellow-400 mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-slate-600 mb-6 text-sm flex-grow">
                {partner.description}
              </p>
              <a 
                href={partner.affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">Get Quote</Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
