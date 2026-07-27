import { GraduationCap, MapPin } from "lucide-react";

import { AnimatedFade } from "@/components/animations/AnimatedFade";

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year?: string;
  description?: string;
}

interface EducationSectionProps {
  education: EducationItem[];
}

export function EducationSection({
  education,
}: EducationSectionProps) {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold">
          Education
        </h2>

        <p className="mt-3 text-muted-foreground">
          Academic foundation that supports my work in
          artificial intelligence, educational technology,
          mathematics, and software engineering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <AnimatedFade
            key={`${item.degree}-${item.institution}`}
          >
            <article
              className="
                flex
                h-full
                flex-col
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
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-primary">
                    {item.institution}
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      items-center
                      gap-4
                      text-sm
                      text-muted-foreground
                    "
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>

                    {item.year && (
                      <span>{item.year}</span>
                    )}
                  </div>

                  {item.description && (
                    <p className="mt-5 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </article>
          </AnimatedFade>
        ))}
      </div>
    </section>
  );
}