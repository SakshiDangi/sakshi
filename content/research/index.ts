import type { ComponentType } from "react";

import type { ContentMetadata } from "@/types/content";

import AdaptiveLearning, {
  metadata as adaptiveLearningMetadata,
} from "./adaptive-learning.mdx";

export interface ResearchArticle extends ContentMetadata {
  Component: ComponentType;
  readingTime?: string;
}

export const researchArticles: ResearchArticle[] = [
  {
    ...adaptiveLearningMetadata,
    Component: AdaptiveLearning,
  },
];