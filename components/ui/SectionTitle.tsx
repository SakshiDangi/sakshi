import * as React from "react";

import { cn } from "@/lib/utils";


type Alignment =
  | "left"
  | "center";



export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {


  eyebrow?: string;


  title: string;


  description?: string;


  align?: Alignment;

}




export function SectionTitle({

  eyebrow,

  title,

  description,

  align = "left",

  className,

  ...props

}: SectionTitleProps) {


return (

<div

className={cn(

`
mb-14
flex
max-w-4xl
flex-col
gap-5
`,

align === "center" &&
`
mx-auto
items-center
text-center
`,

className

)}

{...props}

>



{eyebrow && (

<span

className="
inline-flex
w-fit
items-center
rounded-full
border
bg-primary/10
border-primary/15
px-4
py-1.5
text-xs
font-semibold
uppercase
tracking-[0.25em]
text-primary
"

>

{eyebrow}

</span>

)}




<h2

className="
font-heading
text-4xl
font-extrabold
leading-[1.05]
tracking-[-0.04em]
text-foreground
md:text-5xl
lg:text-[3.4rem]
"

>

{title}

</h2>





{description && (

<p

className="
max-w-3xl
text-base
leading-9
text-muted-foreground
sm:text-lg
lg:text-xl
"

>

{description}

</p>

)}



</div>


);


}