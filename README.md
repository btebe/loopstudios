# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![1](./src/screenshots/loopstudios_desktop.png)
![2](./src/screenshots/loopstudios_tablet.png)
![3](./src/screenshots/loopstudios_mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

There are three topics i learnt. first is how to overlap columns and rows in a grid. Second is how to underline in a hovered state of an item but with a shorter width than usual. Thirdly, i learnt how to partial overlay a card by not effecting the text and also when in hovered state to get rid of that overlay with an opacity by using pesuedos.

To see how you can add code snippets, see below:

```css
/* column overlap */
.grid-container-sectionOne > article {
  grid-column: 2/-1;
  align-self: center;
  margin-top: 13rem;
  width: 100%;
}
/* underline-indicator */
.underline-indicators > li::after {
  content: "";
  position: relative;
  bottom: 0;
  top: 40%;
  left: -50%;
  transform: translate(50%, -40%);
  display: block;
  background: none repeat scroll 0 0 transparent;
  height: 2px;
  width: 0;
  background: hsl(var(--white));
}
.underline-indicators > li:hover::after,
.underline-indicators > li:focus::after {
  width: 50%;
  left: 0;
}

/* overlay */

.img-gradient {
  position: relative;
}

.img-gradient::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    hsl(var(--black) / 0.7) 100%
  );
}
.card:hover {
  cursor: pointer;
}
.img-gradient:hover::after {
  content: "";
  display: none;
}
.img-gradient:hover img {
  opacity: 0.5;
}

.img-gradient:hover h1 {
  color: hsl(var(--black)) !important;
  z-index: 3000;
}
```

### Continued development

I had issues with the responsiveness of the website. I would like to write less code to achieve this.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=HFG3BKOqOlE) - This helped me to understand grid column overlapping.

## Author

- Website - [Basma Tebe](https://basma94tebe.wixsite.com/my-site)
- Frontend Mentor - [@btebe](https://www.frontendmentor.io/profile/btebe)

## Acknowledgments

I would like to give my gratitude to Kevin Powel for posting a video on Youtube about overlaping content in css grid. Also i would acknowledge the stackoverFlow community for their helpful solutions and tips on various topics on css.
