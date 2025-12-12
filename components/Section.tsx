"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  kicker?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function Section({
  kicker,
  title,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  const { isMobile } = useResponsive();

  return (
    <section
      className={cn(
        "section-spacing",
        className
      )}
      {...props}
    >
      <div className="container-responsive">
        {(kicker || title || description) && (
          <div className={cn(
            "text-center mb-12",
            isMobile ? "mb-8" : "mb-16"
          )}>
            {kicker && (
              <p className={cn(
                "text-primary font-semibold uppercase tracking-wider",
                isMobile ? "text-xs mb-2" : "text-sm mb-3"
              )}>
                <span className="inline-flex items-center gap-2">
                  <span className="w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  {kicker}
                  <span className="w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                </span>
              </p>
            )}
            {title && (
              <h2 className={cn(
                "font-bold gradient-text",
                isMobile ? "text-2xl mb-3" : "text-4xl mb-4"
              )}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn(
                "text-text-secondary max-w-2xl mx-auto",
                isMobile ? "text-sm" : "text-lg"
              )}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

