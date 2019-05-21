import java.util.Scanner;

public class Lab521 {

    public static void main(String args[]){
//        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("Enter your name: ");
//        String username = scanner.next();
//
//        System.out.println("Enter your age: ");
//        int age = scanner.nextInt();
//
//        System.out.println(String.format("Hello %s, your age is %d", username, age));
//
//        if(age > 16){
//            System.out.println("You are old enough to drive");
//        } else {
//            System.out.println("You're not old enough for anything champ");
//        }
//        if(age > 18){
//            System.out.println("You are old enough to vote");
//        } else {
//            System.out.println("You're not old enough to vote.");
//        }
//        if(age > 21){
//            System.out.println("You are old enough to drink");
//        } else {
//            System.out.println("You're not old enough to drink");
//        }
//        if(age > 35){
//            System.out.println("You are old enough to be President");
//        } else {
//            System.out.println("You're not old enough to be president");
//        }
//        if(age > 55){
//            System.out.println("You can join AARP");
//        } else {
//            System.out.println("You're not old enough to join AARP");
//        }
//        if(age > 67){
//            System.out.println("You can start drawing Social Security");
//        } else {
//            System.out.println("You're not old enough to start drawing Social Security");
//        }
//        System.out.println("\n" + "Please type in either E, U, or S for the following question.\n"+ "E = Employed \n" +
//                "U = Unemployed \n" + "S = Student \n" +"What is your employment status: ");
//        String employment = scanner.next();
//            switch(employment){
//                case "e":
//                case "E": {
//                    System.out.println("You are employed");
//                    break;
//                }
//                case "u":
//                case "U": {
//                    System.out.println("You are unemployed");
//                    break;
//                }
//                case "s":
//                case "S": {
//                    System.out.println("You are a student");
//                    break;
//                }
//
//            }

         int[] myArray = new int[30];
            for(int i = 0; i < myArray.length; i++){
                myArray[i] = i;
//                System.out.println(myArray[i]);
            }
            System.out.println(yay(myArray, 14));
            //System.out.println(a);
//            for(int i = myArray.length - 1; i >= 0; i--){
//                System.out.println(myArray[i]);
//            }
//            int i = 0;
//            while(i < myArray.length){
//                myArray[i] = 2*i + 2;
//                System.out.println(myArray[i]);
//                i++;
//            }
//            int i = myArray.length - 1;
//            while(i >= 0){
//                myArray[i] = 2*i + 2;
//                System.out.println(myArray[i]);
//                i--;
//            }
    }
    public static int yay(int[] array, int breakNum){
        int runningTotal = 0;
        for(int i = 0; i < array.length; i++){
            if(array[i] % 2 != 0) {
                System.out.println(array[i] + " Is odd");
            }
            if(array[i] % 2 == 0){
                runningTotal += array[i];
            }
            if(array[i]  == breakNum) {
                break;
            }
        }
        return runningTotal;

    }
}
