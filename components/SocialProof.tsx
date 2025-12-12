"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { Card } from "./Card";

export interface SocialProofStat {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface SocialProofProps {
  stats?: SocialProofStat[];
  learnerCount?: string;
  rating?: string;
  testimonials?: Array<{
    id: string;
    name: string;
    role: string;
    content: string;
    rating?: number;
  }>;
  className?: string;
}

export function SocialProof({
  stats,
  learnerCount = "11K+",
  rating = "9/10",
  testimonials = [],
  className,
}: SocialProofProps) {
  const { isMobile } = useResponsive();

  const defaultStats: SocialProofStat[] = [
    { label: "Learners", value: learnerCount },
    { label: "Average Rating", value: `${rating} ⭐` },
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className={cn("space-y-8", className)}>
      {/* Stats */}
      {displayStats.length > 0 && (
        <div
          className={cn(
            "flex flex-wrap gap-4 justify-center",
            isMobile && "gap-3"
          )}
        >
          {displayStats.map((stat, index) => (
            <Card key={index} variant="glass" className="px-6 py-4 text-center">
              {stat.icon && (
                <div className="mb-2 flex justify-center">{stat.icon}</div>
              )}
              <div
                className={cn(
                  "font-bold gradient-text mb-1",
                  isMobile ? "text-2xl" : "text-3xl"
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  "text-text-secondary",
                  isMobile ? "text-sm" : "text-base"
                )}
              >
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <div
          className={cn(
            "grid gap-6",
            isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} variant="glass" className="p-6">
              <div className="space-y-4">
                {testimonial.rating && (
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "text-lg",
                          i < testimonial.rating!
                            ? "text-yellow-400"
                            : "text-text-tertiary"
                        )}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                )}
                <p
                  className={cn(
                    "text-text-secondary italic",
                    isMobile ? "text-sm" : "text-base"
                  )}
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p
                    className={cn(
                      "text-text-tertiary",
                      isMobile ? "text-xs" : "text-sm"
                    )}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

