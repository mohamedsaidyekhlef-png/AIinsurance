import React from 'react';
import { BarChart3 } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { PremiumPredictor } from '../../components/tools/PremiumPredictor';

export const PremiumPredictorPage = () => {
  const seoContent = {
    howItWorks: [
      "Enter your basic demographic and vehicle/property details.",
      "Our Random Forest model compares your profile against historical rate trends.",
      "We apply regional inflation factors and risk data.",
      "You get a forecast of your next renewal premium."
    ],
    benefits: [
      "Budget ahead for price increases.",
      "See exactly which factors (e.g., location, credit) are driving your price up.",
      "Know when it's time to shop around.",
      "Compare your rate to the market average."
    ],
    faq: [
      {
        q: "How accurate is the prediction?",
        a: "Our model uses public rate filing data and historical trends. While it cannot predict specific carrier underwriting, it provides a highly accurate estimate of market direction."
      },
      {
        q: "Does this affect my credit score?",
        a: "No. This is a simulation tool. We do not run a credit check or share your data with bureaus."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="Premium Predictor"
      subtitle="Don't be shocked by your renewal bill. Forecast your future insurance rates with AI."
      icon={BarChart3}
      colorClass="text-teal-600"
      bgClass="bg-teal-50"
      seoContent={seoContent}
    >
      <PremiumPredictor />
    </ToolPageLayout>
  );
};
