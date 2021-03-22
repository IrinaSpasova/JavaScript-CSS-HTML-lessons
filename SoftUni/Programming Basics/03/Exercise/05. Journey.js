function data(input) {
    let budget = Number(input[0]);
    let season = input[1];


    /*LOGIC*/
    
    let place;
    let destination;

    if (budget <= 100){
     if (season === "summer" ) {
        destination = "Bulgaria";
        budget*=0.3;
        place = "Camp";
    } else if (season === "winter" && budget <= 100) {
        destination = "Bulgaria";
        budget*=0.7;
        place = "Hotel";
    }
}

if(budget <= 1000 && budget > 100){
    if (season === "summer" ) {
        destination = "Balkans";
        budget*=0.4;
        place = "Camp";
    } else if (season === "winter") {
        destination = "Balkans";
        budget*=0.8;
        place = "Hotel";
    }
}

    if (budget >1000){
        destination = "Europe";
        budget*=0.9;
        place = "Hotel";
    }
console.log(`Somewhere in ${destination}`);
console.log(`${place} - ${budget.toFixed(2)}`);

}
data(["50", "summer"]);