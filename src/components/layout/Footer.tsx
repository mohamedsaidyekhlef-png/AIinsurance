import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <img 
                src="https://i.postimg.cc/DzfwxQLp/Chat-GPT-Image-Dec-19-2025-07-38-38-PM.png" 
                alt="Insuralix Logo" 
                className="h-24 w-24 object-contain drop-shadow-lg"
              />
              <span className="text-2xl font-bold">INSURALIX</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Revolutionizing the insurance industry through artificial intelligence, predictive analytics, and data-driven insights.
            </p>
            <a href="mailto:contact@insuralix.com" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
              <Mail size={16} /> contact@insuralix.com
            </a>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/niches" className="hover:text-blue-400 transition-colors">Insurance Niches</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">AI Blog</Link></li>
              <li><Link to="/tools" className="hover:text-blue-400 transition-colors">Free Tools</Link></li>
              <li><Link to="/compare" className="hover:text-blue-400 transition-colors">Compare Rates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><a href="mailto:contact@insuralix.com" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Subscribe</h4>
            <p className="text-xs text-slate-400 mb-4">Get the latest AI insurance trends directly to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2025 Insuralix. All rights reserved.</p>
          <div className="flex gap-4">
            <Twitter size={20} className="hover:text-white cursor-pointer transition-colors" />
            <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
            <Facebook size={20} className="hover:text-white cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};
