// Falsy values
// undefined
// null
// ''
// 0
// NaN

//if we declare a variable and dont fill any value, it is 'undefined'
var user = NaN;
// user is undefined as of now

//if we declare a variable and compile a code to fetch a value from internet (let's say). But due to some reasons
//it was unable to fetch the value, the variable will be 'null'

console.log(typeof (user))

if (user) {
    console.log("Condition is true")
}

user = 2;
if (user == 2) {
    console.log("User is 2")
}

//adding a string and a number
console.log("2" + 2)
//The output will be 22

/*Checking two variables irrespective of their types, we use ===*/
user = "Jonathan"
age = 30
if (user === 30){
    console.log("User is equal to his age")
}
else{
    console.log("User and age are different")
}