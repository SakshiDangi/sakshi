"use client";

import Link from "next/link";

import {
  BookOpen,
  Copy,
  Download,
  ExternalLink,
  Tags,
} from "lucide-react";

import { FaGit } from "react-icons/fa";

import type { ResearchPaper } from "@/types/research-paper";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/Container";

interface ResearchMetadataProps {
  paper: ResearchPaper;
}

export function ResearchMetadata({
  paper,
}: ResearchMetadataProps) {
  return (
    <section className="py-14">
      <Container className="max-w-5xl">

        <div
          className="
            grid
            gap-5
            lg:grid-cols-2
          "
        >

          {/* Research Areas */}

          <MetadataCard
            icon={<BookOpen className="h-4 w-4" />}
            title="Research Areas"
          >
            <div className="mt-5 flex flex-wrap gap-2">
              {paper.researchAreas.map((area) => (
                <Badge
                  key={area}
                  variant="secondary"
                  className="
                    rounded-md
                    px-3
                    py-1
                    text-xs
                    font-medium
                  "
                >
                  {area}
                </Badge>
              ))}
            </div>
          </MetadataCard>

          {/* Keywords */}

          <MetadataCard
            icon={<Tags className="h-4 w-4" />}
            title="Keywords"
          >
            <div className="mt-5 flex flex-wrap gap-2">
              {paper.keywords.map((keyword) => (
                <Badge
                  key={keyword}
                  variant="outline"
                  className="
                    rounded-md
                    px-3
                    py-1
                    text-xs
                  "
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </MetadataCard>

          {/* Related Projects */}

          <MetadataCard
            icon={<ExternalLink className="h-4 w-4" />}
            title="Related Projects"
          >
            <div className="mt-4">
              {paper.relatedProjects.map((project) => (
                <Link
                  key={project}
                  href={`/projects/${project}`}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    py-3
                    text-sm
                    transition-colors
                    last:border-none
                    hover:text-primary
                  "
                >
                  <span className="capitalize">
                    {project.replace(/-/g, " ")}
                  </span>

                  <ExternalLink className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </MetadataCard>

          {/* Resources */}

          <MetadataCard
            icon={<Download className="h-4 w-4" />}
            title="Resources"
          >
            <div className="mt-5 flex flex-col gap-2">

              <Link
                href={paper.pdf}
                target="_blank"
              >
                <Button
                  size="sm"
                  className="w-full justify-start"
                >
                  <Download className="mr-2 h-4 w-4" />

                  Download PDF
                </Button>
              </Link>

              {paper.github && (
                <Link
                  href={paper.github}
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <FaGit className="mr-2 h-4 w-4" />

                    GitHub Repository
                  </Button>
                </Link>
              )}

              {paper.demo && (
                <Link
                  href={paper.demo}
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />

                    Live Demo
                  </Button>
                </Link>
              )}

            </div>
          </MetadataCard>

          {/* Citation */}

          <Card
            className="
              rounded-xl
              border
              bg-background
              p-6
              shadow-sm
              transition-shadow
              hover:shadow-md
              lg:col-span-2
            "
          >
            <CardHeading
              icon={<Copy className="h-4 w-4" />}
              title="Citation"
            />

            <div
              className="
                mt-5
                rounded-lg
                border
                bg-muted/20
                p-5
                font-mono
                text-[13px]
                leading-7
              "
            >
              {paper.citation ??
                `${paper.author} (${paper.publicationDate}). ${paper.title}. ${paper.series}. Version ${paper.version}.`}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="mt-5"
            >
              <Copy className="mr-2 h-4 w-4" />

              Copy Citation
            </Button>

          </Card>

        </div>

      </Container>
    </section>
  );
}

interface MetadataCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function MetadataCard({
  title,
  icon,
  children,
}: MetadataCardProps) {
  return (
    <Card
      className="
        rounded-xl
        border
        bg-background
        p-6
        shadow-sm
        transition-shadow
        hover:shadow-md
      "
    >
      <CardHeading
        title={title}
        icon={icon}
      />

      {children}

    </Card>
  );
}

interface CardHeadingProps {
  title: string;
  icon: React.ReactNode;
}

function CardHeading({
  title,
  icon,
}: CardHeadingProps) {
  return (
    <div className="flex items-center gap-2">

      <div className="text-primary">
        {icon}
      </div>

      <h2
        className="
          text-sm
          font-semibold
          tracking-wide
        "
      >
        {title}
      </h2>

    </div>
  );
}