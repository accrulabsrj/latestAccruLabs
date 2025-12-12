"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Grid } from "@/components/Grid";
import { Badge } from "@/components/Badge";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Accordion } from "@/components/Accordion";
import { useResponsive } from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import {
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Lock,
  Eye,
  TrendingUp,
  Target,
} from "lucide-react";
import Link from "next/link";

const frameworkPillars = [
  {
    title: "Governance",
    description: "Establish clear AI governance structures, policies, and accountability frameworks.",
    icon: <Shield className="w-6 h-6" />,
    features: ["AI Policy Framework", "Responsibility Matrix", "Decision Authority", "Oversight Committees"],
  },
  {
    title: "Risk Management",
    description: "Identify, assess, and mitigate AI-related risks across your organization.",
    icon: <AlertTriangle className="w-6 h-6" />,
    features: ["Risk Register", "Risk Assessment", "Mitigation Plans", "Risk Monitoring"],
  },
  {
    title: "Compliance",
    description: "Ensure AI systems comply with regulations, standards, and ethical guidelines.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    features: ["Regulatory Alignment", "Standards Compliance", "Ethical Guidelines", "Audit Readiness"],
  },
  {
    title: "Assurance",
    description: "Continuous monitoring, validation, and assurance of AI systems and processes.",
    icon: <Eye className="w-6 h-6" />,
    features: ["Continuous Monitoring", "Validation Testing", "Performance Assurance", "Quality Gates"],
  },
];

const riskCategories = [
  {
    category: "Technical Risks",
    risks: [
      { name: "Model Bias", severity: "High", status: "Active" },
      { name: "Data Quality Issues", severity: "Medium", status: "Active" },
      { name: "System Failures", severity: "Medium", status: "Mitigated" },
    ],
  },
  {
    category: "Compliance Risks",
    risks: [
      { name: "DPDP Violations", severity: "High", status: "Active" },
      { name: "Regulatory Non-compliance", severity: "High", status: "Active" },
      { name: "Audit Findings", severity: "Medium", status: "Mitigated" },
    ],
  },
  {
    category: "Operational Risks",
    risks: [
      { name: "Process Gaps", severity: "Medium", status: "Active" },
      { name: "Resource Constraints", severity: "Low", status: "Active" },
      { name: "Training Deficiencies", severity: "Low", status: "Mitigated" },
    ],
  },
];

const auditTrailFeatures = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Complete Audit Logs",
    description: "Every AI decision, action, and modification is logged with timestamps and user attribution.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Risk Tracking",
    description: "Track risk assessments, mitigations, and outcomes over time with visual dashboards.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Immutable Records",
    description: "Tamper-proof audit trails ensure integrity and compliance with regulatory requirements.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Trend Analysis",
    description: "Analyze patterns, identify trends, and predict potential issues before they occur.",
  },
];

const faqItems = [
  {
    id: "faq-1",
    question: "What is AI Governance?",
    answer: "AI Governance is the framework of policies, processes, and controls that ensure AI systems are used responsibly, ethically, and in compliance with regulations. AccruAssure provides a comprehensive governance framework.",
  },
  {
    id: "faq-2",
    question: "Who needs AccruAssure?",
    answer: "Any organization using AI systems needs governance. AccruAssure is especially valuable for CA firms, finance teams, and organizations handling sensitive data that require audit trails and compliance.",
  },
  {
    id: "faq-3",
    question: "How does the risk register work?",
    answer: "The risk register helps you identify, assess, and track AI-related risks. You can categorize risks, assign severity, track mitigation efforts, and monitor risk status over time.",
  },
  {
    id: "faq-4",
    question: "What kind of audit trails are maintained?",
    answer: "AccruAssure maintains comprehensive audit trails including all AI decisions, data access, model changes, risk assessments, compliance checks, and user actions. All records are immutable and timestamped.",
  },
  {
    id: "faq-5",
    question: "Can AccruAssure integrate with existing systems?",
    answer: "Yes, AccruAssure integrates with your AI systems, data platforms, and compliance tools to provide unified governance and monitoring across your organization.",
  },
  {
    id: "faq-6",
    question: "How does continuous monitoring work?",
    answer: "AccruAssure continuously monitors AI system performance, compliance status, risk indicators, and operational metrics. You get real-time alerts and automated reports on any issues.",
  },
];

