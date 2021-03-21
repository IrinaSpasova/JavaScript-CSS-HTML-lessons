function data(input) {
    let town = input[0];
    let sells = Number(input[1]);

    /*LOGIC*/
    let commission = -1;

    if (town === "Sofia") {
        if (sells >= 0 && sells <= 500) commission = 0.05;
        else if (sells > 500 && sells <= 1000) commission = 0.07;
        else if (sells > 1000 && sells <= 10000) commission = 0.08;
        else if (sells > 10000) commission = 0.12;
    } else if (town === "Plovdiv") {
        if (sells >= 0 && sells <= 500) commission = 0.055;
        else if (sells > 500 && sells <= 1000) commission = 0.08;
        else if (sells > 1000 && sells <= 10000) commission = 0.12;
        else if (sells > 10000) commission = 0.145;
    } else if (town === "Varna") {
        if (sells >= 0 && sells <= 500) commission = 0.045;
        else if (sells > 500 && sells <= 1000) commission = 0.075;
        else if (sells > 1000 && sells <= 10000) commission = 0.10;
        else if (sells > 10000) commission = 0.13;
    }
    if (commission >= 0) {
        commission = sells * commission;
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }


}
data(["Plovdiv",
    "499.99"
]);