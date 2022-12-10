public class countNums {
    public static void main(String[] args) {
        int number = 1212111;
        int occurenceNumber = 1;
        int count = 0;
//        System.out.print(number/10+"--"+ number%10);

        while(number > 0){
            int lastnumber = number % 10;
//            System.out.println("lastnumber--"+lastnumber);
            if (lastnumber == occurenceNumber){
                count++;
            }
            number = number/10;
//            System.out.println("number--"+number);
        }
        System.out.println("count--"+count);
    }
}
