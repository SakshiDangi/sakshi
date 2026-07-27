import { researchArticles } from "@/content/research";

export function getResearchArticles() {
  return researchArticles;
}

export function getResearchArticle(slug: string) {
  return researchArticles.find(
    (article) => article.slug === slug
  );
}

export function getFeaturedResearch() {
  return researchArticles.filter(
    (article) => article.featured
  );
}