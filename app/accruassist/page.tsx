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
  Bot,
  FileText,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Workflow,
  BarChart3,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";

const workflows = [
  {
    name: "GST Filing",
    icon: <FileText className="w-6 h-6" />,
    description: "Automated GST return preparation, validation, and filing with AI-powered error detection.",
    features: [
      "Auto-populate GSTR forms",
      "Real-time validation",
      "Compliance checks",
      "Audit trail",
    ],
    color: "text-blue-400",
  },
  {
    name: "Income Tax",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Intelligent ITR preparation with tax optimization suggestions and compliance verification.",
    features: [
      "ITR form automation",
      "Tax optimization",
      "Deduction suggestions",
      "E-filing integration",
    ],
    color: "text-green-400",
  },
  {
    name: "ROC Compliance",
    icon: <Shield className="w-6 h-6" />,
    description: "Streamlined ROC filing with automated reminders, document preparation, and submission.",
    features: [
      "Filing reminders",
      "Document generation",
      "Status tracking",
      "Compliance calendar",
    ],
    color: "text-purple-400",
  },
  {
    name: "Audit Support",
    icon: <Workflow className="w-6 h-6" />,
    description: "AI-powered audit assistance with document analysis, risk assessment, and report generation.",
    features: [
      "Document analysis",
      "Risk identification",
      "Audit planning",
      "Report generation",
    ],
    color: "text-orange-400",
  },
];

