let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
	// Phrase#palindrome
	describe("#palindrome", function() {
		it("should return a false for a non-palindrone", function() {
			let nonPalindrone = new Phrase("apple"); 
			assert(!nonPalindrone.palindrome());
		});

		it("should return true for a plain palindrome", function() {
			let plainPalindrome=new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		})

		it("should return true for a palindrome with mixed case palindrome", function() {
			let mixedPalindrome = new Phrase("RaceCar");
			assert(mixedPalindrome.palindrome());
		});

		it("should return true for a palindrome with punctuation", function() {
				let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
				assert(punctuatedPalindrome.palindrome());
		});
	});
	describe("#letters", function() {
		it("should only return letters", function() {
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam");
			//assert(punctuatedPalindrome.letters() === "MadamImAdam");
			assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
		})

	});
});
