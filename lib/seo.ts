/**
 * SEO Utilities and Metadata Configuration
 * Centralized SEO management for all pages
 */

export const siteConfig = {
  name: "AccruLabs.ai",
  title: "AccruLabs.ai - The Applied AI Lab for Finance, Compliance & Governance",
  description: "Making entrepreneurs responsible AI ready. AccruLabs.ai trains Entrepreneurs, Corporates & Finance Professionals to build trust-first AI systems with governance and compliance.",
  url: "https://accrulabs.ai",
  ogImage: "/og-image.jpg",
  twitterHandle: "@accrulabs",
  keywords: [
    "AI governance",
    "finance AI",
    "compliance AI",
    "CA training",
    "AI readiness",
    "DPDP compliance",
    "AI automation",
    "finance professionals",
    "entrepreneurs",
    "responsible AI",
  ],
};

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata(page: PageMetadata) {
  const fullTitle = page.title.includes("AccruLabs") 
    ? page.title 
    : `${page.title} | ${siteConfig.name}`;
  
  const keywords = page.keywords 
    ? [...siteConfig.keywords, ...page.keywords].join(", ")
    : siteConfig.keywords.join(", ");

  return {
    title: fullTitle,
    description: page.description,
    keywords,
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: `${siteConfig.url}${page.path}`,
      siteName: siteConfig.name,
      images: [
        {
          url: page.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [page.ogImage || siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: !page.noIndex,
      follow: !page.noIndex,
      googleBot: {
        index: !page.noIndex,
        follow: !page.noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${page.path}`,
    },
  };
}

/**
 * Generate structured data (JSON-LD) for Organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      // Add social media links when available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@accrulabs.ai",
    },
  };
}

/**
 * Generate structured data (JSON-LD) for Course/Training
 */
export function generateCourseSchema(course: {
  name: string;
  description: string;
  provider: string;
  price?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: course.provider,
    },
    ...(course.price && {
      offers: {
        "@type": "Offer",
        price: course.price,
        priceCurrency: "INR",
      },
    }),
    url: course.url,
  };
}

/**
 * Generate structured data (JSON-LD) for Service
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    areaServed: "IN",
    url: service.url,
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

