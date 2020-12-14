function dayName(date) {
	let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return daysOfTheWeek[date.getDay()];
}

function greeting(day) {
	let x = `Hello, World! Happy ${dayName(now)}.`
	return x; 
}