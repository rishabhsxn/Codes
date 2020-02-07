// Maps are very useful for these type of data
// we get these type of data structures from DBs

var arrOfArr = [['1','one'],['2','two'],['3','three']]

var newMap = new Map(arrOfArr)

console.log(newMap)

console.log('-----------------------------------------------------------------------------')

newMap.forEach((value, key) => console.log(key + ' = ' + value))

console.log('-----------------------------------------------------------------------------')

for (const [key,value] of newMap.entries()) 
{
    console.log(key + ' = ' + value)
}