import { MDXRemote } from "next-mdx-remote/rsc";

import {
  Algorithm,
  Callout,
  Citation,
  Definition,
  Equation,
  Figure,
  FigureGrid,
  PaperSection,
  Quote,
  Table,
} from "./base";

interface MDXRendererProps {
  source: string;
}

const components = {
  Figure,
  FigureGrid,
  Table,
  Equation,
  Definition,
  Callout,
  Citation,
  Quote,
  Algorithm,
  PaperSection,
};

export function MDXRenderer({
  source,
}: MDXRendererProps) {
  return (
    <article className="research-paper">
      <MDXRemote
        source={source}
        components={components}
      />
    </article>
  );
}