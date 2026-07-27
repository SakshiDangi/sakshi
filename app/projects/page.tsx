import type { Metadata } from "next";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Bridge security research, AI systems, protocol engineering, and production-ready applications.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const categories = [
    "All",
    ...new Set(
      projects.map((project) => project.category)
    ),
  ];

  return (
    <>
      <Section className="pt-24">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <SectionTitle
            eyebrow="Portfolio"
            title="Projects"
            description="Production-ready systems spanning bridge security, AI-powered education, protocol engineering, and blockchain infrastructure."
          />
        </div>
      </Section>

      <Section>
        <SectionTitle
          title="Featured Projects"
          description="Highlighted work demonstrating engineering depth and real-world impact."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              href={`/projects/${project.slug}`}
              featured
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          title="Categories"
          description="Browse projects by technical focus."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-full border px-4 py-2 text-sm font-medium"
            >
              {category}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          title="All Projects"
          description="Complete portfolio of research, engineering, and hackathon work."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              href={`/projects/${project.slug}`}
              featured={project.featured}
            />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}