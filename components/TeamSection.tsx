"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { Section } from "./Section";
import { InstructorCard } from "./InstructorCard";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  photo?: string;
  profileUrl?: string;
}

export interface TeamSectionProps {
  members?: TeamMember[];
  className?: string;
}

export function TeamSection({
  members = [],
  className,
}: TeamSectionProps) {
  const { isMobile, isTablet } = useResponsive();

  const defaultMembers: TeamMember[] = [
    {
      id: "1",
      name: "CA Ranjan Singhal",
      role: "AI Governance Expert",
      expertise: ["AI Governance", "Compliance", "Risk Management"],
      bio: "Leading expert in AI governance and compliance frameworks for finance professionals.",
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
  ];

  const displayMembers = members.length > 0 ? members : defaultMembers;

  return (
    <Section
      kicker="Our Team"
      title="Meet the Experts"
      description="A team of Chartered Accountants and AI specialists dedicated to building trust-first AI systems for finance, compliance, and governance."
      className={cn("bg-background-secondary", className)}
    >
      <div
        className={cn(
          "grid gap-6",
          isMobile
            ? "grid-cols-1"
            : isTablet
            ? "grid-cols-2"
            : "grid-cols-3 lg:grid-cols-4"
        )}
      >
        {displayMembers.map((member) => (
          <InstructorCard key={member.id} instructor={member} />
        ))}
      </div>
    </Section>
  );
}

