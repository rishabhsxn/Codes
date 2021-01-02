'use strict';

// global variables
let activePlayer, currentScore;

// select the elements to manipulate
const diceImage = document.querySelector(".dice");
const player1_Element = document.querySelector(".player--0");
const player2_Element = document.querySelector(".player--1");

const btn_rollDice = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const btn_newGame = document.querySelector(".btn--new");



// set the game to initial stage i.e. score = 0 and no dice visible
document.getElementById("score--0").textContent = 0;
document.getElementById("score--1").textContent = 0;
diceImage.classList.add("hidden");
activePlayer = 0;
currentScore = 0;


// functions
const rollDice = function(){
    // generate a random number 1 to 6
    const diceNumber = Math.trunc(Math.random()*6) + 1;

    // set diceImage of that number and unhide
    diceImage.classList.remove("hidden")
    diceImage.src = `dice-${diceNumber}.png`

    // if the number is not equal to 1, add it to currentScore(variable and display) of activePlayer
    if(diceNumber !== 1){
        currentScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    // if it is 1, set currentScore(variable and display) of activePlayer=0, toggle activePlayer(variable and visual)
    else{
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        activePlayer = activePlayer === 0 ? 1 : 0;
        player1_Element.classList.toggle("player--active");
        player2_Element.classList.toggle("player--active");
    }
    
}

const hold = function(){

}

const newGame = function(){

}


// add event listeners to all buttons
btn_rollDice.addEventListener("click", rollDice);
btn_hold.addEventListener("click", hold);
btn_newGame.addEventListener("click", newGame);