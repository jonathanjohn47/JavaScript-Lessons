/* var isEven = function isEven(element){
    return element %2 == 0
} */
//The above function can be written as follows:

var isEven = (element) => {
    return element % 2 == 0
}
//This is called "Arrow Function"

var myArray = [2, 4, 6, 8]

var result = myArray.every(isEven)

result = myArray.every((element) => {
    return isEven(element)
})
console.log(result);