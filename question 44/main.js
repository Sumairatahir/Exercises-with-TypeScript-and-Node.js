//q 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
//should have one parameter that collects as many items as the function call provides, and it should print a
// summary of the sandwich that is being ordered. Call the function three times, using a different number of
// arguments each time.
//define function with rest parameter that accept items
/*function makeSandwich(... items:string[]){
    console.log(" \n making sandwich with following items  \n");
    items.forEach(singleitems => console.log(singleitems));
    console.log(("\n now enjoy sandwich \n"));
    
}
//call the function (3 times with 3 diff. arrguments):
 makeSandwich("chicken","mayo");
 makeSandwich("egg","cheeze")
 makeSandwich("chicken","egg","mayo","cheeze")*/
// or( 2nd  method)
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwitch with ".concat(items));
}
makeSandwich("mayo", "eggs", "cheeze", "butter");
makeSandwich("chiken");
