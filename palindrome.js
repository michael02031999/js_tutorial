function reverse(string) {
	return Array.from(string).reverse().join("");
}

function Phrase(content) {
	this.content = content;

	this.processor = function (string) {
		return string.toLowerCase();
	}

	this.processedContent = function processedContent() {
		return this.processor(this.content);
	}

	this.palindrome = function palindrome() {
		return this.processedContent() === reverse(this.processedContent());
	}

	this.louder = function() {
		return this.content.toUpperCase();
	}
}

function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();




/*function palindrome(string) {
	let processedContent = string.toLowerCase();
	return processedContent ===	reverse(processedContent);
}

function emailParts (email) {
	let email1=email.toLowerCase();
	return email1.split("@");
}*/