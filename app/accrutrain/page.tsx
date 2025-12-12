"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RotatingCircleHero } from "@/components/RotatingCircleHero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Grid } from "@/components/Grid";
import { Calendar, CalendarEvent } from "@/components/Calendar";
import { Accordion } from "@/components/Accordion";
import { ExpertCarousel } from "@/components/ExpertCarousel";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Badge } from "@/components/Badge";
import { useResponsive } from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import { 
  Calendar as CalendarIcon, 
  Trophy, 
  Clock, 
  Users, 
  PlayCircle, 
  Gift,
  CheckCircle2,
  Star,
  ArrowRight,
  Video,
  Download,
  BookOpen
} from "lucide-react";
import Link from "next/link";

// Sample data - in production, this would come from a CMS or API
const upcomingClasses: CalendarEvent[] = [
  {
    id: "1",
    date: new Date(2024, 11, 15),
    time: "10:00 AM IST",
    title: "AI Fundamentals for Finance Professionals",
    instructor: "CA Ranjan Singhal",
    topic: "Introduction to AI in Finance",
    description: "Learn the basics of AI and how it applies to finance workflows.",
    registrationUrl: "#",
  },
  {
    id: "2",
    date: new Date(2024, 11, 15),
    time: "2:00 PM IST",
    title: "DPDP Compliance for CA Firms",
    instructor: "CA Vaibhav Balar",
    topic: "Privacy & Compliance",
    description: "Understanding DPDP requirements and implementation strategies.",
    registrationUrl: "#",
  },
  {
    id: "3",
    date: new Date(2024, 11, 16),
    time: "11:00 AM IST",
    title: "AI Agents for GST Automation",
    instructor: "CA Rishi Arora",
    topic: "Automation & Workflows",
    description: "Build AI agents to automate GST filing and compliance.",
    registrationUrl: "#",
  },
];

const challenges = [
  {
    id: "1",
    name: "December AI Challenge",
    description: "Build a complete AI workflow for a CA firm. Showcase your skills and win prizes!",
    prize: "₹5,000",
    startDate: new Date(2024, 11, 1),
    endDate: new Date(2024, 11, 31),
    participants: 234,
    status: "active",
  },
  {
    id: "2",
    name: "January Innovation Challenge",
    description: "Create an innovative AI solution for finance automation. Top 3 winners get cash prizes.",
    prize: "₹3,000",
    startDate: new Date(2025, 0, 1),
    endDate: new Date(2025, 0, 31),
    participants: 0,
    status: "upcoming",
  },
];

const pricingTiers = [
  {
    id: "starter",
    name: "Starter Workshop",
    price: "₹349",
    period: "One-time",
    description: "Perfect for getting started with AI in finance",
    features: [
      "Access to 1 live workshop",
      "Basic AI concepts for finance",
      "Downloadable resources",
      "Community access",
      "30-day support",
    ],
    cta: "Join Workshop",
    popular: false,
  },
  {
    id: "foundation",
    name: "Foundation Cohort",
    price: "₹499",
    period: "Monthly",
    description: "Comprehensive training with live classes and challenges",
    features: [
      "Daily live classes",
      "Monthly challenges",
      "On-demand content library",
      "Expert instructor access",
      "Certificate of completion",
      "Community forum",
      "Priority support",
    ],
    cta: "Join Cohort",
    popular: true,
  },
  {
    id: "pro",
    name: "Pro Certificate",
    price: "₹4,999",
    period: "One-time",
    description: "Complete certification program with mentorship",
    features: [
      "Everything in Foundation",
      "1-on-1 mentorship sessions",
      "Advanced AI workflows",
      "Portfolio projects",
      "Pro certificate",
      "Job placement assistance",
      "Lifetime community access",
      "AI tools discounts",
    ],
    cta: "Get Certified",
    popular: false,
  },
];

