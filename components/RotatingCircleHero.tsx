"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { Button } from "./Button";
import {
  Brain,
  Calculator,
  Shield,
  FileText,
  TrendingUp,
  Zap,
  Database,
  Lock,
  BarChart3,
  Workflow,
  Sparkles,
  Target,
} from "lucide-react";

export interface RotatingCircleHeroProps {
  headline: string;
  subheadline?: string;
  description?: string;
  ctaPrimary?: { label: string; href?: string; onClick?: () => void };
  ctaSecondary?: { label: string; href?: string; onClick?: () => void };
  badge?: string;
  className?: string;
}

// Icons to display in the rotating circle - relevant to AI × Finance
const rotatingIcons = [
  { icon: Brain, label: "AI Intelligence", color: "text-primary" },
  { icon: Calculator, label: "Finance", color: "text-accent" },
  { icon: Shield, label: "Governance", color: "text-primary" },
  { icon: FileText, label: "Compliance", color: "text-accent" },
  { icon: TrendingUp, label: "Analytics", color: "text-primary" },
  { icon: Zap, label: "Automation", color: "text-accent" },
  { icon: Database, label: "Data", color: "text-primary" },
  { icon: Lock, label: "Privacy", color: "text-accent" },
  { icon: BarChart3, label: "Reporting", color: "text-primary" },
  { icon: Workflow, label: "Workflows", color: "text-accent" },
  { icon: Sparkles, label: "Innovation", color: "text-primary" },
  { icon: Target, label: "Strategy", color: "text-accent" },
];

export function RotatingCircleHero({
  headline,
  subheadline,
  description,
  ctaPrimary,
  ctaSecondary,
  badge,
  className,
}: RotatingCircleHeroProps) {
  const { isMobile, isTablet } = useResponsive();
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Calculate positions for icons in a circle
  const getIconPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 360) / total - 90; // Start from top
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;
    return { x, y };
  };

  // Responsive radius - increased to cover entire hero section
  const radius = isMobile ? 250 : isTablet ? 350 : 450;

  return (
    <section
      className={cn(
        "section-spacing relative overflow-hidden",
        "bg-gradient-to-b from-background via-background-secondary to-background",
        className
      )}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-responsive relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] lg:min-h-[90vh] py-8 lg:py-16">
          {/* Badge */}
          {badge && (
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
                {badge}
              </span>
            </div>
          )}

          {/* Rotating Circle Container */}
          <div
            ref={containerRef}
            className="relative w-full max-w-6xl mx-auto mb-16"
            style={{ 
              height: isMobile ? "500px" : isTablet ? "700px" : "900px",
              minHeight: isMobile ? "500px" : isTablet ? "700px" : "900px"
            }}
          >
            {/* Rotating Circle with Icons */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              {/* Connecting lines layer */}
              {!isMobile && (
                <div className="absolute inset-0 pointer-events-none z-0">
                  {rotatingIcons.map((_, index) => {
                    const angle = (index * 360) / rotatingIcons.length - 90;
                    return (
                      <div
                        key={`line-${index}`}
                        className="absolute top-1/2 left-1/2 origin-top"
                        style={{
                          width: "1px",
                          height: `${radius}px`,
                          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                          background: "linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.12), rgba(168, 85, 247, 0.1), transparent)",
                        }}
                      />
                    );
                  })}
                </div>
              )}
              {/* Rotating icons layer */}
              <div
                className={cn(
                  "relative w-full h-full",
                  !prefersReducedMotion && "animate-rotate-circle",
                  "will-change-transform"
                )}
                style={{
                  transformOrigin: "center center",
                }}
              >
                {rotatingIcons.map((item, index) => {
                  const { x, y } = getIconPosition(index, rotatingIcons.length, radius);
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div
                        className={cn(
                          "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl",
                          "bg-background-secondary/90 backdrop-blur-md",
                          "border border-border/60",
                          "flex items-center justify-center",
                          "shadow-lg hover:shadow-xl hover:shadow-primary/20",
                          "transition-all duration-300",
                          "hover:scale-110 hover:border-primary/70",
                          "group",
                          "hover:bg-background-secondary",
                          "z-10 relative"
                        )}
                        title={item.label}
                      >
                        <IconComponent
                          className={cn(
                            "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12",
                            item.color,
                            "transition-all duration-300",
                            "group-hover:scale-110"
                          )}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Central Content - positioned to avoid overlap with larger padding */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div 
                className={cn("text-center pointer-events-auto", isMobile ? "max-w-md px-4" : "max-w-4xl px-8")}
                style={{
                  paddingTop: isMobile ? "0" : isTablet ? "40px" : "60px",
                  paddingBottom: isMobile ? "0" : isTablet ? "40px" : "60px",
                }}
              >
                {subheadline && (
                  <p className="text-text-secondary text-sm sm:text-base mb-6 font-medium">
                    {subheadline}
                  </p>
                )}
                <h1
                  className={cn(
                    "font-extrabold gradient-text mb-8",
                    isMobile ? "text-3xl sm:text-4xl" : "text-5xl lg:text-6xl xl:text-7xl",
                    "leading-tight tracking-tight"
                  )}
                  style={{
                    textShadow: "0 0 40px rgba(56, 189, 248, 0.2), 0 0 80px rgba(168, 85, 247, 0.15)",
                  }}
                >
                  {headline}
                </h1>
                {description && (
                  <p
                    className={cn(
                      "text-text-secondary mb-8",
                      isMobile ? "text-sm" : "text-base lg:text-lg",
                      "max-w-2xl mx-auto"
                    )}
                  >
                    {description}
                  </p>
                )}
                {(ctaPrimary || ctaSecondary) && (
                  <div
                    className={cn(
                      "flex flex-col sm:flex-row gap-4",
                      "items-center justify-center"
                    )}
                  >
                    {ctaPrimary && (
                      ctaPrimary.href ? (
                        <a href={ctaPrimary.href}>
                          <Button
                            variant="gradient"
                            size={isMobile ? "md" : "lg"}
                            className="min-w-[200px]"
                          >
                            {ctaPrimary.label}
                          </Button>
                        </a>
                      ) : (
                        <Button
                          variant="gradient"
                          size={isMobile ? "md" : "lg"}
                          className="min-w-[200px]"
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
                            className="min-w-[200px]"
                          >
                            {ctaSecondary.label}
                          </Button>
                        </a>
                      ) : (
                        <Button
                          variant="secondary"
                          size={isMobile ? "md" : "lg"}
                          className="min-w-[200px]"
                          onClick={ctaSecondary.onClick}
                        >
                          {ctaSecondary.label}
                        </Button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

