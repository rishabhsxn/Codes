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


// //-------------------------ARRAYS---------------------------
// // two methods of declaring an array
// // const years = [1920, 1984, 2008, 2020];
// const years = new Array(1920, 1984, 2008, 2020);
// console.log(years);

// // if you define an array as "const", the array cannot be redefined or reassigned, but its elements can be changed
// years[years.length - 1] = 1900;    // this is allowed
// console.log(years);
// // years = [1000, 2000, 3000];     // this is not allowed
// // years2 = [5000, 10000, 20000];
// // years = years2;     // this is not allowed

// const x = 3000;
// const A = [2500 - 500, x, years];     // the elements expect an expression, so any expression can be put -> variables
// // multiple types of data types can be put in the same array
// console.log(A);

// // basic functions
// const b = [1, 2, 3, 4];
// console.log(b);
// let b_length = b.push(5);      // adds element at end of array
// b_length = b.unshift(0);   // add element at the start
// // above methods return length of the modified array
// console.log(b);

// // pop and shift are opposite of above

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
  
//     // calcAge: function (birthYeah) {
//     //   return 2037 - birthYeah;
//     // }
  
//     // calcAge: function () {
//     //   // console.log(this);
//     //   return 2037 - this.birthYeah;
//     // }
  
//     calcAge: function () {
//       this.age = 2037 - this.birthYeah;
//       return this.age;
//     },
//   };
  
//   console.log(jonas.calcAge());
  
//   console.log(jonas.age);
//   console.log(jonas.age);
//   console.log(jonas.age);


// // --------------------------Coding Challenge #3----------------------------

// /*
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
// Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to 
// a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's 
// BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀
// */

// const mark = {
//   firstName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function(){
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   firstName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function(){
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// let personWithLessBMI, personWithMoreBMI;

// personWithMoreBMI = mark.calcBMI() > john.calcBMI() ? mark : john;
// personWithLessBMI = personWithMoreBMI == mark ? john : mark;

// console.log(`${personWithMoreBMI.firstName}'s BMI (${personWithMoreBMI.BMI}) is higher than ${personWithLessBMI.firstName}'s BMI (${personWithLessBMI.BMI})`);


// ------------------------------Coding Challenge #4-------------------------------
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill 
value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average
of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts 
  at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by 
  the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let i=0; i < bills.length; i++){
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills); 
console.log(tips);
console.log(totals);

const calcAverage = function(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++)
    sum += arr[i];
  
  return sum/arr.length;
}

console.log(calcAverage(totals));