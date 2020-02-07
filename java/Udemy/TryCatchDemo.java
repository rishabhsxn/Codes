public class TryCatchDemo{

    public static void main(String[] args){
        int[] arr = new int[3];

        try {
            for(int i=0; i<4; i++)
            arr[i] = i;

        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Out of Bounds");
        }
        catch (Exception e) {
            System.out.println(e);
        }
        
        System.out.println(arr.toString());
    }
}