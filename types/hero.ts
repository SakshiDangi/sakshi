export interface Hero {

  badge:
    string;


  title:
    string;


  subtitle:
    string;


  description:
    string;


  primaryAction:
    ButtonLink;


  secondaryAction:
    ButtonLink;


  image:
    ImageData;


  stats:
    HeroStat[];

}



export interface ButtonLink {

  label:
    string;


  href:
    string;

}



export interface ImageData {

  src:
    string;


  alt:
    string;

}



export interface HeroStat {

  label:
    string;


  value:
    string;

}