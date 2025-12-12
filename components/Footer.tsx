"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  socialLinks?: Array<{ label: string; href: string; icon?: React.ReactNode }>;
  copyright?: string;
  className?: string;
}

export function Footer({
  sections = [],
  socialLinks = [],
  copyright = "© 2024 AccruLabs.ai. All rights reserved.",
  className,
}: FooterProps) {
  const { isMobile } = useResponsive();

  const defaultSections: FooterSection[] = [
    {
      title: "Products",
      links: [
        { label: "AccruTrain", href: "/accrutrain" },
        { label: "AccruReady", href: "/accruready" },
        { label: "AccruAssist", href: "/accruassist" },
        { label: "AccruPrivacy", href: "/accruprivacy" },
        { label: "AccruAssure", href: "/accruassure" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/philosophy" },
        { label: "What We Do", href: "/what-we-do" },
        { label: "How We Work", href: "/how-we-work" },
        { label: "Who We Serve", href: "/who-we-serve" },
        { label: "Why AccruLabs", href: "/why-accrulabs" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const footerSections = sections.length > 0 ? sections : defaultSections;

  return (
    <footer
      role="contentinfo"
      className={cn(
        "border-t border-border bg-background-secondary",
        className
      )}
    >
      <div className="container-responsive section-spacing">
        {/* Footer Content */}
        <div
          className={cn(
            "grid gap-8",
            isMobile
              ? "grid-cols-1"
              : "md:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {/* Brand Section */}
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
              AccruLabs.ai
            </Link>
            <p className="text-text-secondary text-sm mb-4">
              AI Governance for Finance Professionals
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="p-2 rounded-lg hover:bg-background-tertiary transition-colors min-h-[var(--touch-target-min)] min-w-[var(--touch-target-min)]"
                    aria-label={link.label}
                  >
                    {link.icon || link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-text-primary mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-text-tertiary text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

