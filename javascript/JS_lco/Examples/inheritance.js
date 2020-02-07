class User
{
    constructor(firstName, lastName, credits)
    {
        this.firstName = firstName
        this.lastName = lastName
        this.credits = credits
    }

    getFullName()
    {
        return `${this.firstName} ${this.lastName} is my full name.`
    }

    editName(name)
    {
        let newName = name.split(' ')
        this.firstName = newName[0]
        this.lastName = newName[1]
    }
}

/* objects of Teacher class have access to all variables(properties) and methods of
class User */

class Teacher extends User    
{
    constructor(firstName, lastName, credits, subject)
    {
        super(firstName,lastName,credits)
        this.subject = subject
    }

    // method overriding
    getFullName()
    {
        return `${this.firstName} ${this.lastName} is my full name and I teach ${this.subject}`
    }
}

const john = new Teacher('John', 'Doe', 28, 'Python')
console.log(john.getFullName())
john.editName('Johnny Doe')
console.log(john.getFullName())