import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface AboutMissionProps {
  title: string;
  description: string;
}

export function AboutMission({
  title,
  description,
}: AboutMissionProps) {
  return (
    <Section spacing="lg" background="muted">
      <AnimatedFade>
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle
            eyebrow="Mission"
            title={title}
            description={description}
          />
        </div>
      </AnimatedFade>
    </Section>
  );
}