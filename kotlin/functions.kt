fun main(args: Array<String>){

    fun hello(name: String = "Not Provided", age: Int = -1): String{
        return "Hello my name is $name and my age is $age"
    }

    println(hello("Rishabh", 21))

    println(hello("Rishabh"))

}