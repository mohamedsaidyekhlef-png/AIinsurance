import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface ToolPageLayoutProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  colorClass: string;
  bgClass: string;
  children: React.ReactNode;
  seoContent: {
    howItWorks: string[];
    benefits: string[];
    faq: { q: string; a: string }[];
  };
}

export const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({
  title,
  subtitle,
  icon: Icon,
  colorClass,
  bgClass,
  children,
  seoContent
}) => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/tools" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
            <ArrowLeft size={16} className="mr-1" /> Back to Tools
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`w-20 h-20 ${bgClass} ${colorClass} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
          >
            <Icon size={40} />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Tool Interface */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-20"
        >
          <div className="p-6 md:p-10 lg:p-12">
            {children}
          </div>
        </motion.div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">How It Works</h2>
              <ul className="space-y-4">
                {seoContent.howItWorks.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full ${bgClass} ${colorClass} flex items-center justify-center font-bold text-xs`}>
                      {idx + 1}
                    </div>
                    <p className="text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Use This Tool?</h2>
              <ul className="space-y-4">
                {seoContent.benefits.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className={`shrink-0 ${colorClass}`} size={20} />
                    <p className="text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {seoContent.faq.map((item, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Save?</h2>
            <p className="text-slate-600 mb-8">Compare real quotes from top AI-powered insurers now.</p>
            <Link to="/compare">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30">
                Compare Rates Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
