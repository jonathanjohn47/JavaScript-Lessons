//Global context running here
var num = 1
function sayMe() {
    console.log("Say Me")
}

sayMe() //Execution context kicks in here

/* Execution Context has following types:
   1. Variable Object 
   2. Scope Chain
   3. This*/

/* There are two rules to follow when dealing with execution context 
    1. Function declarations are scanned and made available
    2. Variable declarations are scanned and made undefined*/

tipper("80")
function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5)
}

/* bigTipper(200); Calling the function here will give error as bigTipper 
is now a variable and not a function.
Any variable declared in global context will be of "undefined" type */

var bigTipper = function bigTipper(a){
    var bill = parseInt(a)
    console.log(bill + 15)
}

bigTipper(200)
//-----------Check the following example----------------------------
console.log(name);
var name = "Jonathan";
/* variable 'name' is called before being defined. So it is 'undefined'. And the output of course 
is undefined*/

//-------------------------------------------
function sayName(){
    var name = "Mr. J"
    console.log(name)
}

sayName();
console.log(name)

/* The context of "name" variable is in global context outside sayName() and in
execution context inside sayName(). Therefore it was possible to declare "name" more
than once, but in different contexts */

//Every variable should be declared only ONCE in each context.