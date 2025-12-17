import React, { useState } from 'react';
import { blogPosts } from '../data/mockData';
import { motion } from 'framer-motion';
import { Search, Clock, ChevronRight, Mail, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Consumer Guide', 'Reviews', 'Tips & Tricks', 'Industry News'];

  // Filter posts logic
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // For the 'All' view, we pick the first post as featured
  const featuredPost = blogPosts[0];
  
  // If showing 'All', remove the featured post from the grid so it's not duplicated. 
  // If filtering by category, show all matching posts in the grid.
  const gridPosts = activeCategory === 'All' 
    ? filteredPosts.filter(p => p.id !== featuredPost.id) 
    : filteredPosts;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              The <span className="text-blue-600">Insuralix</span> Journal
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Deep dives into the future of insurance. Expert analysis on AI algorithms, market trends, and how to save on your premiums.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
             {/* Categories */}
             <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar mask-linear scroll-smooth">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      activeCategory === cat 
                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105' 
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>

             {/* Search */}
             <div className="relative w-full md:w-72 group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
               <input 
                 type="text" 
                 placeholder="Search articles..." 
                 className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-white shadow-sm transition-all"
               />
             </div>
          </div>
        </div>

        {/* Featured Post (Only show on 'All') */}
        {activeCategory === 'All' && featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <Link to={`/blog/${featuredPost.id}`}>
              <div className="group relative rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-slate-200/50 border border-slate-100 grid grid-cols-1 lg:grid-cols-2 cursor-pointer">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <img src="https://i.postimg.cc/xTwWz4ck/Gemini-Generated-Image-fnp6q5fnp6q5fnp6-(1).png" className="w-40 h-40 grayscale" alt="watermark" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                      Featured Story
                    </span>
                    <span className="text-slate-400 text-sm flex items-center gap-1">
                      <Clock size={14} /> {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
                          {featuredPost.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-base font-bold text-slate-900">{featuredPost.author}</p>
                          <p className="text-xs text-slate-500 font-medium">{featuredPost.date}</p>
                        </div>
                    </div>
                    <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 group-hover:translate-x-2 transition-all font-semibold">
                      Read Article <ChevronRight size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {gridPosts.map((post, idx) => (
             <Link key={post.id} to={`/blog/${post.id}`}>
               <motion.article 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 border border-slate-100 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 cursor-pointer"
             >
               <div className="h-60 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <span className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm border border-slate-100">
                   {post.category}
                 </span>
               </div>
               <div className="p-8 flex flex-col flex-grow">
                 <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{post.readTime}</span>
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                   {post.title}
                 </h3>
                 <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                   {post.excerpt}
                 </p>
                 <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-2.5">
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-200">
                        <User size={14} />
                     </div>
                     <span className="text-xs font-bold text-slate-700">{post.author}</span>
                   </div>
                   <span className="text-blue-600 text-xs font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                     Read <ChevronRight size={14} />
                   </span>
                 </div>
               </div>
             </motion.article>
           </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white p-10 md:p-20 text-center shadow-2xl shadow-slate-900/20">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-400 border border-white/10 shadow-lg">
                <Mail size={36} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Stay Ahead of the Curve</h2>
              <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
                Join 15,000+ subscribers getting the latest AI insurance trends, affiliate tips, and market analysis delivered weekly.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/15 backdrop-blur-sm transition-all"
                />
                <Button className="rounded-full px-8 py-4 bg-blue-600 hover:bg-blue-500 border-none shadow-lg shadow-blue-600/30 text-base font-semibold">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-slate-500 mt-6 font-medium">
                No spam, ever. Unsubscribe at any time.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};
