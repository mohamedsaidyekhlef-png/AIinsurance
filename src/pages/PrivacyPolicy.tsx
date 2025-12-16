import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
            <Shield className="text-blue-600" size={32} />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="lead text-lg">Last Updated: October 24, 2025</p>
            
            <h3>1. Introduction</h3>
            <p>
              Welcome to <strong>INSURALIX</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website insuralix.com and use our AI-powered tools.
            </p>

            <h3>2. Information We Collect</h3>
            <p>We collect information that you voluntarily provide to us when you use our tools (such as the Policy Analyzer or Premium Predictor). This may include:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, and location data when you sign up for newsletters or alerts.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our AI tools, including input data for simulations (which is processed anonymously).</li>
              <li><strong>Device Data:</strong> IP address, browser type, and operating system for analytics and security purposes.</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our AI tools and services.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Analyze user behavior to optimize our "InsurTech" recommendations.</li>
              <li>Send you emails regarding updates, security alerts, and support messages (if you have opted in).</li>
            </ul>

            <h3>4. AI & Data Processing</h3>
            <p>
              Our tools utilize Artificial Intelligence (AI) to process data. <strong>We do not store sensitive personal inputs</strong> (such as specific health data or full insurance policy documents) on our servers longer than necessary to generate your report. 
              <ul>
                <li><strong>Local Processing:</strong> Tools like the "Telematics Optimizer" use WebAssembly to process data locally on your device whenever possible.</li>
                <li><strong>Anonymization:</strong> Data sent to third-party LLMs (like OpenAI or Anthropic) is stripped of Personally Identifiable Information (PII) before transmission.</li>
              </ul>
            </p>

            <h3>5. Third-Party Links & Affiliates</h3>
            <p>
              Our website contains links to third-party websites and affiliate partners (e.g., Lemonade, Ethos). If you click on a third-party link, you will be directed to that site. Note that these external sites have their own privacy policies, and we do not accept any responsibility or liability for their policies or processing of your personal data.
            </p>

            <h3>6. Cookies and Tracking</h3>
            <p>
              We use cookies and similar tracking technologies (like Google Analytics and AdSense) to track the activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h3>7. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@insuralix.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
