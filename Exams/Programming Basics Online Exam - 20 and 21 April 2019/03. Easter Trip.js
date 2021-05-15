function data(input) {
    let destination = input[0];
    let dates = input[1];
    let nights = Number(input[2]);

    let price = 0;
    switch (destination) {
        case "Germany":
            switch (dates) {
                case "21-23":
                    price = 32;
                    break;
                case "24-27":
                    price = 37;
                    break;
                case "28-31":
                    price=43;
                    break;
            }
            break;

            case "Italy":
            switch (dates) {
                case "21-23":
                    price = 28;
                    break;
                case "24-27":
                    price = 32;
                    break;
                case "28-31":
                    price=39;
                    break;
            }
            break;

            case "France":
            switch (dates) {
                case "21-23":
                    price = 30;
                    break;
                case "24-27":
                    price = 35;
                    break;
                case "28-31":
                    price=40;
                    break;
            }
            break;
    }
console.log(`Easter trip to ${destination} : ${(price*nights).toFixed(2)} leva.`)

}
data(["Germany",
    "24-27",
    "5"
])