import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = generateSEO({
  title: "Who We Serve - Our Clients | AccruLabs.ai",
  description: "We work with CA firms, CFO/Finance teams, compliance officers, SMEs, startups, and institutions. Making entrepreneurs responsible AI ready is our primary focus.",
  path: "/who-we-serve",
  keywords: ["CA firms", "finance teams", "SMEs", "startups", "entrepreneurs", "compliance teams", "AI clients"],
});

export default function WhoWeServeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Who We Serve", url: "/who-we-serve" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}












