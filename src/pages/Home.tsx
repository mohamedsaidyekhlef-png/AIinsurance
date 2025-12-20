import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, CheckCircle2, FileText, BarChart3, Shield, HelpCircle, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { blogPosts, partners } from '../data/mockData';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [headingIndex, setHeadingIndex] = useState(0);
  const navigate = useNavigate();

  // Memoize headings to prevent recreation on every render
  const headings = useMemo(() => [
    <span key="1">Find the <span className="text-blue-600">Best Online Insurance</span> & <span className="text-teal-600">Rates</span></span>,
    <span key="2">Compare <span className="text-blue-600">AI-Powered Rates</span> & Save up to 30%</span>,
    <span key="3">The Future of Insurance is <span className="text-teal-600">Smart, Fast, & Fair</span></span>
  ], []);

  useEffect(() => {
    // Ensure callback is a valid function
    const rotateHeading = () => {
      setHeadingIndex((prev) => (prev + 1) % headings.length);
    };

    const timer = setInterval(rotateHeading, 4000);
    return () => clearInterval(timer);
  }, [headings]); // Depend on headings array itself

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/search');
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-teal-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-xs md:text-sm font-semibold mb-6 md:mb-8 border border-teal-200">
                Global Insurance Marketplace
              </span>
              
              {/* Animated Headings - Optimized height for mobile to prevent overlap */}
              <div className="h-[160px] sm:h-[180px] md:h-[200px] relative flex items-center justify-center mb-4 md:mb-6">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={headingIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight absolute w-full px-2"
                  >
                    {headings[headingIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                We analyze hundreds of insurance providers to find you the best coverage. Whether you need to understand your insurance policy or find e insurance solutions, we have the tools.
              </p>

              {/* AI Search Bar - Mobile Optimized */}
              <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-10 md:mb-12 relative px-2">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search providers in your city..." 
                    className="w-full pl-12 pr-20 md:pr-24 py-3 md:py-4 rounded-full border border-slate-200 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base md:text-lg appearance-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 rounded-full px-4 md:px-6 text-sm md:text-base">
                    Find
                  </Button>
                </div>
              </form>

              {/* Trust Bar - Flex Wrap for Mobile */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-widest">Compare Top Providers</p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 px-4">
                  {partners.slice(0, 5).map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-base md:text-xl font-bold text-slate-700">
                      <span className="text-xl md:text-2xl">{p.logo}</span> <span className="hidden sm:inline">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value-First Tools Teaser */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Free Insurance Tools</h2>
            <p className="text-slate-600 text-lg">Smart utilities to help you understand insurance coverage and make better financial decisions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Link to="/tools/policy-analyzer" className="group">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Policy Analyzer</h3>
                <p className="text-slate-600 mb-4">Upload your confusing insurance policy text and let our AI explain the fine print in plain English.</p>
                <span className="text-blue-600 font-semibold flex items-center gap-1">Try it now <ArrowRight size={16} /></span>
              </div>
            </Link>

            <Link to="/tools/premium-predictor" className="group">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Predictor</h3>
                <p className="text-slate-600 mb-4">Understand the insurance premium definition in practice. Use predictive models to estimate your future rate changes.</p>
                <span className="text-teal-600 font-semibold flex items-center gap-1">Calculate <ArrowRight size={16} /></span>
              </div>
            </Link>

            <Link to="/tools/gap-finder" className="group">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Coverage Gap Finder</h3>
                <p className="text-slate-600 mb-4">Are you fully insured? Take a 30-second quiz to find critical holes in your protection plan.</p>
                <span className="text-rose-600 font-semibold flex items-center gap-1">Start Quiz <ArrowRight size={16} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Knowledge Hub (SEO Glossary) */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-6 md:mb-0 text-center md:text-left w-full">
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 font-bold mb-2">
                <BookOpen size={20} /> <span>Insurance Knowledge Hub</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Common Insurance Terms</h2>
              <p className="text-slate-600 mt-2">Master the vocabulary to get the best deal.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-teal-500" /> Premium Definition</h3>
              <p className="text-sm text-slate-600">
                An <strong>insurance premium definition</strong> refers to the amount of money an individual or business pays for an insurance policy. It is the cost of your <strong>insurance coverage</strong>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-teal-500" /> Risk Definition</h3>
              <p className="text-sm text-slate-600">
                In insurance, <strong>risk definition</strong> is the chance of something harmful or unexpected happening. Insurers calculate premiums based on this probability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-teal-500" /> Assurance Definition</h3>
              <p className="text-sm text-slate-600">
                The <strong>assurance definition</strong> is often used interchangeably with insurance, but typically refers to coverage for events that are certain to happen (like death in life assurance), providing you are <strong>assured</strong>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-teal-500" /> Loss Definition</h3>
              <p className="text-sm text-slate-600">
                A <strong>loss definition</strong> in insurance is the injury or damage sustained by the <strong>insured</strong> in consequence of the happening of one or more of the accidents or misfortunes against which the insurer has undertaken to indemnify the insured.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-teal-500" /> Incurred Meaning</h3>
              <p className="text-sm text-slate-600">
                The <strong>incurred meaning</strong> relates to expenses or losses that have happened and for which the insurance company is liable, even if they haven't paid the claim yet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-teal-500" /> Renters Insurance Definition</h3>
              <p className="text-sm text-slate-600">
                A <strong>renters insurance definition</strong> is a policy that provides coverage for a policyholder's belongings, liabilities, and possibly living expenses in case of a loss event in a rented property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Teaser */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Overpaying for Legacy Insurance</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Modern AI-first carriers offer the same coverage for up to 30% less. We've partnered with the best tech-forward insurers to bring you exclusive rates.
              </p>
              <ul className="space-y-4 mb-8 inline-block text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-400 shrink-0" /> <span>Compare 20+ Top <strong>Insurance Providers</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-400 shrink-0" /> <span>Exclusive <strong>Online Insurance</strong> Discounts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-400 shrink-0" /> <span>Instant Approval Partners</span>
                </li>
              </ul>
              <div>
                <Link to="/compare">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 w-full md:w-auto">
                    View Best Offers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative w-full">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                  <span className="font-bold text-lg">Monthly Premium Savings</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Average Traditional Cost</span>
                      <span className="text-slate-400">$180/mo</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-[100%] bg-slate-500" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-semibold">With AI Insurers</span>
                      <span className="text-teal-400 font-bold">$115/mo</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-[65%] bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700 text-center">
                  <p className="text-sm text-slate-400">Average savings based on 2025 user data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="text-center md:text-left w-full md:w-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Expert Guides</h2>
              <p className="text-slate-600 text-lg">Read our latest reviews and tips to save on your next policy.</p>
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
              <Button variant="outline" className="w-full py-4">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find the perfect plan?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Browse our directory of top-rated insurers or use our AI assistant to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/compare">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-none w-full sm:w-auto py-4">
                Compare Rates
              </Button>
            </Link>
            <Link to="/search">
              <Button variant="outline" size="lg" className="border-blue-400 text-white hover:bg-blue-700 hover:border-blue-700 w-full sm:w-auto py-4">
                Find Local Agent
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
