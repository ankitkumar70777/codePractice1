import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//            Scanner in = new Scanner(System.in);
//            int input = in.nextInt();
//        System.out.println("input is"+input);
//
//        for(int a = 0; a<=input;a++){
//            System.out.println("a"+a);
//        }

//        while loop
//        int a = 0;
//        while(a < 0){
//            System.out.println("a -- "+a);
//            a++;
//        }


//        do while loop
//        int a = 0;
//        do {
//            System.out.println("a---"+a);
//            a++;
//        }while(a<0);


        int a = 12; int b = 18; int  c=15;
        //find largest number
        int max = a;
        if(a<b){
            max = b;
        }else if(a<c){
            max = c;
        }else{
            max = a;
        }
        System.out.println("max val---"+max);
    }
}