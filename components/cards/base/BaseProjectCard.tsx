import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";


import { AnimatedFade } from "@/components/animations/AnimatedFade";

import { SkillBadge } from "@/components/ui/SkillBadge";

import { cn } from "@/lib/utils";




export interface ProjectAction {

  label:string;

  href:string;

  external?:boolean;

}





export interface BaseProjectCardProps {

  title:string;

  description:string;

  image:string;

  technologies:string[];

  featured?:boolean;


  category?:string;


  role?:string;


  primaryAction:ProjectAction;


  secondaryAction?:ProjectAction;


  className?:string;

}







export function BaseProjectCard({

title,

description,

image,

technologies,

featured=false,

category,

role,

primaryAction,

secondaryAction,

className,

}:BaseProjectCardProps){



return (

<AnimatedFade>


<article


className={cn(

`
group

overflow-hidden

rounded-3xl

border

bg-card/80

shadow-sm

backdrop-blur

transition-all

duration-300


hover:-translate-y-2

hover:border-primary/30

hover:shadow-2xl

`,

className

)}

>



{/* Image */}


<div

className="
relative
aspect-[16/10]
overflow-hidden
"

>


<Image


src={image}

alt={title}

fill


className="

object-cover

transition-transform

duration-700

group-hover:scale-110

"


priority={featured}


/>



<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/40
via-transparent
to-transparent
"

/>




{featured && (

<div

className="
absolute
left-5
top-5
"

>

<SkillBadge

variant="primary"

>

Featured

</SkillBadge>


</div>


)}


</div>







{/* Content */}



<div

className="
flex
flex-col
gap-6
p-8

"

>




{/* Metadata */}



<div

className="
flex
flex-wrap
items-center
gap-3

"

>


{category && (

<SkillBadge

variant="secondary"

>

{category}

</SkillBadge>


)}


</div>







<h3

className="

text-3xl

font-bold

leading-tight

tracking-[-0.03em]

transition-colors

group-hover:text-primary

"

>


{title}


</h3>








<p

className="
text-base

leading-8

text-muted-foreground

"

>


{description}


</p>







{role && (

<p

className="
text-sm
font-medium
text-primary

"

>

{role}

</p>


)}







{/* Technologies */}


<div

className="
flex
flex-wrap
gap-2

"

>


{technologies.map((tech)=>(


<SkillBadge

key={tech}

variant="outline"

size="sm"

>

{tech}

</SkillBadge>



))}


</div>








{/* Actions */}



<div

className="
flex
flex-wrap
gap-3
pt-2

"

>



<Link


href={primaryAction.href}


target={
primaryAction.external
?
"_blank"
:
undefined
}


className="

inline-flex

items-center

gap-2


rounded-xl


bg-primary


px-6


py-3


text-sm


font-semibold


text-primary-foreground


transition


hover:opacity-90


"


>


{primaryAction.label}


<ArrowRight

className="
size-4
transition-transform
group-hover:translate-x-1
"

/>



</Link>








{secondaryAction && (


<Link


href={secondaryAction.href}


target={
secondaryAction.external
?
"_blank"
:
undefined
}


className="

inline-flex

items-center

gap-2


rounded-xl


border


px-6


py-3


text-sm


font-semibold


transition


hover:bg-muted


"


>


{secondaryAction.label}


{secondaryAction.external && (

<ExternalLink

className="size-4"

/>

)}


</Link>


)}



</div>




</div>





</article>


</AnimatedFade>

);


}