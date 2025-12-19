import React from 'react';
import { Globe } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { MarketScanner } from '../../components/tools/MarketScanner';

export const MarketScannerPage = () => {
  const seoContent = {
    howItWorks: [
      "Deploy the agent to scan global insurance registries and startup databases.",
      "The AI analyzes meta-tags and press releases to identify new market entrants.",
      "It cross-references findings with regulatory bodies to verify legitimacy.",
      "New opportunities are indexed instantly for your review."
    ],
    benefits: [
      "Be the first to know about new 'InsurTech' startups.",
      "Find arbitrage opportunities where new carriers offer lower rates to gain market share.",
      "Monitor global trends in real-time.",
      "Automated data extraction saves hours of research."
    ],
    faq: [
      {
        q: "Is this legal?",
        a: "Yes. Our agent strictly adheres to 'robots.txt' protocols and only indexes publicly available information."
      },
      {
        q: "How often is the data updated?",
        a: "The scanner runs in real-time. As soon as a new entity is verified on the blockchain or public web, it appears in your feed."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="AI Market Scanner"
      subtitle="Secretly search the web for the latest insurance companies, data leaks, and hidden rate tables."
      icon={Globe}
      colorClass="text-emerald-500"
      bgClass="bg-emerald-50"
      seoContent={seoContent}
    >
      <MarketScanner />
    </ToolPageLayout>
  );
};
