var name = "Jonathan" /* Global level "name", accessible to all functions and code in global context
except when there is another declaration in different context*/

console.log(`Line Number 2: ${name}`)

function sayName() {
    console.log(`Line Number 5: ${name}`)
}

sayName()

function sayAnotherName() {
    var name = "Mr. J" /*Execution context "name", accessible too all functions and code within this contextl̥*/
    console.log(`Line Number 12: ${name}`)

    function sayAnotherNameTWo() {
        console.log(`Line Number 15: ${name}`);
    }

    sayAnotherNameTWo()
}

sayAnotherName()