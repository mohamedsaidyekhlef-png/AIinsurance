import React from 'react';
import { FileText } from 'lucide-react';

export const TermsOfService = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
            <FileText className="text-teal-600" size={32} />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Terms of Service</h1>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="lead text-lg">Last Updated: October 24, 2025</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using <strong>INSURALIX</strong>, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h3>2. Description of Service</h3>
            <p>
              INSURALIX provides AI-powered informational tools, calculators, and comparison resources for the insurance industry. <strong>We are not an insurance carrier, agent, or broker.</strong> We do not underwrite insurance policies or process claims. All insurance products are offered by third-party affiliates.
            </p>

            <h3>3. Disclaimer of Warranties</h3>
            <p>
              The tools and content on this site are provided "as is" and "as available" for informational purposes only. The "AI Policy Analyzer," "Premium Predictor," and other tools are simulations based on historical data and algorithms. They do not constitute binding financial or legal advice.
            </p>

            <h3>4. Limitation of Liability</h3>
            <p>
              You expressly understand and agree that INSURALIX shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or inability to use the service.
            </p>

            <h3>5. Affiliate Disclosure</h3>
            <p>
              INSURALIX participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites. This comes at no extra cost to you and helps support our research.
            </p>

            <h3>6. User Conduct</h3>
            <p>
              You agree not to use the website to:
              <ul>
                <li>Upload any content that is unlawful, harmful, or fraudulent.</li>
                <li>Attempt to reverse engineer any of the AI models or code provided on the site.</li>
                <li>Use automated systems (bots) to access the site without permission.</li>
              </ul>
            </p>

            <h3>7. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review this page periodically. Your continued use of the Website after those changes constitute your agreement to the new Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
