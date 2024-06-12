/*q 16 More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program 
informing people that you
 found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

let guest_list:string[]=["GHANIA","SHURAIM","KHUBAIB"];

  for (let i=0;i < guest_list.length;i++){
    console.log(`assalamualaikum! dear ${guest_list[i]} : \n you are invited at dinner \n`);
  };

  console.log("good news for you that we have found a bigger table so i m inviting my more friends");

  guest_list.unshift("DUA");
  guest_list.splice( 2,0, "MUZNA");
  guest_list.push("FATIMA");


  for(let j=0;j < guest_list.length;j++){
    console.log(console.log(`assalamualaikum! dear ${guest_list[j]} \n you are invited at dinner \n`))
  };
    
  
  