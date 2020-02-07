public class StringLength{
    public static void main(String[] args){
        String firstName = "Rishabh";
        String lastName = "Saxena";

        int firstNameLength = firstName.length();
        int lastNameLength = lastName.length();

        System.out.println("My name is "+firstName+" "+lastName);
        System.out.println("No. of characters in my name are: "+(firstNameLength+lastNameLength));
    }
}