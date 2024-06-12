/*question14: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner. Then use  your
  list to print a message to each person, inviting them to dinner
  for loop:(programing structure that repeats the givin instruction)
  decleared and initialised by variable i
  condition =i must be less then variable length
  itration statemen= i++.*/

  let guest_list:string[]=["ghania","shuraim","khubaib"];
  for (let i=0;i < guest_list.length;i++){
    console.log(`assalamualaikum! dear ${guest_list[i]}: \n you are invited at dinner \n`);
  }