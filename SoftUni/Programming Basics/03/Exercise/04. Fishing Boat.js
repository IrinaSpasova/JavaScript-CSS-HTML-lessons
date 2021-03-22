function data(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    /*LOGIC*/
    let rentPrice = 0;
    switch (season) {
        case "Spring":
            rentPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            rentPrice = 4200;
            break;
        case "Winter":
            rentPrice = 2600;
            break;
    }

    if (fishermen <= 6) {
        rentPrice *= 0.9;
    } else if (fishermen <= 11) {
        rentPrice *= 0.85;
    } else if (fishermen >= 12) {
        rentPrice *= 0.75;
    }

    if (fishermen % 2 === 0 && season !== "Autumn") {
        rentPrice *= 0.95;
    }
    if (budget>=rentPrice){
        console.log(`Yes! You have ${(budget-rentPrice).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${(rentPrice-budget).toFixed(2)} leva.`)
    }


}

data(["3000", "Summer", "11"]);