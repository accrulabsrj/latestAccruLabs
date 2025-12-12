"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { useResponsive } from "@/hooks/useResponsive";
import { Shield, Workflow, Target } from "lucide-react";

const pillars = [
  {
    title: "Responsible AI First",
    description: "Every AI system we build is designed with ethics, transparency, and accountability at its core. We ensure that AI serves humanity, not the other way around.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Process Before Product",
    description: "We believe that sustainable AI transformation comes from robust processes and governance frameworks, not just technology. Structure enables scale.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    title: "Governed Intelligence",
    description: "Intelligence without governance is risk. We engineer compliance, auditability, and control mechanisms into every AI solution from day one.",
    icon: <Target className="w-8 h-8" />,
  },
];

export default function Philosophy() {
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
          title="Our Philosophy"
          description="AI is powerful. Governance makes it usable."
          className="pt-24 sm:pt-32"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-text-secondary text-lg mb-12 text-center">
              As AI capabilities accelerate and regulatory frameworks like DPDP, GDPR, and ISO 27701 become mandatory, organizations face a critical challenge: how to harness AI&apos;s potential while maintaining compliance, security, and trust.
            </p>
          </div>

          <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
            {pillars.map((pillar, index) => (
              <Card key={index} variant="glass" hover className="text-center">
                <div className="space-y-4">
                  <div className="flex justify-center text-primary">
                    {pillar.icon}
                  </div>
                  <h3 className="font-semibold text-text-primary text-xl">
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            ))}
          </Grid>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card variant="gradient" className="p-8 lg:p-12">
              <p className="text-text-primary text-lg leading-relaxed text-center">
                At AccruLabs, we exist because the future of AI in business isn&apos;t about building the fastest or most powerful models—it&apos;s about building systems that organizations can trust, audit, and scale with confidence. We combine deep domain expertise in finance and compliance with cutting-edge AI engineering to create solutions that don&apos;t just work—they work within the frameworks that matter.
              </p>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

