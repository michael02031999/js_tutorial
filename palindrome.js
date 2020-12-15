function reverse(string) {
	return Array.from(string).reverse().join("");
}

function palindrome(string) {
	let processedContent = string.toLowerCase();
	return processedContent ===	reverse(processedContent);
}

function emailParts (email) {
	let email1=email.toLowerCase();
	return email1.split("@");
}