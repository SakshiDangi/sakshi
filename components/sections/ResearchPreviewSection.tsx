import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { research } from "@/data";

import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";

export function ResearchPreviewSection() {
  const featuredResearch = research.filter(
    (item) => item.featured
  );

  return (
    <Section spacing="xl">
      <AnimatedFade>
        <SectionTitle
          eyebrow="Research"
          title="Research, Technical Writing & Security Investigations"
          description="
            I investigate trustworthy AI, educational technology,
            blockchain security, distributed systems, and cryptographic
            protocols—transforming complex technical ideas into practical
            engineering knowledge.
          "
          align="center"
        />

        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {featuredResearch.map((item) => (
            <ResearchCard
              key={item.slug}
              title={item.title}
              description={item.description}
              category={item.category}
              date={item.date}
              readTime={item.readTime}
              tags={item.tags}
              href={
                item.href ??
                `/research/${item.slug}`
              }
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
              className="
                rounded-xl
                px-8
              "
            >
              Explore All Research
            </Button>
          </Link>
        </div>
      </AnimatedFade>
    </Section>
  );
}

interface ResearchCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime?: string;
  tags: string[];
  href: string;
}

function ResearchCard({
  title,
  description,
  category,
  date,
  readTime,
  tags,
  href,
}: ResearchCardProps) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-border/60
        bg-card
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            rounded-full
            bg-primary/10
            px-4
            py-1.5
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-primary
          "
        >
          {category}
        </span>

        <span
          className="
            text-sm
            text-muted-foreground
          "
        >
          {date}
        </span>
      </div>

      <h3
        className="
          mt-8
          text-2xl
          font-bold
          leading-tight
          tracking-tight
          transition-colors
          group-hover:text-primary
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-5
          flex-1
          text-base
          leading-8
          text-muted-foreground
        "
      >
        {description}
      </p>

      {readTime && (
        <p
          className="
            mt-6
            text-sm
            font-semibold
            text-primary
          "
        >
          {readTime} read
        </p>
      )}

      <div
        className="
          mt-6
          flex
          flex-wrap
          gap-2
        "
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-border/70
              px-3
              py-1.5
              text-xs
              font-medium
              text-muted-foreground
            "
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          text-base
          font-semibold
          text-primary
          transition-colors
          hover:text-primary/80
        "
      >
        Read Article

        <ArrowRight
          className="
            size-4
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Link>
    </article>
  );
}