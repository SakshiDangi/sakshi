"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";

interface TocItem {
  id: string;
  number: string;
  title: string;
  description?: string;
}

interface ResearchTableOfContentsProps {
  items: TocItem[];
}

export function ResearchTableOfContents({
  items,
}: ResearchTableOfContentsProps) {
  return (
    <section className="border-b py-20">
      <Container className="max-w-4xl">

        <div className="sticky top-24">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Contents
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
            "
          >
            Table of Contents
          </h2>

        </div>

        <div className="space-y-5">

          {items.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="
                group
                block
                rounded-2xl
                border
                p-6
                transition-all
                hover:border-primary
                hover:bg-muted/40
              "
            >
              <div className="flex gap-6">

                <div
                  className="
                    w-12
                    shrink-0
                    text-3xl
                    font-bold
                    text-primary
                  "
                >
                  {item.number}
                </div>

                <div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                      transition-colors
                      group-hover:text-primary
                    "
                  >
                    {item.title}
                  </h3>

                  {item.description && (
                    <p
                      className="
                        mt-2
                        leading-7
                        text-muted-foreground
                      "
                    >
                      {item.description}
                    </p>
                  )}

                </div>

              </div>

            </Link>
          ))}

        </div>

      </Container>
    </section>
  );
}