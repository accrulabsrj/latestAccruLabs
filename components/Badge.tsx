"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "accent" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  size = "md",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const { isMobile } = useResponsive();

  const baseStyles = "inline-flex items-center gap-1.5 rounded-full font-medium";
  
  const variants = {
    default: "bg-background-tertiary text-text-secondary border border-border",
    primary: "bg-primary/20 text-primary border border-primary/30",
    accent: "bg-accent/20 text-accent border border-accent/30",
    success: "bg-green-500/20 text-green-400 border border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    error: "bg-red-500/20 text-red-400 border border-red-500/30",
  };

  const sizes = {
    sm: isMobile ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs",
    md: isMobile ? "px-3 py-1 text-sm" : "px-3.5 py-1.5 text-sm",
    lg: isMobile ? "px-4 py-1.5 text-base" : "px-5 py-2 text-base",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {dot && (
        <span
          className={cn(
            "rounded-full",
            dotSizes[size],
            variant === "primary" && "bg-primary",
            variant === "accent" && "bg-accent",
            variant === "success" && "bg-green-400",
            variant === "warning" && "bg-yellow-400",
            variant === "error" && "bg-red-400",
            variant === "default" && "bg-text-secondary"
          )}
        />
      )}
      {children}
    </span>
  );
}

