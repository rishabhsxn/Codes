const student = {
    name: 'John',
    age: 23,
    isActive: true
}

// convert this object into a sting, to store in localstorage

const studentObjToString = JSON.stringify(student)

console.log(typeof studentObjToString)

//localStorage.setItem('student', studentObjToString)

const toJsonStudent = JSON.parse(studentObjToString)
console.log(typeof toJsonStudent)