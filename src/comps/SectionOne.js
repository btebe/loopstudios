import React from "react";
import image1 from "../images/desktop/image-interactive.jpg";
import image2 from "../images/mobile/image-interactive.jpg";
import { useMediaQuery } from "react-responsive";
function SectionOne() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  return (
    <section className='grid-container-sectionOne grid'>
      {isTabletOrMobile ? (
        <img src={image2} alt='image' />
      ) : (
        <img src={image1} alt='image' />
      )}

      <article>
        <header className='header--sectionOne'>
          <div className="flow">
            <h1>The leader in interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class virtual
              reality projects for some of the best companies around the globe.
              Our award-winning creations have transformed businesses through
              digital experiences that bind to their brand.
            </p>
          </div>

        </header>
      </article>
    </section>
  );
}

export default SectionOne;