import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ResearchPaperLayout } from "@/components/research";
import { research } from "@/data";

import { researchToc } from "@/data/research-toc";

import { researchReferences } from "@/data/research-references";

import {
  MDXRenderer,
} from "@/components/research";

import {
  getResearchContent,
} from "@/lib/mdx";

interface ResearchPageProps {
  params: Promise<{
    slug:string;
  }>;

}


export async function generateStaticParams(){

  return research.map(
    (paper)=>({

      slug:
        paper.slug,

    })
  );


}


export async function generateMetadata({

  params,

}:ResearchPageProps):Promise<Metadata>{

  const {
    slug,
  } = await params;

  const paper =
    research.find(
      (item)=>
        item.slug === slug
    );

  if(!paper){

    return {};

  }

  return {
    title:
      `${paper.title} | Research`,

    description:
      paper.description,

    openGraph:{

      title:
        paper.title,


      description:
        paper.description,


      type:
        "article",
    },

  };
}


export default async function ResearchPage({

  params,

}:ResearchPageProps){


  const {
    slug,
  } = await params;


  const paper =
    research.find(
      (item)=>
        item.slug === slug
    );


  if(!paper){

    notFound();
  }


  const currentPaper = paper;

  const toc =
    researchToc[
      currentPaper.slug
    ] ?? [];


  const references =
    researchReferences[
      currentPaper.slug
    ] ?? [];


  const researchContent =
    getResearchContent(
      currentPaper.slug
    );


  return (

  <ResearchPaperLayout

    paper={
      currentPaper
    }

    toc={
      toc
    }

    references={
      references
    }

  >

    {
      researchContent ? (

        <MDXRenderer

          source={
            researchContent.content
          }

        />

      ) : (

        <div
          className="
            rounded-xl
            border
            p-8
            text-muted-foreground
          "
        >

          Research content is coming soon.

        </div>

      )
    }

  </ResearchPaperLayout>

);

}