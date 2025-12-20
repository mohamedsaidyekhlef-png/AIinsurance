import React from 'react';
import { MapPin, AlertTriangle, Shield } from 'lucide-react';

interface LocalMapProps {
  city: string;
  riskType: string;
}

export const LocalMap: React.FC<LocalMapProps> = ({ city, riskType }) => {
  return (
    <div className="relative w-full h-[400px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 group">
      {/* Mock Map Background */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
      
      {/* Risk Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      
      {/* Heatmap Points (Animated) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      
      {/* UI Elements */}
      <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="text-red-500" size={16} />
          <span className="font-bold uppercase tracking-wider text-xs">{city} Risk Zone</span>
        </div>
        <div className="text-2xl font-bold">{riskType}</div>
      </div>

      <div className="absolute bottom-6 right-6 bg-slate-900/90 border border-slate-700 p-4 rounded-xl text-white max-w-xs">
        <div className="flex items-center gap-2 mb-2 text-yellow-400 font-bold text-sm">
          <AlertTriangle size={14} /> High Activity Detected
        </div>
        <p className="text-xs text-slate-400">
          Recent data indicates a surge in {riskType} claims in this zip code. AI carriers use this map to price accurately.
        </p>
      </div>

      {/* Floating Pins */}
      <div className="absolute top-1/3 left-1/3">
        <div className="relative">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute" />
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white relative z-10" />
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/4">
        <div className="relative">
          <div className="w-4 h-4 bg-orange-500 rounded-full animate-ping absolute delay-700" />
          <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white relative z-10" />
        </div>
      </div>
    </div>
  );
};
