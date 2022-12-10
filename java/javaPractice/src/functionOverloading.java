public class functionOverloading {
    public static void main(String[] args) {
    sum(2,3);
    sum(1,2,3);
    }

    static void sum(int a, int b){
        int result = a+b;
        System.out.println("o/p: " + result);
    }
    static void sum(int a, int b, int c){
        System.out.println("o/p: "+ a+b+c);
    }
}
