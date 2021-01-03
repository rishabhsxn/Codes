'use strict';

function calcAge(birthYear){
    const age = 2021 - birthYear;
    console.log(firstName);     // IMPORTANT: accessible because of the global scope

    function printAge(){
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear<=1996){
            var x = 10;
            const firstName = "Sanyam";
            const str = `Oh, and you're a millenial, ${firstName}`;     // will use nearest variable in case of same name variable
            console.log(str);

            function add(a, b){
                return a + b;
            }
        }

        console.log(x)      // accessible because var variables are function scoped and ignore the block
        // add(10, 20);    // IMP: Inaccessible because in strict mode, functions are block scoped
    }
    printAge();
    return age;
}

const firstName = "Rishabh";
calcAge(1995);