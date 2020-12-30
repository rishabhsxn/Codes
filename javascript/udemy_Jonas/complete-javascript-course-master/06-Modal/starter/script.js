'use strict';

// selecting the elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// this will have multiple button elements
const btn_showModal = document.querySelectorAll(".show-modal");
const btn_closeModal = document.querySelector(".close-modal");

// functions
const showModal = function(){
    console.log("Show Modal button pressed")
}

const closeModal = function(){
    console.log("Close Modal button pressed")
}

// add eventlistner to the buttons
for(let i=0; i<btn_showModal.length; i++)
    btn_showModal[i].addEventListener("click", showModal)

btn_closeModal.addEventListener("click", closeModal)