import type { ResearchArticle } from "@/content/research";

import { BaseContentCard } from "./base/BaseContentCard";

interface ResearchCardProps {
  article: ResearchArticle;
}

export function ResearchCard({
  article,
}: ResearchCardProps) {
  return (
    <BaseContentCard
      category="Research"
      title={article.title}
      description={article.description}
      href={`/research/${article.slug}`}
      date={article.date}
      readingTime={article.readingTime}
      tags={article.tags}
      actionLabel="Read Research"
    />
  );
}