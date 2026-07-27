import { AnimatedFade } from "@/components/animations/AnimatedFade";
import { SectionTitle } from "@/components/ui/SectionTitle";


interface ContactHeroProps {
  title:string;
  description:string;
}


export function ContactHero({
 title,
 description,
}:ContactHeroProps){

 return (

 <AnimatedFade>

  <div className="
    mx-auto
    max-w-4xl
    text-center
  ">

   <SectionTitle
    eyebrow="Contact"
    title={title}
    description={description}
   />

  </div>

 </AnimatedFade>

 );

}