import type { Metadata } from "next";

import { getResearchArticles } from "@/lib/research";

import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ResearchCard } from "@/components/cards/ResearchCard";

export const metadata: Metadata = {
  title: "Research",

  description:
    "Research articles on adaptive learning, educational AI, learning analytics, and secure educational technologies.",
};

export default function ResearchPage() {
  const articles = getResearchArticles();

  return (
    <>
      <Section spacing="lg">
        <SectionTitle
          eyebrow="Research"
          title="Educational AI & Learning Research"
          description="Exploring adaptive learning, educational technology, artificial intelligence, learning analytics, and trustworthy educational systems."
        />

        {articles.length === 0 ? (
          <div className="rounded-2xl border p-12 text-center">
            <h2 className="text-2xl font-semibold">
              No research articles yet
            </h2>

            <p className="mt-4 text-muted-foreground">
              Add MDX files inside
              <code className="mx-2 rounded bg-muted px-2 py-1">
                content/research
              </code>
              to publish research.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ResearchCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}