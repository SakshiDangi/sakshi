export interface BlogPost {

  slug: string;


  title: string;


  description: string;


  content?: string;


  image?: string;


  category:
    | "Security"
    | "Blockchain"
    | "AI"
    | "Development"
    | "Research"
    | "Tutorial";


  date: string;


  updatedAt?: string;


  readTime?: string;


  tags: string[];


  featured?: boolean;


  href?: string;


  externalUrl?: string;


  github?: string;


  author?: string;

}