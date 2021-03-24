function data(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trace = input[2].toLowerCase();


    /*LOGIC*/

    let priceJuniors = 0;
    let priceSeniors = 0;
    if (juniors !== 0) {
        switch (trace) {
            case "trail":
                priceJuniors = 5.5;
                break;
            case "cross-country":
                priceJuniors = 8;
                break;
            case "downhill":
                priceJuniors = 12.25;
                break;
            case "road":
                priceJuniors = 20;
                break;
        }
    }
    if (seniors !== 0) {
        switch (trace) {
            case "trail":
                priceSeniors = 7;
                break;
            case "cross-country":
                priceSeniors = 9.5;
                break;
            case "downhill":
                priceSeniors = 13.75;
                break;
            case "road":
                priceSeniors = 21.5;
                break;
        }
    }
    let profit = (juniors * priceJuniors) + (seniors * priceSeniors);

    if (trace === "cross-country" && seniors + juniors >= 50) {
        profit = ((juniors * priceJuniors) + (seniors * priceSeniors)) * 0.75;
    }

    console.log((profit * 0.95).toFixed(2));
}
data(["20", "25", "cross-country"])