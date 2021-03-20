function data(input) {
    let fuel = input[0].toLowerCase();
    let count = Number(input[1]);
    let card = input[2].toLowerCase();

    /*LOGIC*/
    let price = 0;

    if (fuel === "gas" && card === "yes") {
        price = count * (0.93 - 0.08);
    } else if (fuel === "gas" && card === "no") {
        price = count * 0.93;
    }

    if (fuel === "gasoline" && card === "yes") {
        price = count * (2.22 - 0.18);
    } else if (fuel === "gasoline" && card === "no") {
        price = count * 2.22;
    }
    if (fuel === "diesel" && card === "yes") {
        price = count * (2.33 - 0.12);
    } else if (fuel === "diesel" && card === "no") {
        price = count * 2.33;
    }

    if (count > 25) {
        console.log((price * 0.90).toFixed(2)+" lv.");
    } else if (count > 20 && count <= 25) {
        console.log((price * 0.92).toFixed(2)+" lv.");
    } else if (count <20) {
        console.log(price.toFixed(2)+" lv.");
    }

    }
    data(["Diesel",
    "19",
    "No"])