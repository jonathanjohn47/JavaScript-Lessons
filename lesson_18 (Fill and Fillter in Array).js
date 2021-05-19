var testArray = [2, 4, 6, 3, 0, 1, 7, 8]

/* console.log(testArray.fill("h", 3));
testArray = [2, 4, 6, 3, 0, 1, 7, 8]
console.log(testArray.fill("h", 0));
testArray = [2, 4, 6, 3, 0, 1, 7, 8]
console.log(testArray.fill("h", 1));
testArray = [2, 4, 6, 3, 0, 1, 7, 8]
console.log(testArray.fill("h", 2, 5)); */

const myNumber = [23, 24, 25, 55, 66, 77, 87]
const result = myNumber.filter((num) => { return num != 55 })
console.log(result);

const someOtherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res = someOtherArray.filter((num) => { return num % 2 == 0 })
console.log(res);