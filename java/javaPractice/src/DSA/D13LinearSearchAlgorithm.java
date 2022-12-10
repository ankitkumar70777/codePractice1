package DSA;

public class D13LinearSearchAlgorithm {
    public static void main(String[] args) {
        int[] Arr = {1,3,2,4,6,8,20};
        System.out.println(" element found ? " + searchInArr(Arr, 0));
    }
    static int searchInArr(int[] Arr,int inputToSearch){
        for(int i = 0;i<Arr.length;i++){
            if (Arr[i] == inputToSearch){
                return 1;

            }
        }
        return -1;
    }
}
