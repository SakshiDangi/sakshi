import { seoConfig } from "@/data";
import { siteConfig } from "@/lib/site";


export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: siteConfig.name,

    url: seoConfig.url,

    image: seoConfig.ogImage,


    jobTitle:
      "AI Engineer, Educational Technology Researcher, Blockchain Security Researcher",


    description:
      seoConfig.description,


    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
    ].filter(Boolean),


    knowsAbout: [

      "Artificial Intelligence",

      "Educational Technology",

      "Adaptive Learning Systems",

      "Learning Analytics",

      "Knowledge Graphs",

      "Digital Twins",

      "Blockchain Security",

      "Smart Contract Security",

      "Cross Chain Bridge Security",

      "Protocol Engineering",

    ],


    knowsLanguage: [
      "English",
    ],

  };


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(jsonLd),
      }}
    />
  );
}