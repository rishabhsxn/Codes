let user = 'lco123'

let password = '12345678'

let userChecker = function(userId)
{
    if(userId.includes(123))
    {
        return true
    }
    else
    {
        return false
    }
}

let passChecker = function(pass)
{
    if(pass.includes('234') && pass.length > 7)
    {
        return true
    }
    else
    {
        return false
    }
}

console.log(userChecker(user))
console.log(passChecker(password))