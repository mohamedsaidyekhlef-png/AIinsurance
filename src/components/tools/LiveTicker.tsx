import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';

const tickerData = [
  { name: 'Lemonade (Renters)', price: 5, change: -0.50, trend: 'down' },
  { name: 'Root (Auto)', price: 84, change: -12.00, trend: 'down' },
  { name: 'Hippo (Home)', price: 65, change: +2.50, trend: 'up' },
  { name: 'Ethos (Life)', price: 22, change: 0, trend: 'flat' },
  { name: 'Metromile (Auto)', price: 45, change: -3.20, trend: 'down' },
  { name: 'Bestow (Life)', price: 18, change: -1.00, trend: 'down' },
  { name: 'Clearcover (Auto)', price: 92, change: +4.00, trend: 'up' },
];

export const LiveTicker = () => {
  return (
    <div className="w-full bg-slate-900 border-y border-slate-800 overflow-hidden py-3 mb-12">
      <div className="flex items-center gap-4 px-4 mb-2 md:hidden">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Premium Ticker</span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...tickerData, ...tickerData, ...tickerData].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="font-bold text-slate-300 text-sm">{item.name}</span>
              <div className="flex items-center gap-1">
                <span className="text-white font-mono font-bold">${item.price}</span>
                <span className={`text-xs flex items-center ${
                  item.trend === 'down' ? 'text-green-400' : 
                  item.trend === 'up' ? 'text-red-400' : 'text-slate-500'
                }`}>
                  {item.trend === 'down' ? <TrendingDown size={12} className="mr-0.5" /> : 
                   item.trend === 'up' ? <TrendingUp size={12} className="mr-0.5" /> : <Minus size={12} className="mr-0.5" />}
                  {item.change > 0 ? '+' : ''}{item.change === 0 ? '-' : item.change}
                </span>
              </div>
              <div className="w-px h-4 bg-slate-700 mx-2" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
