import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateServiceSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "AccruPrivacy - DPDP-first PrivacyOps | AccruLabs.ai",
  description: "DPDP-first PrivacyOps for CA firms & SMEs. End-to-end compliance frameworks with PII detection, ROPA registers, and consent management.",
  path: "/accruprivacy",
  keywords: ["DPDP compliance", "privacy ops", "PII detection", "ROPA", "consent management", "data privacy", "GDPR"],
});

export default function AccruPrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: "AccruPrivacy - DPDP-first PrivacyOps",
    description: "Comprehensive privacy operations platform for DPDP and GDPR compliance with PII detection, ROPA registers, and consent management.",
    url: "https://accrulabs.ai/accruprivacy",
    serviceType: "Privacy Operations & Compliance",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}












