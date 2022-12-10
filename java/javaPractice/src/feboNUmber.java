import java.util.Scanner;

public class feboNUmber {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int initial=0, snd = 1, feboNumber = in.nextInt(), feboAns = 0;
        for(int i = 1; i< feboNumber; i++){
            int ans = initial + snd;
            initial = snd;
            snd = ans;
            feboAns = ans;
        }
        System.out.println("FeboAns -- " + feboAns);
    }
}
