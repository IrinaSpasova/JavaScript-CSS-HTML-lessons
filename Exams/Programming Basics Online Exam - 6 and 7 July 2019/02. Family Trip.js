function data(input){
let budget = Number(input[0]);
let nights = Number(input[1]);
let pricePerNight = Number(input[2]);
let additional = Number(input[3])/100;


let price = 0;
if (nights>7){
price = ((nights*pricePerNight)-((nights*pricePerNight)*0.05));
}else{
    price = (nights*pricePerNight)
}
let additionalCosts = (additional*budget);
let finalPrice = (price+additionalCosts);
if (budget>=finalPrice){
    console.log(`Ivanovi will be left with ${((budget-finalPrice).toFixed(2))} leva after vacation.`)
}else{
    console.log(`${((finalPrice-budget).toFixed(2))} leva needed.`)
}

}
data(["500",
"7",
"66",
"15"])

