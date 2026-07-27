import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface AboutHeroProps {
  title: string;
  subtitle: string;
}

export function AboutHero({
  title,
  subtitle,
}: AboutHeroProps) {
  return (
    <Section spacing="xl" container={false}>
      <Container>
        <AnimatedFade>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Me
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </AnimatedFade>
      </Container>
    </Section>
  );
}