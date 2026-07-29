import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ashwanisingh.dev";
  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/closepitch",
    "/services",
    "/experience",
    "/thinking",
    "/now",
    "/labs",
    "/blog",
    "/resume",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
