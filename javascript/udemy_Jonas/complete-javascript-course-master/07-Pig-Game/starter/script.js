'use strict';


// select the elements to manipulate

const diceImage = document.querySelector(".dice");

// buttons
const btn_rollDice = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const btn_newGame = document.querySelector(".btn--new");

// scores
const player1_score = document.getElementById("score--0");
const player1_currentScore = document.getElementById("current--0");

const player2_score = document.getElementById("score--1");
const player2_currentScore = document.getElementById("current--1");



// set the game to initial stage i.e. score = 0 and no dice visible
player1_score.textContent = 0;
player2_score.textContent = 0;
diceImage.style.display = "none";


// functions
const rollDice = function(){

}

const hold = function(){

}

const newGame = function(){

}


// add event listeners to all buttons
btn_rollDice.addEventListener("click", rollDice);
btn_hold.addEventListener("click", hold);
btn_newGame.addEventListener("click", newGame);