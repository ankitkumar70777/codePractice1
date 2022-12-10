public class armStrongNumber {
    public static void main(String[] args) {
        boolean isArmString = checkArmStrongNumber(1635);
        System.out.println("isArmString"+ isArmString);
    }
    static boolean checkArmStrongNumber(int N){
        int sum = 0;
        int number = N;
        System.out.println("number" + number + " ::sum:: " + sum);

        while(number > 0){


            int lastNumber = number % 10 ;
            int cubeOfLastNu = lastNumber*lastNumber*lastNumber;
            sum = sum + cubeOfLastNu;
            System.out.println(" ::sum:: " + sum);

            number = number / 10;
            System.out.println("number" + number);


        }

        if(sum == N){
            return true;
        }else{
            return false;
        }


    }
}
