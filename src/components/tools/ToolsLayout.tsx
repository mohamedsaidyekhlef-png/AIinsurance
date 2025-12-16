import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, BarChart3, Shield, Activity, 
  Camera, Smartphone, CloudLightning, Menu, X 
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
];

export const ToolsLayout: React.FC<ToolsLayoutProps> = ({ children, activeTool, setActiveTool }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-[800px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
      {/* Mobile Header */}
      <div className="lg:hidden p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
        <span className="font-bold text-slate-700">Select Tool</span>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-white rounded-lg shadow-sm">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={cn(
        "w-full lg:w-72 bg-slate-50 border-r border-slate-100 flex-shrink-0 transition-all duration-300 ease-in-out lg:block",
        isSidebarOpen ? "block" : "hidden"
      )}>
        <div className="p-6">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">AI Toolkit</h2>
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
        </div>
        
        <div className="p-6 mt-auto border-t border-slate-200">
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

      {/* Main Content */}
      <div className="flex-grow bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500 opacity-20" />
        <div className="h-full overflow-y-auto p-6 md:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};
