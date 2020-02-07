console.log('5' + 5)    // 55
console.log('5' - 5)    // 0     // automatically converts string to int
console.log('5' * 5)    // 25
console.log('5' / 5)    // 1

// -------------------------------------------------------------------------------------------------

console.log(5 + true)   // 6    true = 1
console.log(5 + false)  // 5    false = 0

// -------------------------------------------------------------------------------------------------

// we get login details from APIs or DBs
const loginDetails = []     // empty array if we dont get data

const loginID = loginDetails[0]    // undefined

if(loginID) 
{
    console.log('Allow login')
}
else
{
    console.log('Auth failed')
}

//------------ values that interpret as false by JS -------------------
// 0
// ''
// null
// undefined

//------------ values that interpret as true by JS -------------------
// (everything apart from above stated)
// []  empty array
// {}  empty object
// ' '  any character inside string etc