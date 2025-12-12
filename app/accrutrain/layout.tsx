import type { Metadata } from "next";
import { generateMetadata as generateSEO, generateCourseSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "AccruTrain - CA-led AI × Finance Training | AccruLabs.ai",
  description: "Accrue yourself when AI intersects the finance world. CA-led AI × Finance Training with daily live classes, monthly challenges, expert instructors, and on-demand content.",
  path: "/accrutrain",
  keywords: ["AI training", "finance training", "CA training", "AI courses", "finance courses", "online training"],
});

export default function AccruTrainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const courseSchema = generateCourseSchema({
    name: "AccruTrain - CA-led AI × Finance Training",
    description: "Comprehensive AI training program for finance professionals with daily live classes, monthly challenges, and expert CA instructors.",
    provider: "AccruLabs.ai",
    url: "https://accrulabs.ai/accrutrain",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
    </>
  );
}












