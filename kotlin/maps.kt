fun main(args: Array<String>){
    var nameAge = mapOf("Rishabh" to 21, "Sanyam" to 19)
    println(nameAge["Rishabh"])

    var firstLastName = mutableMapOf("Rishabh" to "Saxena", "Poojan" to "Soni", "A" to 1)
    firstLastName["newEntry"] = "Possible"

    println(firstLastName)
}