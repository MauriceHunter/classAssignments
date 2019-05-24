import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Hashmap {

    public static void main(String[] args){
        hmaps();
    }

    public static void array(){
        ArrayList<String> Animals = new ArrayList<>();
        Animals.add("Cow");
        Animals.add("Chicken");
        Animals.add("Rat");

        String Fav = "Chicken";

        for(String i: Animals){
            if(i == Fav){
                System.out.println("I LOVE " + Fav + "s");
            } else {
                System.out.println("I dont care for " + i + "s");
            }
        }
    }

    public static void hmaps(){
        Scanner sc = new Scanner(System.in);
        Map<String, String> stuff = new HashMap<>();
        System.out.print("What is your name: ");
        String name = sc.next();
        stuff.put("Name", name);
        System.out.print("What is your age: ");
        String age = sc.next();
        stuff.put("Age", age);
        System.out.print("Hometown: ");
        String hometown = sc.next();
        stuff.put("Hometown", hometown);
        System.out.print("What is your favorite food: ");
        String favoritefood = sc.next();
        stuff.put ("Hometown", hometown);

        System.out.println("This is " + name + "," + " They are " + age + "-years-old, " + "from " + hometown + ", " + "and their favorite food is " + favoritefood + "!");

    }

}
