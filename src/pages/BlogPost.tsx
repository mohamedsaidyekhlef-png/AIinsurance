import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fullBlogPosts } from '../data/blogContent';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { toolsList } from '../components/tools/ToolsLayout';

export const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = fullBlogPosts[Number(id)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog">
          <Button>Return to Blog</Button>
        </Link>
      </div>
    );
  }

  // Find the related tool to promote
  const relatedTool = toolsList.find(t => t.id === post.relatedToolId);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      {/* Reading Progress Bar (Simple Implementation) */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100 z-50">
        <div className="h-full bg-blue-600 w-full origin-left scale-x-0 animate-scroll-progress" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Journal
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            {/* Header */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                {post.subtitle}
              </p>
            </div>

            {/* Author & Meta */}
            <div className="flex items-center justify-between border-y border-slate-100 py-6 mb-10">
              <div className="flex items-center gap-4">
                <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" />
                <div>
                  <div className="font-bold text-slate-900">{post.author}</div>
                  <div className="text-xs text-slate-500">{post.authorRole}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-slate-500 text-sm">
                <span className="flex items-center gap-2"><Calendar size={16} /> {post.publishDate}</span>
                <span className="hidden sm:flex items-center gap-2"><User size={16} /> 5 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg mb-12">
              <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-2xl">
              {post.content}
            </article>

            {/* Share Footer */}
            <div className="mt-16 pt-8 border-t border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Share2 size={20} /> Share this article
              </h3>
              <div className="flex gap-4">
                <button className="p-3 rounded-full bg-slate-100 hover:bg-[#1DA1F2] hover:text-white transition-colors"><Twitter size={20} /></button>
                <button className="p-3 rounded-full bg-slate-100 hover:bg-[#4267B2] hover:text-white transition-colors"><Facebook size={20} /></button>
                <button className="p-3 rounded-full bg-slate-100 hover:bg-[#0077b5] hover:text-white transition-colors"><Linkedin size={20} /></button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Related Tool Widget */}
            {relatedTool && (
              <div className="bg-slate-900 text-white rounded-3xl p-8 sticky top-32 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 ${relatedTool.bg} ${relatedTool.color} rounded-xl flex items-center justify-center mb-6`}>
                    <relatedTool.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Take Action</h3>
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                    Don't just read about it. Use our <strong>{relatedTool.name}</strong> to analyze your own risk profile instantly.
                  </p>
                  <Link to={`/tools/${relatedTool.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 border-none">
                      Launch Tool <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Newsletter Widget */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Join the InsurTech Weekly</h3>
              <p className="text-sm text-slate-500 mb-6">Get the latest AI insurance tips delivered to your inbox.</p>
              <input type="email" placeholder="Email address" className="w-full p-3 rounded-xl border border-slate-200 mb-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              <Button variant="outline" className="w-full border-slate-300 hover:border-blue-600 hover:text-blue-600">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
