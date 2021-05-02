function data(input){
let drink = input[0];
let sugar = input[1];
let count = Number(input[2]);

let price = 0;
switch(drink){
case "Espresso":
    switch(sugar){
case "Without":
    price= 0.9;
    break;
case "Normal":
price= 1;
break;
case "Extra":
    price=1.2;
    break;
    }
break;

case "Cappuccino" :
    switch(sugar){
case "Without":
    price= 1;
    break;
case "Normal":
price= 1.2;
break;
case "Extra":
    price=1.6;
    break;
    }
break;

case "Tea":
    switch(sugar){
case "Without":
    price= 0.5;
    break;
case "Normal":
price= 0.6;
break;
case "Extra":
    price=0.7;
    break;
    }
break;

}
let finalPrice = price*count;
if (sugar=="Without"){
    finalPrice*=0.65;
}

if(drink=="Espresso" && count>=5){
    finalPrice*=0.75;
}

if ( finalPrice>15){
    finalPrice*=0.8;
}

console.log(`You bought ${count} cups of ${drink} for ${finalPrice.toFixed(2)} lv.`)
}
data(["Espresso",
"Without",
"10"])
