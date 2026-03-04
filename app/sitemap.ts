import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://mon-portfolio.vercel.app/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        }
    ]
}