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
    courses: [],
    buyCourse: function (courseName) {
        this.courses.push(courseName);
    },
    getCourseCount: function () {
        return `${this.userName.firstName} is enrolled in ${this.courses.length} courses`
    }
}


user.buyCourse("Javascript")
console.log(user.getCourseCount());

user.buyCourse("React")
console.log(user.getCourseCount());