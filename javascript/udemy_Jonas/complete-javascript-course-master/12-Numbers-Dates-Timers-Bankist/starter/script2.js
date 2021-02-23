'use strict';

// ------------------------------------- NUMBERS ---------------------------------------------

/* All numbers are stored as Floating point numbers in 64 bit binary.
Due to this some errors occur in calculation involving decimals.
IMPORTANT: So avoid using JS in applications where precision matters like scientific or financial calculations */

console.log(23 === 23.0);
console.log(0.1 + 0.2);

// conversion
console.log(Number('24'));
console.log(+'24');     // Easy method

// parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('2w3'));
console.log(Number.parseInt('e23'));
console.log(Number.parseFloat('   2.5rem  '));

// Number.isNaN() Vs isNaN()
console.log(Number.isNaN(NaN));     // Literally check if the argument is NaN
console.log(Number.isNaN('asc'));
console.log(Number.isNaN(12));
console.log(Number.isNaN(23 / 0));

// IMPORTANT: use isFinite to check if a value is a number or not
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(23/0));

console.log(isNaN('avc'));      // IMPORTANT: Global isNaN() is different from Number.isNaN()