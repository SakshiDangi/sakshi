import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

interface AboutSkillsProps {
  categories: SkillCategory[];
}

export function AboutSkills({
  categories,
}: AboutSkillsProps) {
  return (
    <Section spacing="lg">
      <SectionTitle
        eyebrow="Expertise"
        title="Technical Skills"
        description="Technologies, research areas, and tools I use to build AI-powered educational systems and secure software."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <AnimatedFade key={category.title}>
            <article className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill}
                    variant="outline"
                    size="sm"
                  >
                    {skill}
                  </SkillBadge>
                ))}
              </div>
            </article>
          </AnimatedFade>
        ))}
      </div>
    </Section>
  );
}