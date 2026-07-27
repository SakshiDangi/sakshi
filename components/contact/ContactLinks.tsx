import Link from "next/link";

interface ContactLink {
 name:string;
 url:string;
}


interface ContactLinksProps {
 links:ContactLink[];
}


export function ContactLinks({
 links,
}:ContactLinksProps){

return (

<div className="
grid
gap-4
sm:grid-cols-2
">

{
links.map((link)=>(

<Link
key={link.name}
href={link.url}
target={
 link.url.startsWith("http")
 ? "_blank"
 : undefined
}
className="
rounded-xl
border
bg-card
p-5
transition
hover:-translate-y-1
hover:shadow-lg
"
>

<h3 className="
font-semibold
">
{link.name}
</h3>

<p className="
mt-2
text-sm
text-muted-foreground
">
{link.url}
</p>


</Link>

))
}

</div>

);

}