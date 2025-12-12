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
  Search,
  FileText,
  CheckCircle2,
  ArrowRight,
  Lock,
  Eye,
  Key,
  Database,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "PII Detection",
    description: "Automatically identify and classify Personally Identifiable Information across your systems and documents.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "ROPA Registers",
    description: "Maintain comprehensive Records of Processing Activities as required by DPDP and GDPR.",
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "Consent Management",
    description: "Track, manage, and verify consent for data processing with full audit trails.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Data Mapping",
    description: "Map data flows across your organization to understand where PII is stored and processed.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Privacy Impact Assessments",
    description: "Conduct automated privacy impact assessments for new projects and processes.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Subject Rights",
    description: "Manage data subject requests including access, rectification, and deletion requests.",
  },
];

const complianceChecklist = [
  {
    item: "PII Inventory & Classification",
    description: "Complete inventory of all PII in your organization",
    status: "required",
  },
  {
    item: "ROPA Register Maintenance",
    description: "Up-to-date records of all data processing activities",
    status: "required",
  },
  {
    item: "Consent Management System",
    description: "System to track and manage user consent",
    status: "required",
  },
  {
    item: "Privacy Policy & Notices",
    description: "Clear privacy policies and data processing notices",
    status: "required",
  },
  {
    item: "Data Breach Response Plan",
    description: "Documented process for handling data breaches",
    status: "recommended",
  },
  {
    item: "Privacy Impact Assessments",
    description: "Regular assessments for high-risk processing activities",
    status: "recommended",
  },
  {
    item: "Data Subject Rights Process",
    description: "Process to handle access, rectification, deletion requests",
    status: "required",
  },
  {
    item: "Third-Party Vendor Management",
    description: "Assessment and monitoring of data processors",
    status: "recommended",
  },
];

const integrations = [
  {
    name: "Accounting Software",
    description: "Integrate with Tally, QuickBooks, and other accounting systems",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    name: "CRM Systems",
    description: "Connect with Salesforce, HubSpot, and other CRM platforms",
    icon: <Database className="w-5 h-5" />,
  },
  {
    name: "Cloud Storage",
    description: "Monitor Google Drive, Dropbox, OneDrive for PII",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    name: "Email Systems",
    description: "Scan and classify PII in email communications",
    icon: <Eye className="w-5 h-5" />,
  },
];

const faqItems = [
  {
    id: "faq-1",
    question: "What is DPDP compliance?",
    answer: "The Digital Personal Data Protection (DPDP) Act is India's data protection law that governs how organizations collect, process, and protect personal data. AccruPrivacy helps you achieve and maintain DPDP compliance.",
  },
  {
    id: "faq-2",
    question: "Do I need AccruPrivacy if I'm already GDPR compliant?",
    answer: "DPDP has some differences from GDPR. AccruPrivacy helps you comply with both frameworks, ensuring you meet requirements for Indian and international operations.",
  },
  {
    id: "faq-3",
    question: "How does PII detection work?",
    answer: "Our AI-powered system scans your documents, databases, and systems to automatically identify and classify PII such as names, Aadhaar numbers, PAN cards, phone numbers, and email addresses.",
  },
  {
    id: "faq-4",
    question: "Can I integrate AccruPrivacy with existing systems?",
    answer: "Yes, AccruPrivacy integrates with popular accounting software, CRM systems, cloud storage, and email platforms through secure APIs.",
  },
  {
    id: "faq-5",
    question: "What happens if there's a data breach?",
    answer: "AccruPrivacy includes breach detection and response features. We help you identify breaches quickly, assess impact, and guide you through notification requirements under DPDP.",
  },
  {
    id: "faq-6",
    question: "Is AccruPrivacy suitable for SMEs?",
    answer: "Absolutely. AccruPrivacy is designed for CA firms and SMEs, making enterprise-grade privacy compliance accessible and affordable for smaller organizations.",
  },
];

