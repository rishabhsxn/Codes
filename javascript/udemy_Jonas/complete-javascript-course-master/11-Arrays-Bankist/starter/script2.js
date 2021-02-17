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



// ------------------------------------ FLAT() & FLATMAP() -----------------------------------
const arr = [1, 2, 3, [4, 5, [6, 7], 8, [9, 10]]];
console.log(arr.flat());
console.log(arr.flat(2));

// Data
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

// get all movements in a single array
const allAccountMovements = accounts
    .map( acc => acc.movements )
    .flat();

console.log(allAccountMovements);

// It turned out that flat is very often used after the map() method, so flatMap() was introduced
const allAccountMovements2 = accounts
    .flatMap( acc => acc.movements );

console.log(allAccountMovements2);