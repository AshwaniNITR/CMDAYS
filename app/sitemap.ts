// app/sitemap.js or app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cmdays2026.nitrkl.ac.in/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://cmdays2026.nitrkl.ac.in/submitPaper",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
      {
      url: "https://cmdays2026.nitrkl.ac.in/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://cmdays2026.nitrkl.ac.in/advisory",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
     {
      url: "https://cmdays2026.nitrkl.ac.in/Sponsorship",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://cmdays2026.nitrkl.ac.in/local",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
  url: "https://cmdays2026.nitrkl.ac.in/cmdays2026",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.6,
}


    
  ];
}
