package guessNumber;

import java.util.Scanner;
import java.util.Random;

public class Guess {
	public static void main(String[] args) {
		Scanner kb = new Scanner(System.in);
		Random random = new Random();

		System.out.println("Enter your range between 2 numbers");
		System.out.println("X is going to be:");
		int x = kb.nextInt();
		System.out.println("Y is going to be:");
		int y = kb.nextInt();

		if(x == y) System.out.println("X and Y must be different");
		
		int randomNumber = Math.min(x, y) + random.nextInt(Math.abs(x - y) + 1);
		int guessedNumber = kb.nextInt();
		int guesses = 1;
		
		while(randomNumber != guessedNumber) {
			if(randomNumber > guessedNumber) {
				System.out.println("The number is higher ↑");
			} else System.out.println("The number is lower ↓");
			
			guessedNumber = kb.nextInt();
			guesses++;
		}
		if(guesses == 1) System.out.println("The number was " + randomNumber + " and it took you " + guesses + " guess");
		else System.out.println("The number was " + randomNumber + " and it took you " + guesses + " guesses");

		kb.close();
	}
}
