import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, BarChart3, Shield, Activity, Camera, Smartphone, CloudLightning, ArrowRight, Sliders, Zap } from 'lucide-react';
import { RiskPulse } from '../components/tools/RiskPulse';
import { LiveTicker } from '../components/tools/LiveTicker';

export const Tools = () => {
  const toolsList = [
    { id: 'scenario-stress-test', name: 'Scenario Stress Test', icon: Sliders, color: 'text-orange-600', bg: 'bg-orange-50', desc: 'Simulate accidents & storms to see costs.' },
    { id: 'optimization', name: 'Risk Optimizer', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50', desc: 'One-click policy swap proposal.' },
    { id: 'policy-analyzer', name: 'Policy Analyzer', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', desc: 'Upload PDF to decode fine print & exclusions.' },
    { id: 'premium-predictor', name: 'Premium Predictor', icon: BarChart3, color: 'text-teal-600', bg: 'bg-teal-50', desc: 'Forecast future rate changes with AI.' },
    { id: 'gap-finder', name: 'Gap Finder', icon: Shield, color: 'text-rose-600', bg: 'bg-rose-50', desc: 'Find missing coverage in 30 seconds.' },
    { id: 'life-event-simulator', name: 'Life-Event Sim', icon: Activity, color: 'text-purple-600', bg: 'bg-purple-50', desc: 'Simulate future financial risks.' },
    { id: 'evidence-vault', name: 'Evidence Vault', icon: Camera, color: 'text-indigo-600', bg: 'bg-indigo-50', desc: 'Blockchain-backed asset scanning.' },
    { id: 'telematics-optimizer', name: 'Telematics Opt.', icon: Smartphone, color: 'text-emerald-600', bg: 'bg-emerald-50', desc: 'Analyze driving data locally.' },
    { id: 'disaster-alert', name: 'Parametric Alert', icon: CloudLightning, color: 'text-amber-600', bg: 'bg-amber-50', desc: 'Real-time weather trigger monitoring.' },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Dashboard Header - Risk Pulse */}
        <RiskPulse />

        {/* Live Ticker */}
        <LiveTicker />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">AI Insurance Command Center</h2>
          <p className="text-xl text-slate-600">
            Professional-grade utilities to analyze risk, predict costs, and secure your assets. Free forever.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {toolsList.map((tool, idx) => (
            <Link key={tool.id} to={`/tools/${tool.id}`} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full flex flex-col"
              >
                <div className={`w-16 h-16 ${tool.bg} ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <tool.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {tool.desc}
                </p>
                <div className="flex items-center font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                  Launch Tool <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Optimize Your Portfolio?</h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                 Use our "One-Click Optimization" agent to scan the market and swap to better policies instantly.
              </p>
              <Link to="/tools/optimization">
                 <button className="bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-blue-50 transition-colors">
                    Start Optimization
                 </button>
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
};
