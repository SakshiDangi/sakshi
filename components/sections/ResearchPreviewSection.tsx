import Link from "next/link";

import { research } from "@/data/research";

import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { ResearchPaperCard } from "@/components/cards/ResearchPaperCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";

export function ResearchPreviewSection() {
  const featuredPapers = research.filter(
    (paper) => paper.featured
  );

  return (
    <Section spacing="xl">
      <AnimatedFade>
        <SectionTitle
          eyebrow="Research Series"
          title="AI for Education & Adaptive Learning"
          description="
            A collection of independent technical whitepapers exploring
            artificial intelligence, adaptive learning, educational
            technology, educational games, learner modeling, and learning
            analytics. Each volume presents conceptual frameworks together
            with prototype implementations and future research directions.
          "
          align="center"
        />

        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-2
          "
        >
          {featuredPapers.map((paper) => (
            <ResearchPaperCard
              key={paper.slug}
              paper={paper}
            />
          ))}
        </div>

        <div
          className="
            mt-16
            flex
            justify-center
          "
        >
          <Link href="/research">
            <Button
              size="lg"
              className="rounded-xl px-8"
            >
              Explore Research Series
            </Button>
          </Link>
        </div>
      </AnimatedFade>
    </Section>
  );
}