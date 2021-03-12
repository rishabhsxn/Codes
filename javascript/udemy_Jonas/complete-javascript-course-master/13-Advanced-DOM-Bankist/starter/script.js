'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Implement Smooth scroll to section 1 on LearnMore button
document.querySelector('.btn--scroll-to').addEventListener('click', function(event){
  const section1 = document.querySelector('#section--1');

  // // old way
  // // console.log('Button Position:', event.target.getBoundingClientRect())
  // const s1Coordinates = section1.getBoundingClientRect();
  // console.log('Current Section1 Position:', s1Coordinates);
  // console.log('Current Scrolled(x, y):', window.pageXOffset, window.pageYOffset);
  // console.log('Scrolled Distance(x, y):', s1Coordinates.x + window.pageXOffset, s1Coordinates.y + window.pageYOffset)
  // // window.scrollTo(s1Coordinates.x + window.pageXOffset, s1Coordinates.y + window.pageYOffset);
  // // for smooth scrolling:
  // window.scrollTo({
  //   left: s1Coordinates.x + window.pageXOffset, 
  //   top: s1Coordinates.y + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  // for getting current height and width'
  // console.log('Height, Width:', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // new way
  section1.scrollIntoView({ behavior: 'smooth' });
});


// Implement Page Navigation using Event Delegation (IMPORTANT)

// 1. Page Navigation without Event Delegation
/* But this solution is inefficient because we are adding the same eventListener to many elements and a lot of copies
of the same function are created. This will lead to performance degradation if there were many such elements. */
// document
//   .querySelectorAll('.nav__link')
//   .forEach(function(navLink){
//     navLink.addEventListener('click', function(event){
//       // prevent sudden jump to html
//       event.preventDefault();

//       // find to which section we have to scroll
//       const id = navLink.getAttribute('href');

//       // scroll to the section
//       document
//         .querySelector(id)
//         .scrollIntoView({behavior: 'smooth'});
      
//     });
//   });

// 2. Page Navigation using Event Delegation
/* We can use the bubbling phase by adding event listener to the parent of all the elements & use the 'target' to implement
page navigation. We just have to create one event listener. */
document
  .querySelector('.nav__links')
  .addEventListener('click', function(event){
    event.preventDefault();

    // check if this click event came from any of the 'nav__link' elements
    if(event.target.classList.contains('nav__link')){
      const id = event.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
    }
  });


// ------------------------- IMPLEMENT TABBED COMPONENT (OPERATIONS SECTION) -----------------------------
const tabContainer = document.querySelector('.operations__tab-container');
const tabButtons = document.querySelectorAll('.operations__tab');
const tabContents = document.querySelectorAll('.operations__content');

// Add Event Listener using Event Delegation
tabContainer.addEventListener('click', function(event){
  const clickedTab = event.target.closest('.operations__tab');    // to get the button even when it's span element is clicked

  // if clickedTab is null (when not clicked on button but on somewhere in the container), ignore the click
  if(!clickedTab) return;   // guard clause

  // Elevate Clicked Tab: Remove 'active' from all tabs & add in the clicked tab
  tabButtons.forEach( tab => tab.classList.remove('operations__tab--active'));
  clickedTab.classList.add('operations__tab--active');

  /* Reveal Clicked Tab Content:
  1. Find id of tab content from button's dataset
  2. Remove 'active' from all tab-contents & add to the clicked tab */
  const tabContentId = clickedTab.dataset.tab;
  tabContents.forEach(tabContent => tabContent.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${tabContentId}`)
    .classList.add('operations__content--active');
});



/* IMPLEMENT FADE OUT EFFECT ON NAVIGATION BAR MENU LINKS
All the links except the one on which the mouse is hovering should become blur and when the mouse leaves, all
links should become normal.
1. When mouse hover over a link. mouseover is similar to mouseenter except that mouseenter do not bubble
2. When mouse leaves the link, undo the effect */

const navLinks = document.querySelector('.nav__links');
const handleHover = function(event){
  if(event.target.classList.contains('nav__link')){
    // get all siblings
    const siblings = event.target.closest('.nav__links').querySelectorAll('.nav__link');

    // IMPORTANT: In forEach loop we have to use an Arrow function only so that 'this' will get its value from other function
    siblings.forEach(link => {
      if(link !== event.target)
        link.style.opacity = this;
    });
  }
};

// IMPORTANT: We have to bind the opacity value to handleHover to pass it as an Argument (not real) in the addEventListener callback
navLinks.addEventListener('mouseover', handleHover.bind(0.5));
navLinks.addEventListener('mouseout', handleHover.bind(1));