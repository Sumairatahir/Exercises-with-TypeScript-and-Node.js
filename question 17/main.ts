/*q17 :Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
an empty list at the end of your program. */

let guest_list:string[]=["GHANIA","SHURAIM","KHUBAIB"];

  for (let i=0;i < guest_list.length;i++){
    console.log(`assalamualaikum! dear ${guest_list[i]} : \n you are invited at dinner \n`)
  };

  console.log("good news for you that we have found a bigger table so i m inviting my more friends");

  guest_list.unshift("DUA");
  guest_list.splice( 2,0, "MUZNA");
  guest_list.push("FATIMA");


  for(let j=0;j < guest_list.length;j++){
    console.log(console.log(`assalamualaikum! dear ${guest_list[j]}: \n you are invited at dinner \n`));
  };
    console.log(guest_list);

  //message to inform
  console.log(` "dear frinds ${guest_list} ASSALAMUALAIKUM \n unfortunatly dinner table is not arriving at time so i m inviting omly two frinds \n "`);
  
  //making new list
   guest_list.pop()
   guest_list.pop()
   guest_list.pop()
   guest_list.pop()
 
   
    console.log(guest_list);
   
    for(let k=0; k < guest_list.length; k++){
        console.log(` ${guest_list[k]} you are invited at dinner`)
        
    }
   
    //empty list
    guest_list.pop()
    guest_list.pop()
     console.log (guest_list);