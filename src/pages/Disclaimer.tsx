import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Disclaimer = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
            <AlertTriangle className="text-amber-500" size={32} />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Disclaimer</h1>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-600">
            <h3>Not Financial or Legal Advice</h3>
            <p>
              The information provided on <strong>INSURALIX</strong> (including our AI tools, blog posts, and comparison tables) is for general informational and educational purposes only. It is not intended to substitute for professional financial, legal, or insurance advice.
            </p>
            <p>
              Always seek the advice of a qualified insurance agent, financial advisor, or attorney with any questions you may have regarding a financial decision or insurance policy. Never disregard professional advice or delay in seeking it because of something you have read on this website.
            </p>

            <h3>Accuracy of AI Tools</h3>
            <p>
              Our tools (Policy Analyzer, Risk Simulator, etc.) utilize Artificial Intelligence and Machine Learning models. While we strive for accuracy, AI models can hallucinate or produce errors. 
              <ul>
                <li><strong>Predictions:</strong> Future premium estimates are hypothetical and based on past trends.</li>
                <li><strong>Policy Analysis:</strong> The AI summary of policy documents is an aid, not a legal interpretation.</li>
              </ul>
            </p>

            <h3>No Endorsement</h3>
            <p>
              Reference to any specific commercial product, process, or service by trade name, trademark, manufacturer, or otherwise does not necessarily constitute or imply its endorsement, recommendation, or favoring by INSURALIX. The views and opinions of authors expressed herein do not necessarily state or reflect those of the company.
            </p>

            <h3>Earnings Disclaimer</h3>
            <p>
              Any income or earnings statements are estimates of potential income potential. There is no guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
