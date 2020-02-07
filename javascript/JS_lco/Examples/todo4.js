const myTodos = [{
    title: 'Go to Gym',
    isDone: false
}, {
    title: 'Buy Bread',
    isDone: true
}, {
    title: 'Do assignment',
    isDone: true
}]


// method #1 -------  findIndex()
console.log('\nMethod #1')
let findTodo = function(arr,title)
{
    let index = arr.findIndex(function(obj,index) {
        return obj.title.toLowerCase() === title.toLowerCase()
    })

    return arr[index]
}

console.log(findTodo(myTodos,'Go TO GYM'))


// method #2 -------  find()
console.log('\nMethod #2')
let findTodo2 = function(arr,title)
{
    let result = arr.find(function(obj,index) {
        return obj.title.toLowerCase() === title.toLowerCase()
    })

    return result
}

console.log(findTodo2(myTodos,'DO ASSIGNMENT'))