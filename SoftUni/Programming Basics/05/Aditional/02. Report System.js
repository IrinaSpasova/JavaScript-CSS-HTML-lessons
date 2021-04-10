function data(input) {
    let sumCharity = Number(input[0]);

    /*LOGIC*/
    let counter = 1;
    let cashPayment = 0;
    let cashCounter = 0;

    let cardPayment = 0;
    let cardCounter = 0;



    while (input[counter] !== "End") {

        if (counter % 2 != 0 && Number(input[counter]) > 100) {
            console.log("Error in transaction!");
        } else if (counter % 2 != 0 && Number(input[counter]) <= 100) {
            console.log("Product sold!");
            cashCounter++;
            cashPayment += Number(input[counter]);
        }

        if (counter % 2 === 0 && Number(input[counter]) >= 10) {
            console.log("Product sold!");
            cardCounter++;
            cardPayment += Number(input[counter]);
        } else if (counter % 2 === 0 && Number(input[counter]) < 10) {
            console.log("Error in transaction!");
        }
        if ((cardPayment + cashPayment) >= sumCharity) {
            console.log(`Average CS: ${(cashPayment/cashCounter).toFixed(2)}`);
            console.log(`Average CC: ${(cardPayment/cardCounter).toFixed(2)}`);
            return;
        } else if (input.length === counter){          
           break;
        }
            counter++;

    }
    /*ако сложим break; в if-а(if ((cardPayment + cashPayment) >= sumCharity)) долния конзол лог също трябва да е в if!!!*/
    console.log(`Failed to collect required money for charity.`);

}
data([600, 86, 150, 98, 227,]);