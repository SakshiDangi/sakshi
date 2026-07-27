import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data";

import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProjectsPreviewSection() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <Section spacing="xl">
      <AnimatedFade>
        <SectionTitle
          eyebrow="Projects"
          align="center"
          title="Featured Engineering Projects"
          description="
            Building AI platforms, blockchain infrastructure,
            and secure digital systems that combine research,
            engineering, and real-world impact.
          "
        />

        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-2
          "
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <div
          className="
            mt-16
            rounded-3xl
            border
            border-border/60
            bg-muted/30
            px-8
            py-10

            lg:flex
            lg:items-center
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
              "
            >
              Explore the complete portfolio
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-muted-foreground
              "
            >
              Discover detailed case studies, architecture,
              engineering decisions, and the technologies behind
              every project.
            </p>
          </div>

          <Link
            href="/projects"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-3

              text-base
              font-semibold
              text-primary

              transition-colors

              hover:text-primary/80

              lg:mt-0
            "
          >
            <span>View All Projects</span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-primary/10

                transition-all
                duration-300

                group-hover:bg-primary
                group-hover:text-primary-foreground
                group-hover:translate-x-1
              "
            >
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>
      </AnimatedFade>
    </Section>
  );
}

function ProjectCard({
  project,
}: {
  project: typeof projects[number];
}) {
  return (
    <article
      className="
        group
        overflow-hidden

        rounded-[32px]

        border
        border-border/60

        bg-card

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width:1024px)100vw,50vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/45
            via-transparent
            to-transparent
          "
        />

        <div
          className="
            absolute
            left-6
            top-6
          "
        >
          <span
            className="
              rounded-full

              bg-white/90

              px-4
              py-1.5

              text-xs
              font-semibold

              backdrop-blur
            "
          >
            {project.category}
          </span>
        </div>

        <div
          className="
            absolute
            bottom-6
            right-6

            rounded-full

            bg-black/60

            px-3
            py-1

            text-xs
            font-medium
            text-white

            backdrop-blur
          "
        >
          {project.year}
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        <h3
          className="
            text-2xl
            font-bold
            tracking-tight

            transition-colors

            group-hover:text-primary
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-3

            text-base
            font-medium

            text-foreground/80
          "
        >
          {project.tagline}
        </p>

        <p
          className="
            mt-5

            leading-8

            text-muted-foreground
          "
        >
          {project.description}
        </p>

        {/* Tech */}

        <div
          className="
            mt-8

            flex
            flex-wrap
            gap-2
          "
        >
          {project.technologies
            .slice(0, 5)
            .map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full

                  border
                  border-border/60

                  bg-background

                  px-3
                  py-1.5

                  text-xs
                  font-medium

                  text-muted-foreground
                "
              >
                {technology}
              </span>
            ))}
        </div>

        {/* Links */}

        <div
          className="
            mt-8

            flex
            items-center
            justify-between
          "
        >
          <Link
            href={`/projects/${project.slug}`}
            className="
              group/link

              inline-flex
              items-center
              gap-2

              font-semibold

              text-primary
            "
          >
            Case Study

            <ArrowRight
              className="
                size-4

                transition-transform
                duration-300

                group-hover/link:translate-x-1
              "
            />
          </Link>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="
                text-sm
                font-medium

                text-muted-foreground

                transition-colors

                hover:text-foreground
              "
            >
              GitHub ↗
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}