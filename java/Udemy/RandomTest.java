public class RandomTest{

    public static int generateRandom(int min, int max){
        int result;
        result = (int)(Math.random()*(max-min+1))+min;
        return result;
    }

    public static void main(String[] args){
        System.out.println(Integer.toString(generateRandom(0, 3)));    
    }
}

