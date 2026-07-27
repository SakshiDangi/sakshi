export interface ContentItem {

 slug:string;

 title:string;

 description:string;


 category:string;


 date?:string;


 tags?:string[];


 href:string;


 image?:string;

}

export interface ContentMetadata {
  slug: string;

  title: string;

  description: string;

  date: string;

  author: string;

  tags: string[];

  featured?: boolean;
}