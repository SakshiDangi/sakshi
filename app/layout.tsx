import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
  Inter,
} from "next/font/google";

import "./globals.css";


import {
  seoConfig,
} from "@/data";


import {
  siteConfig,
} from "@/lib/site";


import { ThemeProvider } from "@/components/providers/ThemeProvider";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { JsonLd } from "@/components/seo/JsonLd";




// =====================================
// Fonts
// =====================================


const geist = Geist({

  variable:
    "--font-geist-sans",

  subsets:
    ["latin"],

  display:
    "swap",

});



const geistMono = Geist_Mono({

  variable:
    "--font-geist-mono",

  subsets:
    ["latin"],

  display:
    "swap",

});




const inter = Inter({

  variable:
    "--font-inter",

  subsets:
    ["latin"],

  display:
    "swap",

});







// =====================================
// Metadata
// =====================================


export const metadata: Metadata = {


  metadataBase:
    new URL(
      seoConfig.url
    ),



  title: {

    default:
      seoConfig.title,


    template:
      `%s | ${siteConfig.name}`,

  },



  description:
    seoConfig.description,



  keywords:
    seoConfig.keywords,



  authors:[

    {
      name:
        siteConfig.name,
    }

  ],



  creator:
    siteConfig.name,



  publisher:
    siteConfig.name,



  category:
    "Technology",



  alternates: {

    canonical:
      seoConfig.url,

  },



  openGraph:{


    type:
      "website",


    locale:
      "en_US",


    url:
      seoConfig.url,


    siteName:
      siteConfig.name,


    title:
      seoConfig.title,


    description:
      seoConfig.description,


    images:[

      {

        url:
          "/opengraph-image",


        width:
          1200,


        height:
          630,


        alt:
          `${siteConfig.name} portfolio preview`,

      }

    ]

  },



  twitter:{


    card:
      "summary_large_image",


    title:
      seoConfig.title,


    description:
      seoConfig.description,


    images:[

      "/opengraph-image"

    ]

  },



  robots:{


    index:
      true,


    follow:
      true,

  },


};








// =====================================
// Root Layout
// =====================================


interface RootLayoutProps {

  children:
    React.ReactNode;

}




export default function RootLayout({

  children,

}:Readonly<RootLayoutProps>) {


return (

<html

lang="en"

suppressHydrationWarning

>


<body
  className={`
    ${geist.variable}
    ${geistMono.variable}
    ${inter.variable}
    min-h-screen
    bg-background
    font-sans
    text-foreground
    antialiased
    selection:bg-primary/20
    selection:text-foreground
  `}
>



<JsonLd />



<ThemeProvider>



<div

className="
flex
min-h-screen
flex-col
"

>



<Navbar />



<main

className="
flex-1
"

>

{children}

</main>



<Footer />



</div>


</ThemeProvider>



</body>


</html>


);


}