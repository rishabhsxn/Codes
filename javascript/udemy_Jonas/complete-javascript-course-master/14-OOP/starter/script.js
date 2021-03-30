'use strict';


// --------------------------------------- CONSTRUCTOR FUNCTION ----------------------------------------

/* We can't use Arrow function to create a constructor function because arrow function don't have their own 'this' keyword's
value and we need this keyword to set values to the object. */
const Person = function(firstName, birthYear){
    // 'this' points to the new object that was created
    // console.log(this);

    // PROPERTIES
    this.firstName = firstName;
    this.birthYear = birthYear;
    

    /* METHODS (don't use this technique)
    We can create methods inside constructor function, but it is not efficient, as every instance will carry
    it around
    this.calcAge = function(){
        return 2021 - this.birthYear;
    }; */

    // 'this' will be automatically returned
};

const rishabh = new Person('Rishabh', 1998);
/* When we call with the 'new' keyword, 4 things happen:
1. New Empty object is created
2. Constructor function is called & it's 'this' is set to the empty object
3. The created object is linked to prototype
4. The created object is automatically returned from the constructor function */
console.log(rishabh);

const sanyam = new Person('Sanyam', 2000);

console.log(rishabh instanceof Person);


// EFFICIENT WAY TO ADD METHODS TO OBJECTS: USING PROTOTYPE
console.log(Person.prototype);
Person.prototype.calcAge = function(){
    return 2021 - this.birthYear;
};

// we can also add properties
Person.prototype.species = 'Homo Sapiens';


console.log(rishabh.calcAge());
console.log(sanyam.species);

console.log(rishabh.__proto__);
console.log(rishabh.__proto__ === Person.prototype);    // true
console.log(sanyam.__proto__ === rishabh.__proto__);    // true

/* IMPORTANT: It is important to note that Person.prototype is prototype of the instances but NOT of Person constructor
function itself */
console.log(Person.prototype.isPrototypeOf(Person));    // false
console.log(Person.prototype.isPrototypeOf(rishabh));    // true


// we can also check, if an object's property is it's own or of it's prototype
console.log(rishabh.hasOwnProperty('firstName'));    // true
console.log(rishabh.hasOwnProperty('species'));     // false