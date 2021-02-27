'use strict';

// // ------------------------------------- NUMBERS ---------------------------------------------

// /* All numbers are stored as Floating point numbers in 64 bit binary.
// Due to this some errors occur in calculation involving decimals.
// IMPORTANT: So avoid using JS in applications where precision matters like scientific or financial calculations */

// console.log(23 === 23.0);
// console.log(0.1 + 0.2);

// // conversion
// console.log(Number('24'));
// console.log(+'24');     // Easy method

// // parsing
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('2w3'));
// console.log(Number.parseInt('e23'));
// console.log(Number.parseFloat('   2.5rem  '));

// // Number.isNaN() Vs isNaN()
// console.log(Number.isNaN(NaN));     // Literally check if the argument is NaN
// console.log(Number.isNaN('asc'));
// console.log(Number.isNaN(12));
// console.log(Number.isNaN(23 / 0));

// // IMPORTANT: use isFinite to check if a value is a number or not
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(23/0));

// console.log(isNaN('avc'));      // IMPORTANT: Global isNaN() is different from Number.isNaN()



// // ----------------------------------------- MATH -------------------------------------------------

// console.log(Math.sqrt(25));
// // other way to find square root
// console.log(25 ** (1/2));
// console.log(8 ** (1/3));    // only way to find a cube root

// // max min
// console.log(Math.max(12, 1, 45, 22));
// console.log(Math.max(12, 1, '45', 22));     // it performs type coersion but no parsing
// console.log(Math.max(12, 1, '45px', 22));

// console.log(Math.min(12, 1, '45', 22));

// // constants
// console.log(Math.PI);

// // boundaries are included
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomInt(10, 20));

// // Rounding numbers - round, floor, ceil
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// // IMPORTANT: floor() & trunc() work similarly for positive numbers but not for negative numbers
// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // toFixed(): called upon a primitive (boxing), round it to specified points and return as STRING
// console.log(+(2.365).toFixed(1));



// ---------------------------------- SETTIMEOUT() & SETINTERVAL() -------------------------------------------

// setTimeOut
const ingredients = ['olive', 'chicken'];

/* We can assign the timer to a variable
IMPORTANT: All the arguments after the time parameter, will be passed to the callback function */
const pizzaTimer = setTimeout((ing1, ing2) => {
    console.log(`Here is you Pizza with ${ing1} & ${ing2} 🍕`)
    }, 3000, ...ingredients);

// to prove that the code is Asynchronous
console.log('Waiting...');

// We can also cancel a callback from executing before it's execution
if(ingredients.includes('spinach'))
    clearTimeout(pizzaTimer);


// setInterval - executes after every time interval that is mentioned
setInterval(() => console.log(new Date()), 2000);