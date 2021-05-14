var user = "testprep";
switch (user){
    case "admin":
        console.log("You get the full access");
        break;
    case "sub-admin":
        console.log("You get partial access");
        break
    case "testprep":
        console.log("Consume the content");
        break;
    default:
        console.log("Trial User")
        break;
}

var age = 24
switch (age){
    case 12:
        console.log("Not suitable")
        break;
    case 24:
        console.log("Suitable")
        break
    default:
        console.log("Undefined")
        break
}