"use client";

import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { SkillBadge } from "@/components/ui/SkillBadge";

import { TimelineDot } from "./TimelineDot";

export interface TimelineItemData {
  id: string;

  year?: string;

  title: string;

  subtitle?: string;

  description?: string;

  tags?: string[];
}

export interface TimelineItemProps {
  item: TimelineItemData;

  delay?: number;
}

export function TimelineItem({
  item,
  delay = 0,
}: TimelineItemProps) {
  return (
    <AnimatedFade
      delay={delay}
      direction="up"
    >
      <article className="relative pb-12 pl-10">
        <TimelineDot />

        {item.year && (
          <p className="mb-2 text-sm font-semibold text-primary">
            {item.year}
          </p>
        )}

        <h3 className="text-xl font-bold">
          {item.title}
        </h3>

        {item.subtitle && (
          <p className="mt-1 text-muted-foreground">
            {item.subtitle}
          </p>
        )}

        {item.description && (
          <p className="mt-4 leading-7 text-muted-foreground">
            {item.description}
          </p>
        )}

        {item.tags?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <SkillBadge
                key={tag}
                size="sm"
              >
                {tag}
              </SkillBadge>
            ))}
          </div>
        ) : null}
      </article>
    </AnimatedFade>
  );
}