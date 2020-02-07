public class NumberShape{

    public static void main(String[] args){

        class Number{
            int value;

            public boolean isTriangular(){
                int triangularNumber = 1, count=1;

                while(triangularNumber <= value){
                    if(value == triangularNumber)
                        return true;

                    count++;

                    triangularNumber += count;
                }

                return false;
            }

            public boolean isSquare(){
                int perfectSquare = 1, count=1;

                while(perfectSquare <= value){
                    if(value == perfectSquare)
                        return true;

                    count++;

                    perfectSquare = count*count;
                }

                return false;
            }
        }


        Number number = new Number();
        number.value = 36;

        if(number.isSquare() && number.isTriangular())
            System.out.println(number.value+" is Triangular as well as Square");
        else if(number.isSquare())
            System.out.println(number.value+" is Square but not Triangular");
        else if(number.isTriangular())
            System.out.println(number.value+" is Triangular but not Square");
        else
            System.out.println(number.value+" is neither Triangular nor Square");
    }
}