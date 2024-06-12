/* q 23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
 prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I  predict True.")*/
// test 1:
let car:string="subaru";
console.log("is car == 'subaru'? I predict it true");
console.log(car == 'subaru');
//test 2:
console.log ("car !== 'toyota' i predict it is true");
console.log(car !== `toyota`);
// test 3:
console.log( "car > 4 i predict it is true. ");
console.log(car.length > 4);
//test 4
console.log(" is the length of car == 6? i predict it is true ");
console.log(car.length ==6);
//test 5:
console.log("car !== 'honda'? i predict it true");
console.log(car !=='honda');

console.log("\n  FALSE RESULTS \n ");
/*//test 1:
//let car:any
console.log("is the car == 'honda' i says it is false");
console.log(car == 'honda');
//test 2:
console.log("is the car == 'toyota' I predict it false");
console.log(car === 'toyota');
// test 3:
console.log("is the car !== 'subaru' i predict it is FALSE");
console.log( car == 'subaru');
//test 4:
console.log("car !=='honda'? i says it is false");
console.log(car =='honda')
//test 5:
console.log("is the car !== civic.i says it is FALSE");
console.log(car == 'civic');*/