// document.querySelector('button').addEventListener('click', () => {
//     console.log('Button was pressed')
// })

document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = 'I was clicked'
})
