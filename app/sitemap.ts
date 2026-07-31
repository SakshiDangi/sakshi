import type { MetadataRoute } from "next";

import {
  getResearchPapers,
} from "@/lib/research";

import {
  getBlogPosts,
} from "@/lib/blog";


const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://yourdomain.com";



export default function sitemap(): MetadataRoute.Sitemap {


  const staticRoutes: MetadataRoute.Sitemap = [

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
      "monthly",

    priority:
      route === ""
        ? 1
        : 0.7,

  }));




  const researchRoutes: MetadataRoute.Sitemap =

    getResearchPapers().map((paper) => ({


      url:
        `${BASE_URL}/research/${paper.slug}`,


      lastModified:
        new Date(
          paper.publicationDate
        ),


      changeFrequency:
        "monthly",


      priority:
        0.8,


    }));





  const blogRoutes: MetadataRoute.Sitemap =

    getBlogPosts().map((post) => ({


      url:
        `${BASE_URL}/blog/${post.slug}`,


      lastModified:
        new Date(
          post.date
        ),


      changeFrequency:
        "monthly",


      priority:
        0.7,


    }));





  return [

    ...staticRoutes,

    ...researchRoutes,

    ...blogRoutes,

  ];

}