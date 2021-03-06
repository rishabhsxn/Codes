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



// // ---------------------------- FOR OF LOOP --------------------------------
// /* We can use continue and break in this loop also. */
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for(const item of menu)
//   console.log(item);

// // for getting index
// for(const item of menu.entries())
//   console.log(`Index: ${item[0]},   Value: ${item[1]}`);

// // or use destructuring for better version
// for(const [index, value] of menu.entries())
//   console.log(`${index}: ${value}`);



// // --------------------------- ENHANCED OBJECT LITERALS --------------------------

// const menu = {
//   starter: "Chicken Wings",
//   main: "Chicken Curry"
// };

// const manager = "manager";

// const hotelMenu = {
//   name: "ABC",
//   // ENHANCEMENT #1: instead of writing menu: menu, we can write only menu
//   menu,

//   // ENHANCEMENT #2: instead of writing methods as name: function(p1, p2){}, write as:
//   order(category){
//     if(category===0)
//       return menu.starter;

//     return menu.main;
//   },

//   // ENHANCEMENT #3: We can evaluate property names in the object itself
//   [`${manager}`+"Name"]: "Rishabh"

// };

// console.log(hotelMenu);




const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// ------------------------------- CODING CHALLENGE #1 -----------------------------------
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. 
So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create 
one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all 
the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them 
to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using 
an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from 
game.scored

GOOD LUCK 😀
*/


// // 1
// const {players: [players1, players2] } = game;

// // 2
// const [gk, ...fieldPlayers] = players1;

// // 3
// const allPlayers = [...players1, ...players2];

// // 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5
// const {odds: {team1, x:draw, team2}} = game;

// // 6
// const printGoals = function(...names){
//   for(const x of names){
//     console.log(x);
//   }
//   console.log(`Total Goals: ${names.length}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7
// team1 < team2 && console.log("Team 1 is more likely to win!");
// team2 < team1 && console.log("Team 2 is more likely to win!");



// // ------------------------------ OPTIONAL CHAINING ----------------------------

// /* Use when we have a deeply nested object, with a lot of optional properties/methods.
// Instead of using if else blocks, use optional chaining. Immediately, undefined is returned when
// a property in the chain doesn't exist (nullish) 

// Optional chaining and Nullish Coalescing were introduced together and were designed to be used together. */

// // console.log(restaurant.openingHours.mon.open);    // gives an error because mon doesn't exist
// console.log(restaurant.openingHours.mon?.open);

// // example
// const days = ['mon', 'feb', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
//   console.log(`On ${day}, restaurant open at ${restaurant.openingHours[day]?.open ?? 'closed'}`);
// }

// // works with methods also
// console.log(restaurant.order?.(2, 5) ?? "Method does not exist");

// // Also works with Arrays
// const users = [{name: "Rishabh", job: "Software Developer"}];
// console.log(users[0]?.name ?? "User 0 does not exist");
// console.log(users[1]?.name ?? "User 1 does not exist");



// // ------------------------------ LOOPING OBJECTS --------------------------------

// const openingHours = restaurant.openingHours;

// // Looping keys
// for(const day of Object.keys(openingHours)){
//   console.log(day);
// }

// // looping values
// for(const value of Object.values(openingHours))
//   console.log(value);
  
// // looping keys and values simultaneously
// for(const [day, {open: o, close: c}] of Object.entries(openingHours))
//   console.log(`Restaurant open on ${day} at ${o} and close at ${c}`);



// // ---------------------------------- CODING CHALLENGE #2 -----------------------------------

// /* 
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number 
// (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, 
// you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds 
// and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the 
// number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */

// // 1
// for(const [goalNumber, playerName] of game.scored.entries())
//   console.log(`Goal ${goalNumber+1}: ${playerName}`);

// // 2
// let sumOdd = 0;
// const odds = Object.values(game.odds);
// for(const odd of odds)
//   sumOdd += odd;
// const avgOdd = sumOdd/odds.length;
// console.log(`Average Odd: ${avgOdd}`);

