var email = true;
var facebook = false;
var gmail = false;

//Logical operators
if(email || facebook || gmail){
    console.log("Login accessible")
}
else{
    console.log("Login not accessible")
}

if (email && facebook && gmail){
    console.log("All Login Available")
}else{
    console.log("Not all logins available")
}