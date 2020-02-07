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

const john = new User('John','Doe', 28)
const sam = new User('Sammy', 'Anderson', 30)

console.log(sam.getFullName())
console.log(john.getFullName())

john.editName('Johny Doe')
console.log(john.getFullName())
