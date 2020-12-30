'use strict';


// select the elements to manipulate

const diceImage = document.querySelector(".dice");

// buttons
const btn_rollDice = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const btn_newGame = document.querySelector(".btn--new");

// scores
const player1_score = document.querySelector("#score--0");
const player1_currentScore = document.querySelector("#current--0");

const player2_score = document.querySelector("#score--1");
const player2_currentScore = document.querySelector("#current--1");



// set the game to initial stage i.e. score = 0 and no dice visible
player1_score.textContent = 0;
player2_score.textContent = 0;
diceImage.style.display = "none";