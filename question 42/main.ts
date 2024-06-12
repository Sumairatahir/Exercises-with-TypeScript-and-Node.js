/*q 42Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
 to see that the list has actually been modified.*/

 let magicians:string[]=[ " david"," herry potter"," patrick"];
 function make_great(magicians: string[]) {
    for  (let i = 0; i < magicians.length; i++) {
        console.log("the great",magicians[i]) 
    }
}
//making functionof show_magicians:
function show_magicians(magicians:string[]){
    magicians.forEach(magicians => console.log(magicians)
    )
}
//function calling:
show_magicians(magicians)
make_great(magicians); // Modifies the original array
//show_magicians(magicians); // Shows modified names=