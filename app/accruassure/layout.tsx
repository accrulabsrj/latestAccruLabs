import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateServiceSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "AccruAssure - AI Governance, Risk & Assurance | AccruLabs.ai",
  description: "AI Governance, Risk & Assurance. Comprehensive frameworks for AI governance, risk management, and continuous assurance with audit trails.",
  path: "/accruassure",
  keywords: ["AI governance", "risk management", "AI assurance", "compliance", "audit trails", "AI risk"],
});

export default function AccruAssureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: "AccruAssure - AI Governance, Risk & Assurance",
    description: "Comprehensive AI governance framework with risk management, continuous assurance, and audit trail capabilities.",
    url: "https://accrulabs.ai/accruassure",
    serviceType: "AI Governance & Risk Management",
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












