import type { Metadata } from "next";
import { generateMetadata as generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "AccruLabs.ai - The Applied AI Lab for Finance, Compliance & Governance",
  description: "Making entrepreneurs responsible AI ready. AccruLabs.ai trains Entrepreneurs, Corporates & Finance Professionals to build trust-first AI systems with governance and compliance.",
  path: "/",
  keywords: ["AI governance", "finance AI", "compliance", "CA training", "AI readiness"],
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}












