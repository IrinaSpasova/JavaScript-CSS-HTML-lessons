function data(input) {
    let voucherValue = Number(input[0]);
    let moviePrice = 0;
    let productPrice = 0;
    let purchasedProducts = 0;
    let purchasedTickets = 0;
    let counter = 1;

    while (voucherValue >= 0) {
        let purchase = input[counter];
        if (purchase == "End") {
            console.log(`${purchasedTickets}`);
            console.log(`${purchasedProducts}`);
            return;
        }

        if (purchase.length > 8)
        {
            moviePrice = purchase[0].charCodeAt() + purchase[1].charCodeAt();
            if (voucherValue < moviePrice){
                console.log(`${purchasedTickets}`);
                console.log(`${purchasedProducts}`);
                return;
            }
            voucherValue -= moviePrice;
            purchasedTickets++;            
        }else if(purchase.length <= 8){
            productPrice = purchase[0].charCodeAt();
            if (voucherValue < productPrice)
            {
                console.log(`${purchasedTickets}`);
                console.log(`${purchasedProducts}`);
                return;
            }
            voucherValue -= productPrice;
            purchasedProducts++;
            
        }

        counter++;
    }
    console.log(`${purchasedTickets}`);
    console.log(`${purchasedProducts}`);
}
data([1500,"Avengers: Endgame","Bohemian Rhapsody","Deadpool 2","End"])