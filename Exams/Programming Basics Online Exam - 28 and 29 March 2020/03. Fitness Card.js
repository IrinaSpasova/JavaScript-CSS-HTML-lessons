function data(input) {
    let money = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let price = 0;
    switch (sport) {
        case "Gym":
            if (sex == "m") {
                price = 42;
            } else {
                price = 35;
            }
            break;

        case "Boxing":
            if (sex == "m") {
                price = 4;
            } else {
                price = 37;
            }
            break;

        case "Yoga":
            if (sex == "m") {
                price = 45;
            } else {
                price = 42;
            }
            break;

        case "Zumba":
            if (sex == "m") {
                price = 34;
            } else {
                price = 31;
            }
            break;

        case "Dances":
            if (sex == "m") {
                price = 51;
            } else {
                price = 53;
            }
            break;

        case "Pilates":
            if (sex == "m") {
                price = 39;
            } else {
                price = 37;
            }
            break;
    }

    if (age<=19){
        price*=0.8;
    }

    if (price<=money){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }else{
        console.log(`You don't have enough money! You need $${(price-money).toFixed(2)} more.`);
    }

}
data(["10",
"m",
"50",
"Pilates"])
