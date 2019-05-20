public class Lab1 {
//    public static void main(String[] Args){
//        int firstInt = 6;
//        int secondInt = 20;
//        int thirdInt = 0;
//        float fL1 = 4.4f;
//        boolean isCold = false;
//        double myDoub = 1_000;
//         For lab 1 you cna just plug in all the varaible names in to the System.out.println() statement;
//         The start of lab step 2, requires you to give a value to the once empty thirdInt, / is showing the division, using % shows you the remainder of the division.
//        System.out.println(secondInt % firstInt);
//        int newInt = (secondInt % firstInt) + firstInt;
//        System.out.println(newInt + 1);
//         The start of lab step 3
//        int x = 100;
//        boolean newBoo = (x == 100);
//        var y = 106;
//        var z = 92;
//        System.out.println(x < y == !(x > y));
//         Start of lab step 4
//        int n = 39;
//        System.out.println(n >> 2 == n / 4);
//        System.out.println(n << 2 == n * 4);
//         Start of lab step 5, you cant reference newVars directly from main
//      public static void main(String[] arg) {
//          anotherMethod();
//      }
//      public static void anotherMethod() {
//                integer newVars = new Integer("1000");
//                if (newVars > 1_000){
//                    var newNew = (newVars / 2);
//                    System.out.println(newNew + " Is Half A Big Value");
//                } else {
//                    var newNew = (newVars / 2);
//                    System.out.println(newNew + " Is Definitely Small");
//                }
//      }
//      Lab step 6 starts here
//    public static void main(String[] arg) {
//        anotherMethod();
//    }
//        public static void anotherMethod() {
//            Integer newVars = new Integer("1000");
//            if (newVars.intValue() > 900){
//                var newNew = (newVars / 2);
//                System.out.println(newNew + " Is Half A Big Value");
//            } else {
//                var newNew = (newVars / 2);
//                System.out.println(newNew + " Is Definitely Small");
//            }
//    }
    //start lab step 7
        public static void main(String[] arg) {
            playWithStrings();
        }
            public static void playWithStrings() {
            String m = "Maurice";
            String h = new String("Hunter");
            System.out.println("Hello " + m + " " + h);

            }
}