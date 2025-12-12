import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = generateSEO({
  title: "What We Do - Our Products & Services | AccruLabs.ai",
  description: "We deliver capabilities, not just products. Our solutions are designed to integrate seamlessly into your existing workflows while elevating your organization's AI maturity and compliance posture.",
  path: "/what-we-do",
  keywords: ["AI products", "AI services", "AI solutions", "AI capabilities", "AI training", "AI assessment"],
});

export default function WhatWeDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "What We Do", url: "/what-we-do" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}

