import React from 'react';
import { Sliders } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { ScenarioStressTest } from '../../components/tools/ScenarioStressTest';

export const ScenarioStressTestPage = () => {
  const seoContent = {
    howItWorks: [
      "Use the sliders to simulate different accident or disaster severities.",
      "Our backend calculates the repair costs based on 2025 labor/parts data.",
      "We apply your deductible logic to show your exact out-of-pocket cost.",
      "See instantly if your current deductible is too high."
    ],
    benefits: [
      "Visualize the financial impact of 'What If' scenarios.",
      "Understand how deductibles work in real life, not just on paper.",
      "Find the sweet spot between monthly premium and emergency savings.",
      "Prepare for the unexpected."
    ],
    faq: [
      {
        q: "Why is my out-of-pocket cost higher than my deductible?",
        a: "Insurers often have hidden fees, or certain damages (like aftermarket parts) may not be fully covered. We add a buffer to give you a realistic estimate."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="Scenario Stress Test"
      subtitle="Don't wait for an accident to find out what you owe. Simulate disasters and see your financial exposure instantly."
      icon={Sliders}
      colorClass="text-orange-600"
      bgClass="bg-orange-50"
      seoContent={seoContent}
    >
      <ScenarioStressTest />
    </ToolPageLayout>
  );
};
