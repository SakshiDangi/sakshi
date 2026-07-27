export interface Project {
  slug: string;

  title: string;

  tagline: string;

  description: string;

  category: string;

  year: string;

  status: string;

  featured: boolean;

  role?: string;

  image: string;

  github?: string;

  demo?: string;

  technologies: string[];

  problem: string[];

  solution: string[];

  architecture: ProjectArchitectureNode[];

  features: ProjectFeature[];

  challenges: ProjectChallenge[];

  future: ProjectFutureItem[];

  gallery: ProjectGalleryImage[];

  seo: {
    title: string;
    description: string;
  };

  metrics?: {
    label: string;
    value: string;
  }[];
  
  highlights?: string[];
  
  duration?: string;
  
  teamSize?: string;
}

export interface ProjectArchitectureNode {
  title: string;
  description?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
}

export interface ProjectFutureItem {
  title: string;
}