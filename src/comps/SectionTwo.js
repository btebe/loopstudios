import React from "react";
import Card from "../comps/Card";
import { data } from "../comps/Data";
function SectionTwo() {
  return (
    <section className='grid-container-sectionTwo grid'>
      <h1>Our creations</h1>
      <a href='seeAll' className='btn'>
        See All
      </a>

      <article className='card-container'>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              dimg={item.dimg}
              mimg={item.mimg}
              alt={item.alt}
            />
          );
        })}
      </article>
    </section>
  );
}

export default SectionTwo;
