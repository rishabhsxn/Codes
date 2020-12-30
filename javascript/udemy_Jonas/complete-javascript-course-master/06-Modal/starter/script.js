'use strict';

// selecting the elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// this will have multiple button elements
const btn_showModal = document.querySelectorAll(".show-modal");
const btn_closeModal = document.querySelector(".close-modal");

// functions
const showModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

const closeModalOnEscape = function(eventObject){
    // console.log(eventObject);
    // check if the key pressed is Escape and the modal is already visible
    if(eventObject.key === "Escape" && !modal.classList.contains("hidden"))
        closeModal();
}

// add event listener for the escape key, this is a global event so the event should be added to the doucment object
document.addEventListener("keydown", closeModalOnEscape)


// add eventlistner to the buttons
for(let i=0; i<btn_showModal.length; i++)
    btn_showModal[i].addEventListener("click", showModal)

btn_closeModal.addEventListener("click", closeModal)


// add event listener to overlay, so that on clicking on it, it closes the modal
overlay.addEventListener("click", closeModal);