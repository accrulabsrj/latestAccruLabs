"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { cn } from "@/lib/utils";
import { Building2, Users, Shield, Rocket, School } from "lucide-react";

const segments = [
  {
    title: "CA Firms",
    description: "Chartered Accountancy firms seeking to modernize their practice with AI-powered automation, compliance tools, and workflow optimization while maintaining the highest standards of accuracy and auditability.",
    icon: <Building2 className="w-6 h-6" />,
    emphasis: false,
  },
  {
    title: "CFO/Finance Teams",
    description: "Finance leaders and teams in enterprises who need intelligent automation, AI-driven insights, and governance systems that integrate seamlessly with existing financial processes and reporting requirements.",
    icon: <Users className="w-6 h-6" />,
    emphasis: false,
  },
  {
    title: "Compliance & Risk Teams",
    description: "Compliance officers and risk management teams who require robust governance frameworks, DPDP/GDPR compliance systems, and AI solutions that maintain full audit trails and regulatory alignment.",
    icon: <Shield className="w-6 h-6" />,
    emphasis: false,
  },
  {
    title: "SMEs & Startups",
    description: "Growing businesses that need to build AI capabilities and compliance frameworks from the ground up, ensuring they scale responsibly and meet regulatory requirements as they grow. Making entrepreneurs responsible AI ready is our primary focus.",
    icon: <Rocket className="w-6 h-6" />,
    emphasis: true, // PRIMARY FOCUS
  },
  {
    title: "Institutions/Industry Bodies",
    description: "Industry associations, regulatory bodies, and institutions that need to understand, implement, or guide AI governance and compliance standards within their sectors.",
    icon: <School className="w-6 h-6" />,
    emphasis: false,
  },
];

export default function WhoWeServe() {
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
          title="Who We Serve"
          description="We work with organizations that understand that AI transformation requires more than technology—it requires governance, compliance, and trust. Our solutions are built for those who take these responsibilities seriously."
          className="pt-24 sm:pt-32"
        >
          <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
            {segments.map((segment, index) => (
              <Card
                key={index}
                variant={segment.emphasis ? "gradient" : "glass"}
                hover
                className={cn(
                  "relative",
                  segment.emphasis && "border-2 border-primary"
                )}
              >
                <div className="space-y-4">
                  {segment.emphasis && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/30">
                        Primary Focus
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-primary">
                    {segment.icon}
                    <h3 className="font-semibold text-text-primary text-xl">
                      {segment.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </Card>
            ))}
          </Grid>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card variant="gradient" className="p-8 lg:p-12 text-center">
              <h3 className="font-semibold text-text-primary text-xl mb-4">
                Ready to Transform Your Organization?
              </h3>
              <p className="text-text-secondary mb-6">
                Whether you&apos;re a CA firm, enterprise finance team, or growing startup, we have the expertise to help you build AI capabilities that are both powerful and compliant.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-background text-primary rounded-lg font-semibold hover:bg-background-secondary transition-colors"
              >
                Schedule a Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

