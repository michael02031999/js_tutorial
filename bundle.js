(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("palindrome-testing");

let string = prompt("Please enter a string for palindrome testing");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
	alert(`"${phrase.content}" is a palindrome!`);
} else {
	alert(`"${phrase.content}" is not a palindrome.`);
}
},{"palindrome-testing":2}],2:[function(require,module,exports){
module.exports = Phrase;


String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
	if (this == "" || this.match(/\s/g)) {
		return true;
	}
	return false;
}
let x = "";
console.log(x.blank());

Array.prototype.last = function() {
	return this.slice(-1);
}

let array1=[1,2,3,4,5,6,7,8,9,10];
console.log(array1.last());



function Phrase(content) {
	this.content = content;

	this.letters = function letters() {
		return (this.content.match(/[a-z]/gi) || []).join("");
	}

	this.processor = function (string) {
		return string.toLowerCase();
	}

	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}

	this.louder = function() {
		return this.content.toUpperCase();
	}
}





/*function palindrome(string) {
	let processedContent = string.toLowerCase();
	return processedContent ===	reverse(processedContent);
}

function emailParts (email) {
	let email1=email.toLowerCase();
	return email1.split("@");
}*/
},{}]},{},[1]);
