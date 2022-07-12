import React from "react";
import { useMediaQuery } from "react-responsive";

function Card({ title, dimg, mimg, alt }) {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  return (
    <a href='something' className='card'>
      <div className='img-gradient'>
        <h1 className='uppercase'>
          {title[0]} <br /> {title[1]}
        </h1>
        {isMobile ? <img src={mimg} alt={alt} /> : <img src={dimg} alt={alt} />}
      </div>
    </a>
  );
}

export default Card;
