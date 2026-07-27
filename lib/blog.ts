import { blogPosts } from "@/content/blog";

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPost(slug: string) {
  return blogPosts.find(
    (post) => post.slug === slug
  );
}

export function getFeaturedPosts() {
  return blogPosts.filter(
    (post) => post.featured
  );
}