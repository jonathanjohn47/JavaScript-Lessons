//FUNCTIONS

function sayHello(){
    console.log("Hello World")
}

sayHello() //Calling a function
sayHello()
sayHello //Refererring a function

function sayHelloWithName(name){
    console.log(`Hello there ${name}! How are you?`)
}

sayHelloWithName("Jonathan")

function namaste(){
    return "Hello in India"
}

var greetings = namaste()
console.log(greetings)
console.log(namaste())