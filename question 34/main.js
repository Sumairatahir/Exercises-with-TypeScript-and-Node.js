//q 34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use
// a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//ARRAY:
var pizzas = ["tikka", "fajita", "hawaiin"];
pizzas.forEach(function (pizza) {
    console.log("i like ".concat(pizza, " pizza"));
});
console.log("i really love pizza!");
