export interface Skill {

 name:string;


 category:
 | "Blockchain"
 | "AI"
 | "Frontend"
 | "Backend"
 | "Security"
 | "Tools";


 level?:
 "Beginner"
 | "Intermediate"
 | "Advanced"
 | "Expert";

}