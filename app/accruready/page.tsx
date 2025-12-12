"use client";

import { useState } from "react";
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
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Target,
  ArrowRight,
  FileText,
  Users,
  Shield,
  Zap,
  Award,
} from "lucide-react";
import Link from "next/link";

const readinessLevels = [
  {
    level: 0,
    title: "No AI Awareness",
    description: "Organization has no AI initiatives or understanding",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    level: 1,
    title: "Initial Exploration",
    description: "Basic awareness, exploring AI possibilities",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
  {
    level: 2,
    title: "Pilot Projects",
    description: "Running small-scale AI experiments",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  {
    level: 3,
    title: "Strategic Implementation",
    description: "AI integrated into core business processes",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    level: 4,
    title: "Advanced Integration",
    description: "AI-driven transformation across departments",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
  },
  {
    level: 5,
    title: "AI Excellence",
    description: "Governance-first, fully compliant AI organization",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
];

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Comprehensive Assessment",
    description: "Evaluate your AI maturity across governance, compliance, technology, and people dimensions.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Gap Analysis",
    description: "Identify specific gaps in your AI readiness and prioritize improvement areas.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Transformation Roadmap",
    description: "Get a customized roadmap with actionable steps to advance your AI maturity.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Evaluation",
    description: "Optional expert-led assessment with CA professionals for deeper insights.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Compliance Check",
    description: "Assess your alignment with DPDP, GDPR, and other regulatory frameworks.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Detailed Report",
    description: "Receive a comprehensive report with recommendations and best practices.",
  },
];

const caseStudies = [
  {
    company: "Mid-size CA Firm",
    industry: "Professional Services",
    challenge: "Uncertain about AI readiness and compliance requirements",
    solution: "Comprehensive assessment revealed Level 2 maturity with gaps in governance",
    result: "Achieved Level 4 maturity in 6 months with structured roadmap",
    metrics: "40% efficiency gain, 100% DPDP compliance",
  },
  {
    company: "Finance Team - Enterprise",
    industry: "Financial Services",
    challenge: "Multiple AI tools without governance framework",
    solution: "Expert evaluation identified risks and created governance structure",
    result: "Established AI governance framework, reduced compliance risks by 60%",
    metrics: "60% risk reduction, Level 3 to Level 5 maturity",
  },
  {
    company: "SME Startup",
    industry: "Technology",
    challenge: "Starting AI journey, needed foundation assessment",
    solution: "Initial assessment provided clear starting point and growth path",
    result: "Built AI capabilities from ground up with governance-first approach",
    metrics: "Level 0 to Level 3 in 4 months, compliant from day one",
  },
];

const faqItems = [
  {
    id: "faq-1",
    question: "How long does the assessment take?",
    answer: "The self-assessment takes approximately 15-20 minutes. Expert-led evaluations typically take 2-3 hours including interviews and analysis.",
  },
  {
    id: "faq-2",
    question: "What do I get after the assessment?",
    answer: "You'll receive a detailed report with your AI readiness score, gap analysis, prioritized recommendations, and a transformation roadmap tailored to your organization.",
  },
  {
    id: "faq-3",
    question: "Can I retake the assessment?",
    answer: "Yes, you can retake the assessment anytime to track your progress. We recommend reassessing every 3-6 months as you implement improvements.",
  },
  {
    id: "faq-4",
    question: "What's the difference between self-assessment and expert evaluation?",
    answer: "Self-assessment is a quick online evaluation you complete yourself. Expert evaluation includes one-on-one sessions with CA professionals, deeper analysis, and customized recommendations.",
  },
  {
    id: "faq-5",
    question: "Is the assessment free?",
    answer: "Basic self-assessment is available at no cost. Expert-led evaluations are available as part of our consulting services.",
  },
];

export default function AccruReadyPage() {
  const { isMobile } = useResponsive();
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

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
          headline="Get Your Organization's AI Readiness Score"
          description="Assess your AI maturity through self-assessment or expert-led evaluation. Understand where you stand and get a clear path to AI excellence with governance and compliance built in."
          badge="AI Readiness Assessment"
          valuePoints={[
            "Comprehensive evaluation framework",
            "Expert CA-led assessments",
            "Actionable transformation roadmap",
            "DPDP & compliance aligned",
          ]}
          ctaPrimary={{ label: "Start Assessment", href: "#assessment" }}
          ctaSecondary={{ label: "See Case Studies", href: "#case-studies" }}
        />

        {/* Readiness Ladder Visualization */}
        <AnimatedSection>
          <Section
            kicker="AI Readiness Levels"
            title="Where Does Your Organization Stand?"
            description="Our 6-level framework helps you understand your current AI maturity and identify the path to excellence."
            id="assessment"
          >
            <div className="space-y-4">
              {readinessLevels.map((level, index) => (
                <AnimatedItem key={level.level} index={index}>
                  <Card
                    variant={selectedLevel === level.level ? "gradient" : "glass"}
                    hover
                    className={cn(
                      "cursor-pointer transition-all duration-300",
                      selectedLevel === level.level && "border-2 border-primary"
                    )}
                    onClick={() => setSelectedLevel(level.level)}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={cn(
                          "flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-bold text-2xl",
                          level.bgColor,
                          level.borderColor,
                          "border-2"
                        )}
                      >
                        <span className={level.color}>{level.level}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-text-primary text-xl">
                            {level.title}
                          </h3>
                          {selectedLevel === level.level && (
                            <Badge variant="success">Selected</Badge>
                          )}
                        </div>
                        <p className="text-text-secondary">{level.description}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="gradient" size="lg">
                Start Your Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Section>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection delay={0.2}>
          <Section
            kicker="Features"
            title="Comprehensive AI Readiness Evaluation"
            description="Our assessment covers all critical dimensions of AI maturity in your organization."
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

        {/* Case Studies */}
        <AnimatedSection delay={0.4}>
          <Section
            kicker="Success Stories"
            title="Real Results from Real Organizations"
            description="See how organizations have transformed their AI readiness with AccruReady assessments."
            id="case-studies"
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
              {caseStudies.map((study, index) => (
                <AnimatedItem key={index} index={index}>
                  <Card variant="glass" hover className="h-full">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="primary" className="mb-3">
                          {study.industry}
                        </Badge>
                        <h3 className="font-semibold text-text-primary text-xl mb-2">
                          {study.company}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-text-tertiary text-sm font-medium mb-1">
                            Challenge
                          </p>
                          <p className="text-text-secondary text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <p className="text-text-tertiary text-sm font-medium mb-1">
                            Solution
                          </p>
                          <p className="text-text-secondary text-sm">{study.solution}</p>
                        </div>
                        <div>
                          <p className="text-text-tertiary text-sm font-medium mb-1">
                            Result
                          </p>
                          <p className="text-text-secondary text-sm font-semibold">
                            {study.result}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-border">
                          <div className="flex items-center gap-2 text-primary">
                            <Award className="w-4 h-4" />
                            <span className="text-sm font-semibold">{study.metrics}</span>
                          </div>
                        </div>
                      </div>
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
            title="Ready to Assess Your AI Readiness?"
            description="Start your journey to AI excellence with a comprehensive assessment. Choose self-assessment or expert-led evaluation."
            className="bg-background-secondary"
          >
            <div className="max-w-4xl mx-auto">
              <Card variant="gradient" className="p-8 lg:p-12">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-2 text-primary mb-4">
                    <Zap className="w-8 h-8" />
                    <h3 className="font-semibold text-text-primary text-2xl">
                      Start Your Assessment Today
                    </h3>
                  </div>
                  <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    Get your AI readiness score, identify gaps, and receive a customized
                    transformation roadmap—all in one comprehensive assessment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Button variant="gradient" size="lg">
                      Start Free Assessment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Link href="/contact">
                      <Button variant="secondary" size="lg">
                        Schedule Expert Evaluation
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
            description="Everything you need to know about AccruReady assessments."
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

