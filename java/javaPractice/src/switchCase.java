public class switchCase {
    public static void main(String[] args) {
        int day = 8;
        switch (day) {
            case 1, 2, 3, 4, 5 -> System.out.println("workkday");
            case 6, 7 -> System.out.println("weekday");
            default -> System.out.println("invalid input");
        }
    }
}
