"use client";

import {
  Copy,
  Download,
  Share2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

interface ResearchHeroProps {
  volume: number;

  title: string;

  subtitle: string;

  description: string;

  category: string;

  author: string;

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
  author,
  status,
  publicationDate,
  version,
  readingTime,
  pages,
  series,
}: ResearchHeroProps) {
  return (
    <section
      className="
        border-b
        bg-gradient-to-b
        from-background
        via-background
        to-muted/20
      "
    >
      <Container className="py-14 lg:py-20">

        <div className="mx-auto max-w-5xl">

          {/* ------------------------------------------------ */}
          {/* Publication Header */}
          {/* ------------------------------------------------ */}

          <div>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              {series}
            </p>

            <div className="mt-5 h-px w-24 bg-primary/20" />

            <p
              className="
                mt-4
                text-sm
                text-muted-foreground
              "
            >
              Independent Technical Whitepaper
            </p>

          </div>

          {/* ------------------------------------------------ */}
          {/* Paper Labels */}
          {/* ------------------------------------------------ */}

          <div className="mt-6 flex flex-wrap gap-2">

            <Badge variant="outline">
              Volume {volume}
            </Badge>

            <Badge variant="outline">
              {category}
            </Badge>

            <Badge>
              {status}
            </Badge>

          </div>

          {/* ------------------------------------------------ */}
          {/* Title */}
          {/* ------------------------------------------------ */}

          <h1
            className="
              mt-8
              max-w-4xl
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              lg:text-5xl
            "
          >
            {title}
          </h1>

          {/* ------------------------------------------------ */}
          {/* Subtitle */}
          {/* ------------------------------------------------ */}

          <p
            className="
              mt-5
              max-w-4xl
              text-lg
              leading-8
              text-muted-foreground
              lg:text-xl
            "
          >
            {subtitle}
          </p>

          <Separator className="my-8" />

          {/* ------------------------------------------------ */}
          {/* Abstract Preview */}
          {/* ------------------------------------------------ */}

          <div
            className="
              rounded-xl
              border
              bg-card
              p-6
              shadow-sm
            "
          >
            <h2
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-primary
              "
            >
              Abstract
            </h2>

            <p
              className="
                mt-4
                text-base
                leading-8
                text-muted-foreground
              "
            >
              {description}
            </p>

          </div>

          {/* ------------------------------------------------ */}
          {/* Publication Metadata */}
          {/* ------------------------------------------------ */}

          <div
            className="
              mt-8
              grid
              gap-x-8
              gap-y-5
              border-y
              py-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            <MetadataItem
              label="Author"
              value={author}
            />

            <MetadataItem
              label="Published"
              value={publicationDate}
            />

            <MetadataItem
              label="Version"
              value={version}
            />

            <MetadataItem
              label="Category"
              value={category}
            />

            <MetadataItem
              label="Reading Time"
              value={readingTime}
            />

            <MetadataItem
              label="Pages"
              value={`${pages}`}
            />

            <MetadataItem
              label="Status"
              value={status}
            />

          </div>

          {/* ------------------------------------------------ */}
          {/* Actions */}
          {/* ------------------------------------------------ */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >

            <Button>

              <Download className="mr-2 h-4 w-4" />

              Download PDF

            </Button>

            <Button variant="outline">

              <Copy className="mr-2 h-4 w-4" />

              Copy Citation

            </Button>

            <Button variant="outline">

              <Share2 className="mr-2 h-4 w-4" />

              Share

            </Button>

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
    <div className="space-y-1">

      <p
        className="
          text-xs
          font-medium
          uppercase
          tracking-[0.15em]
          text-muted-foreground
        "
      >
        {label}
      </p>

      <p
        className="
          text-sm
          font-semibold
          leading-6
          text-foreground
        "
      >
        {value}
      </p>

    </div>
  );
}