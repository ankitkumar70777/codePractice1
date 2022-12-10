import java.lang.reflect.Array;
import java.util.Arrays;

public class multidimentionalArr {
    public static void main(String[] args) {
        int[][] arr = {{1,2,3,1,1,},{4,5,6},{9}};

        for(int i = 0; i<arr.length; i++){
            for(int j=0; j< arr[i].length; j++){
                System.out.print(arr[i][j]);
            }
            System.out.println();
        }



    }
}
