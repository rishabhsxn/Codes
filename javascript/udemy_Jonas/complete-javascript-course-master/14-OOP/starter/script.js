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
    it around */
    this.calcAge = function(){
        return 2021 - this.birthYear;
    };

    // 'this' will be automatically returned
};

const rishabh = new Person('Rishabh', 1998);
/* When we call with the 'new' keyword, 4 things happen:
1. New Empty object is created
2. Constructor function is called & it's 'this' is set to the empty object
3. The created object is linked to prototype
4. The created object is automatically returned from the constructor function */
console.log(rishabh);
console.log(rishabh.calcAge());

const sanyam = new Person('Sanyam', 2000);

console.log(rishabh instanceof Person);