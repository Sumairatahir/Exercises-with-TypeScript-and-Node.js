// q:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
// the array of magicians’ names. Because the original array will be unchanged, return the new array and store it
// in a separate array. Call show_magicians() with each array to show that you have one array of the original names
// and one array with the Great added to each magician’s name.
let magicians:string[]=[ " david"," herry potter"," patrick"];
 function make_great(magicians: string[]) {
    for  (let i = 0; i < magicians.length; i++) {
        console.log("the great",magicians[i]) 
    }
}
//making function of show_magicians:
function show_magicians(magicians:string[]){
    magicians.forEach(magicians => console.log(magicians)
    )
}
//let great_magicians=make_great(magicians);
//function calling:
//show_magicians(magicians);
//make_great(magicians); // Modifies the original array
//show_magicians(magicians); // Shows modified names=
//* making copy oforignal array through slice function:

let copy_magicians_name=magicians.slice()

//modified the copied arrayto include the great:
let copy_great_magicians=make_great(copy_magicians_name);

//show both arrays(orignal and copied)
//original
show_magicians(magicians);

//copied:
show_magicians(copy_magicians_name);

