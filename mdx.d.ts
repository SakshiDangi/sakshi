declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { ContentMetadata } from "@/types/content";

  const MDXComponent: ComponentType;

  export default MDXComponent;

  export const metadata: ContentMetadata;
}