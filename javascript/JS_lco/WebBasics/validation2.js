//    . = class
//    # = id

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.realname.value)
    event.target.username.value=''
    event.target.realname.value=''

})