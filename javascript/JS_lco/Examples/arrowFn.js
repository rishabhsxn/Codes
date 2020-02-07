// arrow functions reduce lines of code and also simplify code

const myTodos = [{
    title: 'Go to Gym',
    isDone: false
}, {
    title: 'Buy bread',
    isDone: true
}, {
    title: 'Learn React Native',
    isDone: false
}]

// print things that are done using arrow function

// normal function
// let thingsDone = myTodos.filter(function(obj) {
//     return obj.isDone === true
// })

let thingsDone = myTodos.filter((obj) => obj.isDone === true)
console.log(thingsDone)