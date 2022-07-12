import React, { useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);

  const burger = () => setShow(!show);
  return (
    <header className='container primary-header flex'>
      <h1 className='logo text-white fm-alata'>loopstudios</h1>
      <button
        className='mobile-nav-toggle'
        aria-controls='primary-navation'
        aria-expanded={show ? "true" : "false"}
        onClick={burger}
      >
        <span className='sr-only'>Menu</span>
      </button>
      <nav
        id='primary-navation'
        className='primary-nav flex text-white'
        data-visible={show ? "true" : "false"}
      >
        <ul className='flex text-black underline-indicators'>
          <li>
            <a href='about'>About</a>
          </li>
          <li>
            <a href='career'>Carees</a>
          </li>
          <li>
            <a href='event'>Events</a>
          </li>
          <li>
            <a href='products'>Products</a>
          </li>
          <li>
            <a href='support'>Suport</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
