import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateServiceSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "AccruAssist - AI Assistants for CA Workflows | AccruLabs.ai",
  description: "Structured AI Assistants for CA Workflows. Intelligent automation for GST, IT, ROC, Audit, and compliance processes with full audit trails.",
  path: "/accruassist",
  keywords: ["AI automation", "CA workflows", "GST automation", "tax automation", "compliance automation", "workflow automation"],
});

export default function AccruAssistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: "AccruAssist - AI Assistants for CA Workflows",
    description: "Intelligent AI assistants designed specifically for CA workflows including GST, IT, ROC, and Audit processes.",
    url: "https://accrulabs.ai/accruassist",
    serviceType: "AI Workflow Automation",
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












