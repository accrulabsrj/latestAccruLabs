"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { Card } from "./Card";
import { Section } from "./Section";

export interface Step {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface HowItWorksProps {
  steps?: Step[];
  className?: string;
}

export function HowItWorks({
  steps = [],
  className,
}: HowItWorksProps) {
  const { isMobile, isTablet } = useResponsive();

  const defaultSteps: Step[] = [
    {
      number: "01",
      title: "Assess",
      description: "Evaluate your organization's AI readiness and identify gaps in governance, compliance, and capabilities.",
    },
    {
      number: "02",
      title: "Train",
      description: "Empower your team with CA-led training programs designed for finance professionals and entrepreneurs.",
    },
    {
      number: "03",
      title: "Implement",
      description: "Deploy structured AI assistants and governance frameworks tailored to your workflows and compliance needs.",
    },
    {
      number: "04",
      title: "Govern",
      description: "Maintain continuous oversight with AI governance, risk management, and assurance systems.",
    },
  ];

  const displaySteps = steps.length > 0 ? steps : defaultSteps;

  return (
    <Section
      kicker="Our Process"
      title="How We Work"
      description="A structured, disciplined approach that ensures every engagement delivers measurable outcomes while maintaining the highest standards of governance and compliance."
      className={className}
    >
      <div
        className={cn(
          "grid gap-6",
          isMobile
            ? "grid-cols-1"
            : isTablet
            ? "grid-cols-2"
            : "grid-cols-4"
        )}
      >
        {displaySteps.map((step, index) => (
          <Card
            key={index}
            variant="glass"
            hover
            className="relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "font-bold gradient-text",
                    isMobile ? "text-3xl" : "text-4xl"
                  )}
                >
                  {step.number}
                </span>
                {step.icon && (
                  <div className="text-primary opacity-40">{step.icon}</div>
                )}
              </div>
              <div>
                <h3
                  className={cn(
                    "font-semibold text-text-primary mb-2",
                    isMobile ? "text-lg" : "text-xl"
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "text-text-secondary leading-relaxed",
                    isMobile ? "text-sm" : "text-base"
                  )}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/how-we-work">
          <button className="text-primary hover:text-primary-light font-semibold transition-colors inline-flex items-center gap-2">
            See Our Full Process
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>
      </div>
    </Section>
  );
}

