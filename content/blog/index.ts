import type { ComponentType } from "react";

import type { ContentMetadata } from "@/types/content";

export interface BlogPost extends ContentMetadata {
  Component: ComponentType;
}

export const blogPosts: BlogPost[] = [];