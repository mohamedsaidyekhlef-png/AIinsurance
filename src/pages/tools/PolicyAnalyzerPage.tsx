import React from 'react';
import { FileText } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { PolicyAnalyzer } from '../../components/tools/PolicyAnalyzer';

export const PolicyAnalyzerPage = () => {
  const seoContent = {
    howItWorks: [
      "Upload your insurance policy PDF (Home, Auto, or Life).",
      "Our AI scans the document using OCR and Vector Embeddings.",
      "The system identifies exclusions, deductibles, and hidden clauses.",
      "You receive a plain-English summary and risk assessment."
    ],
    benefits: [
      "Understand complex legal jargon instantly.",
      "Identify coverage gaps before you file a claim.",
      "Avoid denied claims by knowing your exclusions.",
      "100% Private: PII is scrubbed before analysis."
    ],
    faq: [
      {
        q: "Is my data secure?",
        a: "Yes. We use a privacy layer that strips Personally Identifiable Information (PII) like names and policy numbers before the text is processed by our AI models."
      },
      {
        q: "What types of policies does it work on?",
        a: "It works best with standard Property & Casualty policies (Homeowners HO-3, Auto, Renters) and Term Life Insurance documents."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="AI Policy Analyzer"
      subtitle="Stop guessing what's covered. Upload your policy and let our AI decode the fine print for you."
      icon={FileText}
      colorClass="text-blue-600"
      bgClass="bg-blue-50"
      seoContent={seoContent}
    >
      <PolicyAnalyzer />
    </ToolPageLayout>
  );
};
