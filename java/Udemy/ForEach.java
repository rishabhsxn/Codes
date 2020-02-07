import java.util.*;

public class ForEach{

    public static void main(String[] args){

        // String[] familyMembers = {"Anil", "Alpana", "Sanyam", "Rishabh"};
        List<String> familyMembers = new ArrayList<>();
        familyMembers.add("Anil");
        familyMembers.add("Alpana");
        familyMembers.add("Sanyam");
        familyMembers.add("Rishabh");

        for (String name : familyMembers){
            System.out.println(name);
        }
    }
}