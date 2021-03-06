'use strict';


// // --------------------------------------- CONSTRUCTOR FUNCTION ----------------------------------------

// /* We can't use Arrow function to create a constructor function because arrow function don't have their own 'this' keyword's
// value and we need this keyword to set values to the object. */
// const Person = function(firstName, birthYear){
//     // 'this' points to the new object that was created
//     // console.log(this);

//     // PROPERTIES
//     this.firstName = firstName;
//     this.birthYear = birthYear;
    

//     /* METHODS (don't use this technique)
//     We can create methods inside constructor function, but it is not efficient, as every instance will carry
//     it around
//     this.calcAge = function(){
//         return 2021 - this.birthYear;
//     }; */

//     // 'this' will be automatically returned
// };

// const rishabh = new Person('Rishabh', 1998);
// /* When we call with the 'new' keyword, 4 things happen:
// 1. New Empty object is created
// 2. Constructor function is called & it's 'this' is set to the empty object
// 3. The created object is linked to prototype
// 4. The created object is automatically returned from the constructor function */
// console.log(rishabh);

// const sanyam = new Person('Sanyam', 2000);

// console.log(rishabh instanceof Person);


// // EFFICIENT WAY TO ADD METHODS TO OBJECTS: USING PROTOTYPE
// console.log(Person.prototype);
// Person.prototype.calcAge = function(){
//     return 2021 - this.birthYear;
// };

// // we can also add properties
// Person.prototype.species = 'Homo Sapiens';


// console.log(rishabh.calcAge());
// console.log(sanyam.species);

// console.log(rishabh.__proto__);
// console.log(rishabh.__proto__ === Person.prototype);    // true
// console.log(sanyam.__proto__ === rishabh.__proto__);    // true

// /* IMPORTANT: It is important to note that Person.prototype is prototype of the instances but NOT of Person constructor
// function itself */
// console.log(Person.prototype.isPrototypeOf(Person));    // false
// console.log(Person.prototype.isPrototypeOf(rishabh));    // true


// // we can also check, if an object's property is it's own or of it's prototype
// console.log(rishabh.hasOwnProperty('firstName'));    // true
// console.log(rishabh.hasOwnProperty('species'));     // false



// // ----------- PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS -------------

// console.log(rishabh.__proto__.__proto__);       /* Prototype of rishabh.__proto__ is Object.prototype (top of Prototypal Chain) */
// console.log(rishabh.__proto__.__proto__.__proto__);     /* Prototype of Object.prototype is null (top end of Prototypal chain)  */

// console.dir(Person.prototype.constructor);  // points to Person()

// // arrays
// const ar = [1, 2, 2, 2, 5, 5];
// console.log(ar.__proto__);      // Array.prototype
// console.log(ar.__proto__.__proto__);      // Object.prototype


// /* we can add new methods/properties to all the arrays, by adding them in Array.prototype
// But it is not a good practice as in future JS releases there may be a function with the same name or multiple developers of the
// team may implement different functions with same name. */
// Array.prototype.unique = function(){
//     return [... new Set(this)];
// };

// console.log(ar.unique());


// /* Dom elements are also objects. Their prototype is the parent in the DOM tree. Inspect by expanding.
//          HTMLHeadingElement -> HTMLElement -> Element -> Node -> EventTarget -> Object -> null        */
// console.dir(document.querySelector('h1').__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);


// // Functions are also Objects, so they also have prototype (bind, call, apply etc)
// console.dir(function(x){ return x + 1});





// // ----------------------------------- CODING CHALLENGE #1 --------------------------------------
// /* 
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the 
// current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h
// */

// // 1
// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;     /* km/h */
// };

// // 2
// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(`${this.make}: ${this.speed}`);
// };

// // 3
// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make}: ${this.speed}`);
// };

// // 4
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// mercedes.accelerate();
// mercedes.brake();




// // -------------------------------------------- ES6 CLASS ----------------------------------------------

// /* ES6 classes work same as constructor function way of implementing Prototypal Inheritance. It's just syntactic sugar. 
// Classes are behind the scenes special Functions. 

