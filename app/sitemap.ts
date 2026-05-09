import type { MetadataRoute } from "next";

const routes = [""];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://outlawindustrial.com${route}`,
    lastModified: new Date("2026-05-09")
  }));
}
