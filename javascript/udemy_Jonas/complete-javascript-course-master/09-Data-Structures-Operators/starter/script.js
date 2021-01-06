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

  order: function(mainIndex, starterIndex){
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];    // receive this value and immediately destructure
  }
};


// ----------------------------- DESTRUCTURING OF ARRAYS ------------------------------

const arr = [1, 2, 3];

/* To skip a value, leave space for it
We can also add default values -> handy in cases when the array doesn't have mentioned index element*/
let [a, , b, c=0] = arr;
console.log(a, b, c);


//---------- Tricks using Destructuring ---------------

// 1. swapping of variables
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

// 2. return multiple values from a function
const [mainDish, starterDish] = restaurant.order(2, 1);
console.log(mainDish, starterDish);

// 3. Extract values from nested Arrays
const nestedArr = [2, 4, [5, 7]];
let [x, , [y, z]] = nestedArr;
console.log(x, y, z);