import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  ExternalLink,
  User,
} from "lucide-react";

import {
  SiGithub,
} from "react-icons/si";

import type {
  Project,
} from "@/types";

import {
  SkillBadge,
} from "@/components/ui/SkillBadge";



interface ProjectHeroProps {
  project: Project;
}



const buttonClasses = {
  primary: `
    inline-flex
    items-center
    justify-center
    rounded-lg
    bg-primary
    px-5
    py-3
    text-sm
    font-medium
    text-primary-foreground
    transition-colors
    hover:bg-primary/90
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
  `,

  outline: `
    inline-flex
    items-center
    justify-center
    rounded-lg
    border
    border-border
    bg-background
    px-5
    py-3
    text-sm
    font-medium
    transition-colors
    hover:bg-muted
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
  `,
};



export function ProjectHero({
  project,
}: ProjectHeroProps) {

  return (

    <section
      className="
        grid
        gap-16
        lg:grid-cols-2
        lg:items-center
      "
    >


      {/* ============================
          Left Content
      ============================ */}

      <div
        className="
          flex
          flex-col
          gap-8
        "
      >


        {/* Category */}

        <SkillBadge
          variant="primary"
          className="w-fit"
        >
          {project.category}
        </SkillBadge>



        {/* Title */}

        <div className="space-y-5">

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            {project.title}
          </h1>

          <p
            className="
              max-w-2xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            {project.description}
          </p>

        </div>



        {/* Metadata */}

        <div
          className="
            flex
            flex-wrap
            gap-6
            text-sm
            text-muted-foreground
          "
        >

          {project.role && (

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <User className="size-4" />

              <span>
                <strong className="text-foreground">
                  Role:
                </strong>{" "}
                {project.role}
              </span>

            </div>

          )}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <Calendar className="size-4" />

            <span>
              <strong className="text-foreground">
                Year:
              </strong>{" "}
              {project.year}
            </span>

          </div>

        </div>



        {/* Technologies */}

        <div
          className="
            flex
            flex-wrap
            gap-2
          "
        >

          {project.technologies.map((technology) => (

            <SkillBadge
              key={technology}
              variant="outline"
              size="sm"
            >
              {technology}
            </SkillBadge>

          ))}

        </div>



        {/* Links */}

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          {project.github && (

            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses.outline}
            >
              <SiGithub className="mr-2 size-4" />

              GitHub
            </Link>

          )}

          {project.demo && (

            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses.primary}
            >
              <ExternalLink className="mr-2 size-4" />

              Live Demo
            </Link>

          )}

        </div>

      </div>



      {/* ============================
          Project Preview
      ============================ */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          bg-card
          shadow-xl
        "
      >

        <div
          className="
            relative
            aspect-video
          "
        >

          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

        </div>

      </div>

    </section>

  );

}