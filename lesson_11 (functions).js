//positional argument function with return values
function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`

        case "subadmin":
            return `${name} has access to create and delete courses`

        case "testprep":
            return `${name} has access to create and delete courses`

        case "user":
            return `${name} is consumer`
        default:
            return `${name} is a trial user`
    }
}

console.log(getUserRole("Jonathan", "testprep"))
console.log(getUserRole("Sammy", "user"))

//named argument function with return values
function getSuitability({ name, age } = {}) {
    if (age > 25) {
        return `${name} is fully suitable for entry.`
    }
    else if (age > 18) {
        return `${name} has entry, but with limited accessibility`
    }
    else {
        return `${name} is not allowed to enter`
    }
}

var suitability = getSuitability({name: "Jonathan", age: 30});
console.log(suitability)