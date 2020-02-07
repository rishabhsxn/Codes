const numbers = ['one','two','three','four','five','six']


// starting of array ------------------
console.log(numbers)
numbers.shift()        // remove the 1st element of array
                       // also returns the removed element         
//console.log(numbers.shift())
console.log(numbers)

numbers.unshift('new value')     // insert passed value in the starting of array
console.log(numbers)


// end of the array -------------------

numbers.pop()         // removes and return last element
console.log(numbers)
numbers.push('last')   // insert the passed value at last of array
console.log(numbers)


// desired location of the array

numbers.splice(2,2,'something')  // 3rd parameter is optional, can insert 
console.log(numbers)             // delete count no. of replacing values