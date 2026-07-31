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
    <section className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Research Areas */}

          <Card className="h-full rounded-3xl p-8">
            <CardHeading
              icon={<BookOpen className="h-5 w-5" />}
              title="Research Areas"
            />

            <div className="mt-6 flex flex-wrap gap-3">
              {paper.researchAreas.map((area) => (
                <Badge
                  key={area}
                  variant="secondary"
                  className="rounded-full px-4 py-2"
                >
                  {area}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Keywords */}

          <Card className="h-full rounded-3xl p-8">
            <CardHeading
              icon={<Tags className="h-5 w-5" />}
              title="Keywords"
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {paper.keywords.map((keyword) => (
                <Badge
                  key={keyword}
                  variant="outline"
                  className="rounded-full"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Related Projects */}

          <Card className="rounded-3xl p-8">
            <CardHeading
              icon={<ExternalLink className="h-5 w-5" />}
              title="Related Projects"
            />

            <div className="mt-6 space-y-3">
              {paper.relatedProjects.map((project) => (
                <Link
                  key={project}
                  href={`/projects/${project}`}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    p-4
                    transition-colors
                    hover:bg-muted/50
                  "
                >
                  <span className="font-medium capitalize">
                    {project.replace(/-/g, " ")}
                  </span>

                  <ExternalLink className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </Card>

          {/* Resources */}

          <Card className="rounded-3xl p-8">
            <CardHeading
              icon={<Download className="h-5 w-5" />}
              title="Resources"
            />

            <div className="mt-6 flex flex-col gap-4">

              <Link
                href={paper.pdf}
                target="_blank"
              >
                <Button className="w-full">
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
                    variant="outline"
                    className="w-full"
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
                    variant="outline"
                    className="w-full"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />

                    Live Demo
                  </Button>
                </Link>
              )}

            </div>
          </Card>

          {/* Citation */}

          <Card className="rounded-3xl p-8 lg:col-span-2">
            <CardHeading
              icon={<Copy className="h-5 w-5" />}
              title="Citation"
            />

            <div
              className="
                mt-6
                rounded-2xl
                border
                bg-muted/40
                p-6
                font-mono
                text-sm
                leading-7
              "
            >
              {paper.citation ??
                `${paper.author} (${paper.publicationDate}). ${paper.title}. ${paper.series}. Version ${paper.version}.`}
            </div>

            <Button
              variant="outline"
              className="mt-6"
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

interface CardHeadingProps {
  title: string;
  icon: React.ReactNode;
}

function CardHeading({
  title,
  icon,
}: CardHeadingProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-primary">
        {icon}
      </div>

      <h2
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.2em]
          text-muted-foreground
        "
      >
        {title}
      </h2>
    </div>
  );
}