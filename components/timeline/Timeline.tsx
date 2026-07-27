import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

import {
  TimelineItem,
  type TimelineItemData,
} from "./TimelineItem";

export interface TimelineProps {
  eyebrow?: string;

  title: string;

  description?: string;

  items: TimelineItemData[];
}

export function Timeline({
  eyebrow = "Journey",
  title,
  description,
  items,
}: TimelineProps) {
  return (
    <Section spacing="lg">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="relative mt-12 border-l border-border">
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Section>
  );
}