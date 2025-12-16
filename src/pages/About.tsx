import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Users, Zap } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Democratizing Insurance with <span className="text-blue-600">Intelligence</span>
          </motion.h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            INSURALIX is the world's first AI-native insurance resource hub. We bridge the gap between complex policy jargon and consumer understanding using advanced technology.
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600">
              To empower 10 million users to make smarter, data-driven insurance decisions by 2030, removing the "black box" of pricing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Global Reach</h3>
            <p className="text-slate-600">
              From New York to Sydney, we aggregate data from global markets to provide a comprehensive view of the InsurTech landscape.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Community First</h3>
            <p className="text-slate-600">
              We believe in transparency. Our tools are free, our reviews are unbiased, and our privacy standards are rigorous.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           
           <div className="relative z-10 max-w-3xl">
             <h2 className="text-3xl md:text-4xl font-bold mb-8">Why We Started</h2>
             <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
               <p>
                 The insurance industry hasn't changed much in 100 years. It's filled with paperwork, confusing terms, and slow processes. But the world has changed.
               </p>
               <p>
                 We saw an opportunity to use <strong>Generative AI</strong> and <strong>Predictive Analytics</strong> to flip the script. Instead of you chasing insurers, we built tools that make insurers compete for you based on your actual data.
               </p>
               <p>
                 INSURALIX isn't an insurance company. We are a technology company that loves insurance. We exist to help you navigate risk in a digital world.
               </p>
             </div>

             <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-teal-400" /> <span>Unbiased Algorithms</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-teal-400" /> <span>Privacy-First Architecture</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-teal-400" /> <span>Real-Time Market Data</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-teal-400" /> <span>Consumer Advocacy</span>
               </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};
