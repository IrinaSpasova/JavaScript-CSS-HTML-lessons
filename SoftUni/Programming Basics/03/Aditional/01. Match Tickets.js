function data(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let count = Number(input[2]);
   
    /*LOGIC*/
    let budgetLeftAfterTransport = 0;

    if (count >= 50) {
        budgetLeftAfterTransport = budget*0.75;
    } else if (count >= 25 && count <= 49) {
        budgetLeftAfterTransport = budget*0.60;
    } else if (count >= 10 && count <= 24) {
        budgetLeftAfterTransport = budget*0.50;
    } else if (count >= 5 && count <= 9) {
        budgetLeftAfterTransport = budget*0.40;
    } else if (count <= 4) {
        budgetLeftAfterTransport = budget*0.25;
    }

    let priceForThickets = 0;

    switch (category) {
        case `VIP`:
            priceForThickets = 499.99 * count;
            break;
        case `Normal`:
            priceForThickets = 249.99 * count;
            break;
    }
if ((budgetLeftAfterTransport>=priceForThickets)){
   console.log(`Yes! You have ${((budgetLeftAfterTransport-priceForThickets)).toFixed(2)} leva left.`) 
}else {
    console.log(`Not enough money! You need ${((priceForThickets+(budget-budgetLeftAfterTransport))-budget).toFixed(2)} leva.`) 
 }



}
data(["30000",
    "VIP",
    "49"
]);
