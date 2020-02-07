var john = {
    name: 'I am john',
    age: 24,
    isActive: true
}

var marry = {
    name: 'I am marry',
    age: 22,
    isActive: true
}

var sam = {
    name: 'I am sam',
    age: 29,
    isActive: false
}

let users = new Map()

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

console.log(users)
console.log('-----------------------------------------------------------------------------')
console.log(users.size)
console.log('-----------------------------------------------------------------------------')
console.log(users.get('sam'))
console.log('-----------------------------------------------------------------------------')
console.log(users.keys())
console.log('-----------------------------------------------------------------------------')
console.log(users.values())
console.log('-----------------------------------------------------------------------------')
// For of loop

for (const key of users.keys())
{
    console.log(key)   
}
console.log('-----------------------------------------------------------------------------')
for ( const value of users.values())
{
    console.log(value.name)
}
console.log('-----------------------------------------------------------------------------')
for (const [key, value] of users.entries())
{
    console.log(key + ' = ' + value.name)
}
console.log('-----------------------------------------------------------------------------')


// using forEach loop

users.forEach((value,key) => console.log(key + ' = ' + value.name))

console.log('-----------------------------------------------------------------------------')



