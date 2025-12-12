"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { useResponsive } from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import { Search, GraduationCap, Settings, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Assess",
    description: "Evaluate your organization's AI readiness and identify gaps in governance, compliance, and capabilities. We conduct comprehensive assessments to understand your current state and future needs.",
    icon: <Search className="w-6 h-6" />,
    details: [
      "AI Readiness Assessment",
      "Gap Analysis",
      "Compliance Review",
      "Capability Mapping",
    ],
  },
  {
    number: "02",
    title: "Train",
    description: "Empower your team with CA-led training programs designed for finance professionals and entrepreneurs. Our programs combine theoretical knowledge with practical, hands-on experience.",
    icon: <GraduationCap className="w-6 h-6" />,
    details: [
      "Customized Training Programs",
      "CA-Led Instruction",
      "Hands-On Workshops",
      "Continuous Learning",
    ],
  },
  {
    number: "03",
    title: "Implement",
    description: "Deploy structured AI assistants and governance frameworks tailored to your workflows and compliance needs. We ensure seamless integration with your existing systems.",
    icon: <Settings className="w-6 h-6" />,
    details: [
      "Workflow Integration",
      "Custom AI Solutions",
      "System Deployment",
      "Change Management",
    ],
  },
  {
    number: "04",
    title: "Govern",
    description: "Maintain continuous oversight with AI governance, risk management, and assurance systems. We help you build sustainable governance practices that scale with your organization.",
    icon: <Shield className="w-6 h-6" />,
    details: [
      "Governance Frameworks",
      "Risk Management",
      "Continuous Monitoring",
      "Compliance Assurance",
    ],
  },
];

export default function HowWeWork() {
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
          title="How We Work"
          description="A structured, disciplined approach that ensures every engagement delivers measurable outcomes while maintaining the highest standards of governance and compliance."
          className="pt-24 sm:pt-32"
        >
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col",
                  !isMobile && "lg:flex-row lg:items-start lg:gap-8",
                  "gap-6"
                )}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <span className="font-bold gradient-text text-4xl lg:text-5xl">
                      {step.number}
                    </span>
                    <div className="text-primary">{step.icon}</div>
                  </div>
                </div>
                <Card variant="glass" hover className="flex-1">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-text-primary text-xl lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-base lg:text-lg">
                      {step.description}
                    </p>
                    {step.details && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span className="text-text-tertiary text-sm">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

