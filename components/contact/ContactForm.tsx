"use client";


export function ContactForm(){

return (

<form
className="
space-y-5
rounded-2xl
border
bg-card
p-8
"
>


<input
placeholder="Name"
className="
w-full
rounded-lg
border
p-3
"
/>


<input
placeholder="Email"
type="email"
className="
w-full
rounded-lg
border
p-3
"
/>


<textarea
placeholder="Message"
rows={5}
className="
w-full
rounded-lg
border
p-3
"
/>


<button
type="submit"
className="
rounded-lg
bg-primary
px-6
py-3
text-primary-foreground
"
>
Send Message
</button>


</form>

);

}