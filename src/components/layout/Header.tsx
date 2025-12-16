import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Compare', path: '/compare' },
    { name: 'Claims Help', path: '/claims' },
    { name: 'Directory', path: '/search' },
    { name: 'News & Guides', path: '/blog' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white/90 backdrop-blur-md border-slate-200 py-1 shadow-sm" : "bg-transparent border-transparent py-2"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Section - Gap reduced to 0 to bring text closer */}
        <Link to="/" className="flex items-center gap-0 group shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full scale-100" />
            <img 
              src="https://i.postimg.cc/xTwWz4ck/Gemini-Generated-Image-fnp6q5fnp6q5fnp6-(1).png" 
              alt="Insuralix Logo" 
              className="h-28 w-28 md:h-36 md:w-36 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            />
          </div>
          {/* Negative margin applied to pull text even closer if image has whitespace */}
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-500 tracking-tight hidden sm:block -ml-2">
            INSURALIX
          </span>
        </Link>

        {/* Desktop Nav - Changed to hidden lg:flex to ensure one line on desktop */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600 relative",
                location.pathname === link.path ? "text-blue-600" : "text-slate-600"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                />
              )}
            </Link>
          ))}
          <Link to="/compare">
            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 shadow-teal-500/20 border-none whitespace-nowrap">
              <TrendingUp size={16} className="mr-1" /> Top Offers
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle - Visible on md and below */}
        <button 
          className="lg:hidden text-slate-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/compare" className="mt-2" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-teal-500 hover:bg-teal-600">View Top Offers</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
