function data(input) {
    let gests = Number(input[0]);
    let price = Number(input[1]);
    let budget = Number(input[2]);
let cake = budget*0.1;
    if (gests > 20) {
        price *= 0.75;
    } else if (gests <= 20 && gests > 15) {
        price *= 0.8;
    } else if (gests <= 15 && gests >= 10) {
            price *= 0.85;
        }
let priceForAll =(price*gests)+cake;
if (priceForAll<=budget){
    console.log(`It is party time! ${(budget-priceForAll).toFixed(2)} leva left.`);
}else{
    console.log(`No party! ${(priceForAll-budget).toFixed(2)} leva needed.`);
}
        

    }
    data(["18",
        "30",
        "450"
    ])