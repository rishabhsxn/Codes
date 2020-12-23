'use strict';       // add this string to use strict mode

// let hasDriversLicense = false;
// let passedTest = true;

// if(passedTest)
//     hasDriverLicense = true;    /* this has a typo, this bug will go unnoticed in normal mode
//                                 but, will give error "hasDriverLicense is not defined" on compiling */

// if(hasDriversLicense)
//     console.log("Let him/her drive!")
// else
//     console.log("Someone else should drive!")


// let private = 1234;      /* Prevent using future reserved words as variables,
//                             Error: Unexpected strict mode reserved word */



// // CODDING CHALLENGE #1

// /* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then 
// logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores   */

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// // const avgDolphins = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins == avgKoalas)
//         console.log(`Match Tied (${avgDolphins} Vs ${avgKoalas})`);
//     else if(avgDolphins >= 2*avgKoalas)
//         console.log(`Dolphins wins 🏆 (${avgDolphins} Vs ${avgKoalas})`);
//     else if(avgKoalas >= 2*avgDolphins)
//         console.log(`Koalas wins 🏆 (${avgKoalas} Vs ${avgDolphins})`);
//     else
//         console.log(`No Team wins (${avgDolphins} Vs ${avgKoalas})`);
// }

// checkWinner(avgDolphins, avgKoalas);


//-------------------------ARRAYS---------------------------
// two methods of declaring an array
// const years = [1920, 1984, 2008, 2020];
const years = new Array(1920, 1984, 2008, 2020);
console.log(years);

// if you define an array as "const", the array cannot be redefined or reassigned, but its elements can be changed
years[years.length - 1] = 1900;    // this is allowed
console.log(years);
// years = [1000, 2000, 3000];     // this is not allowed
// years2 = [5000, 10000, 20000];
// years = years2;     // this is not allowed

const x = 3000;
const A = [2500 - 500, x, years];     // the elements expect an expression, so any expression can be put -> variables
// multiple types of data types can be put in the same array
console.log(A);

// basic functions
const b = [1, 2, 3, 4];
console.log(b);
let b_length = b.push(5);      // adds element at end of array
b_length = b.unshift(0);   // add element at the start
// above methods return length of the modified array
console.log(b);

// pop and shift are opposite of above
