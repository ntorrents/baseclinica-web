import type { MetadataRoute } from "next";

const defaultSite = "https://baseclinica.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? defaultSite;
  const lastModified = new Date();

  const staticPaths = [
    "",
    "/precios",
    "/aviso-legal",
    "/politica-privacidad",
    "/fisio",
    "/dermo",
  ];

  return staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/precios" ? 0.9 : 0.7,
  }));
}
