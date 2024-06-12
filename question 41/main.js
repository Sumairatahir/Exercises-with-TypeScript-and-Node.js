/*q 41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.*/
//ARRAY:
var magicians = ["david", "herry potter", "patrick"];
//making functionof show_magicians:
function show_magicians(magicians) {
    magicians.forEach(function (magicians) { return console.log(magicians); });
}
//function calling:
show_magicians(magicians);
