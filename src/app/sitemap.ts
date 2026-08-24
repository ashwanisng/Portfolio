import { MetadataRoute } from "next";

const BASE_URL = "https://ashwanisng.com";

const blogSlugs = [
  "build-mvp-no-waste",
  "when-flutter-right-choice",
  "startup-hiring-mistakes",
  "lessons-shipping-closepitch",
  "ai-features-improve-ux",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1.0, lastModified: now },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly" as const, priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/projects/closepitch`, changeFrequency: "monthly" as const, priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly" as const, priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/experience`, changeFrequency: "monthly" as const, priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/resume`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/process`, changeFrequency: "monthly" as const, priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/now`, changeFrequency: "weekly" as const, priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/labs`, changeFrequency: "monthly" as const, priority: 0.5, lastModified: now },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
