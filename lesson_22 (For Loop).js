var someArray = []
for (let i = 0; i < 10; i++) {
    someArray.push(`Element ${i + 1}`);
}

console.log(someArray);

var myStates = ["Rajasthan", "JK", "Punjab", 1977, "Tamil", "Karnataka"]
for (let i = 0; i < myStates.length; i++) {
    if (typeof(myStates[i]) != "string"){
        continue;
    }
    console.log(myStates[i]);
}