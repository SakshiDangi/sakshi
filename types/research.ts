export interface Research {

  slug: string;


  title: string;


  description: string;


  category:
    | "Bridge Security"
    | "Smart Contract Security"
    | "Blockchain"
    | "Cryptography"
    | "AI Security"
    | "Protocol Research";


  date: string;


  readTime?: string;


  tags: string[];


  featured: boolean;


  href: string;


  github?: string;


  paper?: string;


  findings?: string[];


}