import { AnimatedFade } from "@/components/animations/AnimatedFade";

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  achievements: string[];
}

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export function ExperienceTimeline({
  experience,
}: ExperienceTimelineProps) {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold">
          Professional Experience
        </h2>

        <p className="mt-3 text-muted-foreground">
          My journey across education,
          artificial intelligence,
          educational technology,
          and secure software engineering.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-px bg-border" />

        <div className="space-y-12">
          {experience.map((item) => (
            <AnimatedFade key={`${item.period}-${item.role}`}>
              <div className="relative flex gap-6">
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-background
                    font-semibold
                    text-primary
                  "
                >
                  ●
                </div>

                <div
                  className="
                    flex-1
                    rounded-2xl
                    border
                    bg-card
                    p-6
                    shadow-sm
                  "
                >
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
                    <div>
                      <h3 className="text-xl font-bold">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-primary">
                        {item.organization}
                      </p>
                    </div>

                    <div className="text-sm text-muted-foreground md:text-right">
                      <p>{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3"
                      >
                        <span className="mt-1 text-primary">
                          ✓
                        </span>

                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedFade>
          ))}
        </div>
      </div>
    </section>
  );
}