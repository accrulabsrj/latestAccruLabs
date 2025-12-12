"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { Grid } from "@/components/Grid";
import { GraduationCap, CheckCircle, Bot, Shield, BarChart } from "lucide-react";

const services = [
  {
    title: "AccruTrain",
    description: "CA-led AI × Finance Training. Empowering Finance Professionals to Become AI-Ready with real tools, real workflows, and real transformation.",
    href: "/accrutrain",
    badge: "Training",
    icon: <GraduationCap className="w-6 h-6" />,
    features: ["Daily Live Classes", "Monthly Challenges", "Expert CA Faculty", "On-Demand Content"],
  },
  {
    title: "AccruReady",
    description: "Get Your Organization's AI Readiness Score. Assess your AI maturity through self-assessment or expert-led evaluation with actionable insights.",
    href: "/accruready",
    badge: "Assessment",
    icon: <CheckCircle className="w-6 h-6" />,
    features: ["Readiness Assessment", "Gap Analysis", "Transformation Roadmap", "Expert Evaluation"],
  },
  {
    title: "AccruAssist",
    description: "Structured AI Assistants for CA Workflows. Intelligent automation for GST, IT, ROC, Audit, and compliance processes with full audit trails.",
    href: "/accruassist",
    badge: "Automation",
    icon: <Bot className="w-6 h-6" />,
    features: ["Workflow Automation", "CA-Specific Tools", "Compliance Integration", "Audit Trails"],
  },
  {
    title: "AccruPrivacy",
    description: "DPDP-first PrivacyOps for CA firms & SMEs. End-to-end compliance frameworks with PII detection, ROPA registers, and consent management.",
    href: "/accruprivacy",
    badge: "Compliance",
    icon: <Shield className="w-6 h-6" />,
    features: ["DPDP Compliance", "PII Detection", "ROPA Registers", "Consent Management"],
  },
  {
    title: "AccruAssure",
    description: "AI Governance, Risk & Assurance. Comprehensive frameworks for AI governance, risk management, and continuous assurance with audit trails.",
    href: "/accruassure",
    badge: "Governance",
    icon: <BarChart className="w-6 h-6" />,
    features: ["Risk Register", "Audit Trails", "Governance Framework", "Continuous Monitoring"],
  },
];

export default function WhatWeDo() {
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
          title="What We Do"
          description="We deliver capabilities, not just products. Our solutions are designed to integrate seamlessly into your existing workflows while elevating your organization's AI maturity and compliance posture."
          className="pt-24 sm:pt-32"
        >
          <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
            {services.map((service) => (
              <ProductCard key={service.title} {...service} />
            ))}
          </Grid>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

