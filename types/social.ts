export interface SocialLink {

  id: string;

  name: string;

  href: string;


  icon:
    | "github"
    | "linkedin"
    | "email"
    | "twitter"
    | "discord"
    | "resume";


  description?: string;

  username?: string;

  external?: boolean;

  featured?: boolean;

}