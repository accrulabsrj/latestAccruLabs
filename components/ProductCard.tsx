"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { Card } from "./Card";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  features?: string[];
  className?: string;
}

export function ProductCard({
  title,
  description,
  href,
  icon,
  badge,
  features,
  className,
}: ProductCardProps) {
  const { isMobile, isDesktop } = useResponsive();

  return (
    <Card
      hover
      variant="glass"
      className={cn("group h-full flex flex-col relative overflow-hidden", className)}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-accent/5 transition-all duration-500 pointer-events-none rounded-xl" />
      
      <div className="flex-1 space-y-4 relative z-10">
        {badge && (
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-xs font-medium border border-primary/40 shadow-sm shadow-primary/10">
              {badge}
            </span>
            {icon && (
              <div className="text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {icon}
              </div>
            )}
          </div>
        )}
        {!badge && icon && (
          <div className="text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        )}

        <div>
          <h3
            className={cn(
              "font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors",
              isMobile ? "text-lg" : "text-xl"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-text-secondary leading-relaxed",
              isMobile ? "text-sm" : "text-base"
            )}
          >
            {description}
          </p>
        </div>

        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.slice(0, isMobile ? 2 : 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0 shadow-sm shadow-primary/50" />
                <span
                  className={cn(
                    "text-text-tertiary group-hover:text-text-secondary transition-colors",
                    isMobile ? "text-xs" : "text-sm"
                  )}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors relative z-10">
        <Link href={href}>
          <Button
            variant="ghost"
            size="sm"
            fullWidth={isMobile}
            className="group/btn text-text-secondary group-hover:text-primary"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}

