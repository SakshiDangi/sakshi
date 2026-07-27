import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface AboutTimelineProps {
  items: TimelineItem[];
}

export function AboutTimeline({
  items,
}: AboutTimelineProps) {
  return (
    <Section spacing="xl" container={false}>
      <Container>
        <SectionTitle
          eyebrow="Journey"
          title="Career Timeline"
          description="The path that shaped my work in education, AI, and secure systems."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-border" />

          <div className="space-y-12">
            {items.map((item) => (
              <AnimatedFade key={item.title}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 mt-1 flex h-10 w-10 items-center justify-center rounded-full border bg-background text-sm font-semibold">
                    •
                  </div>

                  <div className="flex-1 rounded-2xl border bg-card p-6 shadow-sm">
                    <p className="text-sm font-semibold text-primary">
                      {item.year}
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedFade>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}