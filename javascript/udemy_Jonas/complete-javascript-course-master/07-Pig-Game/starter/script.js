'use strict';

// global variables
let activePlayer, currentScore;
const score = [0, 0];
let isPlaying;

// select the elements to manipulate
const diceImage = document.querySelector(".dice");
const player1_Element = document.querySelector(".player--0");
const player2_Element = document.querySelector(".player--1");

const btn_rollDice = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const btn_newGame = document.querySelector(".btn--new");



const init = function(){
    // set isPlaying to true
    isPlaying = true;

    // reset Total score of both players (variable and visually)
    score[0] = score[1] = 0;
    document.getElementById("score--0").textContent = 0;
    document.getElementById("score--1").textContent = 0;

    // reset CurrentScore of both players (variable and visually)
    currentScore = 0;
    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--0").textContent = 0;

    // set activePlayer=0 and visually
    activePlayer = 0;
    player1_Element.classList.add("player--active");
    player2_Element.classList.remove("player--active");

    // make dice invisible
    diceImage.classList.add("hidden");
}

// initialize the game
init();


// functions
const rollDice = function(){
    if(isPlaying){
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
}

const hold = function(){
    if(isPlaying){
        // add the currentScore to totalScore of activePlayer (variable and visually)
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        // make currentScore=0 (variable and visually)
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        // check if the total score of active player is >= 100, he wins and end game(roll dice and hold should not work)
        if(score[activePlayer] >= 20){
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            player1_Element.classList.remove("player--active");
            player2_Element.classList.remove("player--active");

            isPlaying = false;
        }
        // toggle player if no win yet
        else{
            activePlayer = activePlayer === 0 ? 1 : 0;
            player1_Element.classList.toggle("player--active");
            player2_Element.classList.toggle("player--active");
        }
    }
}

const newGame = function(){
    // remove player--winner class
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    init();
}


// add event listeners to all buttons
btn_rollDice.addEventListener("click", rollDice);
btn_hold.addEventListener("click", hold);
btn_newGame.addEventListener("click", newGame);