export default function AccruPrivacyPage() {
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
        {/* Hero Section */}
        <Hero
          headline="DPDP-first PrivacyOps for CA firms & SMEs"
          description="End-to-end compliance frameworks with PII detection, ROPA registers, and consent management. Achieve and maintain DPDP compliance with confidence."
          badge="Privacy & Compliance"
          valuePoints={[
            "DPDP & GDPR compliant",
            "Automated PII detection",
            "ROPA register management",
            "CA-specific workflows",
          ]}
          ctaPrimary={{ label: "Explore AccruPrivacy", href: "#features" }}
          ctaSecondary={{ label: "See Compliance Checklist", href: "#checklist" }}
        />

        {/* Features Grid */}
        <AnimatedSection>
          <Section
            kicker="Features"
            title="Complete PrivacyOps Solution"
            description="Everything you need to achieve and maintain DPDP compliance, built specifically for CA firms and SMEs."
            id="features"
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
              {features.map((feature, index) => (
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

        {/* Compliance Checklist */}
        <AnimatedSection delay={0.2}>
          <Section
            kicker="Compliance"
            title="DPDP Compliance Checklist"
            description="Use this checklist to assess your current compliance status and identify areas for improvement."
            id="checklist"
            className="bg-background-secondary"
          >
            <div className="max-w-4xl mx-auto">
              <Card variant="glass" className="p-6 lg:p-8">
                <div className="space-y-4">
                  {complianceChecklist.map((item, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-lg border",
                        item.status === "required"
                          ? "border-red-500/30 bg-red-500/5"
                          : "border-yellow-500/30 bg-yellow-500/5"
                      )}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.status === "required" ? (
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-text-primary">
                            {item.item}
                          </h4>
                          <Badge
                            variant={item.status === "required" ? "error" : "warning"}
                            size="sm"
                          >
                            {item.status === "required" ? "Required" : "Recommended"}
                          </Badge>
                        </div>
                        <p className="text-text-secondary text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-text-secondary text-sm mb-4">
                    AccruPrivacy helps you achieve all these compliance requirements
                  </p>
                  <Button variant="gradient" size="lg">
                    Get Compliance Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </Section>
        </AnimatedSection>

        {/* Integration Options */}
        <AnimatedSection delay={0.4}>
          <Section
            kicker="Integrations"
            title="Seamless Integration with Your Tools"
            description="AccruPrivacy integrates with the tools you already use, making compliance seamless."
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="lg">
              {integrations.map((integration, index) => (
                <AnimatedItem key={index} index={index}>
                  <Card variant="glass" hover className="h-full text-center">
                    <div className="space-y-4">
                      <div className="flex justify-center text-primary">
                        {integration.icon}
                      </div>
                      <h3 className="font-semibold text-text-primary">
                        {integration.name}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {integration.description}
                      </p>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
            <div className="mt-8 text-center">
              <p className="text-text-secondary mb-4">
                Need integration with a specific tool? We can help.
              </p>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Request Integration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.6}>
          <Section
            kicker="Get Started"
            title="Ready to Achieve DPDP Compliance?"
            description="Start your journey to privacy compliance with AccruPrivacy. Built for CA firms and SMEs."
            className="bg-background-secondary"
          >
            <div className="max-w-4xl mx-auto">
              <Card variant="gradient" className="p-8 lg:p-12">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-2 text-primary mb-4">
                    <Shield className="w-8 h-8" />
                    <h3 className="font-semibold text-text-primary text-2xl">
                      Explore AccruPrivacy
                    </h3>
                  </div>
                  <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    Get a free compliance assessment and see how AccruPrivacy can help you
                    achieve DPDP compliance with automated PII detection, ROPA registers, and
                    consent management.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Button variant="gradient" size="lg">
                      Get Free Assessment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Link href="/contact">
                      <Button variant="secondary" size="lg">
                        Schedule Demo
                      </Button>
                    </Link>
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
            description="Everything you need to know about AccruPrivacy and DPDP compliance."
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

