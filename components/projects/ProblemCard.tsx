interface ProblemCardProps {
  problem: string[];
}

export function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <section className="rounded-2xl border bg-card p-6">
      <h2 className="text-2xl font-bold">Problem</h2>

      <ul className="mt-6 space-y-3">
        {problem.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-border/50 bg-muted/30 p-4 text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}