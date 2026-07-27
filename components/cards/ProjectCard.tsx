import {
  BaseProjectCard,
  type BaseProjectCardProps,
} from "./base/BaseProjectCard";



export interface ProjectCardProps
extends Omit<
  BaseProjectCardProps,
  "primaryAction" | "secondaryAction"
>{

  github?:string;

  demo?:string;

  href?:string;

}






export function ProjectCard({

github,

demo,

href,

...props

}:ProjectCardProps){



return (

<BaseProjectCard


{...props}



primaryAction={


{

label:
"View Case Study",


href:
href ?? "/projects",


}


}



secondaryAction={


demo

?

{

label:
"Live Demo",

href:
demo,

external:true,

}

:

github

?

{

label:
"GitHub",

href:
github,

external:true,

}

:

undefined



}


/>

);


}