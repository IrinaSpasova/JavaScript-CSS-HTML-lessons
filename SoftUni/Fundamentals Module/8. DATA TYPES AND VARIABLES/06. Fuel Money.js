function solve(distance, passengers, price){

let fuel = (distance/100)*7;
let additionFuel = passengers*0.1;
let sum = (fuel+additionFuel)*price;

console.log(`Needed money for that trip is ${sum} lv.`);

}
solve(260, 9, 2.49)