import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface SkillsSummaryProps {
  skills: string[];
}

export function SkillsSummary({
  skills,
}: SkillsSummaryProps) {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold">
          Core Skills
        </h2>

        <p className="mt-3 text-muted-foreground">
          Technical, educational, and research skills that
          support my work across artificial intelligence,
          educational technology, and secure software
          engineering.
        </p>
      </div>

      <AnimatedFade>
        <div
          className="
            rounded-2xl
            border
            bg-card
            p-8
            shadow-sm
          "
        >
          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            {skills.map((skill) => (
              <SkillBadge
                key={skill}
                variant="secondary"
              >
                {skill}
              </SkillBadge>
            ))}
          </div>
        </div>
      </AnimatedFade>
    </section>
  );
}