export default function AccruAssurePage() {
  const { isMobile } = useResponsive();

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "text-red-400 bg-red-500/10 border-red-500/30";
      case "Medium":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
      case "Low":
        return "text-blue-400 bg-blue-500/10 border-blue-500/30";
      default:
        return "text-text-tertiary bg-background-tertiary border-border";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "error";
      case "Mitigated":
        return "success";
      default:
        return "default";
    }
  };

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
        {/* Hero Section */}
        <Hero
          headline="AI Governance, Risk & Assurance"
          description="Comprehensive frameworks for AI governance, risk management, and continuous assurance. Build trust-first AI systems with complete audit trails and compliance."
          badge="AI Governance Platform"
          valuePoints={[
            "Complete governance framework",
            "Risk register & management",
            "Full audit trails",
            "Continuous monitoring",
          ]}
          ctaPrimary={{ label: "Talk about AccruAssure", href: "/contact" }}
          ctaSecondary={{ label: "View Framework", href: "#framework" }}
        />

        {/* Framework Overview */}
        <AnimatedSection>
          <Section
            kicker="Framework"
            title="Four Pillars of AI Governance"
            description="Our comprehensive framework covers governance, risk, compliance, and assurance—everything you need for responsible AI."
            id="framework"
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 2 }} gap="lg">
              {frameworkPillars.map((pillar, index) => (
                <AnimatedItem key={pillar.title} index={index}>
                  <Card variant="glass" hover className="h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-background-tertiary text-primary">
                          {pillar.icon}
                        </div>
                        <h3 className="font-semibold text-text-primary text-xl">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {pillar.description}
                      </p>
                      <ul className="space-y-2 pt-2">
                        {pillar.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-text-tertiary text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
          </Section>
        </AnimatedSection>

        {/* Risk Register Visualization */}
        <AnimatedSection delay={0.2}>
          <Section
            kicker="Risk Management"
            title="AI Risk Register"
            description="Identify, assess, and track AI-related risks across your organization with our comprehensive risk register."
            className="bg-background-secondary"
          >
            <div className="space-y-6">
              {riskCategories.map((category, index) => (
                <AnimatedItem key={category.category} index={index}>
                  <Card variant="glass" className="p-6">
                    <h3 className="font-semibold text-text-primary text-xl mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.risks.map((risk, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-lg border border-border bg-background-tertiary"
                        >
                          <div className="flex items-center gap-4">
                            <span className="font-medium text-text-primary">
                              {risk.name}
                            </span>
                            <Badge
                              variant={getStatusColor(risk.status) as any}
                              size="sm"
                            >
                              {risk.status}
                            </Badge>
                          </div>
                          <Badge
                            size="sm"
                            className={cn(
                              "border",
                              getSeverityColor(risk.severity)
                            )}
                          >
                            {risk.severity}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="gradient" size="lg">
                Create Your Risk Register
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Section>
        </AnimatedSection>

        {/* Audit Trail Features */}
        <AnimatedSection delay={0.4}>
          <Section
            kicker="Audit Trails"
            title="Complete Auditability & Compliance"
            description="Maintain comprehensive audit trails for all AI activities, ensuring compliance and enabling investigations."
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 2 }} gap="lg">
              {auditTrailFeatures.map((feature, index) => (
                <AnimatedItem key={index} index={index}>
                  <Card variant="glass" hover className="h-full">
                    <div className="space-y-4">
                      <div className="text-primary">{feature.icon}</div>
                      <h3 className="font-semibold text-text-primary text-xl">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
          </Section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.6}>
          <Section
            kicker="Get Started"
            title="Ready to Build Governance-First AI Systems?"
            description="Talk to our experts about implementing AccruAssure in your organization."
            className="bg-background-secondary"
          >
            <div className="max-w-4xl mx-auto">
              <Card variant="gradient" className="p-8 lg:p-12">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-2 text-primary mb-4">
                    <Target className="w-8 h-8" />
                    <h3 className="font-semibold text-text-primary text-2xl">
                      Talk about AccruAssure
                    </h3>
                  </div>
                  <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    Schedule a consultation to discuss your AI governance needs and see how
                    AccruAssure can help you build trust-first AI systems with complete
                    governance, risk management, and assurance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link href="/contact">
                      <Button variant="gradient" size="lg">
                        Schedule Consultation
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <Button variant="secondary" size="lg">
                      Download Framework Guide
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection delay={0.8}>
          <Section
            kicker="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about AccruAssure and AI governance."
          >
            <div className="max-w-3xl mx-auto">
              <Accordion items={faqItems} />
            </div>
          </Section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

