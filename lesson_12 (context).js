//CONTEXT
//----------------------------------------------
sayHello()

function sayHello(){
    console.log("Hello")
}
//The above code does not give error.

if (2 === "2"){
    console.log("This is true")
}

console.log(userName)
var userName = "Jonathan" //Does not work
/*There is a global context in which if a function (not variables) is registered, then that function 
is wrapped up and put inside the context and can be accessed anytime, even before it is actually defined in the line
sequence.*/