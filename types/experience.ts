export interface Experience {

  id: string;


  title: string;


  organization?: string;


  description: string;


  period: string;


  location?: string;


  type:
    | "Education"
    | "Work"
    | "Research"
    | "Project"
    | "Self-Learning";


  technologies?: string[];


  achievements?: string[];


  featured?: boolean;

}