// // 3
// for(const [team, odd] of Object.entries(game.odds))
//   console.log(`Odd of ${game[team] ? `Victory ${game[team]}` : "Draw"}: ${odd}`);

// // Bonus
// const scorers = {};
// for(const playerName of game.scored)
//   scorers[playerName] ? scorers[playerName]++ : scorers[playerName] = 1;

// console.log(scorers);




// // ------------------------------------ SETS ------------------------------------------

// // create 
// const staff = new Set(['Chef', 'Manager', 'Chef', 'Waiter', 'Waiter']);
// console.log(staff);

// // manipulation
// staff.add('Cook');
// staff.add('Cook');
// console.log(staff);

// staff.delete('Waiter');
// console.log(staff);

// console.log(staff.has("Waiter"));

// // iterable
// for(const member of staff)
//   console.log(member);

// console.log(new Set("Rishabh"));

// // Use case: Remove Duplicates from an Array(or iterable)
// const arr = [1, 2, 2, 3, 3, 3, 4];
// const arrUnique = [...new Set(arr)];
// console.log(arrUnique);
// // Use case: find unique values from an iterable
// console.log(new Set("rishabh").size);



// // ------------------------------------ MAPS ------------------------------------------

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// /* Set method returns the updated map, so we can chain multiple set calls */
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are Open!')
//   .set(false, 'We are Closed!');


// console.log(rest.get('name'));

// // IMPORTANT: Clever use of Boolean as a key
// const time = 8;
// console.log(rest.get(time > rest.get('open' && time < rest.get('close'))));


// // we can even use array or object as a key
// rest.set([1, 2], "Test");
// console.log(rest);

// /* IMPORTANT: this will not retrieve the value, because this array is not same as key (Address is different).
// To use array as key, save it in a variable, then store and retrieve using that variable */
// console.log(rest.get([1, 2]));


// // even DOM elements can be used as keys
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);


// // IMPORTANT: Efficient way to create Map, when there are large number of entries
// const quiz = new Map([
//   ['question', 'Which is the best programming language?'],
//   [1, 'Python'],
//   [2, 'C'],
//   [3, 'JavaScript'],
//   [4, 'Rust'],
//   ['correct', 3],
//   [true, 'Correct Answer!'],
//   [false, 'Try Again!']
// ]);

// // due to this syntax, we can easily CONVERT OBJECTS TO MAPS
// const m = new Map(Object.entries(restaurant))
// console.log(m);

// // we can get the array of array back from map
// const arrArr = [...quiz];
// console.log(arrArr);

// let questionStr = quiz.get('question');

// // for of loop
// for(const [key, value] of quiz)
//   if(typeof key === 'number')
//     questionStr = questionStr + '\n' + `${key}: ${value}`;

// questionStr += '\n Your Answer:';

// const answer = Number(prompt(questionStr));
// console.log(answer);
// console.log(quiz.get(answer === quiz.get('correct')));



// // ----------------------------------- CODING CHALLENGE #3 -------------------------------------

// /* 
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during 
// the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football 
// game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from 
// the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game 
// has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) 
// of the game, like this:
//   [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);

// // 4
// for(const [key, value] of gameEvents)
//   console.log(`${key<45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}: ${value}`);




// // ------------------------------------ WORKING WITH STRINGS -----------------------------------------

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log('B737'[1]);
// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));   // case sensitive

// console.log(airline.slice(4));
// console.log(airline.slice(0, 3));
// console.log(airline.slice(-3));
// console.log(airline.slice(1, -3));    // boundary from both sides

// console.log(airline.slice(0, airline.indexOf(' ')));    // first word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));   // last word


// const checkMiddleSeat = function(seatNumber){
//   // B and E are middle seats. Letter will be present at last of seatNumber
//   const s = seatNumber.slice(-1);

//   if(s === 'B' || s === 'E')
//     console.log('You got middle seat!');
//   else
//     console.log('You got lucky :D');
// }

