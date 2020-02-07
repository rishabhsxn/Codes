let guestUser = function(name = 'UnNamed', courseCount = 0)   //default values
{
    return 'Hello ' + name + ' and your course count is ' + courseCount
}

console.log(guestUser())

console.log(guestUser('John'))

console.log(guestUser('John',2))