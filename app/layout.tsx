import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, generateMetadata as generateSEO, generateOrganizationSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const rootMetadata = generateSEO({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export const metadata: Metadata = {
  ...rootMetadata,
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: "AccruLabs.ai" }],
  creator: "AccruLabs.ai",
  publisher: "AccruLabs.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    // Add verification codes when available
    // google: "verification-code",
    // yandex: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

