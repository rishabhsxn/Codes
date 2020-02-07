//alert('connected')

function myValidation()
{
    // let myValue = document.querySelector('myform')
    let myValue = document.getElementById('myform').value

    let msg = ''

    if(isNaN(myValue) || myValue < 1 || myValue > 20)
    {
        msg = 'Not a valid input'
        console.log(msg)
    }
    else
    {
        msg = 'This input is OK'
        console.log(msg)
    }

    const myPElement = document.getElementById('idone')
    myPElement.textContent = msg
}