var userName = {
    firstName: "Jonathan",
    lastName: "John"
}

var user = {
    userName: userName,
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    googleSignIn: false,

}


console.log(userName);
console.log(user["loginCount"]);
console.log(user.role);
console.log(user.userName.firstName);
console.table(user)

var myObj = {}
Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8 })
console.log(myObj);