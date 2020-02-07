// checking the entered passwords are same

document.querySelector('.myform').addEventListener('submit',(event) => {
    event.preventDefault()     // prevent the values showing up in url
    const pswrd1 = event.target.password1.value
    const pswrd2 = event.target.password2.value
    const userID = event.target.username.value

    const myElement = document.createElement('p')
    let msg = ''
    if(userID === '' || pswrd1 === '' || pswrd2 === '')
    {
        alert('User details cannot be empty !!!!!')
    }
    else if(pswrd1 != pswrd2)
    {
        msg = 'Passwords do not match'
    }
    else
    {
        msg = 'Your account is created!'
    }

    

    myElement.textContent = userID + ', ' + msg

    // making the entries blank again
    event.target.username.value = ''
    event.target.password1.value = ''
    event.target.password2.value = ''

    document.querySelector('body').appendChild(myElement)
})