// 1. Classes are NOT hoisted no matter declaration or expression.
// 2. Classes are functions, so they can be passed and returned from functions.
// 3. All the code inside Class is executed in Strict mode. */

// // class expression
// // const Person = class{};

// // class declaration
// class Person2{
//     constructor(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     };


//     // functions defined here are also kept in the Prototype
//     calcAge(){
//         return 2021 - this.birthYear;
//     };

//     greet(){
//         console.log(`Hello there ${this.firstName}`);
//     };
// };


// const rishu = new Person2('rishu', 1998);
// console.log(rishu.calcAge());

// console.log(rishu.__proto__ === Person2.prototype);     // true






// // ---------------------------------------------- SETTER & GETTER -----------------------------------------------

// // on Object
// const account = {
//     owner: 'Rishabh',
//     movements: [200, 530, 120, 400],

//     get latest(){
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov){
//         this.movements.push(mov);
//     },
// };

// // these are defined as methods, but are used as properties
// console.log(account.latest);
// account.latest = 100;

// console.log(account.movements);


// // on Class
// class Person{
//     constructor(fullName, birthYear){
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     };

//     // defining getter without setter is allowed
//     get age(){
//         return 2021 - this.birthYear;
//     };
  
//     // data validation & When getter/setter is used for an Existing property name
//     set fullName(name){
//         if(name.includes(' '))
//             this._fullName = name;
//         else
//             alert('This is not a Full Name!');
//     };

//     get fullName(){
//         return this._fullName;
//     };

//     calcAge(){
//         return 2021 - this.birthYear;
//     };

//     greet(){
//         console.log(`Hello there ${this.firstName}`);
//     };
// };

// const rishabh = new Person('Rishabh Saxena', 1998);
// console.log(rishabh.age);

// const sanyam = new Person('Sanyam Saxena', 2000);
// console.log(sanyam.fullName);



// // -------------------------------------------- STATIC METHODS ------------------------------------------------


// // Constructor function
// const PersonConst = function(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// PersonConst.greet = function(){
//     console.log('Hi from a constructor function!');
// };
// PersonConst.greet();

// // Class
// class PersonCl{
//     constructor(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     static greet(){
//         console.log('Hi from a class!');
//     }
// };

// PersonCl.greet();





// // ------------------------------------------------ OBJECT.CREATE() ----------------------------------------------------

// /* Using Object.create() we can manually create objects from a defined object set as it's prototype.
// It works differently from Constructor function and ES6 Class */

// // prototype object
// const PersonProto = {
//     calcAge(){
//         return 2021 - this.birthYear;
//     },

//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// // create an object using PersonProto as it's prototype
// const poojan = Object.create(PersonProto);

// // Instead of manually adding properties, we can create an init() function in the prototype
// // poojan.firstName = 'Poojan';
// // poojan.birthYear = 1999;
// poojan.init('Poojan', 1999);

// console.log(poojan.calcAge());





