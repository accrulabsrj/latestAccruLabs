"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { useResponsive } from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import { CheckCircle2, X } from "lucide-react";

const advantages = [
  {
    title: "Domain Expertise",
    description: "Our team consists of Chartered Accountants who understand finance, compliance, and governance from the inside out.",
    points: [
      "CA-led team with deep finance expertise",
      "Understanding of regulatory frameworks",
      "Real-world experience in compliance",
      "Industry-specific knowledge",
    ],
  },
  {
    title: "Governance-First Approach",
    description: "We don't just build AI—we build AI systems with governance, compliance, and auditability built in from day one.",
    points: [
      "Compliance by design",
      "Full audit trails",
      "Risk management frameworks",
      "Regulatory alignment",
    ],
  },
  {
    title: "Practical Training",
    description: "Our training programs are designed by CAs for finance professionals, focusing on real tools and real workflows.",
    points: [
      "CA-led instruction",
      "Hands-on workshops",
      "Real-world case studies",
      "Continuous support",
    ],
  },
  {
    title: "Entrepreneur Focus",
    description: "We specialize in making entrepreneurs responsible AI ready, helping startups and SMEs build AI capabilities from the ground up.",
    points: [
      "Startup-friendly approach",
      "Scalable solutions",
      "Cost-effective options",
      "Growth-oriented mindset",
    ],
  },
];

const comparison = {
  us: {
    title: "AccruLabs",
    items: [
      { feature: "CA-led team", value: true },
      { feature: "Governance-first", value: true },
      { feature: "Finance expertise", value: true },
      { feature: "Compliance focus", value: true },
      { feature: "Entrepreneur focus", value: true },
      { feature: "Practical training", value: true },
    ],
  },
  others: {
    title: "Other AI Vendors",
    items: [
      { feature: "CA-led team", value: false },
      { feature: "Governance-first", value: "Sometimes" },
      { feature: "Finance expertise", value: "Limited" },
      { feature: "Compliance focus", value: "Add-on" },
      { feature: "Entrepreneur focus", value: false },
      { feature: "Practical training", value: "Generic" },
    ],
  },
};

export default function WhyAccruLabs() {
  const { isMobile } = useResponsive();

  return (
    <div className="min-h-screen bg-background">
      <Header
        navItems={[
          { label: "Products", href: "/what-we-do" },
          { label: "AccruTrain", href: "/accrutrain" },
          { label: "About", href: "/philosophy" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Get Started", href: "/contact" }}
      />
      <main>
        <Section
          title="Why AccruLabs"
          description="In a landscape filled with AI vendors, we stand apart by combining domain expertise, technical excellence, and an unwavering commitment to governance and compliance."
          className="pt-24 sm:pt-32"
        >
          <Grid cols={{ mobile: 1, tablet: 2, desktop: 2 }} gap="lg" className="mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} variant="glass" hover>
                <div className="space-y-4">
                  <h3 className="font-semibold text-text-primary text-xl">
                    {advantage.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {advantage.description}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {advantage.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-tertiary text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </Grid>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-semibold text-text-primary text-2xl mb-8 text-center">
              How We Compare
            </h3>
            <div
              className={cn(
                "grid gap-6",
                isMobile ? "grid-cols-1" : "grid-cols-2"
              )}
            >
              <Card variant="gradient">
                <div className="space-y-4">
                  <h4 className="font-semibold text-text-primary text-lg">
                    {comparison.us.title}
                  </h4>
                  <ul className="space-y-3">
                    {comparison.us.items.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between">
                        <span className="text-text-secondary text-sm">{item.feature}</span>
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card variant="glass">
                <div className="space-y-4">
                  <h4 className="font-semibold text-text-primary text-lg">
                    {comparison.others.title}
                  </h4>
                  <ul className="space-y-3">
                    {comparison.others.items.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between">
                        <span className="text-text-secondary text-sm">{item.feature}</span>
                        {item.value === true ? (
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        ) : item.value === false ? (
                          <X className="w-5 h-5 text-text-tertiary" />
                        ) : (
                          <span className="text-text-tertiary text-xs">{item.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

