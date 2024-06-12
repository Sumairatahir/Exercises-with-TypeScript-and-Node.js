/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
/*EXERCISE 14:(1)*/
var guest_list = ["GHANIA", "SHURAIM", "KHUBAIB"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("assalamualaikum! dear ".concat(guest_list[i], " : \n you are invited at dinner \n"));
}
/*REPLACING PERSON:*/
console.log("assalamualaikum! \n unfortunatly ".concat(guest_list[2], " is not coming \n "));
guest_list[2] = "DUA AND MUZNA";
/*2nd set of invitation*/
console.log(" \n NEW LIST \n");
for (var s = 0; s < guest_list.length; s++) {
    console.log("\"ASSALAMUALAIKUM! \n dear ".concat(guest_list[s], " :you are invited at dinner\""));
}
