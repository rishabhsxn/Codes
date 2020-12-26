'use strict';

// selecting elements
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Answer!"

document.querySelector(".score").textContent = 30;
document.querySelector(".highscore").textContent = 50;

document.querySelector(".number").textContent = 10

// selecting input element
document.querySelector(".guess").value = 10;