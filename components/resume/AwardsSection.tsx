import { Award } from "lucide-react";

import { AnimatedFade } from "@/components/animations/AnimatedFade";

export interface AwardItem {
  title: string;
  description: string;
  year?: string;
}

interface AwardsSectionProps {
  awards: AwardItem[];
}

export function AwardsSection({
  awards,
}: AwardsSectionProps) {
  if (awards.length === 0) {
    return null;
  }

  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold">
          Awards & Achievements
        </h2>

        <p className="mt-3 text-muted-foreground">
          Hackathons, competitions, fellowships, and
          professional achievements that demonstrate
          continuous learning and innovation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {awards.map((award) => (
          <AnimatedFade
            key={`${award.title}-${award.year ?? ""}`}
          >
            <article
              className="
                flex
                h-full
                gap-4
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <Award className="h-6 w-6" />
              </div>

              <div className="flex-1">
                <div
                  className="
                    flex
                    flex-col
                    gap-2
                    md:flex-row
                    md:items-start
                    md:justify-between
                  "
                >
                  <h3 className="text-xl font-semibold">
                    {award.title}
                  </h3>

                  {award.year && (
                    <span
                      className="
                        text-sm
                        text-muted-foreground
                      "
                    >
                      {award.year}
                    </span>
                  )}
                </div>

                <p
                  className="
                    mt-4
                    leading-7
                    text-muted-foreground
                  "
                >
                  {award.description}
                </p>
              </div>
            </article>
          </AnimatedFade>
        ))}
      </div>
    </section>
  );
}