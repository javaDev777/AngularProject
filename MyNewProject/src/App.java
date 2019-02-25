import java.util.ArrayList;
import java.util.*;

/**
 * 
 */

/**
 * @author lolita
 *
 */
class StringLengthComparatorDemo implements Comparator<String> {
	@Override
	public int compare(String s1, String s2) {

		int len1 = s1.length();
		int len2 = s2.length();

		if (len1 > len2) {
			return 1;
		} else if (len1 < 1) {
			return -1;
		}
		return 0;
	}
}
	class AlphabeticalComparatorDemo implements Comparator<String> {
		@Override
		public int compare(String s1, String s2) {

			return s1.compareTo(s2);
		}
	}

		class ReverseAlphabeticalComparatorDemo implements Comparator<String> {
			@Override
			public int compare(String s1, String s2) {

				return -s1.compareTo(s2);
			}
		}	
	


public class App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> animals = new ArrayList<String>();

		animals.add("cat");
		animals.add("dog");
		animals.add("mouse");
		animals.add("elephant");
		animals.add("lion");

		// Collections.sort(animals, new StringLengthComparatorDemo());
		//Collections.sort(animals, new AlphabeticalComparatorDemo() );
		Collections.sort(animals, new ReverseAlphabeticalComparatorDemo());

		for (String animal : animals) {
			
			System.out.println(animal);	}

		List<Integer> numbers = new ArrayList<Integer>();
		
		numbers.add(3);
		numbers.add(36);
		numbers.add(73);
		numbers.add(40);
		numbers.add(1);
		
		Collections.sort(numbers);

	}

}
