var countries = ["India", "USA", "Japan", "Russia"];
var states = new Array("Rajasthan", "Delhi", "Tamil Nadu", "Assam");
// console.log(states);
// console.log(countries[3]);

// console.log(states.length);

states[3] = "Punjab"

// console.log(states);

states.push("MP")
// console.log(states);
states.pop()
// console.log(states);

countries.unshift("Australia")
// console.log(countries);
countries.shift()
// console.log(countries);

console.log(states.indexOf("Punjab"));
console.log(states.indexOf("J&K"));

console.log(Array.from("Jonathan"));