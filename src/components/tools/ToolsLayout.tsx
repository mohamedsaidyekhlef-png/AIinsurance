import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, BarChart3, Shield, Activity, 
  Camera, Smartphone, CloudLightning, Menu, X, Globe 
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface ToolsLayoutProps {
  children: React.ReactNode;
  activeTool: string;
  setActiveTool: (id: string) => void;
}

export const toolsList = [
  { id: 'analyzer', name: 'Policy Analyzer', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'predictor', name: 'Premium Predictor', icon: BarChart3, color: 'text-teal-600', bg: 'bg-teal-50' },
  { id: 'gap', name: 'Gap Finder', icon: Shield, color: 'text-rose-600', bg: 'bg-rose-50' },
  { id: 'simulator', name: 'Life-Event Sim', icon: Activity, color: 'text-purple-600', bg: 'bg-purple-50' },
  { id: 'vault', name: 'Evidence Vault', icon: Camera, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { id: 'telematics', name: 'Telematics Opt.', icon: Smartphone, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 'disaster', name: 'Parametric Alert', icon: CloudLightning, color: 'text-amber-600', bg: 'bg-amber-50' },
  { id: 'scanner', name: 'Market Scanner', icon: Globe, color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

export const ToolsLayout: React.FC<ToolsLayoutProps> = ({ children, activeTool, setActiveTool }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-[800px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
      {/* Mobile Header / Tool Switcher */}
      <div className="lg:hidden p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 sticky top-0 z-20">
        <span className="font-bold text-slate-700 flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
           Active Tool
        </span>
        <button 
           onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
           className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200 text-sm font-bold text-slate-600"
        >
          {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          Switch Tool
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      <div className={cn(
        "fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity",
        isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={() => setIsSidebarOpen(false)} />

      {/* Sidebar */}
      <div className={cn(
        "fixed lg:static inset-y-0 left-0 w-72 bg-slate-50 border-r border-slate-100 flex-shrink-0 transition-transform duration-300 ease-in-out z-40 lg:transform-none lg:block",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 h-full flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between mb-6 lg:hidden">
             <h2 className="text-lg font-bold text-slate-900">Select Tool</h2>
             <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-white rounded-full shadow-sm"><X size={20} /></button>
          </div>

          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 hidden lg:block">AI Toolkit</h2>
          <div className="space-y-2">
            {toolsList.map((tool) => (
              <button
                key={tool.id}
                onClick={() => { setActiveTool(tool.id); setIsSidebarOpen(false); }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left",
                  activeTool === tool.id 
                    ? "bg-white shadow-md text-slate-900 ring-1 ring-slate-200" 
                    : "text-slate-600 hover:bg-white/50 hover:text-slate-900"
                )}
              >
                <div className={cn("p-2 rounded-lg", tool.bg, tool.color)}>
                  <tool.icon size={18} />
                </div>
                <span className="font-semibold text-sm">{tool.name}</span>
              </button>
            ))}
          </div>
        
          <div className="mt-auto pt-6 border-t border-slate-200">
             <div className="bg-slate-900 rounded-xl p-4 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-bold text-sm mb-1">Dualite AI Core</h3>
                <p className="text-xs text-slate-400">System Operational</p>
                <div className="flex gap-1 mt-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                   <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse delay-75" />
                   <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse delay-150" />
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500 opacity-20" />
        <div className="h-full overflow-y-auto p-4 md:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};
