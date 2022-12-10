public class reverseNumber {
    public static void main(String[] args) {
        int number  = 123456;
        int reverseNum = 0;
        while (number > 0){
            int lastnum = number % 10;
            System.out.println("lastnum__"+lastnum);
            number = number / 10;
            System.out.println("number__"+number);
            reverseNum = reverseNum * 10 + lastnum;
            System.out.println("reverseNum__"+reverseNum);
        }
    }
}
