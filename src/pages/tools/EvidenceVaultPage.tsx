import React from 'react';
import { Camera } from 'lucide-react';
import { ToolPageLayout } from '../../components/tools/ToolPageLayout';
import { EvidenceVault } from '../../components/tools/EvidenceVault';

export const EvidenceVaultPage = () => {
  const seoContent = {
    howItWorks: [
      "Use your camera to scan a room or vehicle.",
      "Computer Vision (YOLOv8) identifies and tags valuable items.",
      "We estimate the value of each item using real-time data.",
      "A hash of the inventory is timestamped on the Blockchain."
    ],
    benefits: [
      "Create undeniable proof of ownership for claims.",
      "Speed up the claims process by weeks.",
      "Ensure you get the full replacement value for your items.",
      "Secure, immutable record that cannot be tampered with."
    ],
    faq: [
      {
        q: "Why use Blockchain?",
        a: "Blockchain creates a 'Proof of Existence' timestamp that is impossible to forge. This proves you owned the item in that condition at that specific time."
      }
    ]
  };

  return (
    <ToolPageLayout
      title="Claim-Ready Evidence Vault"
      subtitle="The #1 reason claims are denied is lack of proof. Scan and secure your assets on the blockchain."
      icon={Camera}
      colorClass="text-indigo-600"
      bgClass="bg-indigo-50"
      seoContent={seoContent}
    >
      <EvidenceVault />
    </ToolPageLayout>
  );
};
