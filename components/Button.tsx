"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const { isMobile } = useResponsive();

  const baseStyles = "btn-base rounded-lg font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-primary-dark active:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30",
    secondary: "bg-background-tertiary text-text-primary border border-border hover:border-primary hover:bg-background-secondary",
    ghost: "bg-transparent text-text-primary hover:bg-background-tertiary hover:text-primary",
    gradient: "bg-gradient-to-r from-primary via-accent to-primary text-background hover:opacity-90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500",
  };

  const sizes = {
    sm: isMobile ? "px-3 py-2 text-sm" : "px-4 py-2 text-sm",
    md: isMobile ? "px-4 py-3 text-base" : "px-6 py-3 text-base",
    lg: isMobile ? "px-6 py-4 text-lg" : "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

