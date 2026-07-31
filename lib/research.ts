import { research } from "@/data";

import type {
  ResearchPaper,
} from "@/types/research-paper";



export function getResearchPapers(): ResearchPaper[] {
  return research;
}



export function getResearchPaper(
  slug: string
): ResearchPaper | undefined {

  return research.find(
    (paper) =>
      paper.slug === slug
  );

}



export function getFeaturedResearch(): ResearchPaper[] {

  return research.filter(
    (paper) =>
      paper.featured
  );

}



export function getPublishedResearch(): ResearchPaper[] {

  return research.filter(
    (paper) =>
      paper.status === "Published"
  );

}