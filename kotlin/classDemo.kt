fun main(args: Array<String>){

    class Dog{
        var name: String
        var age: Int
        var furColor: String

        init{
            // this is a function which is called whenever a new object of this class is created
        }

        constructor(name: String, age: Int, furColor: String){
            this.name = name
            this.age = age
            this.furColor = furColor
        }

        constructor(name: String, age: Int){
            this.name = name;
            this.age = age
            furColor = ""
        }

        fun printInfo(): String{
            if(furColor.length==0)
                return "$name is $age years old"
            else
                return "$name is $age years old and has $furColor fur"
        }
    }


    var myDog = Dog("Brit", 2, "Golden")
    println(myDog.printInfo())

    var myDog2 = Dog("Britany", 5)
    println(myDog2.printInfo())


    class Cat(var name: String, var age: Int){

        fun printCatInfo(): String{
            return "$name is $age years old"
        }
    }

    var myCat = Cat("Dassy", 2)
    println(myCat.printCatInfo())


}