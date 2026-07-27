import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";


import { AnimatedFade } from "@/components/animations/AnimatedFade";

import { SkillBadge } from "@/components/ui/SkillBadge";

import { cn } from "@/lib/utils";




export interface BaseContentCardProps {


  badge:string;


  title:string;


  description:string;


  date:string;


  href:string;


  tags?:string[];


  actionLabel?:string;


  className?:string;

}





export function BaseContentCard({

badge,

title,

description,

date,

href,

tags=[],

actionLabel="Read More",

className,

}:BaseContentCardProps){



return (


<AnimatedFade>


<article

className={cn(

`
group
flex
h-full
flex-col

rounded-3xl

border

bg-card/80

p-8

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



{/* Top metadata */}


<div

className="
mb-7
flex
items-center
justify-between
gap-4
"

>



<SkillBadge

variant="secondary"

>

{badge}

</SkillBadge>





<div

className="
flex
items-center
gap-2

text-xs

font-medium

text-muted-foreground

"

>


<CalendarDays

className="
size-4
"

/>


<time dateTime={date}>

{date}

</time>


</div>



</div>





{/* Content */}



<div

className="
flex
flex-1
flex-col
"

>




<h3

className="
font-heading

text-2xl

font-bold

leading-tight

tracking-[-0.03em]

text-foreground

transition-colors

group-hover:text-primary

"

>


{title}


</h3>






<p

className="
mt-4

flex-1

text-base

leading-8

text-muted-foreground

"

>


{description}


</p>







{/* Tags */}


{tags.length > 0 && (


<div

className="
mt-7
flex
flex-wrap
gap-2
"

>


{tags.map((tag)=>(


<SkillBadge

key={tag}

variant="outline"

size="sm"

>

{tag}

</SkillBadge>


))}


</div>


)}






{/* Action */}


<Link


href={href}


className="
mt-8

inline-flex

items-center

gap-2

text-sm

font-semibold

text-primary

transition-colors

hover:text-primary/80

"


>


{actionLabel}


<ArrowRight

className="
size-4

transition-transform

duration-300

group-hover:translate-x-1

"

/>



</Link>




</div>




</article>


</AnimatedFade>


);


}