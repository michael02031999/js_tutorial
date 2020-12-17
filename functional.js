let states = ["Nebraska", "South Dakota", "North Dakota", "Idaho"];

function urilify(string) {
	return string.toLowerCase().split(/\s+/).join("-");
}

//Imperative Version
function imperativeURLS(elements) {
	let urls=[];
	elements.forEach(function(element) {
		urls.push(urilify(element));
	})
	return urls;
}
console.log(imperativeURLS(states));

//Functional Version
function functionalURLS(element) {
	return element.map(element => urilify(element));
}
console.log(functionalURLS(states));

function fullUrls (elements) {
	return elements.map(element =>
		`https://example.com/${urilify(element)}`);
}
console.log(fullUrls(states));

//Imperative version of Filter
function filter (entries) {
	single = [];
	entries.forEach(function(entry){
		if (entry.split(/\s+/).length===1) {
			single.push(entry);
		}
	});
	return single;
}
console.log(filter(states));

//functional version of filter
function filterf (elements) {
	return elements.filter(element => element.split(/\s+/).length === 1)
}
console.log(filterf(states));

function filter2(elements) {
	return elements.filter(element => element.toLowerCase().includes("dakota"));
}
console.log(filter2(states));

function filter3(elements) {
	return elements.filter(element => element.split(/\s+/).length===2);
}
console.log(filter3(states));

let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Imperative version of reduce
function imperativeSum (elements) {
	let total = 0;
	elements.forEach(function(n) {
		total+=n;
	});
	return total;
}
console.log(imperativeSum(numbers));

function functionalSum(elements) {
	return elements.reduce((total, n) => {return total += n });
}
console.log(functionalSum(numbers));

//Imperative Version #2 for reduce function
function imperativeLength (elements) {
	let lengths={};
	elements.forEach(function(element) {
		lengths[element]=element.length;
	});
	return lengths;
}
console.log(imperativeLength(states));

function functionalLength (elements) {
	return elements.reduce((lengths, element) => {
		lengths[element] = element.length;
		return lengths;
	}, {});
}
console.log(functionalLength(states));

chickenShit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function functionalMultiply(elements) {
	return elements.reduce((total, element) => {
		return total *= element; 
	});
}
console.log(functionalMultiply(chickenShit)); 












