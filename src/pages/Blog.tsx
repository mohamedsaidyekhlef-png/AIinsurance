import React from 'react';
import { blogPosts } from '../data/mockData';
import { motion } from 'framer-motion';

export const Blog = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Insuralix Blog</h1>
          <p className="text-xl text-slate-600">
            Expert analysis on how artificial intelligence is reshaping the insurance landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => ( // Using same mock data for demo, typically would have more
             <motion.article 
             key={post.id}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: idx * 0.1 }}
             className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
           >
             <div className="h-56 overflow-hidden relative">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                 {post.category}
               </span>
             </div>
             <div className="p-8 flex flex-col flex-grow">
               <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                 {post.title}
               </h3>
               <p className="text-slate-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                 {post.excerpt}
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                    {post.author.charAt(0)}
                 </div>
                 <span className="text-sm font-medium text-slate-900">{post.author}</span>
               </div>
             </div>
           </motion.article>
          ))}
          {/* Duplicating for grid effect */}
          {blogPosts.map((post, idx) => (
             <motion.article 
             key={`${post.id}-dup`}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: (idx + 4) * 0.1 }}
             className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
           >
             <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                 {post.category}
               </span>
             </div>
             <div className="p-8 flex flex-col flex-grow">
               <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                 {post.title}
               </h3>
               <p className="text-slate-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                 {post.excerpt}
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                    {post.author.charAt(0)}
                 </div>
                 <span className="text-sm font-medium text-slate-900">{post.author}</span>
               </div>
             </div>
           </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
