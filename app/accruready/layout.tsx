import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateServiceSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "AccruReady - AI Readiness Assessment | AccruLabs.ai",
  description: "Get Your Organization's AI Readiness Score. Assess your AI maturity through self-assessment or expert-led evaluation with actionable insights.",
  path: "/accruready",
  keywords: ["AI readiness", "AI assessment", "AI maturity", "AI evaluation", "digital transformation"],
});

export default function AccruReadyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: "AccruReady - AI Readiness Assessment",
    description: "Comprehensive AI readiness assessment tool to evaluate your organization's AI maturity and identify transformation opportunities.",
    url: "https://accrulabs.ai/accruready",
    serviceType: "AI Readiness Assessment",
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












