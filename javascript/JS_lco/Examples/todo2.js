let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0
}

let addMeeting = function(todo,meet)
{
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo,meetDone)
{
    todo.meetDone = todo.meetDone + meetDone
}

let getSummary = function(todo)
{
    console.log(`Day: ${todo.day}`)
    console.log(`Meetings left: ${todo.meetings-todo.meetDone}`)
}

addMeeting(myTodos,4)
addMeeting(myTodos,2)

meetDone(myTodos,5)

getSummary(myTodos)