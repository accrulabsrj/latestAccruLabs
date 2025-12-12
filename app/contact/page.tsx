"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { useResponsive } from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { isMobile } = useResponsive();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        navItems={[
          { label: "Products", href: "/what-we-do" },
          { label: "AccruTrain", href: "/accrutrain" },
          { label: "About", href: "/philosophy" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Get Started", href: "/contact" }}
      />
      <main>
        <Section
          title="Get in Touch"
          description="Ready to transform your organization with responsible, governance-first AI? Let's start a conversation about how AccruLabs can help you achieve your goals."
          className="pt-24 sm:pt-32"
        >
          <div
            className={cn(
              "grid gap-8",
              isMobile ? "grid-cols-1" : "lg:grid-cols-2"
            )}
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <Card variant="glass">
                <div className="space-y-6">
                  <h3 className="font-semibold text-text-primary text-xl">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-text-secondary text-sm mb-1">Email</div>
                        <a
                          href="mailto:contact@accrulabs.ai"
                          className="text-text-primary hover:text-primary transition-colors"
                        >
                          contact@accrulabs.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-text-secondary text-sm mb-1">Phone</div>
                        <a
                          href="tel:+911234567890"
                          className="text-text-primary hover:text-primary transition-colors"
                        >
                          +91 123 456 7890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-text-secondary text-sm mb-1">Address</div>
                        <div className="text-text-primary">
                          AccruLabs.ai<br />
                          India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card variant="glass">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-text-primary text-xl mb-2">
                    Thank You!
                  </h3>
                  <p className="text-text-secondary">
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-text-secondary text-sm font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg bg-background-tertiary border",
                        errors.name
                          ? "border-red-500"
                          : "border-border focus:border-primary",
                        "text-text-primary placeholder-text-tertiary",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20",
                        "transition-colors"
                      )}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-secondary text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg bg-background-tertiary border",
                        errors.email
                          ? "border-red-500"
                          : "border-border focus:border-primary",
                        "text-text-primary placeholder-text-tertiary",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20",
                        "transition-colors"
                      )}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Company
                      </label>
                      <input
                        {...register("company")}
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 rounded-lg bg-background-tertiary border border-border focus:border-primary text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Phone
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg bg-background-tertiary border border-border focus:border-primary text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="+91 123 456 7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-text-secondary text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg bg-background-tertiary border",
                        errors.message
                          ? "border-red-500"
                          : "border-border focus:border-primary",
                        "text-text-primary placeholder-text-tertiary",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20",
                        "resize-none transition-colors"
                      )}
                      placeholder="Tell us about your needs..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    fullWidth={isMobile}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

