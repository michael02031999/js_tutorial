/*let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
	console.log(element);
});

let x = Array.from("honey badger");
x.forEach(function(element) {
	console.log(element);
});

let shit = ["ant", "bat", "cat", 42];
shit.forEach(element =>  {
	console.log(element);
});*/

let numbers = [1, 9, 99, 4, 6, 5, 7, 8, 2, 10];
numbers.sort(function(a,b) {return a-b;});
console.log(numbers);

numbers.forEach(element => {
	console.log(element);
});