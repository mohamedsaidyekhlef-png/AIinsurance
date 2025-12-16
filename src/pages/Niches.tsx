import React from 'react';
import { niches } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Niches = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Insurance Niches</h1>
          <p className="text-xl text-slate-600">
            Explore our comprehensive coverage areas, all enhanced by state-of-the-art AI technology for better rates and faster claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {niches.map((niche, idx) => (
            <motion.div
              key={niche.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-8 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${niche.bg}`}>
                  <niche.icon className={niche.color} size={28} />
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                  <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{niche.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {niche.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  AI Risk Assessment
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  Smart Claims
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  24/7 Support
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
