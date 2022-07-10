import React from "react";
import { useMediaQuery } from "react-responsive";

function Card({ title, dimg, mimg }) {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  return (
    <div className='card'>
      <div className='img-gradient'>
        <h1 className='uppercase'>
          {title[0]} <br /> {title[1]}
        </h1>
        {isMobile ? (
          <img src={mimg} alt='gallery' />
        ) : (
          <img src={dimg} alt='gallery' />
        )}
      </div>
    </div>
  );
}

export default Card;
