import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = generateSEO({
  title: "How We Work - Our Process | AccruLabs.ai",
  description: "A structured, disciplined approach that ensures every engagement delivers measurable outcomes while maintaining the highest standards of governance and compliance. Learn about our Assess, Train, Implement, Govern methodology.",
  path: "/how-we-work",
  keywords: ["AI process", "AI methodology", "AI implementation", "AI training process", "governance process"],
});

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "How We Work", url: "/how-we-work" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}












