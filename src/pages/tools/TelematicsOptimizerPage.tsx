import React from 'react';
import { Smartphone } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { TelematicsOptimizer } from '../../components/tools/TelematicsOptimizer';

export const TelematicsOptimizerPage = () => {
  const seoContent = {
    howItWorks: [
      "Upload your driving data (Tesla/Apple Health) or health stats.",
      "Our WebAssembly engine processes the data LOCALLY in your browser.",
      "We calculate your 'Driver Score' or 'Health Score'.",
      "You see exactly how much you could save with Usage-Based Insurance."
    ],
    benefits: [
      "Privacy-First: Your raw data never leaves your device.",
      "Find out if you are a 'Safe Driver' before applying.",
      "Unlock discounts of up to 40% with top carriers.",
      "Risk-free assessment."
    ],
    faq: [
      {
        q: "Is my data sent to insurance companies?",
        a: "No. This tool is a sandbox. You only share data with an insurer if you explicitly choose to click 'Unlock Discount' and sign up with them."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="Telematics Data Sandbox"
      subtitle="Your data is valuable. Analyze your driving habits privately to see if you qualify for big discounts."
      icon={Smartphone}
      colorClass="text-emerald-600"
      bgClass="bg-emerald-50"
      seoContent={seoContent}
    >
      <TelematicsOptimizer />
    </ToolPageLayout>
  );
};
