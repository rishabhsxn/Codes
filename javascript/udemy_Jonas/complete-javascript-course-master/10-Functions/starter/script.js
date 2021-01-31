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



// // ------------------------------------- CALL(), APPLY() & BIND() --------------------------------------

// /* These methods are part of the function objects and are used to manually set the this keyword of that 
// function */

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],

//     book(flightNum, name){
//         // console.log("Value of THIS:", this);
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     },
// };

// lufthansa.book(240, 'Rishabh Saxena');
// lufthansa.book(240, 'Sanyam Saxena');


// /* they opened a new airline. 
// Now we need a similar book function but don't want to write it again (bad practice) */
// const euroWings = {
//     airline: 'EuroWings',
//     iataCode: 'EW',
//     bookings:[],
// };

// const swiss = {
//     airline: 'Swiss',
//     iataCode: 'SW',
//     bookings: [],
// };

// // store the book function from Lufthansa in a variable
// const book = lufthansa.book;

// /* IMPORTANT: It won't run because it's this keyword is pointing to undefined because it is now just a regular 
// function call (strict mode). It is not a method anymore. */
// // book(120, 'Rishabh Saxena');

// // Now, we have to explicitly tell JavaScript, the value of this. We have 3 options - call(), apply() and bind()

// book.call(euroWings, 120, 'John Doe');      // (this value, arguments for the function call)

// const arr = [120, 'Jane Doe'];
// book.apply(euroWings, arr);

// /* apply is similar to call() except it takes arguments as Array. 
// It is not much used as we can achieve similar behaviour with call() using spread operator ->  call(___, ...arr)  */
// book.call(lufthansa, ...arr);


// // BIND()
// // this will not call function, instead return new function with this set to euroWings
// const bookEW = book.bind(euroWings);
// const bookSW = book.bind(swiss);
// const bookLH = book.bind(lufthansa);

// bookEW(11, 'Rishabh Doe');
// bookSW(11, 'Rishabh Doe');
// bookLH(11, 'Rishabh Doe');

// const bookEW_22 = book.bind(euroWings, 22);     // PARTIAL APPLICATION
// bookEW_22('Poojan');


// // USE CASE of bind(): when using an object's method with Event Listener
// lufthansa.planes = 300;
// lufthansa.buyPlanes = function(){
//     console.log('THIS:', this)
//     this.planes++;
//     console.log('Planes:', this.planes);
// }

// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes);      // this points to Button element
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));


// // USE CASE of bind(): Partial Application, even when we don't care about the value of this keywords
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// // when we require a tax all the time
// const addVAT = addTax.bind(null, 0.23);     // similar to const addVAT = value => value + value * 0.23;
// console.log(addVAT(200));
// /* We can achieve this with default parameters also, but this is different as we get an altogether 
// new function */


// // we can achieve similar results with function returning function
// const addTax2 = rate => function(value){ return value + value * rate};

// const addVAT2 = addTax2(0.23);
// console.log(addVAT2(200));




// // ----------------------------------- CODING CHALLENGE #1 ---------------------------------------------
// /* 
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for 
// each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT 
//   POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 
//   52 wouldn't make sense, right?)

// 2. Call this method whenever the user clicks the "Answer poll" button.

// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), 
// which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
// This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' 
// option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

//     // this generates [0, 0, 0, 0].
//     answers: new Array(4).fill(0),
// };

// // 3
// poll.displayResults = function(type='array'){
//     if(type === 'array')
//         console.log(this.answers);
//     else if(type === 'string')
//         console.log(`Poll results are ${this.answers.join(', ')}`)
// }

// // 1
// poll.registerNewAnswer = function(){
//     let questionStr = `${this.question}\n${this.options.join('\n')}\n(Write option number)`;
//     const input = Number(prompt(questionStr));
    
//     console.log(input);
//     typeof input === 'number' && input > -1 && input < this.answers.length && this.answers[input]++;

//     // 4
//     this.displayResults();
//     this.displayResults('string');
// }

// // 2
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


// // bonus
// const testData1 = {
//     answers: [5, 2, 3],
// };
// const testData2 = {
//     answers: [1, 5, 3, 9, 6, 1],
// }

// poll.displayResults.call(testData1);
// poll.displayResults.call(testData1, 'string');

// poll.displayResults.call(testData2);
// poll.displayResults.call(testData2, 'string');



// // ---------------------------- IMMEDIATELY INVOKED FUNCTION EXPRESSIONS ------------------------------

// // It is a pattern not a feature of JS

// // we want a one-time use only function OR data hiding

// (function(){
//     console.log('This will run only once');
//     const privateVar = 10;      // data hiding
// })();

// // console.log(privateVar);    // not accessible outside

// // arrow function version
// (() => console.log('This will also only run once'))();


// // it is not anymore used for data hiding, because we can do it in more simple way 
// {
//     const privateNumber = 10;
// }
// // console.log(privateNumber);     // not accessible




// // ---------------------------------- CLOSURE -------------------------------------------

// const secureBooking = function(){
//     let passengerCount = 0;

//     return function(){
//         passengerCount++;
//         console.log('Passengers:', passengerCount);
//     }
// }

// const booker = secureBooking();

// // the booker function have access to passengerCount through closure
// booker();   
// booker();
// booker();

// console.dir(booker);    // to observe the closure property


// // more examples of closure - 
// // 1. It is not necessary to return a function from another function

// let f;

// const g = function(){
//     const a = 23;

//     f = function(){
//         console.log(a*2);
//     };
// };

// const h = function(){
//     const b = 777;

//     f = function(){
//         console.log(b*2);
//     };
// };

// g();
// f();
// console.dir(f);

// // f is re-assigned - Closure will also be overwritten
// h();
// f();
// console.dir(f);


// // 2. Timer
// const boardPassengers = function(n, wait){
//     const perGroup = n/3;

//     /* The callback function passed to setTimeOut executes after sometime (independent of boardPassenger),
//     but is still able to access it's variables because of closure */
//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passsengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait*1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;      // this global scope variable have less priority over closure

// boardPassengers(180, 3);



//--------------------------------- CODING CHALLENGE #2 --------------------------------

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected 
h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN 
exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    })
})();

/* Explanation: After the execution of IIFE, the callback which is attached to the body's eventListener
carries around the header variable in it's closure and that is how it can access it and change the color. */