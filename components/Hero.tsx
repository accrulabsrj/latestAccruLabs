"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { Button } from "./Button";

export interface HeroProps {
  headline: string;
  description?: string;
  ctaPrimary?: { label: string; href?: string; onClick?: () => void };
  ctaSecondary?: { label: string; href?: string; onClick?: () => void };
  badge?: string;
  valuePoints?: string[];
  rightPanel?: React.ReactNode;
  className?: string;
}

export function Hero({
  headline,
  description,
  ctaPrimary,
  ctaSecondary,
  badge,
  valuePoints,
  rightPanel,
  className,
}: HeroProps) {
  const { isMobile, isTablet } = useResponsive();

  return (
    <section
      className={cn(
        "section-spacing",
        "bg-gradient-to-b from-background via-background-secondary to-background",
        className
      )}
    >
      <div className="container-responsive">
        <div
          className={cn(
            "flex flex-col",
            rightPanel && !isMobile ? "lg:flex-row lg:items-center lg:gap-12" : "",
            "gap-8"
          )}
        >
          {/* Left Column - Content */}
          <div className={cn("flex-1", isMobile ? "text-center" : "lg:text-left")}>
            {badge && (
              <div className={cn("mb-4", isMobile ? "flex justify-center" : "")}>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
                  {badge}
                </span>
              </div>
            )}

            <h1
              className={cn(
                "font-bold gradient-text mb-4",
                isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-5xl lg:text-6xl"
              )}
            >
              {headline}
            </h1>

            {description && (
              <p
                className={cn(
                  "text-text-secondary mb-6",
                  isMobile ? "text-base" : "text-lg lg:text-xl",
                  "max-w-2xl",
                  isMobile ? "mx-auto" : "lg:mx-0"
                )}
              >
                {description}
              </p>
            )}

            {/* Value Points */}
            {valuePoints && valuePoints.length > 0 && (
              <div className={cn("mb-8", isMobile ? "space-y-3" : "space-y-4")}>
                <div
                  className={cn(
                    "flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 flex-wrap",
                    isMobile ? "px-2 justify-center" : "lg:justify-start"
                  )}
                >
                  {valuePoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <p
                        className={cn(
                          "text-text-secondary font-medium",
                          isMobile ? "text-sm" : "text-base"
                        )}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(ctaPrimary || ctaSecondary) && (
              <div
                className={cn(
                  "flex flex-col sm:flex-row gap-4",
                  isMobile ? "items-stretch" : "items-center"
                )}
              >
                {ctaPrimary && (
                  ctaPrimary.href ? (
                    <a href={ctaPrimary.href}>
                      <Button
                        variant="gradient"
                        size={isMobile ? "md" : "lg"}
                        fullWidth={isMobile}
                      >
                        {ctaPrimary.label}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="gradient"
                      size={isMobile ? "md" : "lg"}
                      fullWidth={isMobile}
                      onClick={ctaPrimary.onClick}
                    >
                      {ctaPrimary.label}
                    </Button>
                  )
                )}
                {ctaSecondary && (
                  ctaSecondary.href ? (
                    <a href={ctaSecondary.href}>
                      <Button
                        variant="secondary"
                        size={isMobile ? "md" : "lg"}
                        fullWidth={isMobile}
                      >
                        {ctaSecondary.label}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="secondary"
                      size={isMobile ? "md" : "lg"}
                      fullWidth={isMobile}
                      onClick={ctaSecondary.onClick}
                    >
                      {ctaSecondary.label}
                    </Button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Right Column - Interactive Panel */}
          {rightPanel && (
            <div
              className={cn(
                "flex-1",
                isMobile ? "mt-4" : "lg:mt-0"
              )}
            >
              {rightPanel}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

