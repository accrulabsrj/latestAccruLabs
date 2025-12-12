"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  hover = false,
  className,
  children,
  ...props
}: CardProps) {
  const { isMobile, isDesktop } = useResponsive();

  const baseStyles = "rounded-xl transition-all duration-300";
  
  const variants = {
    default: "bg-background-secondary border border-border",
    glass: "glass-card",
    gradient: "gradient-border",
  };

  const padding = isMobile ? "p-4" : isDesktop ? "p-8" : "p-6";

  const hoverStyles = hover && isDesktop
    ? "hover:border-primary hover:shadow-glow-primary cursor-pointer"
    : "";

  if (variant === "gradient") {
    return (
      <div className={cn(baseStyles, className)} {...props}>
        <div className={cn("gradient-border-content", padding, hoverStyles)}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        padding,
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

