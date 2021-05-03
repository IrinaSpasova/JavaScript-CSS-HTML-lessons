function data(input){
let budget = Number(input[0]);
let gas = Number(input[1]);
let day = input[2];

let price=0;
if (day=="Saturday"){
price= ((gas*2.1)+100)*0.9;
}else{
    price= ((gas*2.1)+100)*0.8;
}
if(budget>=price){
    console.log(`Safari time! Money left: ${(budget-price).toFixed(2)} lv.`);
}else{
    console.log(`Not enough money! Money needed: ${Math.abs(budget-price).toFixed(2)} lv.`);
}

}
data (["1000",
"10",
"Sunday"])
