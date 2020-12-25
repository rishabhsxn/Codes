// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// ----------------------Coding Challenge #1----------------------

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// problem breakdown -
// 1. Can the temperature values contain error? Answer: No
// 2. To print all temperatures. Answer: use loop
// 3. To print no. of days. Answer: use the loop counter variable + 1
// 4. To print all in the same line, find out how to print without new line in JS. Answer: make a cummulative string and print
// after the end of loop

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function(arr){
    let str = '';
    for(let i=0; i<arr.length; i++)
        str += `... ${arr[i]}ºC in ${i+1} days `;
    console.log(str);
}

printForecast(arr1);
printForecast(arr2);