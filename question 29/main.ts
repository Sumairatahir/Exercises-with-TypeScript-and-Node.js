//q 29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
//in your array, the if block should print a statement, such as You really like bananas!

//A array of  three favorite fruits:
let favourite_fruits=["apple","mango","papaya"]

//five if statements:
if(favourite_fruits.includes("apple")){
    console.log("i like apples !");
}

if (favourite_fruits.includes("mango")){
    console.log("i really like mangoes !");
}

if(favourite_fruits.includes("banana")){
    console.log("i don't like banana !");
}

if(favourite_fruits.includes("papaya")){
    console.log("i like papaya !");
}

if(favourite_fruits.includes("grapes")){
    console.log("i like grapes!");
}

