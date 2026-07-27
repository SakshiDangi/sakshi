import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

import type { Stat } from "@/data/stats";

interface AboutStatsProps {
  stats: Stat[];
}

export function AboutStats({
  stats,
}: AboutStatsProps) {
  return (
    <Section spacing="lg">
      <SectionTitle
        eyebrow="Highlights"
        title="Experience at a Glance"
        description="A snapshot of my background and work."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <AnimatedFade key={stat.label}>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-4xl font-bold text-primary">
                {stat.value}
              </h3>

              <p className="mt-3 font-semibold">
                {stat.label}
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {stat.description}
              </p>
            </div>
          </AnimatedFade>
        ))}
      </div>
    </Section>
  );
}