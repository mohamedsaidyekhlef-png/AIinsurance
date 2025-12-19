import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, ChevronDown, FileText, BarChart3, Shield, Activity, Camera, Smartphone, CloudLightning, Sliders, Zap, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setToolsDropdownOpen(false);
  }, [location]);

  const toolsMenu = [
    { name: 'Risk Pulse', path: '/tools', icon: Activity, color: 'text-red-600', desc: 'Financial Health Score' },
    { name: 'Market Scanner', path: '/tools/market-scanner', icon: Globe, color: 'text-emerald-500', desc: 'Secret Web Crawler' },
    { name: 'Scenario Stress Test', path: '/tools/scenario-stress-test', icon: Sliders, color: 'text-orange-600', desc: 'Simulate accidents & storms' },
    { name: 'Risk Optimizer', path: '/tools/optimization', icon: Zap, color: 'text-yellow-500', desc: 'One-click policy swap' },
    { name: 'Policy Analyzer', path: '/tools/policy-analyzer', icon: FileText, color: 'text-blue-600', desc: 'Decode fine print' },
    { name: 'Premium Predictor', path: '/tools/premium-predictor', icon: BarChart3, color: 'text-teal-600', desc: 'Forecast rates' },
    { name: 'Gap Finder', path: '/tools/gap-finder', icon: Shield, color: 'text-rose-600', desc: 'Find missing coverage' },
    { name: 'Life Simulator', path: '/tools/life-event-simulator', icon: Activity, color: 'text-purple-600', desc: 'Future risk check' },
    { name: 'Evidence Vault', path: '/tools/evidence-vault', icon: Camera, color: 'text-indigo-600', desc: 'Blockchain proof' },
    { name: 'Telematics Opt.', path: '/tools/telematics-optimizer', icon: Smartphone, color: 'text-emerald-600', desc: 'Data sandbox' },
    { name: 'Disaster Alert', path: '/tools/disaster-alert', icon: CloudLightning, color: 'text-amber-600', desc: 'Parametric payouts' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Compare', path: '/compare' },
    { name: 'Directory', path: '/search' },
    { name: 'News & Guides', path: '/blog' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        (scrolled || isOpen) ? "bg-white/95 backdrop-blur-md border-slate-200 py-2 shadow-sm" : "bg-transparent border-transparent py-2 md:py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-50">
        {/* Logo Section - Responsive Sizing */}
        <Link to="/" className="flex items-center gap-2 group shrink-0" onClick={() => setIsOpen(false)}>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full scale-100" />
            {/* Logo is smaller on mobile (h-12) and larger on desktop (md:h-20 lg:h-28) to prevent layout break */}
            <img 
              src="https://i.postimg.cc/xTwWz4ck/Gemini-Generated-Image-fnp6q5fnp6q5fnp6-(1).png" 
              alt="Insuralix Logo" 
              className="h-12 w-12 md:h-20 md:w-20 lg:h-28 lg:w-28 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            />
          </div>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-500 tracking-tight">
            INSURALIX
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 whitespace-nowrap">
          <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-blue-600", location.pathname === '/' ? "text-blue-600" : "text-slate-600")}>
            Home
          </Link>

          {/* Tools Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setToolsDropdownOpen(true)}
            onMouseLeave={() => setToolsDropdownOpen(false)}
          >
            <Link 
              to="/tools" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600 flex items-center gap-1 py-4", 
                location.pathname.includes('/tools') ? "text-blue-600" : "text-slate-600"
              )}
            >
              Tools <ChevronDown size={14} className={cn("transition-transform", toolsDropdownOpen ? "rotate-180" : "")} />
            </Link>
            
            <AnimatePresence>
              {toolsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 gap-4 z-50"
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-slate-100" />
                  {toolsMenu.map((tool) => (
                    <Link 
                      key={tool.name} 
                      to={tool.path}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className={cn("p-2 rounded-lg bg-slate-50 group-hover/item:bg-white group-hover/item:shadow-sm transition-all", tool.color)}>
                        <tool.icon size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{tool.name}</div>
                        <div className="text-xs text-slate-500">{tool.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <Link to="/tools" className="col-span-2 mt-2 p-3 text-center text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                    View All Tools &rarr;
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600 relative",
                location.pathname === link.path ? "text-blue-600" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/compare">
            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 shadow-teal-500/20 border-none whitespace-nowrap">
              <TrendingUp size={16} className="mr-1" /> Top Offers
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-700 p-2 z-50 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-white z-40 pt-[80px] overflow-y-auto"
          >
            <div className="container mx-auto px-4 pb-10 flex flex-col gap-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900 py-4 border-b border-slate-50 flex items-center justify-between">
                Home <span className="text-slate-300">→</span>
              </Link>
              
              <div className="py-4 border-b border-slate-50">
                <div className="text-lg font-bold text-slate-900 mb-4">Tools</div>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {toolsMenu.map((tool) => (
                    <Link 
                      key={tool.name} 
                      to={tool.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-slate-600 py-2.5 px-2 rounded-lg hover:bg-slate-50"
                    >
                      <tool.icon size={18} className={tool.color} />
                      <span className="font-medium text-sm">{tool.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-900 py-4 border-b border-slate-50 flex items-center justify-between"
                >
                  {link.name} <span className="text-slate-300">→</span>
                </Link>
              ))}
              
              <Link to="/compare" className="mt-8" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 py-4 text-lg shadow-lg shadow-teal-500/20">
                  View Top Offers
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
