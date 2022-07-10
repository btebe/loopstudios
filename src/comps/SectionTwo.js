import React from 'react'
import Card from "../comps/Card";
import { data } from "../comps/Data";
function SectionTwo() {

  return (
    <section className='grid-container-sectionTwo grid'>

      <h1>Our creations</h1>
      <button className='btn'>See All</button>

      <div className="card-container">
        {data.map((item, index) => {
          return (
            <Card key={index} title={item.title}
              dimg={item.dimg} mimg={item.mimg} />

          )
        })}


      </div>
    </section>
  )
}

export default SectionTwo
