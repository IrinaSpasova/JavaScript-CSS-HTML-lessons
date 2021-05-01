function data(input){
let budget = Number(input[0]);
let n = Number(input[1]);
let m = Number(input[2]);
let p = Number(input[3]);

let cards = n*250;
let pro = m*(cards*0.35);
let ram = p*(cards*0.1);
let price = cards+pro+ram;
if (n>m){
price*=0.85;
}

if (budget>=price){
    console.log(`You have ${(budget-price).toFixed(2)} leva left!`);
}else{
    console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva more!`)
}

}
data(["900",
"2",
"1",
"3"]);
