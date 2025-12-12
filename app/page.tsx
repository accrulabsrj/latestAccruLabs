"use client";

import { Header } from "@/components/Header";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SocialProofStrip } from "@/components/SocialProofStrip";
import { Section } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { Grid } from "@/components/Grid";
import { HowItWorks } from "@/components/HowItWorks";
import { TeamSection } from "@/components/TeamSection";
import { ContactCTA } from "@/components/ContactCTA";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GraduationCap, CheckCircle, Bot, Shield, BarChart } from "lucide-react";

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  const products = [
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
      description: "Get Your Organization's AI Readiness Score. Assess your AI maturity through self-assessment or expert-led evaluation.",
      href: "/accruready",
      badge: "Assessment",
      icon: <CheckCircle className="w-6 h-6" />,
      features: ["Readiness Assessment", "Gap Analysis", "Transformation Roadmap", "Expert Evaluation"],
    },
    {
      title: "AccruAssist",
      description: "Structured AI Assistants for CA Workflows. Intelligent automation for GST, IT, ROC, Audit, and compliance processes.",
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
      description: "AI Governance, Risk & Assurance. Comprehensive frameworks for AI governance, risk management, and continuous assurance.",
      href: "/accruassure",
      badge: "Governance",
      icon: <BarChart className="w-6 h-6" />,
      features: ["Risk Register", "Audit Trails", "Governance Framework", "Continuous Monitoring"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={breadcrumbSchema} />
      <Header
        navItems={[
          { label: "Products", href: "/what-we-do" },
          { label: "AccruTrain", href: "/accrutrain" },
          { label: "About", href: "/philosophy" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Get Started", href: "/contact" }}
      />
      <main id="main-content" tabIndex={-1}>
        <Hero
          headline="The Applied AI Lab for Finance, Compliance & Governance"
          description="Where organizations build their AI future responsibly, securely, and at scale."
          badge="Making Entrepreneurs Responsible AI Ready"
          valuePoints={[
            "We build trust-first AI systems",
            "We convert complexity into clarity",
            "We engineer governance into every workflow",
            "We train Entrepreneurs, Corporates & Finance Professionals",
          ]}
          ctaPrimary={{ label: "Visit The Lab", href: "/what-we-do" }}
          ctaSecondary={{ label: "Talk to Us", href: "/contact" }}
        />

        <AnimatedSection>
          <SocialProofStrip />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Section
            kicker="Our Products"
            title="What We Do"
            description="We deliver capabilities, not just products. Our solutions are designed to integrate seamlessly into your existing workflows while elevating your organization's AI maturity and compliance posture."
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
              {products.map((product, index) => (
                <AnimatedItem key={product.title} index={index}>
                  <ProductCard {...product} />
                </AnimatedItem>
              ))}
            </Grid>
          </Section>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <HowItWorks />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <TeamSection />
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <ContactCTA />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

