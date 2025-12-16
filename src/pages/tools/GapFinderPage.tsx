import React from 'react';
import { Shield } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { GapFinder } from '../../components/tools/GapFinder';

export const GapFinderPage = () => {
  const seoContent = {
    howItWorks: [
      "Answer 5 simple questions about your lifestyle and assets.",
      "Our Decision Tree logic maps your answers to standard insurance risks.",
      "We cross-reference with typical policy exclusions.",
      "You receive a personalized list of 'Coverage Gaps'."
    ],
    benefits: [
      "Discover risks you didn't know you had (e.g., Crypto, Side Hustles).",
      "Get specific recommendations for add-ons (Endorsements).",
      "Protect your financial future from unexpected lawsuits.",
      "Fast and free assessment."
    ],
    faq: [
      {
        q: "What is a coverage gap?",
        a: "A coverage gap is a risk that you face which is NOT covered by your standard insurance policy. For example, a standard home policy rarely covers flood damage."
      },
      {
        q: "Do I need to buy insurance to use this?",
        a: "No, this is a free educational tool to help you understand your risk profile."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="Smart Coverage Gap Finder"
      subtitle="Most people are underinsured. Take our 30-second quiz to find holes in your protection."
      icon={Shield}
      colorClass="text-rose-600"
      bgClass="bg-rose-50"
      seoContent={seoContent}
    >
      <GapFinder />
    </ToolPageLayout>
  );
};
