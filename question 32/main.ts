//q 32: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
//current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message
// that the person will need to enter a new username. If a username has not been used, print a message saying that 
//the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// LIST PF FIVE USER NAMES:
let current_users:string[]=["Dua","Omer","Fatima","Ghania","Ali"];

//NEW USERS"
 let new_users:string[]=["Dua","Abbas","Muzna","Shuraim","Khubaib"]
 
 // LOOP THROUGH NEW USER TO CHECK USER NAME AVAILABILITY:
 new_users.forEach(new_one_user => {
 // MAKING CONDITION FOR USER NAME ALREADY EXIST AND SAVE IN OUR VARIABLE:
 let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase()===new_one_user.toLowerCase())
//print different messages using if -else::
if(our_condition){
    console.log(` sorry ${new_one_user} is already taken`)
}else{
    console.log(`this ${new_one_user} is available`)
}
 })

//.some is use to compare two arrays
