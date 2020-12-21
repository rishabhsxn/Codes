'use strict';       // add this string to use strict mode

let hasDriversLicense = false;
let passedTest = true;

if(passedTest)
    hasDriverLicense = true;    /* this has a typo, this bug will go unnoticed in normal mode
                                but, will give error "hasDriverLicense is not defined" on compiling */

if(hasDriversLicense)
    console.log("Let him/her drive!")
else
    console.log("Someone else should drive!")


let private = 1234;      /* Prevent using future reserved words as variables,
                            Error: Unexpected strict mode reserved word */