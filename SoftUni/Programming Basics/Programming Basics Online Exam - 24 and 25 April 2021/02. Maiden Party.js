function data(input) {
    let priceParty = Number(input[0]);
    let loveLetters = Number(input[1]) * 0.6;
    let waxRoses = Number(input[2]) * 7.2;
    let keyHolder = Number(input[3]) * 3.6;
    let pictures = Number(input[4]) * 18.2;
    let surprise = Number(input[5]) * 22;
    /*LOGIC*/

    let profit = (loveLetters + waxRoses + keyHolder + pictures + surprise);


    if ((Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5])) >= 25) {
        profit *= 0.65;
    }
    let finalPrice = profit * 0.9;
    if (finalPrice >= priceParty) {
        console.log(`Yes! ${(finalPrice - priceParty).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(priceParty-finalPrice).toFixed(2)} lv needed.`)
    }

}
data(["320",
"8",
"2",
"5",
"5",
"1"])
