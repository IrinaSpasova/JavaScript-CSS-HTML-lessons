function data(input) {
    let season = input[0];
    let group =(input[1]);
    let countStudents = Number(input[2]);
    let countNights = Number(input[3]);

    /*LOGIC*/
    let sport;
    let price = 0;



    if (season == "Winter") {
        switch (group) {
            case "boys":
            case "girls":
                price = 9.6;
                break;
            case "mixed":
                price = 10;
                break;
        }
    } else if (season == "Spring") {
        switch (group) {
            case "boys":
            case "girls":
                price = 7.2;
                break;
            case "mixed":
                price = 9.5;
                break;
        }
    } else if (season == "Summer") {
        switch (group) {
            case "boys":
            case "girls":
                price = 15;
                break;
            case "mixed":
                price = 20;
                break;
        }
    }


    if (season == "Winter") {
        switch (group) {
            case "boys":
                sport = "Judo";
                break;
            case "girls":
                sport = "Gymnastics";
                break;
            case "mixed":
                sport = "Ski";
                break;
        }
    } else if (season == "Spring") {
        switch (group) {
            case "boys":
                sport = "Tennis";
                break;
            case "girls":
                sport = "Athletics";
                break;
            case "mixed":
                sport = "Cycling";
                break;
        }
    } else if (season == "Summer") {
        switch (group) {
            case "boys":
                sport = "Football"
                break;
            case "girls":
                sport = "Volleyball";
                break;
            case "mixed":
                sport = "Swimming";
                break;
        }
    }
    let finalPrice = price * countStudents * countNights;
    if (countStudents >= 50) {
        finalPrice *= 0.5;
    } else if (countStudents >= 20 && countStudents < 50) {
        finalPrice *= 0.85;
    } else if (countStudents >= 10 && countStudents < 20) {
        finalPrice *= 0.95;
    }

    console.log(`${sport} ${finalPrice.toFixed(2)} lv.`);
    

}
data(["Spring", "girls", "20", "7"])