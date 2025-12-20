import React from 'react';
import { Globe } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { GlobalRiskEngine } from '../../components/tools/GlobalRiskEngine';

export const GlobalRiskEnginePage = () => {
  const seoContent = {
    howItWorks: [
      "The Engine ingests real-time data from weather APIs, crime stats, and economic indicators.",
      "It maps these risks to specific geographic coordinates (Zip Codes/Cities).",
      "Gemini AI generates a unique, hyper-local guide for that specific risk profile.",
      "We dynamically route users to the best 'InsurTech' solution for that risk."
    ],
    benefits: [
      "Find insurance that actually covers your local risks (e.g., Flood in Miami).",
      "Avoid 'Cookie-Cutter' policies that leave gaps.",
      "See real-time data on why your premiums are changing.",
      "Access exclusive local affiliate offers."
    ],
    faq: [
      {
        q: "How many locations are covered?",
        a: "Our matrix currently covers over 10,000 major cities and suburbs across the USA, Canada, UK, and Australia."
      },
      {
        q: "Is the risk data real-time?",
        a: "Yes. We update our risk variables daily to ensure the 'Gap Analysis' is accurate."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="Global Risk-Gap Engine"
      subtitle="The brain behind Insuralix. A PSEO system generating hyper-local risk analysis for 30,000+ cities worldwide."
      icon={Globe}
      colorClass="text-blue-600"
      bgClass="bg-blue-50"
      seoContent={seoContent}
    >
      <GlobalRiskEngine />
    </ToolPageLayout>
  );
};
