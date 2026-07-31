import fs from "fs";
import path from "path";
import matter from "gray-matter";


const researchDirectory =
  path.join(
    process.cwd(),
    "content/research"
  );



export interface ResearchMDX {

  content:string;

  metadata:{

    title:string;

    author:string;

    description:string;

    date:string;

    version:string;

    keywords:string[];

  };

}




export function getResearchContent(
  slug:string
): ResearchMDX | undefined {


  const filePath =
    path.join(
      researchDirectory,
      `${slug}.mdx`
    );



  if(
    !fs.existsSync(filePath)
  ){

    return undefined;

  }



  const file =
    fs.readFileSync(
      filePath,
      "utf8"
    );



  const {
    data,
    content,
  } =
    matter(file);



  return {


    content,


    metadata:{

      title:
        data.title ?? "",


      author:
        data.author ?? "",


      description:
        data.description ?? "",


      date:
        data.date ?? "",


      version:
        data.version ?? "1.0",


      keywords:
        data.keywords ?? [],

    },


  };

}