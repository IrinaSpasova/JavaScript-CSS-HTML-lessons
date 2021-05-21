
function solve(day, age){

    if (day == "Weekday") {
        if (0 <= age && age <= 18) {
            console.log("12$");
        }
        else if (18 < age && age <= 64) {
            console.log("18$");
        }
        else if (64 < age && age <= 122) {
            console.log("12$");
        } else {
            console.log("Error!");
        }
    }

    if (day == "Weekend") {
        if (0 <= age && age <= 18) {
            console.log("15$");
        }
        else if(18 < age && age <= 64) {
            console.log("20$");
        }
        else if (64 < age && age <= 122) {
            console.log("15$");
        } else {
            console.log("Error!");
        }
    }

    if (day == "Holiday") {
        if (0 <= age && age <= 18) {
            console.log("5$");
        }
        else if (18 < age && age <= 64) {
            console.log("12$");
        }
        else if (64 < age && age <= 122) {
            console.log("10$");
        } else {
            console.log("Error!");
        }
    }
}


/*function data(day, age) {
    let price = 0;

    if (Number(age) < 0 || Number(age) > 122) {
        console.log("Error!");
        return;
    }

    if (0 <= Number(age) && Number(age) <= 18) {
        switch (day) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 5;
                break;
        }
    }

    if (18 <= Number(age) && Number(age) <= 64) {
        switch (day) {
            case "Weekday":
                price = 18;
                break;
            case "Weekend":
                price = 20;
                break;
            case "Holiday":
                price = 12;
                break;
        }
    }

    if (64 <= Number(age) && Number(age) <= 122) {
        switch (day) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 10;
                break;
        }
    }


    console.log(`${price}$`);

}*/
data('Holiday',75)