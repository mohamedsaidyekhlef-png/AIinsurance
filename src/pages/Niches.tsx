import React from 'react';
import { niches } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Niches = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
             <Layers size={14} /> All Insurance Categories
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Explore <span className="text-blue-600">All Insurance</span> Niches</h1>
          <p className="text-xl text-slate-600">
            Find the best providers for your specific needs. From understanding <strong>life insurance types</strong> to finding the best auto rates, we've categorized top-rated insurers to help you compare effectively.
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
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-8 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
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
              <p className="text-slate-600 text-lg leading-relaxed mb-6 flex-grow">
                {niche.description}
                {niche.id === 'home' && <span className="block mt-2 text-sm text-slate-500">Includes <strong>renters insurance definition</strong> and coverage details.</span>}
                {niche.id === 'health' && <span className="block mt-2 text-sm text-slate-500">Compare various <strong>life insurance types</strong> including Term and Whole Life.</span>}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  AI Risk Assessment
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  Smart Claims
                </span>
              </div>

              <Link to="/compare">
                <Button variant="outline" className="w-full border-slate-200 hover:border-blue-600 hover:text-blue-600">
                   Compare {niche.title} Rates
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
