import { ExternalLink } from "lucide-react";

import type { ResearchReference } from "@/types";

import { Container } from "@/components/ui/Container";

interface ResearchReferencesProps {
  references: ResearchReference[];
}

export function ResearchReferences({
  references,
}: ResearchReferencesProps) {
  if (!references.length) {
    return null;
  }

  return (
    <section className="border-t py-16">

      <Container className="max-w-4xl">

        {/* Heading */}

        <div className="mb-10">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-muted-foreground
            "
          >
            References
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
            "
          >
            Bibliography
          </h2>

        </div>

        {/* References */}

        <div className="divide-y">

          {references.map((reference, index) => (

            <article
              key={reference.id}
              className="
                flex
                gap-5
                py-6
              "
            >

              {/* Number */}

              <div
                className="
                  w-10
                  shrink-0
                  text-sm
                  font-semibold
                  text-muted-foreground
                "
              >
                [{index + 1}]
              </div>

              {/* Content */}

              <div className="flex-1">

                <h3
                  className="
                    text-base
                    font-semibold
                    leading-7
                  "
                >
                  {reference.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    leading-6
                    text-muted-foreground
                  "
                >
                  {reference.authors}

                  {reference.year &&
                    ` (${reference.year})`}

                  {reference.source &&
                    ` • ${reference.source}`}
                </p>

                {reference.description && (

                  <p
                    className="
                      mt-3
                      text-[15px]
                      leading-7
                      text-muted-foreground
                    "
                  >
                    {reference.description}
                  </p>

                )}

                {reference.url && (

                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-primary
                      transition-colors
                      hover:underline
                    "
                  >
                    View Source

                    <ExternalLink className="h-4 w-4" />

                  </a>

                )}

              </div>

            </article>

          ))}

        </div>

      </Container>

    </section>
  );
}