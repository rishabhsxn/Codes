// const arr = [{
//     name:'john',
//     age:22
// }, {
//     name: 'marry',
//     age: 12
// }, {
//     name:'sam',
//     age: 29
// }]

// var users = new Map(arr)

// console.log(users)

// printing()

// function printing()
// {
//     console.log('Helloooo')
// }

getRandomColor = function()
{
  return(
      'rgb(' +
       Math.floor(Math.random()* 256) + ', ' +
       Math.floor(Math.random()* 256) + ', ' + 
       Math.floor(Math.random()* 256) + ')'
  )
}

console.log(getRandomColor())

