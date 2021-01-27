'use strict';


// // --------------------------- DEFAULT PARAMETERS ----------------------------------

// const bookings = [];

// // ES6 way - We can also use previously defined parameters in other parameters
// const createBooking = function(flightName, numPassengers = 1, price = 199 * numPassengers){

//     // // ES5 way of setting default parameters using Short Circuiting
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightName,
//         numPassengers,
//         price
//     };

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('A320B');
// createBooking('B120Z', 2);
// createBooking('B120Z', undefined, 1000);    // use undefined if you want to skip a middle parameter (use it's default value)



// // ---------------------------- PASSING ARGUMENTS: VALUE VS REFERENCE -----------------------------

// /* IMPORTANT: Every argument passing in JavaScript is pass by value. 
// There is no pass by reference in JavaScript. But, in case of objects, the variable itself is a reference, so the
// changes done inside the function also reflect on the original object. 
// It is called CALL-BY-SHARING */

// const flight = 'LH234';

// const rishabh = {
//     name: 'Rishabh Saxena'
// };

// const rishabh2 = {
//     name: 'Rishabh Saxena'
// };


// const changeStuff = function(a, b, c){
//     a = a * 10;

//     /* b variable is a value which is itself reference to rishabh object, so change will reflect in original object */
//     b.name = 'Mr. ' + b.name;       

//     /* c, which initially holds reference to rishabh2, is made to hold another object's address. So, no change in rishabh2 */
//     c = {
//         name: 'Mr. Rishabh Saxena'
//     };
// }

// changeStuff(flight, rishabh, rishabh2);

// console.log(flight);
// console.log(rishabh);
// console.log(rishabh2);



// -------------------------------- HIGHER-ORDER FUNCTIONS ------------------------------------

const oneWord = function(str){
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function - a function is passed as argument
const transformer = function(str, fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by function: ${fn.name}`);     // functions have property - name
}

// the passed functions are called Callbacks because these are called by the higher-order function anytime later
transformer('JavaScript is the best language!', upperFirstWord);
transformer('JavaScript is the best language!', oneWord);
