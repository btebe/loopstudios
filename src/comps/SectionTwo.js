import React from "react";
import Card from "../comps/Card";
import { data } from "../comps/Data";
function SectionTwo() {
  return (
    <section className='grid-container-sectionTwo grid'>
      <header>
        <h2>Our creations</h2>
      </header>
      <a href='seeAll' className='btn'>
        See All
      </a>

      <div className='card-container'>
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
      </div>
    </section>
  );
}

export default SectionTwo;
