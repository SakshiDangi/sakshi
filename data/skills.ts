export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Building intelligent educational systems and AI-powered learning experiences.",
    skills: [
      "OpenAI",
      "Prompt Engineering",
      "RAG",
      "AI Agents",
      "Knowledge Graphs",
      "Adaptive Learning",
      "Learning Analytics",
    ],
  },

  {
    title: "Frontend",
    description:
      "Modern web interfaces with excellent developer experience.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
  },

  {
    title: "Backend",
    description:
      "Scalable backend systems and APIs.",
    skills: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Authentication",
    ],
  },

  {
    title: "Blockchain",
    description:
      "Protocol engineering and smart contract security.",
    skills: [
      "Solidity",
      "Bridge Security",
      "Foundry",
      "EVM",
      "Protocol Design",
      "Cross-chain",
    ],
  },

  {
    title: "Research",
    description:
      "Education, AI, and systems thinking.",
    skills: [
      "Educational Technology",
      "Learning Science",
      "Mathematics",
      "Research Writing",
      "System Design",
    ],
  },
];