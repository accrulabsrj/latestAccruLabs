import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/what-we-do",
    "/accrutrain",
    "/accruready",
    "/accruassist",
    "/accruprivacy",
    "/accruassure",
    "/philosophy",
    "/how-we-work",
    "/who-we-serve",
    "/why-accrulabs",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}












