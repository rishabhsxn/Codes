'use strict';


// ---------------------------- SELECTING, CREATING & DELETING ELEMENTS --------------------------------------

// SELECTING
// to apply css to whole page, we need to select the document element
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Some elements can be directly selected, whereas for others we can use the querySelector

console.log(document.querySelector('.header'));

const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));
/* IMPORTANT: 
* Using querySelector we receive a NodeList. 
* Using getElementsByTagName we receive a HTMLCollection. 
* If we delete an element from the DOM, the HTMLCollection variable will be updated automatically whereas NodeList is not 
updated. */


// CREATING & INSERTING
// .insertAdjacementHTML()

// it returns a DOM element that we can store & modify. It is not yet inside the DOM. We can manually insert it in DOM.
const message = document.createElement('div');      // Empty DOM element with tag name 'div'
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('.header');

// INSERT AS CHILD ELEMENT
header.prepend(message);    // adds as first child
header.append(message);
/* IMPORTANT: message is a live(Unique) DOM element, so it can't be present at multiple places.
So, after pretend() it is inserted placed as 1st child.
Then, because of append() it is shifted as the last child.
So, prepend & append can also be used to shift DOM elements. */

// if you want to place a DOM element at multiple places, then first make a clone of it.
// header.prepend(message.cloneNode(true));    // parameter: whether to clone child elements also

// INSERT AS SIBLING ELEMENT
header.before(message);
header.after(message);


// DELETING
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function(){
        // message.remove();       // this is a recent method

        // before this we could only remove child elements
        message.parentElement.removeChild(message);
    });