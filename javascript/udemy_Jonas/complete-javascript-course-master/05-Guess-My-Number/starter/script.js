'use strict';

// selecting elements
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Answer!"

// document.querySelector(".score").textContent = 30;
// document.querySelector(".highscore").textContent = 50;

// document.querySelector(".number").textContent = 10

// // selecting input element
// document.querySelector(".guess").value = 10;


// generate Secret number (random number)
const secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
/* it is called a state variable, the data should also be present in the code, not just in the DOM */

// ------------- Adding Event handler for the button ---------------

/* The check button have two class name "btn check", since btn was also used for another button,
we used the check class to select the check button 
We are not calling the handler function but just passing it, the JavaScript Engine will execute it automatically
whenever the event happens */

document.querySelector(".check").addEventListener("click", function(){
    // the input will be string, so convert to number
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // if there is no number in input, guess will be zero which is a falsy value
    if(!guess){
        document.querySelector(".message").textContent = "⛔️ No Number!";
    }
    /* If the guess is correct, make the background Green, and double the width of holder where initially 
    question mark (?) was present */
    else if(guess === secretNumber){
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        
        // reveal the secret number
        document.querySelector(".number").textContent = secretNumber;

        // CSS manipulation -> it does not change the content of the css file, but place inline attributes in the html
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
    }
    /* when the guess is incorrect, decrease the score by 1 -> this should happen when score is above 1
    if the score becomes 1, make score 0 and print appropriate message */
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = "📈 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else{
            document.querySelector(".message").textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
    else{
        if(score > 1){
            document.querySelector(".message").textContent = "📉 Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else{
            document.querySelector(".message").textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }

})