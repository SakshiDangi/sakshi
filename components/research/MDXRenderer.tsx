import { MDXRemote } from "next-mdx-remote/rsc";


import {

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

} from "./base";



interface MDXRendererProps {

  source:string;

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

}:MDXRendererProps){


  return (

    <article

      className="
        prose
        prose-neutral
        dark:prose-invert
       
        max-w-none
       
        prose-headings:font-semibold
        prose-headings:tracking-tight
       
        prose-h1:text-4xl
        prose-h2:text-3xl
        prose-h3:text-2xl
       
        prose-headings:mt-16
        prose-headings:mb-6
       
        prose-p:text-lg
        prose-p:leading-8
       
        prose-p:mb-8
       
        prose-li:text-lg
        prose-li:leading-8
       
        prose-blockquote:my-10
       
        prose-img:rounded-2xl
       
        prose-pre:rounded-xl
       
        "
    >

      <MDXRemote

        source={
          source
        }

        components={
          components
        }

      />

    </article>

  );

}