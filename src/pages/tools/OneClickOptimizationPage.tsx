import React from 'react';
import { Zap } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { OneClickOptimization } from '../../components/tools/OneClickOptimization';

export const OneClickOptimizationPage = () => {
  const seoContent = {
    howItWorks: [
      "Our AI Agent scans your profile against 20+ top carriers.",
      "It looks for 'Arbitrage' opportunities where you are overpaying.",
      "It bundles the best Auto and Home offers into a single proposal.",
      "You click one button to start the switching process."
    ],
    benefits: [
      "Stop 'Price Creep'—insurers raise rates hoping you won't notice.",
      "Save an average of $500/year by re-balancing.",
      "Upgrade to modern, AI-first carriers with better apps.",
      "Zero paperwork hassle."
    ],
    faq: [
      {
        q: "Does this switch my insurance automatically?",
        a: "No. We present the proposal and link you directly to the carrier's checkout to finalize the switch. You remain in control."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="Risk Re-Balancer Agent"
      subtitle="One click to analyze the market and swap to a better, cheaper portfolio of policies."
      icon={Zap}
      colorClass="text-yellow-500"
      bgClass="bg-yellow-50"
      seoContent={seoContent}
    >
      <OneClickOptimization />
    </ToolPageLayout>
  );
};
