import React from 'react';
import { CloudLightning } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { DisasterAlert } from '../../components/tools/DisasterAlert';

export const DisasterAlertPage = () => {
  const seoContent = {
    howItWorks: [
      "Enter your location to monitor local weather risks.",
      "We connect to the NOAA API for real-time storm tracking.",
      "If a 'Parametric Trigger' (e.g., Cat 3 Hurricane) is met, you get alerted.",
      "Parametric insurance pays out instantly upon the trigger, not the damage."
    ],
    benefits: [
      "Get funds for evacuation and prep BEFORE the storm hits.",
      "No claims adjuster needed—the weather data is the proof.",
      "Cover costs that traditional insurance excludes.",
      "Peace of mind during storm season."
    ],
    faq: [
      {
        q: "What is Parametric Insurance?",
        a: "It is a type of insurance that pays a set amount based on the occurrence of a triggering event (like wind speed or earthquake magnitude), rather than the actual damage sustained."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="Parametric Predictive Alert"
      subtitle="Don't wait for the damage. Get instant payouts based on weather triggers to cover prep costs."
      icon={CloudLightning}
      colorClass="text-amber-600"
      bgClass="bg-amber-50"
      seoContent={seoContent}
    >
      <DisasterAlert />
    </ToolPageLayout>
  );
};
