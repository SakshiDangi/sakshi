import type { MetadataRoute } from "next";

import {
  getResearchArticles,
} from "@/lib/research";

import {
  getBlogPosts,
} from "@/lib/blog";


const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://yourdomain.com";


export default function sitemap(): MetadataRoute.Sitemap {

  const staticRoutes = [

    "",

    "/about",

    "/projects",

    "/research",

    "/blog",

    "/resume",

    "/contact",

  ].map((route) => ({

    url:
      `${BASE_URL}${route}`,

    lastModified:
      new Date(),

    changeFrequency:
      "monthly" as const,

    priority:
      route === ""
        ? 1
        : 0.7,

  }));



  const researchRoutes =
    getResearchArticles().map(
      (article) => ({

        url:
          `${BASE_URL}/research/${article.slug}`,

        lastModified:
          new Date(article.date),

        changeFrequency:
          "monthly" as const,

        priority:
          0.8,

      })
    );



  const blogRoutes =
    getBlogPosts().map(
      (post) => ({

        url:
          `${BASE_URL}/blog/${post.slug}`,

        lastModified:
          new Date(post.date),

        changeFrequency:
          "monthly" as const,

        priority:
          0.7,

      })
    );



  return [

    ...staticRoutes,

    ...researchRoutes,

    ...blogRoutes,

  ];

}