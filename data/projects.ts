import { Project } from "../types/project";

export const sakshion: Project = {
  slug: "sakshion",

  title: "Sakshion",

  tagline:
    "An AI-powered adaptive learning platform that personalizes education through diagnostics, knowledge graphs, digital twins, and learning analytics.",

  description:
    "Sakshion is an intelligent learning platform that adapts educational content to every learner. It combines educational research, artificial intelligence, and secure software engineering to build personalized learning experiences with measurable outcomes.",

  category: "Education AI",

  status: "In Development",

  year: "2026",

  featured: true,

  role: "Founder • AI Engineer • Full Stack Developer",

  image:
    "/images/projects/sakshion/hero.png",

  github:
    "https://github.com/yourusername/sakshion",

  demo:
    "https://sakshion.vercel.app",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "OpenAI",
    "Knowledge Graph",
    "Digital Twin",
    "Drizzle ORM",
    "PostgreSQL",
    "pnpm",
    "Turborepo",
  ],

  problem: [
    "Traditional education delivers identical learning experiences regardless of a student's existing knowledge.",

    "Teachers often lack actionable insights into how learners understand individual concepts.",

    "Most AI tutoring systems lose long-term learning context between sessions.",

    "Learning progress is difficult to verify using evidence beyond quizzes and completion percentages.",

    "Educational systems rarely combine personalization, analytics, and verifiable learning records in one platform.",
  ],

  solution: [
    "Adaptive diagnostic assessments estimate a learner's current mastery before instruction begins.",

    "A knowledge graph models prerequisite relationships between concepts.",

    "A digital learner twin continuously represents each student's knowledge state.",

    "Personalized learning roadmaps recommend the next best concepts to study.",

    "An AI tutor provides explanations based on each learner's current understanding.",

    "Practice sessions adapt dynamically using mastery estimates and previous performance.",

    "Learning analytics visualize progress for students and educators.",

    "Every learning event can be cryptographically verified through Finality.",
  ],

  architecture: [
    {
      title: "Student",
      description:
        "Learner creates an account and begins the onboarding process.",
    },

    {
      title: "Diagnostic",
      description:
        "Adaptive assessment estimates concept mastery and identifies knowledge gaps.",
    },

    {
      title: "Knowledge Graph",
      description:
        "Prerequisite relationships organize concepts into a structured learning network.",
    },

    {
      title: "Digital Twin",
      description:
        "Maintains an evolving model of learner mastery, confidence, and progress.",
    },

    {
      title: "Roadmap",
      description:
        "Generates personalized learning paths based on prerequisite dependencies.",
    },

    {
      title: "Tutor",
      description:
        "AI generates explanations and examples appropriate for the learner's current level.",
    },

    {
      title: "Practice",
      description:
        "Adaptive exercises reinforce weak concepts and improve long-term retention.",
    },

    {
      title: "Analytics",
      description:
        "Dashboards visualize mastery growth, learning behavior, and educational progress.",
    },
  ],

  features: [
  {
    title: "Adaptive Diagnostic Assessment",
    description:
      "Evaluates learner knowledge before instruction begins.",
  },
  {
    title: "Knowledge Graph Engine",
    description:
      "Models prerequisite relationships between concepts.",
  },
  {
    title: "Digital Learner Twin",
    description:
      "Maintains an evolving representation of learner mastery.",
  },
  {
    title: "AI Tutoring",
    description:
      "Provides personalized explanations and feedback.",
  },
],

  challenges: [
  {
    challenge:
      "Designing scalable knowledge graph traversal algorithms.",
    solution:
      "Implemented efficient graph traversal with prerequisite optimization.",
  },
  {
    challenge:
      "Estimating learner mastery from limited assessment data.",
    solution:
      "Combined adaptive diagnostics with continuous mastery updates.",
  },
],

  future: [
  {
    title: "Teacher Dashboard",
  },
  {
    title: "Parent Dashboard",
  },
  {
    title: "Research Analytics Dashboard",
  },
],

  gallery: [
  {
    src: "/images/projects/sakshion/dashboard.png",
    alt: "Student dashboard",
  },
  {
    src: "/images/projects/sakshion/diagnostic.png",
    alt: "Diagnostic assessment",
  },
  {
    src: "/images/projects/sakshion/knowledge-graph.png",
    alt: "Knowledge graph visualization",
  },
  {
    src: "/images/projects/sakshion/digital-twin.png",
    alt: "Digital learner twin",
  },
  {
    src: "/images/projects/sakshion/roadmap.png",
    alt: "Personalized roadmap",
  },
  {
    src: "/images/projects/sakshion/tutor.png",
    alt: "AI tutor interface",
  },
  {
    src: "/images/projects/sakshion/practice.png",
    alt: "Adaptive practice session",
  },
  {
    src: "/images/projects/sakshion/analytics.png",
    alt: "Learning analytics dashboard",
  },
],

  seo: {
    title:
      "Sakshion | AI Adaptive Learning Platform",

    description:
      "Sakshion is an AI-powered adaptive learning platform combining diagnostic assessment, knowledge graphs, digital twins, personalized tutoring, learning analytics, and verifiable educational progress.",
  },
};

export const projects: Project[] = [
  sakshion,
];