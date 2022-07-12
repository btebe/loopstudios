import React from "react";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
function Footer() {
  return (
    <div className='bg-dark '>
      <div className="container grid grid-container--footer flow--footer">
        <h1 className='logo text-white fm-alata'>loopstudios</h1>
        <ul className='footer--brands flex underline-indicators--social'>
          <li>
            <img src={facebook} alt='facebook' />
          </li>
          <li>
            <img src={twitter} alt='twitter' />
          </li>
          <li>
            <img src={pinterest} alt='pinterest' />
          </li>
          <li>
            <img src={instagram} alt='instagram' />
          </li>
        </ul>

        <ul className='footer--nav flex text-white underline-indicators'>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        <p className='footer--publish text-dark-gray'>

          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>

    </div>
  );
}

export default Footer;