const useCases = [
  {
    title: "CA Firm - GST Automation",
    description: "A mid-size CA firm automated GST filing for 200+ clients, reducing processing time by 70%.",
    metrics: "70% time reduction, 95% accuracy",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Finance Team - ITR Processing",
    description: "Enterprise finance team automated ITR preparation for 500 employees, ensuring compliance.",
    metrics: "500 ITRs processed, 100% compliance",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "SME - ROC Compliance",
    description: "Growing startup automated all ROC filings, eliminating missed deadlines and penalties.",
    metrics: "Zero missed deadlines, ₹50K saved",
    icon: <Shield className="w-5 h-5" />,
  },
];

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Structured AI Assistants",
    description: "Purpose-built AI assistants for specific CA workflows, not generic chatbots.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Full Audit Trails",
    description: "Every action is logged with complete audit trails for compliance and verification.",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflow Integration",
    description: "Seamlessly integrates with existing CA tools and processes.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Compliance Built-in",
    description: "All workflows are designed with compliance and governance from day one.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "CA-Specific",
    description: "Built by CAs for CAs, understanding real-world workflows and requirements.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time Savings",
    description: "Reduce manual work by up to 70% while maintaining accuracy and compliance.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "per month",
    description: "Perfect for small CA firms",
    features: [
      "2 workflow automations",
      "Up to 50 transactions/month",
      "Basic audit trails",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹24,999",
    period: "per month",
    description: "For growing practices",
    features: [
      "All workflow automations",
      "Unlimited transactions",
      "Advanced audit trails",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Dedicated support",
      "Custom workflows",
      "SLA guarantees",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqItems = [
  {
    id: "faq-1",
    question: "What workflows does AccruAssist support?",
    answer: "AccruAssist supports GST filing, Income Tax (ITR), ROC compliance, and Audit workflows. We're continuously adding new workflows based on user needs.",
  },
  {
    id: "faq-2",
    question: "How does it integrate with existing tools?",
    answer: "AccruAssist integrates with popular CA software, accounting systems, and government portals through APIs and secure connections.",
  },
  {
    id: "faq-3",
    question: "Is my data secure?",
    answer: "Absolutely. We follow DPDP compliance standards, encrypt all data, maintain complete audit trails, and never share your data with third parties.",
  },
  {
    id: "faq-4",
    question: "Can I customize workflows?",
    answer: "Yes, Professional and Enterprise plans include customization options. We work with you to adapt workflows to your specific processes.",
  },
  {
    id: "faq-5",
    question: "What kind of support do you provide?",
    answer: "All plans include support. Starter has email support, Professional has priority support, and Enterprise includes dedicated support with SLA guarantees.",
  },
];

export default function AccruAssistPage() {
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
          headline="Structured AI Assistants for CA Workflows"
          description="Intelligent automation for GST, IT, ROC, Audit, and compliance processes. Built by CAs for CAs, with governance and compliance built in from day one."
          badge="CA Workflow Automation"
          valuePoints={[
            "GST, IT, ROC, Audit workflows",
            "Full audit trails & compliance",
            "70% time reduction",
            "CA-specific & governance-first",
          ]}
          ctaPrimary={{ label: "See in Action", href: "#workflows" }}
          ctaSecondary={{ label: "View Pricing", href: "#pricing" }}
        />

        {/* Workflow Examples */}
        <AnimatedSection>
          <Section
            kicker="Workflows"
            title="Automate Your CA Workflows"
            description="Purpose-built AI assistants for the workflows that matter most to CA firms and finance teams."
            id="workflows"
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 2 }} gap="lg">
              {workflows.map((workflow, index) => (
                <AnimatedItem key={workflow.name} index={index}>
                  <Card variant="glass" hover className="h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={cn("p-3 rounded-xl bg-background-tertiary", workflow.color)}>
                          {workflow.icon}
                        </div>
                        <h3 className="font-semibold text-text-primary text-xl">
                          {workflow.name}
                        </h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {workflow.description}
                      </p>
                      <ul className="space-y-2 pt-2">
                        {workflow.features.map((feature, idx) => (
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

        {/* Features Grid */}
        <AnimatedSection delay={0.2}>
          <Section
            kicker="Features"
            title="Why Choose AccruAssist?"
            description="Built specifically for CA workflows with governance, compliance, and auditability at the core."
            className="bg-background-secondary"
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

        {/* Use Cases */}
        <AnimatedSection delay={0.4}>
          <Section
            kicker="Use Cases"
            title="Real Results from Real Organizations"
            description="See how CA firms and finance teams are transforming their workflows with AccruAssist."
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
              {useCases.map((useCase, index) => (
                <AnimatedItem key={index} index={index}>
                  <Card variant="glass" hover className="h-full">
                    <div className="space-y-4">
                      <div className="text-primary">{useCase.icon}</div>
                      <h3 className="font-semibold text-text-primary text-xl">
                        {useCase.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                      <div className="pt-2 border-t border-border">
                        <div className="flex items-center gap-2 text-primary">
                          <Zap className="w-4 h-4" />
                          <span className="text-sm font-semibold">{useCase.metrics}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
          </Section>
        </AnimatedSection>

        {/* Pricing */}
        <AnimatedSection delay={0.6}>
          <Section
            kicker="Pricing"
            title="Choose Your Plan"
            description="Flexible pricing plans to fit your organization's needs and scale."
            id="pricing"
            className="bg-background-secondary"
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
              {pricingPlans.map((plan, index) => (
                <AnimatedItem key={plan.name} index={index}>
                  <Card
                    variant={plan.popular ? "gradient" : "glass"}
                    hover
                    className={cn(
                      "h-full relative",
                      plan.popular && "border-2 border-primary"
                    )}
                  >
                    {plan.popular && (
                      <Badge variant="success" className="absolute -top-3 left-1/2 -translate-x-1/2">
                        Most Popular
                      </Badge>
                    )}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-text-primary text-xl mb-2">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-primary">
                            {plan.price}
                          </span>
                          {plan.period && (
                            <span className="text-text-tertiary text-sm">
                              /{plan.period}
                            </span>
                          )}
                        </div>
                        <p className="text-text-secondary text-sm mt-2">
                          {plan.description}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-text-secondary text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant={plan.popular ? "gradient" : "secondary"}
                        size="lg"
                        fullWidth
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
          </Section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.8}>
          <Section
            kicker="Get Started"
            title="Ready to Automate Your Workflows?"
            description="See AccruAssist in action and discover how it can transform your CA workflows."
          >
            <div className="max-w-4xl mx-auto">
              <Card variant="gradient" className="p-8 lg:p-12">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-2 text-primary mb-4">
                    <Bot className="w-8 h-8" />
                    <h3 className="font-semibold text-text-primary text-2xl">
                      See AccruAssist in Action
                    </h3>
                  </div>
                  <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    Schedule a demo to see how AccruAssist can automate your GST, IT, ROC,
                    and Audit workflows while maintaining full compliance and audit trails.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Button variant="gradient" size="lg">
                      Schedule Demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Link href="/contact">
                      <Button variant="secondary" size="lg">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </Section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection delay={1.0}>
          <Section
            kicker="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about AccruAssist."
            className="bg-background-secondary"
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

