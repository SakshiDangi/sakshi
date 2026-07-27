import type { ProjectChallenge } from "@/types/project";

interface ChallengesCardProps {
  challenges: ProjectChallenge[];
}

export function ChallengesCard({
  challenges,
}: ChallengesCardProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">
        Challenges
      </h2>

      {challenges.map((item) => (
        <div
          key={item.challenge}
          className="rounded-xl border p-6"
        >
          <h3 className="font-semibold">
            {item.challenge}
          </h3>

          <p className="mt-3 text-muted-foreground">
            {item.solution}
          </p>
        </div>
      ))}
    </section>
  );
}