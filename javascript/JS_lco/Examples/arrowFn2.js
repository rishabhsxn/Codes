const myTodos = [{
    title: 'Go to Gym',
    isDone: false
}, {
    title: 'Buy bread',
    isDone: true
}, {
    title: 'Learn React Native',
    isDone: false
}, {
    title: 'Learn Python',
    isDone: true
}, {
    title: 'Learn Flutter',
    isDone: false
}, {
    title: 'Listen to Songs',
    isDone: false
}]

// find all todos which are not completed
let thingsNotDone = myTodos.filter((todo) => todo.isDone == false)

// print only title of each todo
thingsNotDone.forEach((todo) => console.log(todo.title))
