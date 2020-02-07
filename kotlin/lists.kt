fun main(args: Array<String>){

    var myFavNumbers = listOf(1,2,3,4, "Rishabh")     // immutable, fixed size
    println(myFavNumbers)

    // if mutable is wanted then, arrayOf should be used
    var arr = arrayOf(1,2,3,4,5)      // mutable, fixed size
    arr[0] = 2
    println(arr)

    var myFavNames = mutableListOf("Rishabh", "Poojan", "Sanyam")    // mutable, dynamic
    myFavNames.add("Ashutosh")
    println(myFavNames)
    
}