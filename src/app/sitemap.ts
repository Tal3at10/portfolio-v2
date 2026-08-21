import { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tam-systems.com";
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Homepages for all locales
  for (const locale of routing.locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar`,
          en: `${baseUrl}/en`,
        },
      },
    });
  }

  // Dynamic project pages for each locale
  for (const project of caseStudies) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            ar: `${baseUrl}/ar/projects/${project.slug}`,
            en: `${baseUrl}/en/projects/${project.slug}`,
          },
        },
      });
    }
  }

  return entries;
}
