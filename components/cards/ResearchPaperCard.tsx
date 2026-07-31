import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ResearchPaper } from "@/types/research-paper";

interface Props {
  paper: ResearchPaper;
}

export function ResearchPaperCard({
  paper,
}: Props) {
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
      <div className="flex items-center justify-between">
        <span
          className="
            rounded-full
            bg-primary/10
            px-4
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-primary
          "
        >
          Volume {paper.volume}
        </span>

        <span
          className="
            rounded-full
            border
            px-3
            py-1
            text-xs
            font-medium
            text-muted-foreground
          "
        >
          {paper.status}
        </span>
      </div>

      <h3
        className="
          mt-6
          text-2xl
          font-bold
          leading-tight
          group-hover:text-primary
        "
      >
        {paper.title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          italic
          text-muted-foreground
        "
      >
        {paper.subtitle}
      </p>

      <p
        className="
          mt-6
          flex-1
          leading-8
          text-muted-foreground
        "
      >
        {paper.description}
      </p>

      <div
        className="
          mt-6
          text-sm
          text-muted-foreground
        "
      >
        {paper.publicationDate}
        {" • "}
        Version {paper.version}
        {" • "}
        {paper.readingTime}
        {" • "}
        {paper.pages} pages
      </div>

      <div
        className="
          mt-6
          flex
          flex-wrap
          gap-2
        "
      >
        {paper.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-border
              px-3
              py-1
              text-xs
            "
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={paper.href}
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          text-primary
        "
      >
        Read Whitepaper

        <ArrowRight
          className="
            h-4
            w-4
            transition-transform
            group-hover:translate-x-1
          "
        />
      </Link>
    </article>
  );
}