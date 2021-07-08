function solve(input) {

    
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let totalPrice = 0;
    for (let line of input) {

        if (+line < 0) {
            console.log("Invalid price!");
            continue;
        }
        if (line == 'special') {

            if (totalPrice > 0) {
                console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTaxes.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${(totalPrice*0.9).toFixed(2)}$`);
                return;
            } else {
                console.log("Invalid order!");
                return
            }

        }
        if (line == 'regular') {

            if (totalPrice > 0) {
                console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTaxes.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`);
                return;
            } else {
                console.log("Invalid order!");
                return
            }

        }
        priceWithoutTaxes += +line;
        taxes += Number((+line * 0.2).toFixed(2));
        totalPrice += +line * 1.2;


    }

}



solve([ 
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    
    ]);