function data(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {

    let price = 0;
    switch (typeOfTheGroup) {
        case "Students":
            switch (dayOfTheWeek) {
                case "Friday":
                    price = 8.45;
                    break;
                case "Saturday":
                    price = 9.80;
                    break;
                case "Sunday":
                    price = 10.46;
                    break;
            }
            break;

        case "Business":
            switch (dayOfTheWeek) {
                case "Friday":
                    price = 10.9;
                    break;
                case "Saturday":
                    price = 15.6;
                    break;
                case "Sunday":
                    price = 16;
                    break;
            }
            break;

        case "Regular":
            switch (dayOfTheWeek) {
                case "Friday":
                    price = 15;
                    break;
                case "Saturday":
                    price = 20;
                    break;
                case "Sunday":
                    price = 22.5;
                    break;
            }
            break;
    }

    let totalPrice = price * groupOfPeople;

    if (typeOfTheGroup === "Students" && groupOfPeople >= 30) {
        totalPrice *= 0.85;
    }

    if (typeOfTheGroup === "Business" && groupOfPeople >= 100) {
        totalPrice = price * (groupOfPeople-10);
    }

    if (typeOfTheGroup === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20 ) {
        totalPrice *= 0.95;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
data(30,"Students","Sunday" )