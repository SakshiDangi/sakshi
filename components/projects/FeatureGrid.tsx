import type { ProjectFeature } from "@/types/project";

interface FeaturesGridProps {
  features: ProjectFeature[];
}

export function FeaturesGrid({
  features,
}: FeaturesGridProps) {
  return (
    <section
      className="
        grid
        gap-6
        md:grid-cols-2
      "
    >
      {features.map((feature) => (
        <article
          key={feature.title}
          className="
            rounded-2xl
            border
            bg-card
            p-6
            shadow-sm
            transition-all
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <h3 className="text-lg font-semibold">
            {feature.title}
          </h3>

          <p className="mt-3 leading-7 text-muted-foreground">
            {feature.description}
          </p>
        </article>
      ))}
    </section>
  );
}