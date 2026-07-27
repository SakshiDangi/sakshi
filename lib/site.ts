export const siteConfig = {


  // ==========================
  // Identity
  // ==========================

  name:
    "DreamHack",


  author:
    "DreamHack",



  description:
    "Bridge Security Researcher, Smart Contract Auditor, and Full Stack AI Developer specializing in secure cross-chain infrastructure.",



  // ==========================
  // Contact
  // ==========================

  email:
    "0xdreamhack@gmail.com",


  resume:
    "/resume.pdf",



  // ==========================
  // Social
  // ==========================

  github:
    "https://github.com/SakshiDangi",


  linkedin:
    "https://linkedin.com/in/yourusername",


} as const;



export type SiteConfig =
  typeof siteConfig;