// // ------------------------------------------------ CODING CHALLENGE #02 -----------------------------------------------
// /* 
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing 
// the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// class Car{
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate(){
//         this.speed += 10;
//         console.log(`${this.make} is running at speed of ${this.speed}`);
//     }

//     brake(){
//         this.speed -= 5;
//         console.log(`${this.make} is running at speed of ${this.speed}`);
//     }

//     get speedUS(){
//         return this.speed/1.6;
//     }

//     set speedUS(speed){
//         this.speed = speed * 1.6;
//     }
// };

// const ford = new Car('Ford', 120);

// ford.accelerate();
// ford.accelerate();
// ford.brake();

// console.log(`${ford.make}'s speed in mi/h: ${ford.speedUS}`);
// ford.speedUS = 50;
// console.log(`${ford.make}'s speed in mi/h: ${ford.speedUS}`);




// // ---------------------------------------- INHERITANCE (Constructor Functions) ----------------------------------------

// // Parent cLass
// const Person = function(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function(){
//     return 2021 - this.birthYear;
// };


// // Child Class
// const Student = function(firstName, birthYear, course){
//     /* Call the parent class constructor function with it's this keyword set to the current new empty object (this).
//     Due to this, the Parent constructor will set it's properties in the child object */
//     Person.call(this, firstName, birthYear);

//     this.course = course;
// };
// // console.log(Student.prototype.__proto__ === Object.prototype)       // true
// /* IMPORTANT: Before adding methods to Student, we need to complete the inheritance, we have to complete the 
// Prototypal Chain i.e. make Person.prototype the prototype of Student.prototype (which is currently Object.prototype) */
// Student.prototype = Object.create(Person.prototype);

// /* We have to fix some error manually now. 
// Student.prototype.constructor should point to Student() constructor function, but now it points to Person() */
// Student.prototype.constructor = Student;


// Student.prototype.introduce = function(){
//     console.log(`Hello! I'm ${this.firstName} and I'm studying ${this.course}`);
// };


// const rishabh = new Student('Rishabh', 1998, 'Computer Science');

// console.log(rishabh.calcAge());     // method inherited from the Parent class Person
// rishabh.introduce();       // method of Student itself




// // --------------------------------------------- CODING CHALLENGE #3 ----------------------------------------------------
// /* 
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and 
// current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. 
// Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). 
// Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */

// // 1
// const EV = function(make, speed, charge){
//     Car.call(this, make, speed);
//     this.charge = charge;   /* in % */
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// // 2
// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo;
// };

// // 3 - this function will overwrite the previous implementation of accelerate
// EV.prototype.accelerate = function(){
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// };

// // 4
// const tesla = new EV('Tesla', 120, 23);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);





// // ---------------------------------------- INHERITANCE (ES6 Class) ----------------------------------------

// class Student extends Person{
//     /* IMPORTANT: If NO new properties are required to be initialized in the child, no need to define constructor or call
//     super(), it will be done automatically */
//     constructor(fullName, birthYear, course){
//         super(fullName, birthYear);     // it is mandatory to call super before initializing properties of the child
//         this.course = course;
//     };

//     // this function will overwrite the previous implementation
//     greet(){
//         console.log(`Hi there! I'm ${this.fullName}, ${this.calcAge()} yr old and studying ${this.course}.`);
//     };
// };

// const john = new Student('John Doe', 1995, 'History');

// console.log(john.calcAge());    // from parent
// john.greet();




// // ---------------------------------------- INHERITANCE (Object.create()) ----------------------------------------

// // Parent Prototype
// const PersonProto = {
//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },

//     calcAge(){
//         return 2021 - this.birthYear;
//     },
// };

// // Child Prototype
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course){
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };
// StudentProto.introduce = function(){
//     console.log(`My name is ${this.firstName}. I'm ${this.calcAge()} yr old and studying ${this.course}.`);
// };

// // Child Instance
// const ramesh = Object.create(StudentProto);
// ramesh.init('Ramesh', 1980, 'Chemistry');

// console.log(ramesh.calcAge());      // from topmost prototype
// ramesh.introduce();     // from closest prototype




// -------------------------------------------- ENCAPSULATION: Protected -------------------------------------------

/* JavaScript doesn't support truly yet. We only follow a convention so that our fellow developers understand
that this variable or method is not to be directly accessed from outside the class. */

/* Because of Encapsulation:
1. We can ensure Data Privacy. We can specify which methods or property can be accessed from outside by defining
the Public Interface (API).
2. We can ensure that we can safely change the private method's implementation in the future. Define most of the code
as private and very less code as public interface. */

class Account{
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;    // protected
        this._movements = [];   // protected
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}.`);
    };

    deposit(val){
        this._movements.push(val);
    };

    withdraw(val){
        this.deposit(-val);
    };

    // protected method
    _approveLoan(val){
        // some complex logic
        return true;
    };

    requestLoan(val){
        if(this._approveLoan(val)){
            console.log(`Loan Granted!`);
            this.deposit(val);
        }
        else
            console.log(`Loan Declined!`);
    };
};

const acc1 = new Account('Rishabh', 'INR', 1234);

acc1.deposit(10000);
acc1.withdraw(100);
acc1.requestLoan(20000);

/* We can still access the protected methods, but they should not be accessed */
console.log(acc1._movements);