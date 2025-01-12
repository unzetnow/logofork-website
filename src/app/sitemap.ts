import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://logofork.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Add more routes as needed
  ];
}
