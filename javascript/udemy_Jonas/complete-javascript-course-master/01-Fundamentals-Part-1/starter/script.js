// let js = "amazing";
// // if(js=="amazing") alert('JavaScript is amazing');

// 40 + 23 + 21 - 10;

// console.log(40+23+21-10);


// Challenge #1

// const markMass = 78;      // kg
// const markHeight = 1.69;      // m
// const markBMI = markMass / markHeight**2;

// const johnMass = 92;
// const johnHeight = 1.95;
// const johnBMI = johnMass / johnHeight**2;

// const markHigherBMI = markBMI > johnBMI;

// // if(markBMI > johnBMI)
// //     markHigherBMI = true;
// // else
// //     markHigherBMI = false;

// console.log(markHigherBMI);


// // template literals
// const firstName = "Rishabh";
// const age = 22;
// const job = "Software Engineer";

// const rishabh = "I'm " + firstName + ", a " + age + " years old " + job;
// console.log(rishabh);

// // This is alternate way of making above string, introduced in ES6
// const rishabhNew = `I'm ${firstName}, a ${age} years old ${job}`;
// console.log(rishabhNew);


// console.log("This is\n\
// a multiline\n\
// string")

// console.log(`Using backticks,
// we can write
// this directly`)


// // challenge #2

// const markMass = 78;      // kg
// const markHeight = 1.69;      // m
// const markBMI = markMass / markHeight**2;

// const johnMass = 92;
// const johnHeight = 1.95;
// const johnBMI = johnMass / johnHeight**2;

// if(johnBMI > markBMI)
//     console.log(`John's BMI (${johnBMI}) is greater than Mark's BMI (${markBMI})`);
// else if(markBMI > johnBMI)
//     console.log(`Mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI})`);
// else
//     console.log(`John's BMI (${johnBMI}) is equal to Mark's BMI (${markBMI})`);
    
 
// Loose Vs Strict Equality operators -  == vs ===
// == may perform Type Coercion if the two operands are of different data type
// === will not perform Conversion

let result;

result = 18 == '18';
console.log(result)     // true

result = 18 === '18';
console.log(result);    // false