import java.util.*;

public class ArrayListTest{
    public static void main(String[] args){
        ArrayList<Integer> arr = new ArrayList<>();
        for(int i=1; i<=10; i++)
            arr.add(i);

        System.out.println(arr.toString());
        
        int num=2;

        for(int i=1; i<=10; i++)
            arr.set(i-1, i*num);

        System.out.println(arr.toString());

    }
}