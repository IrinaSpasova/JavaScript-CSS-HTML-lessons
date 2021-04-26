function data(input) {

    let dancers = Number(input[0]);
    let score = Number(input[1]);
    let season = input[2];
    let place = input[3];

    /*LOGIC*/
    let winMoney = 0;
    switch (place) {
        case "Bulgaria":
            winMoney = dancers * score;
            break;
        case "Abroad":
            winMoney = (dancers * score) * 0.5 + (dancers * score);
            break;
    }


    if (season == "summer") {
        switch (place) {
            case "Bulgaria":
                winMoney *= 0.95;
                break;
            case "Abroad":
                winMoney *= 0.9;
                break;
        }
    } else if (season == "winter") {
        switch (place) {
            case "Bulgaria":
                winMoney *= 0.92;
                break;
            case "Abroad":
                winMoney *= 0.85;
                break;
        }
    }
let charity = (winMoney*0.75);
let profit = (winMoney-charity);
let profitPerDancer = (profit/dancers).toFixed(2);

console.log(`Charity - ${charity.toFixed(2)}`);
console.log(`Money per dancer - ${profitPerDancer}`);

}
data(["1", "89.5", "summer", "Abroad"])

