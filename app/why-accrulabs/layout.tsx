import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = generateSEO({
  title: "Why AccruLabs - Our Advantages | AccruLabs.ai",
  description: "In a landscape filled with AI vendors, we stand apart by combining domain expertise, technical excellence, and an unwavering commitment to governance and compliance. CA-led, governance-first, entrepreneur-focused.",
  path: "/why-accrulabs",
  keywords: ["why AccruLabs", "AI vendor comparison", "CA-led AI", "governance-first", "AI advantages", "AI expertise"],
});

export default function WhyAccruLabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Why AccruLabs", url: "/why-accrulabs" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}












