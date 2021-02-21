'use strict';

// // --------------------------------- CODING CHALLENGE #1 --------------------------------------

// /* 
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored 
// the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an 
// adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the 
// following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a 
// shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to 
// mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years 
// old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const checkDogs = function(dogsJulia, dogsKate){
//     // 1
//     const dogsJuliaCopy = dogsJulia.slice(1, -2);
//     console.log(...dogsJuliaCopy);
//     console.log(...dogsKate);

//     // 2
//     const allDogs = [...dogsJuliaCopy, ...dogsKate];
//     console.log(...allDogs);

//     // 3
//     allDogs.forEach(function(dogAge, i){
//         if(dogAge >= 3)
//             console.log(`Dog number ${i+1} is an adult, and is ${dogAge} years old`);
//         else
//             console.log(`Dog number ${i+1} is still a puppy 🐶`)
//     })
// };

// // 4
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);




// // ---------------------------- ARRAY DATA TRANSFORMATION: MAPS -----------------------------------


// const euroToUsd = 1.1;

// // const movementsUSD = movements.map(function(mov){
// //     return mov * euroToUsd;
// // });

// const movementsUSD = movements.map(mov => mov * euroToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsDescription = movements.map(
//     (mov, i) => `Movement #${i+1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} $${Math.abs(mov)}`
// );

// console.log(movementsDescription);


// // ---------------------------- ARRAY DATA TRANSFORMATION: FILTER -----------------------------------

// // we have to return a boolean value for the elements (return true for elements to be included)
// const deposits = movements.filter(function(mov){
//     return mov > 0;
// });

// const withdrawals = movements.filter(mov => mov < 0)

// console.log(deposits);
// console.log(withdrawals);


// // ---------------------------- ARRAY DATA TRANSFORMATION: REDUCE -----------------------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // reduce(CALLBACK_WITH_ACCESS_TO_ACCUMULATOR, INITIAL_VALUE_OF_ACCUMULATOR)
// const balance = movements.reduce((acc, mov) => acc + mov, 0);
// console.log(typeof balance);


// // finding max element using reduce()
// let [first] = movements;
// const maxMov = movements.reduce((acc, mov) => Math.max(acc, mov), first);
// console.log(maxMov);




// // ------------------------------------ CODING CHALLENGE #2 -------------------------------------------
// /* 
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and 
// calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
// If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const calcAverageHumanAge = function(ages){
//     // 1
//     const humanAges = ages.map( age => age <= 2 ? 2*age : 16+age*4);
//     console.log('Human ages:', humanAges);

//     // 2
//     const adultDoghumanAges = humanAges.filter( humanAge => humanAge >= 18);
//     console.log('Adult dogs human ages:', adultDoghumanAges);

//     // 3
//     // const avgAdultDogHumanAge = adultDoghumanAges.reduce( (acc, age) => acc + age, 0) / adultDoghumanAges.length;
//     const avgAdultDogHumanAge = adultDoghumanAges.reduce( (acc, age, i, arr) => acc + age/arr.length, 0);
//     console.log('Average:', avgAdultDogHumanAge);
// };

// // 4
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);



// // --------------------------------- CHAINING map(), filter() & reduce() -------------------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;

// /* Chaining couldn't be continued after reduce() method because it doesn't return an array */
// const totalDepositsUSD = movements
//     .filter( mov => mov > 0)
//     .map( depAmt => depAmt*euroToUsd)
//     .reduce( (acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);



// // ----------------------------------- FIND() ------------------------------------

// const firstWithdrawal = movements.find( mov => mov < 0);
// console.log(firstWithdrawal);



// // --------------------------------- SOME() & EVERY() ---------------------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movements2 = [200, 450, 3000, 70, 1300];

// const depositsFun = mov => mov > 0;

// console.log(movements.some(depositsFun));

// console.log(movements.every(depositsFun));
// console.log(movements2.every(depositsFun));



// // ------------------------------------ FLAT() & FLATMAP() -----------------------------------
// const arr = [1, 2, 3, [4, 5, [6, 7], 8, [9, 10]]];
// console.log(arr.flat());
// console.log(arr.flat(2));

// // Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
  
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // get all movements in a single array
// const allAccountMovements = accounts
//     .map( acc => acc.movements )
//     .flat();

