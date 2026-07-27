import type { Metadata } from "next";


import {
 contactInfo,
} from "@/data/contact";


import { Section } from "@/components/ui/Section";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactLinks } from "@/components/contact/ContactLinks";
import { ContactForm } from "@/components/contact/ContactForm";


export const metadata:Metadata={
 title:"Contact",

 description:
 "Contact an AI engineer and educational technology researcher building adaptive learning systems.",
};



export default function ContactPage(){

return (

<>

<Section spacing="lg">

<ContactHero
title={contactInfo.title}
description={contactInfo.description}
/>


</Section>


<Section>

<ContactLinks
links={contactInfo.links}
/>

</Section>



<Section spacing="lg">

<div className="
mx-auto
max-w-3xl
">

<ContactForm/>

</div>


</Section>


</>

);

}