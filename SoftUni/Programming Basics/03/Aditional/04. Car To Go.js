function data(input) {
    let budget = Number(input[0]);
    let season = input[1];

    /*LOGIC*/
    let classCar;
    let car;
    let price = 0;
    if (budget <= 100) {
        classCar = "Economy class"
        switch (season) {
            case "Summer":
                car = "Cabrio";
                price = budget * 0.35;
                break;
            case "Winter":
                car = "Jeep";
                price = budget * 0.65;
                break;
        }
    } else if (budget > 100 && budget <= 500) {
        classCar = "Compact class"
        switch (season) {
            case "Summer":
                car = "Cabrio";
                price = budget * 0.45;
                break;
            case "Winter":
                car = "Jeep";
                price = budget * 0.80;
                break;
        }
    } else if (budget > 500) {
        classCar = "Luxury class"
        switch (season) {
            case "Summer":
            case "Winter":
                car = "Jeep";
                price = budget * 0.90;
                break;
        }
    }
    console.log(classCar);
    console.log(`${car} - ${price.toFixed(2)}`);

}
data(["1010", "Winter"])