// checkMiddleSeat('18E');
// checkMiddleSeat('7B');
// checkMiddleSeat('12C');


// // FIX NAME CAPITALIZATION
// const fixCapitalization = function(name){
//   const lowerName = name.toLowerCase();
//   const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
//   return correctName;
// };

// const passenger = "rIshABh";    // convert to: Rishabh
// console.log(fixCapitalization(passenger));


// // NORMALIZE EMAIL    '  riSHAbh98@gMaiL.io  \n'   to 'rishabh98@gmail.io'
// const normalizeEmail = function(email){
//   const normalizedEmail = email.toLowerCase().trim();
//   return normalizedEmail;
// }

// const loginEmail = '  riSHAbh98@gMaiL.io  \n';
// console.log(normalizeEmail(loginEmail));


// // REPLACING
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// // replace both 'door' with 'gate'
// console.log(announcement.replaceAll('door', 'gate'));
// // or use Regex
// console.log(announcement.replace(/door/g, 'gate'));


// // BOOLEANS
// const planeName = 'Airbus A320neo';
// console.log(planeName.includes('A320'));
// console.log(planeName.includes('Airb'));
// console.log(planeName.includes('Boeing'));

// if(planeName.startsWith('Airbus') && planeName.endsWith('neo'))
//   console.log('Part of the new Airbus family')


// // SPLIT and JOIN
// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Rishabh Saxena'.split(' ');
// const fullName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');    // IMPORTANT
// console.log(fullName);

// const capitalizeName = function(name){
//   name = name.toLowerCase();
//   const words = name.split(' ');
//   for(let i=0; i<words.length; i++)
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);

//   return words.join(' ');
// };

// console.log(capitalizeName('risHAbh saxena'));
// console.log(capitalizeName('jessica aNN smith davis'));


// // PADDING
// const message = 'Go to gate 23!';
// const targetLength = 25;
// const targetLength2 = 30;
// console.log(message.padStart(targetLength, '+').padEnd(targetLength2, '-'));

// // show only last 4 digits and hide other part using *
// const maskCreditCard = function(number){
//   const str = number + '';    // int to string
//   return str.slice(-4).padStart(str.length, '*');
// };

// console.log(maskCreditCard(4444555566667777));
// console.log(maskCreditCard('11112222333344445678'));


// // REPEAT
// console.log('Hi! '.repeat(5));

// const planesInLine = function(n){
//   console.log(`There are ${n} planes waiting in line - ${'✈'.repeat(n)}`);
// }

// planesInLine(3);
// planesInLine(5);
// planesInLine(10);




// ---------------------------------- CODING CHALLENGE #4------------------------------------------

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


// function to convert a word (a_b) to camelCase (aB)
const convertToCamelCase = function(text){
  const trimmedLowerCaseText = text.trim().toLowerCase();
  const [firstWord, secondWord] = trimmedLowerCaseText.split('_');
  const camelCasedText = firstWord + secondWord[0].toUpperCase() + secondWord.slice(1);
  return camelCasedText;
};

// function to convert user text to camelCase words and print in required format
const convertAndformatOutput = function(text){
  // store words separately from each line
  const words = text.split('\n');

  let longestStringLength = 0;
  const camelCasedWords = [];

  for(const word of words){
    const camelCasedWord = convertToCamelCase(word);
    camelCasedWords.push(camelCasedWord);

    // find length of the longest string
    if(camelCasedWord.length > longestStringLength)
      longestStringLength = camelCasedWord.length;
  }

  const targetLength = longestStringLength + 5;

  // print words with ticks
  for(const [index, word] of camelCasedWords.entries())
    console.log(word.padEnd(targetLength, ' ') + '✅'.repeat(index+1));
}


// Add click event listener to the button
const okButton = document.querySelector('button');
okButton.addEventListener('click', function(){
  // get text from the textarea
  const text = document.querySelector('textarea').value;
  convertAndformatOutput(text);
});