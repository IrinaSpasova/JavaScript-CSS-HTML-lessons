function data(input) {
    let day = input[0];
    let price = 0;

    /*LOGIC*/
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = 12;
            console.log(price);
            break;

        case "Wednesday":
        case "Thursday":
            price = 14;
            console.log(price);
            break;

        case "Saturday":
        case "Sunday":
            price = 16;
            console.log(price);
            break;
    }

}
data(["Saturday"])