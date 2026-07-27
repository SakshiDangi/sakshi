import { AnimatedFade } from "@/components/animations/AnimatedFade";

interface ResearchInterestsProps {
  interests: string[];
}

export function ResearchInterests({
  interests,
}: ResearchInterestsProps) {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold">
          Research Interests
        </h2>

        <p className="mt-3 text-muted-foreground">
          Areas I actively explore through research,
          experimentation, system design, and project
          development.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {interests.map((interest) => (
          <AnimatedFade key={interest}>
            <div
              className="
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
              <h3 className="font-semibold">
                {interest}
              </h3>
            </div>
          </AnimatedFade>
        ))}
      </div>
    </section>
  );
}