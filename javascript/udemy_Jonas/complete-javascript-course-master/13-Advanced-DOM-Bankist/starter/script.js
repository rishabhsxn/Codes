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