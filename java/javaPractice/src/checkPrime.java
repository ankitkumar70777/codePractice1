public class checkPrime {
    public static void main(String[] args) {
        checkPrime(200);
    }

    static void checkPrime(int N){
        if (N <= 1) {
            System.out.println("invalid number to check Prime");
        }
        int c = 2;
        int iteration = 0;
        boolean primenumber = true;

        while(c*c < N ){
            iteration++;
            System.out.println("c--"+c);

            if(N % c == 0){
                System.out.println("not a prime number"+ "--iteration : "+iteration + "::c::" + c);
                primenumber = false;
                break;
            }
            c++;

        }
        if(primenumber == true){
            System.out.println("prime number"+ "--iteration : "+iteration + "::c::" + c);
        }

    }
}
