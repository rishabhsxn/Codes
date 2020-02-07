import java.util.regex.*;
import java.util.*;

public class StringManipulation{

    public static void main(String[] args){
        String testString1 = "0123456789";
        String testString2 = "MississipiMississipiMississipi";
        String testString3 = "rishabh x poojan x alpana x sanyam";
        String testString4 = "<div class=\"image\"><img src=\"http://cdn.posh24.se/images/:profile/18a090446d155deed5172629e5dc7c18f\" alt=\"Brad Pitt\"></div>";

        System.out.println(testString1.substring(3, 7));

        Pattern p = Pattern.compile("Mi(.*?)pi");
        Matcher m = p.matcher(testString2);
        while(m.find()){
            System.out.println(m.group(1));
        }

        String[] result3 = testString3.split(" x ");
        System.out.println(Arrays.toString(result3));

        p = Pattern.compile("src=\"(.*?)\"");   // ? means non-greedy
        m = p.matcher(testString4);

        ArrayList<String> result4 = new ArrayList<>();
    
        while(m.find())
            result4.add(m.group(1));
        
        System.out.println(result4);

    }
}