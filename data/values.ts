import {
  BookOpen,
  Brain,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

export interface Value {
  title: string;
  description: string;
  icon: typeof GraduationCap;
}

export const values: Value[] = [
  {
    title: "Education First",
    description:
      "Every technical decision begins with improving learning outcomes for students and educators.",
    icon: GraduationCap,
  },
  {
    title: "Research Driven",
    description:
      "I build solutions informed by educational research, adaptive learning, and learning analytics.",
    icon: BookOpen,
  },
  {
    title: "AI with Purpose",
    description:
      "Artificial intelligence should personalize learning, support teachers, and make education more accessible.",
    icon: Brain,
  },
  {
    title: "Trust & Security",
    description:
      "Reliable educational systems require privacy, transparency, and secure software engineering.",
    icon: ShieldCheck,
  },
];