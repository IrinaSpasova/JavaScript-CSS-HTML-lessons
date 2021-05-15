function data(input) {

    let counter = 1;
    let price = 0;
    for (let i = 1; i <= Number(input[0]); i++) {
        let currentPrice = 0;
        let counterPurchase = 0;
        while (input[counter] != "Finish") {
            let purchase = input[counter];
       switch (purchase) {
                case "basket":
                    currentPrice += 1.5;
                    counterPurchase++;
                    break;
                case "wreath":
                    currentPrice += 3.8;
                    counterPurchase++;
                    break;
                case "chocolate bunny":
                    currentPrice += 7;
                    counterPurchase++;
                    break;
            }

           
            counter++;
        }
        
        
        if (counterPurchase % 2 === 0) {
            currentPrice *= 0.8
        }
        price += currentPrice;
        console.log(`You purchased ${counterPurchase} items for ${currentPrice.toFixed(2)} leva.`)
        counter++;
    }
    console.log(`Average bill per client is: ${(price/Number(input[0])).toFixed(2)} leva.`)
}
data(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"])