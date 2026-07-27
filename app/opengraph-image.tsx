import {
  ImageResponse,
} from "next/og";


export const runtime = "edge";


export const alt =
"Portfolio - Blockchain Security Researcher";


export const size = {

  width:1200,
  height:630,

};


export const contentType =
"image/png";



export default function Image() {

return new ImageResponse(

<div

style={{

width:"100%",
height:"100%",

display:"flex",

flexDirection:"column",

justifyContent:"center",

alignItems:"center",

background:"#020617",

color:"white",

padding:"80px",

}}

>


<h1

style={{

fontSize:72,

fontWeight:800,

}}

>

Sakshi Dangi

</h1>


<p

style={{

fontSize:36,

marginTop:20,

}}

>

Blockchain Security Researcher

</p>


<p

style={{

fontSize:28,

marginTop:20,

opacity:0.8,

}}

>

Smart Contracts • Cross Chain Bridges • AI Systems

</p>


</div>,


{

width:1200,

height:630,

}

);


}