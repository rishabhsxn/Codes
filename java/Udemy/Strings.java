import java.util.*;

public class Strings{
    public static void main(String[] args){
        List<String> list = new ArrayList<String>();
        // or use List<String> list = new ArrayList<>();
        list.add("India");
        list.add("China");
        list.add("Pakistan");
        list.remove(2);
        list.add("US");
        System.out.println(list.toString());
    }
}