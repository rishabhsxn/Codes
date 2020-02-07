fun main(args: Array<String>) {
    var age = 19       // mutable variable
    var age2: Int = 20;      // second way

    val ageI = 20;           // immutable variable

    var myName: String = "Rishabh"

    println("My name is $myName and my age is $age")

    // ageI = 27;      // gives an error if tried to be modified
    println(age)
}