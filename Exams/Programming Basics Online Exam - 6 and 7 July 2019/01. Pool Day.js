function data(input){
let people = Number(input[0]);
let taxForEntering = Number(input[1]);
let seatPrice = Number(input[2]);
let umbrellaPrice = Number(input[3]);


let taxForPeople = people*taxForEntering;
let priceForSeats = (Math.ceil(people*0.75)*seatPrice);
let umbrellasForAll =((Math.ceil(people/2))*umbrellaPrice);
let sum = taxForPeople+priceForSeats+umbrellasForAll;

console.log(`${sum.toFixed(2)} lv.`);


}
data(["21",
"5.50",
"4.40",
"6.20"])
