import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Zap, Shield, CheckCircle2, FileText, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { niches, blogPosts, features, partners } from '../data/mockData';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/tools');
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-teal-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200">
                The Intelligent Insurance Portal
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Find the Best <span className="text-blue-600">AI-Backed</span> Policy
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Compare rates, analyze policies, and discover how AI is lowering premiums for forward-thinking people like you.
              </p>

              {/* AI Search Bar */}
              <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12 relative">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Try 'Best AI Auto Insurance' or 'Analyze my policy'" 
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" className="absolute right-2 top-2 bottom-2 rounded-full px-6">
                    Search
                  </Button>
                </div>
              </form>

              {/* Trust Bar */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">Trusted AI Partners</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  {partners.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-700">
                      <span className="text-2xl">{p.logo}</span> {p.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value-First Tools Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Free AI Insurance Tools</h2>
            <p className="text-slate-600 text-lg">Don't guess. Use data to find the perfect coverage.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/tools" className="group">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Policy Analyzer</h3>
                <p className="text-slate-600 mb-4">Upload your confusing policy text and let our AI explain the fine print in plain English.</p>
                <span className="text-blue-600 font-semibold flex items-center gap-1">Try it now <ArrowRight size={16} /></span>
              </div>
            </Link>

            <Link to="/tools" className="group">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Predictor</h3>
                <p className="text-slate-600 mb-4">Use predictive models to estimate your future rate changes based on market trends.</p>
                <span className="text-teal-600 font-semibold flex items-center gap-1">Calculate <ArrowRight size={16} /></span>
              </div>
            </Link>

            <Link to="/tools" className="group">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Coverage Gap Finder</h3>
                <p className="text-slate-600 mb-4">Take a 30-second quiz to find critical holes in your current protection plan.</p>
                <span className="text-rose-600 font-semibold flex items-center gap-1">Start Quiz <ArrowRight size={16} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Teaser */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Traditional vs. AI Insurance</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Why wait weeks for a claim when algorithms can do it in seconds? See the data-backed difference between legacy carriers and modern InsurTech.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-400" /> <span>Instant Claims Processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-400" /> <span>Usage-Based Pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-400" /> <span>Zero Paperwork</span>
                </li>
              </ul>
              <Link to="/compare">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">See Full Comparison</Button>
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                  <span className="font-bold text-lg">Claim Approval Time</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Traditional Carrier</span>
                      <span className="text-slate-400">7 Days</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-slate-500" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-semibold">AI Insurer</span>
                      <span className="text-teal-400 font-bold">3 Seconds</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-[5%] bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Learning Center</h2>
              <p className="text-slate-600 text-lg">Expert guides to help you navigate the InsurTech revolution.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              View all articles <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-slate-900">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/blog">
              <Button variant="outline">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with a Claim?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Our AI Claims Assistant can guide you through the process to ensure you don't get denied.
          </p>
          <Link to="/claims">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-none">
              Start Virtual Assistant
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
