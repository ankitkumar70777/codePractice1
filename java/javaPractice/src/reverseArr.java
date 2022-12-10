import java.util.Arrays;

public class reverseArr {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        for (int i = 0; i < Math.floor(arr1.length / 2); i++) {
            int tempVar1 = arr1[i];
            arr1[i] = arr1[(arr1.length - 1) - i];
            arr1[(arr1.length - 1) - i] = tempVar1;
        }

        System.out.println("arr1---" + Arrays.toString(arr1));
    }
}
