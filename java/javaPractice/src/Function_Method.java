public class Function_Method {
    public static void main(String[] args) {
        sayHello();
        System.out.println(sum(3,4));
    }
    static void  sayHello(){
        System.out.println("Hello world");
    }

    static int sum(int a, int b){
        return a+b;
    }

}
