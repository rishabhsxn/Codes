'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // order: function(mainIndex, starterIndex){
  //   return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];    // receive this value and immediately destructure
  // },

  // /* When we need to pass a lot of parameters to a function, remembering order of parameters may be difficult.
  // So, we can pass the parameters as properties of an object and destructure it right there in the function
  // definition. We can even set default values */
  // orderDelivery: function({starterIndex, mainIndex, time="22:00", address}){
  //   console.log(`Order Received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
  // },

  // orderPasta: function(ingredient1, ingredient2, ingredient3){
  //   console.log(`Your pasta is ready with ${ingredient1}, ${ingredient2} and ${ingredient3}`);
  // },
};


// // ----------------------------- DESTRUCTURING OF ARRAYS ------------------------------

// const arr = [1, 2, 3];

// /* To skip a value, leave space for it
// We can also add default values -> handy in cases when the array doesn't have mentioned index element*/
// let [a, , b, c=0] = arr;
// console.log(a, b, c);


// //---------- Tricks using Destructuring ---------------

// // 1. swapping of variables
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

// // 2. return multiple values from a function
// const [mainDish, starterDish] = restaurant.order(2, 1);
// console.log(mainDish, starterDish);

// // 3. Extract values from nested Arrays
// const nestedArr = [2, 4, [5, 7]];
// let [x, , [y, z]] = nestedArr;
// console.log(x, y, z);


// // ----------------------------- DESTRUCTURING OF OBJECTS ------------------------------

// /* To extract from an object, write the exact property names. Order doesn't matter.

// To use other variable name use below syntax */
// const {name: restaurantName, openingHours, categories} = restaurant;
// console.log(restaurantName, openingHours, categories);


// // for default values (helpful in APIs)
// const {menu: menuItems = []} = restaurant;
// console.log(menuItems);


// // IMPORTANT: mutating variables in case when variable name is same as property name
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 10
// };

// // let {a, b} = obj;     // can't write this because it gives an error, variables are already declared
// // {a, b} = obj;     // can't write because JS excepts a code block when {} is used
// // To over come this, use paranthesis to wrap
// ({a, b} = obj);
// console.log(a, b);


// //  Nested Objects + renaming variable
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);

// // passing parameters as properties of an object
// restaurant.orderDelivery({
//   address: "White house",
//   mainIndex: 0,
//   starterIndex: 2
// });



// // ---------------------------- SPREAD OPERATOR -----------------------------
// const arr = [7, 8, 9];
// /* it unpacks the array into individual comma separated values.
// It doesn't affect the original array */
// const newArr = [...arr, 10, 11];

// console.log(newArr);
// console.log(...newArr);


// /* copy array -> This creates a new array, but if there was an array inside mainMenu, the inside array
// would not be re-created.  i.e. SHALLOW COPY */
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);


// // merging two arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);


// // function call for multiple parameters
// const ingredients = [prompt("For you pizza, enter Ingredient 1: "), prompt("Ingredient 2: "), prompt("Ingredient 3: ")];
// restaurant.orderPasta(...ingredients);

// // Since 2018, the spread operator also work on objects even though they are not iterables
// const restaurantCopy = {...restaurant, founder: "Rishabh"};   // SHALLOW COPY
// restaurantCopy.mainMenu.push("Roti");
// console.log(restaurant.mainMenu);
// console.log(restaurantCopy.mainMenu);



// // ------------------------------------ REST PATTERN -------------------------------------

// /* It's syntax is similar to Spread operator. But, it's functionality is opposite.
// It compresses the comma separated values into one variable 

// When ... is on RIGHT of =, it is SPREAD operator
// when ... is on LEFT of =, it is REST PATTERN */

// // 1a) Used with Destructuring Arrays
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(others);

// // 1b) used with Destructuring Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);


// // 2) Receiving variable no. of parameters in Functions
// const add = function(...numbers){
//   let sum = 0;
//   for(let i=0; i<numbers.length; i++)
//     sum += numbers[i];
//   console.log(sum);
// }
// add(1, 2);
// add(1, 5, 7, 2, 6);


// // using Spread and Rest together
// const [starterDish, mainDish, ...otherDishes] = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(starterDish, mainDish, otherDishes);

// const x = [20, 30, 40];
// add(...x);



// //------------------------------------- SHORT CIRCUITING -------------------------------------
// /* && and || can    a) Operate on any data type    b) return any data type    c) Short circuit */

// // -------------- OR ----------------
// /* || returns the first truthy value and will not evaluate further. If no such value is present,
// it will return last falsy value */
// console.log(3 || "Rishabh");
// console.log('' || "Rishabh");
// console.log(true || 0);
// console.log(0 || '' || 5 || true || false);
// console.log(undefined || 0 || '' || null);

// restaurant.numGuests = 0;
// // if there is no property "numGuests" in restaurant object, then store it in guests otherwise store 10
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// // alternative:
// let guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// // PROBLEM: if the guests were 0, then also 10 will be stored, but right answer is 0
// // SOLUTION: use Nullish Coelescing Operator (??) instead of OR. It considers only Nullish values (0 not included)
// guests2 = restaurant.numGuests ?? 10;
// console.log(guests2);


// // --------------- AND -----------------
// /* && returns the first falsy value and will not evaluated further. If no falsy value is present,
// it will return the last truthy value. */
// console.log(0 && "Rishabh");
// console.log(7 && "Rishabh");
// console.log("Hello" && 23 && null && "Rishabh");

// // if orderPizza property is present, then call it
// restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Spinach");



// ---------------------------- FOR OF LOOP --------------------------------
/* We can use continue and break in this loop also. */
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for(const item of menu)
  console.log(item);

// for getting index
for(const item of menu.entries())
  console.log(`Index: ${item[0]},   Value: ${item[1]}`);

// or use destructuring for better version
for(const [index, value] of menu.entries())
  console.log(`${index}: ${value}`);