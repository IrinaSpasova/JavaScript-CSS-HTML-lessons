function data(input) {
    let flowers = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);


    /*LOGIC*/
    let price = 0.0;

    switch (flowers) {
        case "Roses":
            price = count * 5;
            break;
        case "Dahlias":
            price = count * 3.8;
            break;
        case "Tulips":
            price = count * 2.8;
            break;
        case "Narcissus":
            price = count * 3;
            break;
        case "Gladiolus":
            price = count * 2.5;
            break;
    }

    if (flowers === "Roses" && count > 80) {
        price = price * 0.9;
    } else if (flowers === "Dahlias" && count > 90) {
        price *= 0.85;
    } else if (flowers === "Tulips" && count > 80) {
        price *= 0.85;
    } else if (flowers === "Narcissus" && count < 120) {
        price *= 1.15;
    } else if (flowers === "Gladiolus" && count < 80) {
        price *= 1.20;
    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${count} ${flowers} and ${((budget-price).toFixed(2))} leva left.`);
    } else {
        console.log(`Not enough money, you need ${((price-budget).toFixed(2))} leva more.`);
    }
}
data(["Gladiolus",
"64",
"160"])

