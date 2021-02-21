import java.util.Arrays;

public class sheet8 {
    public static void main(String[] args) {
        String s = "this    a";
        System.out.println(countWords(s));
    }
    public static int countWords(String str){
        int count = 1;
        for(int i = 0;i < str.length() - 1;i++){
            if(str.charAt(i) == ' ' && str.charAt(i + 1)!=' '){
                count++;
            }
        }
        return count;
    }
}




