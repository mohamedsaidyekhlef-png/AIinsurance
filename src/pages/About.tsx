import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Users, Zap, Briefcase, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';

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
            INSURALIX is the world's first AI-native insurance resource hub. We provide <strong>reassurance</strong> (a common <strong>assurance synonym</strong>) to millions by bridging the gap between complex policy jargon and consumer understanding.
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
        <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 overflow-hidden relative mb-20">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           
           <div className="relative z-10 max-w-3xl">
             <h2 className="text-3xl md:text-4xl font-bold mb-8">Why We Started</h2>
             <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
               <p>
                 The insurance industry hasn't changed much in 100 years. It's filled with paperwork, confusing terms like "<strong>reassurance definition</strong>" vs "insurance", and slow processes. But the world has changed.
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

        {/* Careers / Jobs Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Briefcase size={14} /> Careers
           </div>
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Looking for <span className="text-blue-600">Insurance Jobs</span>?</h2>
           <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              We are always looking for talented actuaries, data scientists, and content experts. Join our mission to redefine the <strong>insurance association</strong> with technology.
           </p>
           <Button variant="outline" className="border-slate-300 hover:border-blue-600 hover:text-blue-600">
              View Open Positions
           </Button>
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto text-center border-t border-slate-200 pt-16">
           <h2 className="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h2>
           <p className="text-slate-600 mb-8">
              Whether you're a carrier looking to partner, an affiliate, or a user with feedback, we'd love to hear from you.
           </p>
           <a href="mailto:contact@insuralix.com">
              <Button className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 text-lg shadow-xl shadow-slate-900/20">
                 <Mail className="mr-2" size={20} /> Email Us: contact@insuralix.com
              </Button>
           </a>
        </div>

      </div>
    </div>
  );
};
