public class Number{

    public static void main(String[] args){

        class Num{
            int value;

            public boolean isPositive(){
                if(value>=0)
                    return true;
                else
                    return false;
            }
        }

        Num number = new Num();
        number.value = -10;
        System.out.println(number.isPositive());
    }
}