// console.log(allAccountMovements);

// // It turned out that flat is very often used after the map() method, so flatMap() was introduced
// const allAccountMovements2 = accounts
//     .flatMap( acc => acc.movements );

// console.log(allAccountMovements2);



// // ------------------------------------------- SORT() ------------------------------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // sort() mutates the original array

// /* IMPORTANT: By default, the sort method converts everything to string and then sort.
// So, it will not work correctlt with numbers.
// For Numbers, use a callback in sort */
// console.log(movements.sort());

// /* return < 0 -------> current, next  (keep order)
//    return > 0 -------> next, current  (switch order) */
// console.log(movements.sort( (current, next) => current - next));    // ascending
// console.log(movements.sort( (current, next) => next - current));    // descending




// // ------------------------------- FILL() & FROM() -----------------------------------------

// // fill()
// const x = new Array(6);
// console.log(x);

// x.fill(2);
// console.log(x);

// x.fill(0, 2);
// console.log(x);

// x.fill(1, 2, 4);
// console.log(x);

// // from()
// const y = Array.from({length: 7}, () => 1)
// console.log(y);

// const z = Array.from({length: 6}, (_, i) => i + 1);
// console.log(z);



// // -------------------------------------- PRACTICE ----------------------------------------

// // 1. Sum of all deposits in the bank
// const bankDepositSum = accounts
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);

// console.log(bankDepositSum);


// // 2. Find no. of deposits atleast of 1000
// // const numDeposits1000 = accounts
// //     .flatMap(acc => acc.movements)
// //     .filter(mov => mov > 1000)
// //     .length;

// const numDeposits1000 = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((count, mov) => mov >= 1000 ? ++count : count, 0);
// console.log(numDeposits1000);


// // 3. Create an object containing sumDeposits & sumWithdrawals using the reduce method
// const sums = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((obj, mov) => {
//         if(mov > 0)
//             obj.sumDeposits += mov;
//         else
//             obj.sumWithdrawals += Math.abs(mov);
        
//         return obj;
        
//     }, {sumDeposits: 0, sumWithdrawals: 0});
// console.log(sums);


// // 4. Convert a string to Title Case. ex- this is a nice title -> This Is a Nice Title
// const convertTitleCase = function(title){
//     const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
//     const words = title.toLowerCase().split(' ');

//     return words
//         .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
//         .join(' ');
// }

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));





// -------------------------------------- CODING CHALLENGE #4 ----------------------------------------
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion 
(see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the 
object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. 
(The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, 
so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs 
who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" 
and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind 
that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach((dog) => {
    dog.recommendedFood = Number((dog.weight ** 0.75 * 28).toFixed(2));
});

// 2
const eatingHabit = function(owner){
    const ownersDog = dogs.find(dog => dog.owners.includes(owner));
    if(ownersDog.curFood > ownersDog.recommendedFood)
        console.log(`${owner}'s dog is Eating Too Much !`);
    else if(ownersDog.curFood < ownersDog.recommendedFood)
        console.log(`${owner}'s dog is Eating Too Little !`);
};
eatingHabit('Sarah');

// 3
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];
// dogs.forEach(dog => {
//     if(dog.curFood > dog.recommendedFood)
//         ownersEatTooMuch.push(...dog.owners);
//     else if(dog.curFood < dog.recommendedFood)
//         ownersEatTooLittle.push(...dog.owners);
// });
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log('Owners whose dog eat too much: ', ownersEatTooMuch);
console.log('Owners whose dog eat too little: ', ownersEatTooLittle);

// 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5
console.log('Is any dog eating EXACTLY the amount of food that is recommended?', dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6
const okayAmountFood = ({curFood, recommendedFood}) => (curFood < recommendedFood*1.10) && (curFood > recommendedFood*0.9);
console.log('Is any dog eating an OKAY amount of food?', dogs.some(okayAmountFood));
// IMPORTANT: no need to explicitly pass argument in callback

// 7
const dogsOkayFood = dogs.filter(okayAmountFood);
console.log('Dogs eating okay amount of food:', dogsOkayFood);

// 8
const dogsShallowCopy = dogs
    .slice()
    .sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood);

console.log(...dogsShallowCopy);
// dogs array order is unaffected