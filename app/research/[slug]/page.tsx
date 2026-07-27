import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getResearchArticle,
  getResearchArticles,
} from "@/lib/research";

import { Section } from "@/components/ui/Section";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getResearchArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = getResearchArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ResearchArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = getResearchArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <Section spacing="lg">
      <article className="mx-auto max-w-4xl">
        <header className="mb-12">

          <p className="text-sm text-primary">
            {article.date}
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {article.title}
          </h1>

          <p className="mt-6 text-xl text-muted-foreground">
            {article.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <article.Component />
        </div>
      </article>
    </Section>
  );
}