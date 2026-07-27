import { SkillBadge } from "@/components/ui/SkillBadge";


interface TechnologySectionProps {

technologies:string[];

}



export function TechnologySection({
technologies,
}:TechnologySectionProps){


return (

<div className="flex flex-wrap gap-3">


{
technologies.map((tech)=>(

<SkillBadge
key={tech}
variant="outline"
>

{tech}

</SkillBadge>

))
}


</div>

);

}