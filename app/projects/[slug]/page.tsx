import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  projects,
} from "@/data/projects";

import {
  ProjectCaseStudy,
} from "@/components/projects";



interface ProjectPageProps {

  params: Promise<{
    slug: string;
  }>;

}



// ============================
// Generate SEO Metadata
// ============================

export async function generateMetadata(
  {
    params,
  }: ProjectPageProps
): Promise<Metadata> {


  const {
    slug,
  } = await params;


  const project =
    projects.find(
      (item) =>
        item.slug === slug
    );


  if (!project) {

    return {};

  }



  return {

    title:
      project.title,


    description:
      project.description,


    openGraph: {

      title:
        project.title,


      description:
        project.description,


      images: [
        project.image,
      ],

    },

  };

}



// ============================
// Page
// ============================

export default async function ProjectPage(
  {
    params,
  }: ProjectPageProps
) {


  const {
    slug,
  } = await params;



  const project =
    projects.find(
      (item) =>
        item.slug === slug
    );



  if (!project) {

    notFound();

  }



  return (

    <main
      className="
      mx-auto
      max-w-7xl
      px-6
      py-20
      "
    >

      <ProjectCaseStudy
        project={project}
      />

    </main>

  );

}