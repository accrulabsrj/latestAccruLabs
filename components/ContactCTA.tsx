"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { Card } from "./Card";
import { Button } from "./Button";
import { Mail, MessageCircle } from "lucide-react";

export interface ContactCTAProps {
  className?: string;
}

export function ContactCTA({ className }: ContactCTAProps) {
  const { isMobile } = useResponsive();

  return (
    <section
      className={cn(
        "section-spacing bg-gradient-to-br from-primary/10 via-background-secondary to-accent/10",
        className
      )}
    >
      <div className="container-responsive">
        <Card variant="gradient" className="text-center">
          <div className="space-y-6">
            <div>
              <h2
                className={cn(
                  "font-bold gradient-text mb-4",
                  isMobile ? "text-2xl" : "text-3xl lg:text-4xl"
                )}
              >
                Let&apos;s Build Your AI Future
              </h2>
              <p
                className={cn(
                  "text-text-secondary max-w-2xl mx-auto",
                  isMobile ? "text-base" : "text-lg"
                )}
              >
                Ready to transform your organization with responsible, governance-first AI? Let&apos;s start a conversation about how AccruLabs can help you achieve your goals.
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 justify-center items-center",
                isMobile && "w-full"
              )}
            >
              <Link href="/contact">
                <Button
                  variant="gradient"
                  size={isMobile ? "md" : "lg"}
                  fullWidth={isMobile}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size={isMobile ? "md" : "lg"}
                  fullWidth={isMobile}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

