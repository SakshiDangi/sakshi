import {
 BaseContentCard,
 type BaseContentCardProps
}
from "./base/BaseContentCard";


export function BlogCard(
 props: Omit<BaseContentCardProps,"category">
){

 return (

  <BaseContentCard

    {...props}

    category="Blog"

    actionLabel="Read Article"

  />

 );

}