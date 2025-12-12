"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { MobileMenu } from "./MobileMenu";

export interface HeaderProps {
  logo?: React.ReactNode;
  navItems?: Array<{ label: string; href: string }>;
  cta?: { label: string; href: string };
  className?: string;
}

export function Header({
  logo,
  navItems = [],
  cta,
  className,
}: HeaderProps) {
  const { isMobile, isTablet } = useResponsive();

  return (
    <header
      role="banner"
      className={cn(
        "sticky top-0 z-40 w-full",
        "bg-background/80 backdrop-blur-xl border-b border-border",
        className
      )}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo || (
              <Link href="/" className="text-2xl font-bold gradient-text">
                AccruLabs.ai
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          {!isMobile && !isTablet && navItems.length > 0 && (
            <nav role="navigation" aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative text-text-secondary hover:text-primary transition-colors font-medium group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
          )}

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            {cta && (!isMobile && !isTablet) && (
              <Link
                href={cta.href}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary via-accent to-primary text-background font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 bg-[length:200%_100%] hover:bg-[position:100%_0] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label={cta.label}
              >
                {cta.label}
              </Link>
            )}
            {(isMobile || isTablet) && (
              <MobileMenu items={navItems} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

