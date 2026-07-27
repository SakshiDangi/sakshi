import type { ProjectFutureItem } from "@/types/project";

interface FutureRoadmapProps {
  items: ProjectFutureItem[];
}

export function FutureRoadmap({
  items,
}: FutureRoadmapProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">
        Future Roadmap
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 rounded-xl border p-4"
          >
            <span>🚀</span>

            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}