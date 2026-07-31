"use client";

import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";


interface ResearchContentProps {
  children: ReactNode;
}


export function ResearchContent({
  children,
}: ResearchContentProps) {
  return (
    <section className="py-20">

      <Container className="max-w-4xl">

        <article
          className="
            prose
            prose-lg
            max-w-none

            prose-headings:
            scroll-mt-24

            prose-headings:
            font-bold

            prose-p:
            leading-8

            prose-p:
            text-muted-foreground

            prose-li:
            leading-8

            prose-strong:
            text-foreground

            prose-a:
            text-primary

            prose-a:
            font-medium

            prose-blockquote:
            border-l-primary

            prose-blockquote:
            text-muted-foreground

            dark:prose-invert
          "
        >

          {children}

        </article>

      </Container>

    </section>
  );
}