This is a sample NPM module by Michael Galan

The module can be used as follows:

$ npm install --global michael020399-palindrome

$ vim test.js

let Phrase = require("michael020399-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());

$ node test.js
true