const faqItems = [
  {
    id: "faq-1",
    question: "What is AccruTrain?",
    answer: "AccruTrain is a CA-led AI × Finance training program designed to empower finance professionals, entrepreneurs, and corporates with practical AI skills. We offer daily live classes, monthly challenges, and comprehensive learning tracks.",
  },
  {
    id: "faq-2",
    question: "Who should join AccruTrain?",
    answer: "AccruTrain is perfect for Chartered Accountants, finance professionals, entrepreneurs, compliance officers, and anyone looking to build responsible AI capabilities in finance and governance.",
  },
  {
    id: "faq-3",
    question: "Are the classes live or recorded?",
    answer: "We offer both! Daily live classes with expert CA instructors, plus a library of on-demand content that you can access anytime after joining.",
  },
  {
    id: "faq-4",
    question: "What makes AccruTrain different?",
    answer: "AccruTrain is CA-led, governance-first, and DPDP & privacy-aware. Our instructors are practicing CAs who understand real-world finance workflows and compliance requirements.",
  },
  {
    id: "faq-5",
    question: "Can I get a refund?",
    answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the program, contact us within 7 days for a full refund.",
  },
  {
    id: "faq-6",
    question: "Do I get a certificate?",
    answer: "Yes! Foundation Cohort members receive a certificate of completion, and Pro Certificate track members receive a professional certification.",
  },
];

const testimonials = [
  {
    id: "1",
    name: "CA Priya Sharma",
    role: "Finance Director",
    content: "AccruTrain transformed how I approach AI in my practice. The CA-led instruction made all the difference.",
    rating: 5,
  },
  {
    id: "2",
    name: "Rahul Mehta",
    role: "Entrepreneur",
    content: "As a startup founder, AccruTrain helped me build AI capabilities from the ground up. Highly recommended!",
    rating: 5,
  },
  {
    id: "3",
    name: "CA Anjali Patel",
    role: "Compliance Officer",
    content: "The governance-first approach and DPDP focus are exactly what I needed. Excellent program!",
    rating: 5,
  },
];

const aiTools = [
  {
    id: "1",
    name: "AI Assistant Pro",
    discount: "50% off",
    description: "Premium AI assistant for finance workflows",
  },
  {
    id: "2",
    name: "Compliance Checker",
    discount: "25% off",
    description: "Automated compliance verification tool",
  },
  {
    id: "3",
    name: "Tax Optimizer",
    discount: "30% off",
    description: "AI-powered tax planning and optimization",
  },
  {
    id: "4",
    name: "Audit Assistant",
    discount: "40% off",
    description: "Streamline audit processes with AI",
  },
];

const instructors = [
  {
    id: "1",
    name: "CA Ranjan Singhal",
    role: "AI Governance Expert",
    expertise: ["AI Governance", "Compliance", "Risk Management"],
    bio: "Leading expert in AI governance and compliance frameworks for finance professionals.",
    photo: "/images/team/ranjan-singhal.jpg",
  },
  {
    id: "2",
    name: "CA Vaibhav Balar",
    role: "AI Agent and Automation Expert",
    expertise: ["AI Agents", "Automation", "Workflow Optimization"],
    bio: "Specialist in building AI-powered automation solutions for CA workflows.",
  },
  {
    id: "3",
    name: "CA Rriddhi Jain",
    role: "AI-Blockchain International Speaker",
    expertise: ["Blockchain", "AI Integration", "International Standards"],
    bio: "International speaker on AI and blockchain integration in finance.",
  },
  {
    id: "4",
    name: "CA Jasleen Daswal",
    role: "AI National Speaker and Market Expert",
    expertise: ["Market Analysis", "AI Strategy", "Business Development"],
    bio: "National-level speaker and expert in AI market trends and business strategy.",
  },
  {
    id: "5",
    name: "CA Rishi Arora",
    role: "AI Workflow and Automation Expert",
    expertise: ["Workflow Design", "Process Automation", "System Integration"],
    bio: "Expert in designing and implementing AI-powered workflow solutions.",
  },
  {
    id: "6",
    name: "CA Arun Narang",
    role: "AI National Speaker, FCA",
    expertise: ["AI Strategy", "Finance", "Compliance"],
    bio: "FCA and national speaker on AI applications in finance and compliance.",
  },
  {
    id: "7",
    name: "CA Kumar Venkatesh",
    role: "AI Hackathon Winner & Audit Expert",
    expertise: ["Audit", "AI Innovation", "Hackathon Winner"],
    bio: "AI hackathon winner and audit expert specializing in innovative audit solutions.",
  },
  {
    id: "8",
    name: "CA Mamta Kothari",
    role: "Insolvency Expert & AI Faculty",
    expertise: ["Insolvency", "AI Faculty", "Corporate Restructuring"],
    bio: "Insolvency expert and AI faculty member with expertise in corporate restructuring and AI applications.",
  },
  {
    id: "9",
    name: "CA Vinit Kohli",
    role: "Well Known Faculty & Life Coach",
    expertise: ["Faculty", "Life Coaching", "Professional Development"],
    bio: "Well known faculty member and life coach dedicated to professional development and growth.",
  },
];

