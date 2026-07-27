import type { ProjectArchitectureNode } from "@/types/project";

interface ArchitectureTimelineProps {
  architecture: ProjectArchitectureNode[];
}

export function ArchitectureTimeline({
  architecture,
}: ArchitectureTimelineProps) {
  return (
    <section className="rounded-2xl border bg-card p-6">
      <h2 className="text-2xl font-bold">
        Architecture
      </h2>

      <div className="mt-8 space-y-6">
        {architecture.map((node, index) => (
          <div
            key={node.title}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </div>

              {index < architecture.length - 1 && (
                <div className="mt-2 h-10 w-px bg-border" />
              )}
            </div>

            <div className="pb-6">
              <h3 className="font-semibold">
                {node.title}
              </h3>

              {node.description && (
                <p className="mt-2 text-muted-foreground">
                  {node.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}