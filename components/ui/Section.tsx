import * as React from "react";

import { cn } from "@/lib/utils";

import { Container } from "@/components/ui/Container";



type SectionBackground =
  | "default"
  | "muted"
  | "transparent";



export interface SectionProps
extends React.HTMLAttributes<HTMLElement> {


children:
React.ReactNode;


id?: string;


background?: SectionBackground;


container?: boolean;


spacing?:
"xs"
|
"sm"
|
"md"
|
"lg"
|
"xl";


as?: React.ElementType;

}




export function Section({

as:Component="section",

children,

className,

id,

background="default",

container=true,

spacing="lg",

...props

}:SectionProps){


return (

<Component


id={id}


className={cn(


`
relative
overflow-hidden
`,



background==="default" &&
"bg-background",



background==="muted" &&
`
bg-muted/40
`,



background==="transparent" &&
"bg-transparent",






spacing==="xs" &&
`
py-10
md:py-12
`,



spacing==="sm" &&
`
py-14
md:py-20
`,



spacing==="md" &&
`
py-20
md:py-28
`,



spacing==="lg" &&
`
py-24
md:py-36
`,



spacing==="xl" &&
`
py-32
md:py-44
`,



className

)}


{...props}

>



{container ? (

<Container>

{children}

</Container>


)

:

children

}



</Component>


);


}