import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = generateSEO({
  title: "Our Philosophy - Responsible AI First | AccruLabs.ai",
  description: "AI is powerful. Governance makes it usable. Learn about AccruLabs' philosophy on responsible AI, governance-first approach, and building trust-first AI systems.",
  path: "/philosophy",
  keywords: ["AI philosophy", "responsible AI", "AI governance", "AI ethics", "trust-first AI", "governance-first"],
});

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our Philosophy", url: "/philosophy" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}












