function sumOne(a, b) {
    return a + b
}
console.log(sumOne(4, 2));
console.log(sumOne([4, 2])); //Will not work properly

var myA = [5, 4]
console.log(sumOne(...myA)); //Spread operator to squentially refer to each element

function sumTwo(...args) { //Rest Operator. Reverse of Spread Operator
    console.log(...args);
    let sum = 0
    for (const arg of args) {
        sum = sum + arg;
    }

    return sum;
}

var myB = [4,2,6,4,2,10]
console.log(sumTwo(...myB));

//Another Example to treat first two values of array differently

function sumThree(a, b, ...args){
    let multi = a*b;
    for (const arg of args) {
        multi = multi + arg
    }
    return multi
}

console.log(sumThree(...myB));