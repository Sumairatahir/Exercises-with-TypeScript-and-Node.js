//q31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var userName = ["SUMAIRA", "GHANIA", "SHURAIM", "KHUBAIB", "ADMIN"];
userName = [];
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < userName.length; i++) {
        if (userName[i] === 'ADMIN') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("hellow  ".concat(userName[i], " thank you for logging in again"));
        }
    }
}
