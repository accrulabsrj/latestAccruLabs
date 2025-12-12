import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = generateSEO({
  title: "Contact Us - AccruLabs.ai",
  description: "Get in touch with AccruLabs.ai. Let's discuss how we can help your organization build responsible, governance-first AI systems.",
  path: "/contact",
  keywords: ["contact", "get in touch", "AI consulting", "AI training", "AI services"],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}

