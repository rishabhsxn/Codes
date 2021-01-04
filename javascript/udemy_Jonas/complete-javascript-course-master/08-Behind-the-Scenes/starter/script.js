'use strict';

// function calcAge(birthYear){
//     const age = 2021 - birthYear;
//     console.log(firstName);     // IMPORTANT: accessible because of the global scope

//     function printAge(){
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear<=1996){
//             var x = 10;
//             const firstName = "Sanyam";
//             const str = `Oh, and you're a millenial, ${firstName}`;     // will use nearest variable in case of same name variable
//             console.log(str);

//             function add(a, b){
//                 return a + b;
//             }
//         }

//         console.log(x)      // accessible because var variables are function scoped and ignore the block
//         // add(10, 20);    // IMP: Inaccessible because in strict mode, functions are block scoped
//     }
//     printAge();
//     return age;
// }

// const firstName = "Rishabh";
// calcAge(1995);


// //------------------------ Hoisting and temporal Dead Zone----------------------


// // FOR VARIABLES
// console.log(firstName);     // var hoisted to undefined
// // console.log(job);       // let unhoisted -> Error: Cannot access before initialization
// // console.log(age);       // const unhoisted -> Error: Cannot access before initialization

// var firstName = "Rishabh";
// let job = "Software Engineer";
// const age = 22;


// // FOR FUNCTIONS
// console.log(addDecl(2, 3));     // function declaration hoisted to original value

// console.log(addExpr);       // var function expression hoisted to undefined
// // console.log(addExpr(5, 10));        // therefore, Error: addExpr is not a function as undefined is not a function
// // console.log(addArrow(10, 20));      // const arrow function unhoisted, Error: cannot access before initialization

// function addDecl(a, b){
//     return a + b;
// }

// var addExpr = function(a, b){
//     return a + b;
// }

// const addArrow = (a, b) => a + b;



// // EXAMPLE of bugs because of hoisting and bad practices
// // if number of products = 0, delete the shopping cart
// if(!numProducts)
//     deleteShoppingCart();   /* this will delete the cart even when the numProducts was not 0, because of hoisting
//     it is undefined in above line, and !undefined = true */

// var numProducts = 10;
// function deleteShoppingCart(){
//     console.log("All items deleted!")
// }

// /* CONCLUSION:
// 1) Don't use var for declaring variables
// 2) Declare the variables in the starting of scope to avoid TDZ
// 3) Use all functions only after defining them */




// ------------------------- THIS KEYWORD -------------------------------

// Outside of functions
console.log("Outside any function, this:", this)       // points to the global Window object 


// Inside a simple function expression
const fun = function(){
    console.log("Inside simple function expression, this:", this);      // undefined
}
fun();


// inside an Arrow function
const funArrow = () => {
    console.log("Inside arrow function, this:", this);      // lexical this: gets value from parent. In this case, window object
}
funArrow();


// inside an object's method
const rishabh = {
    name: "Rishabh Saxena",
    job: "Software Engineer",

    fun: function(){
        console.log("Inside a method of an object, this:", this);   // points to the object itself
    }
}
rishabh.fun();


// Points to the calling object
const jane = {
    name: "Jane Doe",
    job: "Dummy persion"
}
jane.fun = rishabh.fun;
jane.fun();