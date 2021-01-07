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

  orderPasta: function(ingredient1, ingredient2, ingredient3){
    console.log(`Your pasta is ready with ${ingredient1}, ${ingredient2} and ${ingredient3}`);
  }
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



// ---------------------------- SPREAD OPERATOR -----------------------------
const arr = [7, 8, 9];
/* it unpacks the array into individual comma separated values.
It doesn't affect the original array */
const newArr = [...arr, 10, 11];

console.log(newArr);
console.log(...newArr);


/* copy array -> This creates a new array, but if there was an array inside mainMenu, the inside array
would not be re-created.  i.e. SHALLOW COPY */
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);


// merging two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


// function call for multiple parameters
const ingredients = [prompt("For you pizza, enter Ingredient 1: "), prompt("Ingredient 2: "), prompt("Ingredient 3: ")];
restaurant.orderPasta(...ingredients);

// Since 2018, the spread operator also work on objects even though they are not iterables
const restaurantCopy = {...restaurant, founder: "Rishabh"};   // SHALLOW COPY
restaurantCopy.mainMenu.push("Roti");
console.log(restaurant.mainMenu);
console.log(restaurantCopy.mainMenu);