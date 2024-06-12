/*q 18:Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.*/
let likeToVisit: string[] =["MAKKAH", "PHELISTINE","EGYPT","JORDAN"];
console.log("original list  " + likeToVisit);// orignal list


//• Print your array in alphabetical order without modifying the actual list.[... makes duplicate copy of original list]
console.log("alphabatical order "+  [... likeToVisit]. sort());

//• Show that your array is still in its original order by printing it.
console.log(likeToVisit);

/** */ /*Print your array in reverse alphabetical order without changing the order of the original list.*/
console.log("reverse alphabatical order  " + [...likeToVisit].sort().reverse());

//• Show that your array is still in its original order by printing it again.
console.log(likeToVisit);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse alphabatical order "+ likeToVisit.sort().reverse());



//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("alphabatical order "+   likeToVisit. sort());


//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(likeToVisit.sort());


//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log(likeToVisit.sort().reverse());