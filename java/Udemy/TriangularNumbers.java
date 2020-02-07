public class TriangularNumbers{
    public static void main(String[] args){

        int x=1, triangularNumber=1;

        while(x <= 10){
            System.out.println(triangularNumber);
            x++;
            triangularNumber += x;
        }
    }
}