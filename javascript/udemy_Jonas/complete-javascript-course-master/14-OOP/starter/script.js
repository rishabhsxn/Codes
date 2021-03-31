'use strict';


// // --------------------------------------- CONSTRUCTOR FUNCTION ----------------------------------------

// /* We can't use Arrow function to create a constructor function because arrow function don't have their own 'this' keyword's
// value and we need this keyword to set values to the object. */
// const Person = function(firstName, birthYear){
//     // 'this' points to the new object that was created
//     // console.log(this);

//     // PROPERTIES
//     this.firstName = firstName;
//     this.birthYear = birthYear;
    

//     /* METHODS (don't use this technique)
//     We can create methods inside constructor function, but it is not efficient, as every instance will carry
//     it around
//     this.calcAge = function(){
//         return 2021 - this.birthYear;
//     }; */

//     // 'this' will be automatically returned
// };

// const rishabh = new Person('Rishabh', 1998);
// /* When we call with the 'new' keyword, 4 things happen:
// 1. New Empty object is created
// 2. Constructor function is called & it's 'this' is set to the empty object
// 3. The created object is linked to prototype
// 4. The created object is automatically returned from the constructor function */
// console.log(rishabh);

// const sanyam = new Person('Sanyam', 2000);

// console.log(rishabh instanceof Person);


// // EFFICIENT WAY TO ADD METHODS TO OBJECTS: USING PROTOTYPE
// console.log(Person.prototype);
// Person.prototype.calcAge = function(){
//     return 2021 - this.birthYear;
// };

// // we can also add properties
// Person.prototype.species = 'Homo Sapiens';


// console.log(rishabh.calcAge());
// console.log(sanyam.species);

// console.log(rishabh.__proto__);
// console.log(rishabh.__proto__ === Person.prototype);    // true
// console.log(sanyam.__proto__ === rishabh.__proto__);    // true

// /* IMPORTANT: It is important to note that Person.prototype is prototype of the instances but NOT of Person constructor
// function itself */
// console.log(Person.prototype.isPrototypeOf(Person));    // false
// console.log(Person.prototype.isPrototypeOf(rishabh));    // true


// // we can also check, if an object's property is it's own or of it's prototype
// console.log(rishabh.hasOwnProperty('firstName'));    // true
// console.log(rishabh.hasOwnProperty('species'));     // false



// // ----------- PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS -------------

// console.log(rishabh.__proto__.__proto__);       /* Prototype of rishabh.__proto__ is Object.prototype (top of Prototypal Chain) */
// console.log(rishabh.__proto__.__proto__.__proto__);     /* Prototype of Object.prototype is null (top end of Prototypal chain)  */

// console.dir(Person.prototype.constructor);  // points to Person()

// // arrays
// const ar = [1, 2, 2, 2, 5, 5];
// console.log(ar.__proto__);      // Array.prototype
// console.log(ar.__proto__.__proto__);      // Object.prototype


// /* we can add new methods/properties to all the arrays, by adding them in Array.prototype
// But it is not a good practice as in future JS releases there may be a function with the same name or multiple developers of the
// team may implement different functions with same name. */
// Array.prototype.unique = function(){
//     return [... new Set(this)];
// };

// console.log(ar.unique());


// /* Dom elements are also objects. Their prototype is the parent in the DOM tree. Inspect by expanding.
//          HTMLHeadingElement -> HTMLElement -> Element -> Node -> EventTarget -> Object -> null        */
// console.dir(document.querySelector('h1').__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);


// // Functions are also Objects, so they also have prototype (bind, call, apply etc)
// console.dir(function(x){ return x + 1});





// ----------------------------------- CODING CHALLENGE #1 --------------------------------------
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the 
current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

// 1
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;     /* km/h */
};

// 2
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make}: ${this.speed}`);
};

// 3
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make}: ${this.speed}`);
};

// 4
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();