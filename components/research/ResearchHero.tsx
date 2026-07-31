"use client";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
interface ResearchHeroProps {

  volume: number;

  title: string;

  subtitle: string;

  description: string;

  category: string;

  status:
    | "Published"
    | "In Progress"
    | "Planned";

  publicationDate: string;

  version: string;

  readingTime: string;

  pages: number;

  series: string;

}

export function ResearchHero({
  volume,
  title,
  subtitle,
  description,
  category,
  status,
  series,
  version,
  readingTime,
  pages,
}: ResearchHeroProps) {
  return (
    <section
      className="
        border-b
        bg-gradient-to-b
        from-background
        via-background
        to-muted/40
      "
    >
      <Container className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">

          {/* Publication Header */}

          <div className="space-y-3">

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-primary
              "
            >
              {series}
            </p>

            <p
              className="
                text-sm
                text-muted-foreground
              "
            >
              Independent Technical Whitepaper
            </p>

          </div>

          {/* Badges */}

          <div className="mt-8 flex flex-wrap gap-3">

            <Badge variant="secondary">
              Volume {volume}
            </Badge>

            <Badge>
              {status}
            </Badge>

            <Badge variant="outline">
              {category}
            </Badge>

          </div>

          {/* Title */}

          <h1
            className="
              mt-10
              max-w-5xl
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            {title}
          </h1>

          {/* Subtitle */}

          <p
            className="
              mt-8
              max-w-4xl
              text-xl
              leading-relaxed
              text-muted-foreground
              lg:text-2xl
            "
          >
            {subtitle}
          </p>

          <Separator className="my-12" />

          {/* Abstract Preview */}

          <div
            className="
              rounded-2xl
              border
              bg-card/70
              p-8
            "
          >
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-widest
                text-primary
              "
            >
              Abstract
            </p>

            <p
              className="
                mt-4
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              {description}
            </p>
          </div>

          {/* Publication Metadata */}

          <div
            className="
              mt-12
              grid
              gap-6
              rounded-2xl
              border
              bg-card
              p-8
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            <MetadataItem
              label="Research Series"
              value={series}
            />

            <MetadataItem
              label="Version"
              value={version}
            />

            <MetadataItem
              label="Reading Time"
              value={readingTime}
            />

            <MetadataItem
              label="Pages"
              value={`${pages}`}
            />

          </div>
        </div>
      </Container>
    </section>
  );
}

interface MetadataItemProps {
  label: string;
  value: string;
}

function MetadataItem({
  label,
  value,
}: MetadataItemProps) {
  return (
    <div className="space-y-2">

      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-muted-foreground
        "
      >
        {label}
      </p>

      <p
        className="
          text-base
          font-semibold
          leading-relaxed
        "
      >
        {value}
      </p>

    </div>
  );
}