import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://venue-find.example";
  const routes = ["/", "/enquiry", "/contact", "/testimonials", "/about", "/privacy", "/terms"];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "weekly", priority: route === "/" ? 1 : 0.6 }));
}


