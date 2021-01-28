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



// // -------------------------------- HIGHER-ORDER FUNCTIONS ------------------------------------

// const oneWord = function(str){
//     return str.replaceAll(' ', '').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher order function - a function is passed as argument
// const transformer = function(str, fn){
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed String: ${fn(str)}`);
//     console.log(`Transformed by function: ${fn.name}`);     // functions have property - name
// }

// // the passed functions are called Callbacks because these are called by the higher-order function anytime later
// transformer('JavaScript is the best language!', upperFirstWord);
// transformer('JavaScript is the best language!', oneWord);


// // FUNCTION RETURNING FUNCTION
// /* This works because of closure */

// const greet = function(greetingMessage){
//     return function(name){
//         console.log(`${greetingMessage} ${name}!`);
//     }
// }

// const greeterHey = greet('Hey');

// greeterHey('Rishabh');
// greeterHey('Sanyam');

// // or
// greet('Hey')('Alpana');

// // arrow syntax
// const greetArr = (greetingMessage) => function(name){ console.log(`${greetingMessage} ${name}!`)};
// greetArr('Hi')('Rishabh');



// ------------------------------------- CALL(), APPLY() & BIND() --------------------------------------

/* These methods are part of the function objects and are used to manually set the this keyword of that 
function */

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name){
        // console.log("Value of THIS:", this);
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(240, 'Rishabh Saxena');
lufthansa.book(240, 'Sanyam Saxena');


/* they opened a new airline. 
Now we need a similar book function but don't want to write it again (bad practice) */
const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings:[],
};

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],
};

// store the book function from Lufthansa in a variable
const book = lufthansa.book;

/* IMPORTANT: It won't run because it's this keyword is pointing to undefined because it is now just a regular 
function call (strict mode). It is not a method anymore. */
// book(120, 'Rishabh Saxena');

// Now, we have to explicitly tell JavaScript, the value of this. We have 3 options - call(), apply() and bind()

book.call(euroWings, 120, 'John Doe');      // (this value, arguments for the function call)

const arr = [120, 'Jane Doe'];
book.apply(euroWings, arr);

/* apply is similar to call() except it takes arguments as Array. 
It is not much used as we can achieve similar behaviour with call() using spread operator ->  call(___, ...arr)  */
book.call(lufthansa, ...arr);


// BIND()
// this will not call function, instead return new function with this set to euroWings
const bookEW = book.bind(euroWings);
const bookSW = book.bind(swiss);
const bookLH = book.bind(lufthansa);

bookEW(11, 'Rishabh Doe');
bookSW(11, 'Rishabh Doe');
bookLH(11, 'Rishabh Doe');

const bookEW_22 = book.bind(euroWings, 22);     // PARTIAL APPLICATION
bookEW_22('Poojan');


// USE CASE of bind(): when using an object's method with Event Listener
lufthansa.planes = 300;
lufthansa.buyPlanes = function(){
    console.log('THIS:', this)
    this.planes++;
    console.log('Planes:', this.planes);
}

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes);      // this points to Button element
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));


// USE CASE of bind(): Partial Application, even when we don't care about the value of this keywords
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// when we require a tax all the time
const addVAT = addTax.bind(null, 0.23);     // similar to const addVAT = value => value + value * 0.23;
console.log(addVAT(200));
/* We can achieve this with default parameters also, but this is different as we get an altogether 
new function */


// we can achieve similar results with function returning function
const addTax2 = rate => function(value){ return value + value * rate};

const addVAT2 = addTax2(0.23);
console.log(addVAT2(200));