export default function AccruTrainPage() {
  const { isMobile } = useResponsive();

  const handleRegister = (eventId: string) => {
    // Handle registration logic
    console.log("Registering for event:", eventId);
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
        {/* Hero Section with Rotating Circle */}
        <RotatingCircleHero
          subheadline="Introducing"
          headline="AccruTrain — AI School for Finance Professionals"
          description="Stop drowning in tutorials. Learn AI live, daily and join 5,000+ finance professionals building their AI capabilities today."
          badge="CA-led AI × Finance Training"
          ctaPrimary={{ label: "View tracks & fees", href: "#pricing" }}
          ctaSecondary={{ label: "Watch sample session", href: "#" }}
        />

        {/* Daily Live Classes Section */}
        <AnimatedSection>
          <Section
            kicker="Daily Classes"
            title="Live Classes Schedule"
            description="Join daily live classes with expert CA instructors. Learn AI fundamentals, automation, compliance, and governance in real-time."
            className="bg-background-secondary"
          >
            <div className="mb-6 flex flex-wrap gap-4">
              <Button variant="secondary" size="sm">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Filter by Date
              </Button>
              <Button variant="secondary" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Filter by Instructor
              </Button>
              <Button variant="secondary" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Filter by Topic
              </Button>
            </div>
            <Calendar events={upcomingClasses} onRegister={handleRegister} />
            <div className="mt-8 text-center">
              <Link href="#">
                <Button variant="secondary" size="lg">
                  View Full Schedule
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Section>
        </AnimatedSection>

        {/* Monthly Challenges Section */}
        <AnimatedSection delay={0.2}>
          <Section
            kicker="Monthly Challenges"
            title="Compete & Win Prizes"
            description="Join monthly challenges to test your skills, build your portfolio, and win cash prizes. Showcase your AI solutions to the community."
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 2 }} gap="lg">
              {challenges.map((challenge, index) => (
                <AnimatedItem key={challenge.id} index={index}>
                  <Card
                    variant={challenge.status === "active" ? "gradient" : "glass"}
                    hover
                    className="relative"
                  >
                    {challenge.status === "active" && (
                      <Badge variant="success" className="absolute top-4 right-4">
                        Active
                      </Badge>
                    )}
                    {challenge.status === "upcoming" && (
                      <Badge variant="primary" className="absolute top-4 right-4">
                        Upcoming
                      </Badge>
                    )}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-text-primary text-xl mb-2">
                          {challenge.name}
                        </h3>
                        <p className="text-text-secondary text-sm">
                          {challenge.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Gift className="w-4 h-4 text-primary" />
                          <span className="text-text-secondary">
                            Prize: <span className="font-semibold text-primary">{challenge.prize}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-text-tertiary" />
                          <span className="text-text-tertiary">
                            {challenge.participants} participants
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-text-tertiary">
                        {challenge.startDate.toLocaleDateString()} - {challenge.endDate.toLocaleDateString()}
                      </div>
                      <Button
                        variant={challenge.status === "active" ? "gradient" : "secondary"}
                        fullWidth={isMobile}
                      >
                        Join Challenge
                      </Button>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
          </Section>
        </AnimatedSection>

        {/* Live Office Hours */}
        <AnimatedSection delay={0.4}>
          <Section
            kicker="Office Hours"
            title="Live Office Hours with Experts"
            description="Book one-on-one sessions with our CA instructors. Get personalized guidance on your AI projects, workflows, and compliance questions."
            className="bg-background-secondary"
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
              {[
                { name: "CA Ranjan Singhal", time: "Mon-Fri, 2-4 PM IST", available: true },
                { name: "CA Vaibhav Balar", time: "Tue-Thu, 10-12 PM IST", available: true },
                { name: "CA Rishi Arora", time: "Wed-Fri, 3-5 PM IST", available: false },
              ].map((instructor, index) => (
                <AnimatedItem key={index} index={index}>
                  <Card variant="glass" hover>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-text-primary mb-2">
                          {instructor.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <Clock className="w-4 h-4" />
                          <span>{instructor.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {instructor.available ? (
                          <>
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-sm text-text-secondary">Available</span>
                          </>
                        ) : (
                          <>
                            <div className="w-2 h-2 rounded-full bg-gray-500" />
                            <span className="text-sm text-text-tertiary">Unavailable</span>
                          </>
                        )}
                      </div>
                      <Button
                        variant="secondary"
                        size="sm"
                        fullWidth
                        disabled={!instructor.available}
                      >
                        Book Office Hours
                      </Button>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
          </Section>
        </AnimatedSection>

        {/* Learning Tracks & Pricing */}
        <AnimatedSection delay={0.6}>
          <Section
            kicker="Pricing"
            title="Choose Your Learning Track"
            description="Select the track that best fits your learning goals and budget. All tracks include access to our community and resources."
            id="pricing"
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
              {pricingTiers.map((tier, index) => (
                <AnimatedItem key={tier.id} index={index}>
                  <Card
                    variant={tier.popular ? "gradient" : "glass"}
                    hover
                    className={cn(
                      "relative",
                      tier.popular && "border-2 border-primary"
                    )}
                  >
                    {tier.popular && (
                      <Badge variant="success" className="absolute -top-3 left-1/2 -translate-x-1/2">
                        Most Popular
                      </Badge>
                    )}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-text-primary text-xl mb-2">
                          {tier.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-primary">
                            {tier.price}
                          </span>
                          <span className="text-text-tertiary text-sm">
                            /{tier.period}
                          </span>
                        </div>
                        <p className="text-text-secondary text-sm mt-2">
                          {tier.description}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-text-secondary text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant={tier.popular ? "gradient" : "secondary"}
                        size="lg"
                        fullWidth
                      >
                        {tier.cta}
                      </Button>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
          </Section>
        </AnimatedSection>

        {/* Expert Instructors Section */}
        <AnimatedSection delay={0.8}>
          <Section
            kicker="Faculty"
            title="Meet Your Expert Instructors"
            description="Learn from practicing Chartered Accountants who are experts in AI, finance, compliance, and governance."
            className="bg-background-secondary"
          >
            <ExpertCarousel
              experts={instructors}
              autoRotate={true}
              rotationInterval={3000}
            />
          </Section>
        </AnimatedSection>

        {/* On-Demand Content Section */}
        <AnimatedSection delay={1.0}>
          <Section
            kicker="On-Demand"
            title="Get Hours of On-Demand AI Content"
            description="Access our library of expert tutorials, downloadable resources, and learning tracks the moment you join."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card variant="glass" className="text-center p-6">
                <Video className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-text-secondary">Hours of Expert Tutorials</div>
              </Card>
              <Card variant="glass" className="text-center p-6">
                <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-text-secondary">Downloadable Resources</div>
              </Card>
              <Card variant="glass" className="text-center p-6">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-text-secondary">Learning Tracks</div>
              </Card>
            </div>
            <div className="text-center">
              <Link href="#pricing">
                <Button variant="gradient" size="lg">
                  Unlock Daily AI Classes
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Section>
        </AnimatedSection>

        {/* AI Tools Discounts Section */}
        <AnimatedSection delay={1.2}>
          <Section
            kicker="Partner Tools"
            title="Exclusive AI Tools Discounts"
            description="Get special discounts on premium AI tools and services when you join AccruTrain."
            className="bg-background-secondary"
          >
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="lg">
              {aiTools.map((tool, index) => (
                <AnimatedItem key={tool.id} index={index}>
                  <Card variant="glass" hover>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-text-primary">
                          {tool.name}
                        </h3>
                        <Badge variant="success">{tool.discount}</Badge>
                      </div>
                      <p className="text-text-secondary text-sm">
                        {tool.description}
                      </p>
                      <Button variant="secondary" size="sm" fullWidth>
                        Access Deal
                      </Button>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
            <div className="mt-8 text-center">
              <Button variant="secondary" size="lg">
                View All Deals
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Section>
        </AnimatedSection>

        {/* Testimonials & Social Proof */}
        <AnimatedSection delay={1.4}>
          <Section
            kicker="Testimonials"
            title="What Our Learners Say"
            description="Join 11K+ professionals who have transformed their careers with AccruTrain."
          >
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-background-secondary rounded-lg">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-text-primary font-semibold">9/10</span>
                <span className="text-text-tertiary text-sm">Average rating</span>
              </div>
            </div>
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
              {testimonials.map((testimonial, index) => (
                <AnimatedItem key={testimonial.id} index={index}>
                  <Card variant="glass" hover>
                    <div className="space-y-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        &quot;{testimonial.content}&quot;
                      </p>
                      <div>
                        <div className="font-semibold text-text-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-text-tertiary">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedItem>
              ))}
            </Grid>
          </Section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection delay={1.6}>
          <Section
            kicker="FAQ"
            title="Frequently Asked Questions"
            description="Got questions? We've got answers. Find everything you need to know about AccruTrain."
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

