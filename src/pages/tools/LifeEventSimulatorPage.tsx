import React from 'react';
import { Activity } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { LifeEventSimulator } from '../../components/tools/LifeEventSimulator';

export const LifeEventSimulatorPage = () => {
  const seoContent = {
    howItWorks: [
      "Select your future life goals (Marriage, Kids, Business).",
      "Our Monte Carlo engine runs 1,000 simulations of your financial future.",
      "We identify scenarios where your current coverage fails.",
      "Generative AI creates a 'Future Story' report for you."
    ],
    benefits: [
      "Visualize financial risks 5-10 years in the future.",
      "Understand how life changes impact your insurance needs.",
      "Get a data-backed recommendation for Life Insurance coverage.",
      "Interactive and easy to use."
    ],
    faq: [
      {
        q: "What is a Monte Carlo simulation?",
        a: "It's a mathematical technique that predicts possible outcomes of an uncertain event. We use it to model thousands of different economic and life paths for you."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="Life-Event Risk Simulator"
      subtitle="Insurance is for your future self. Simulate how marriage, kids, or a new business changes your risk."
      icon={Activity}
      colorClass="text-purple-600"
      bgClass="bg-purple-50"
      seoContent={seoContent}
    >
      <LifeEventSimulator />
    </ToolPageLayout>
  );
};
