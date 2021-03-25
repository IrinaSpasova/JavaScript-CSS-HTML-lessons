function data(input) {
    let budget = Number(input[0]);
    let season = input[1];

    /*LOGIC*/
    let place; 
    let housing;
    let price = 0;
    if (budget <= 1000) {
        place = "Camp"
        switch (season) {
            case "Summer":
                housing = "Alaska";
                price = budget * 0.65;
                break;
            case "Winter":
                housing = "Morocco";
                price = budget * 0.45;
                break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        place = "Hut"
        switch (season) {
            case "Summer":
                housing = "Alaska";
                price = budget * 0.80;
                break;
            case "Winter":
                housing = "Morocco";
                price = budget * 0.60;
                break;
        }
    } else if (budget > 3000) {
        place = "Hotel"
        switch (season) {
            case "Summer":
                housing = "Alaska";
                price = budget * 0.90;
                break;
            case "Winter":
                housing = "Morocco";
                price = budget * 0.90;
                break;
        }
    }
    
    console.log(`${housing} - ${place} - ${price.toFixed(2)}`);

}
data(["799.50","Winter"])