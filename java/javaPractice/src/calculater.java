import java.util.Scanner;

public class calculater {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int ans = 0;
        while (true){
            System.out.println("enter operator : ");
            char op = in.next().trim().charAt(0);

            if(op == '+' || op == '-' || op == '/' || op == '*'){
                System.out.println("Enter two number :");
                int a = in.nextInt();
                int b = in.nextInt();

                if(op == '+'){
                    ans = a+b;
                }
                if(op == '-'){
                    ans = a-b;
                }
                if(op == '*'){
                    ans = a*b;
                }
                if(op == '/'){
                    if (b!=0){
                        ans = a/b;
                    }

                }
                System.out.println("ans : "+ ans);
            }else if(op == 'x'){
                break;
            }else{
                System.out.println("invalid input :");
            }
        }
    }
}
