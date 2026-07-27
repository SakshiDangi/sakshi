import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

import type { Value } from "@/data/values";

interface AboutValuesProps {
  values: Value[];
}

export function AboutValues({
  values,
}: AboutValuesProps) {
  return (
    <Section spacing="lg" background="muted">
      <SectionTitle
        eyebrow="Core Values"
        title="How I Build"
        description="The principles that guide every project I work on."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <AnimatedFade key={value.title}>
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>

                <h3 className="text-xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </AnimatedFade>
          );
        })}
      </div>
    </Section>
  );
}