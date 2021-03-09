'use strict';


// // ---------------------------- SELECTING, CREATING & DELETING ELEMENTS --------------------------------------

// // SELECTING
// // to apply css to whole page, we need to select the document element
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// // Some elements can be directly selected, whereas for others we can use the querySelector

// console.log(document.querySelector('.header'));

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// console.log(document.getElementById('section--1'));

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));
// /* IMPORTANT: 
// * Using querySelector we receive a NodeList. 
// * Using getElementsByTagName we receive a HTMLCollection. 
// * If we delete an element from the DOM, the HTMLCollection variable will be updated automatically whereas NodeList is not 
// updated. */


// // CREATING & INSERTING
// // .insertAdjacementHTML()

// // it returns a DOM element that we can store & modify. It is not yet inside the DOM. We can manually insert it in DOM.
// const message = document.createElement('div');      // Empty DOM element with tag name 'div'
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// const header = document.querySelector('.header');

// // INSERT AS CHILD ELEMENT
// header.prepend(message);    // adds as first child
// header.append(message);
// /* IMPORTANT: message is a live(Unique) DOM element, so it can't be present at multiple places.
// So, after pretend() it is inserted placed as 1st child.
// Then, because of append() it is shifted as the last child.
// So, prepend & append can also be used to shift DOM elements. */

// // if you want to place a DOM element at multiple places, then first make a clone of it.
// // header.prepend(message.cloneNode(true));    // parameter: whether to clone child elements also

// // // INSERT AS SIBLING ELEMENT
// // header.before(message);
// // header.after(message);


// // DELETING
// document
//     .querySelector('.btn--close-cookie')
//     .addEventListener('click', function(){
//         // message.remove();       // this is a recent method

//         // before this we could only remove child elements
//         message.parentElement.removeChild(message);
//     });



// // ----------------------------------------- STYLES ----------------------------------------

// message.style.backgroundColor = '#37383d';
// message.style.width = '103%';
// /* These styles are set as Inline styles i.e. they exist only in the DOM, not in the HTML doc.
// Using the style property, we can only retrieve properties that were set by us. We CAN'T retrieve html doc properties. */

// // For retrieving HTML doc style properties (Even that were not set by us but by browser)
// console.log(getComputedStyle(message).height);

// // using existing property's value to set a new value
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';


// /* Modifying CSS custom variables, variables that are defined in root
// :root {
//     --color-primary: #5ec576;
//     --color-secondary: #ffcb03;
//     --color-tertiary: #ff585f;
// } */
// document.documentElement.style.setProperty('--color-primary', 'orangered');


// // -------------------------------------- ATTRIBUTES ----------------------------------------
// // attributes are the properties that are attached with the Html Tags

// const logo = document.querySelector('.nav__logo');
// // using the element, we can only read & write standard properties of a tag
// console.log(logo.alt);
// console.log(logo.src);      // returns the absolute path. For relative path use getAttribute(). Same is true for Link (href)
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // for Non-standard properties
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');


// /* Data Attributes - These are the attributes whose name start with data-_______
// These data attributes are collectively stored in dataset.
// We work with data attributes quite alot when working on the UI, especially when we need to store the data in the 
// UI i.e. in the HTML */
// console.log(logo.dataset.versionNumber);


// // -------------------------------------- CLASSES ----------------------------------------
// // logo.classList.add();
// // logo.classList.remove();
// // logo.classList.toggle();
// // logo.classList.contains();

// // IMPORTANT: Don't use below mentioned way because it overwrites all the existing class
// // logo.className = 'Rishabh';



// // ------------------------------- EVENT HANDLERS -------------------------------------

// // ways to attach eventHandler
// const h1 = document.querySelector('h1');

// // 1 - new way
// const alertH1 = function(){
//     alert('addEventListener: You are reading the Heading!');

//     h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// // 2 - old way
// h1.onmouseenter = function(){
//     alert('onmouseenter: You are reading the Heading!');
// };

// // 3rd way is to add the eventListener in the HTML tag as an attribute - Very Old way

// /* IMPORTANT: using addEventListener is the best way because:
// a) you can add multiple eventHandlers (write again with other handler). In 2nd way, all other handlers are overwritten.
// b) We can also remove this event Listener. */



// // ---------------------------------------- CAPTURING & BUBBLING --------------------------------------------

// // generate random number
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// // generate random rgb color
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// // Event Listener on GrandParent
// document.querySelector('.nav').addEventListener('click', function(event){
//     this.style.backgroundColor = randomColor();
//     console.log('At GrandParent, target:', event.target);

//     // we can also get the current element, which is also where 'this' keyword is pointing
//     // console.log('Currently on:', event.currentTarget);
// }, true);   // Listening to Event in Capturing phase instead of bubbling phase

// // Event Listener on Parent
// document.querySelector('.nav__links').addEventListener('click', function(event){
//     this.style.backgroundColor = randomColor();
//     console.log('At Parent, target:', event.target);
//     // console.log('Currently on:', event.currentTarget);
// });

// // Event Listener on Child
// document.querySelector('.nav__link').addEventListener('click', function(event){
//     this.style.backgroundColor = randomColor();
//     console.log('At Child, target:', event.target);
//     // console.log('Currently on:', event.currentTarget);

//     // We can also stop the event from Propagation. But it is generally not a good practice
//     // event.stopPropagation();
// });



// -------------------------------------- DOM TRAVERSING ----------------------------------------
const h1 = document.querySelector('h1');

// ---------Going Downwards: Child
console.log(h1.querySelectorAll('.highlight'));    // search for a child element no matter how deep it is present
console.log(h1.childNodes);     // return all DIRECT child nodes (text, comments, elements) - NodeList
console.log(h1.children);       // return only DIRECT element childs - HTMLCollection
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// ---------Going Upwards: Parents
console.log(h1.parentNode);     // DIRECT parent node
console.log(h1.parentElement);      // DIRECT parent ELEMENT

h1.closest('header').style.background = 'var(--gradient-secondary)';    /* search for parent no matter how far it is. But returns 
closest found. It returns the same element on which it is called if that is the element name we passed */
h1.closest('h1').style.background = 'var(--gradient-primary)';

// ---------Going Sideways: Siblings
/* In JavaScript we can only select the direct siblings of an element i.e. previous & next */
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

/* To get all the siblings, select the Parent element & get all children */
console.log(h1.parentElement.children);