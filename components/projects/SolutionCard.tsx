interface SolutionCardProps {
  solution: string[];
}

export function SolutionCard({
  solution,
}: SolutionCardProps) {
  return (
    <section className="rounded-2xl border bg-card p-6">
      <h2 className="text-2xl font-bold">Solution</h2>

      <ul className="mt-6 space-y-3">
        {solution.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-primary/20 bg-primary/5 p-4"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}