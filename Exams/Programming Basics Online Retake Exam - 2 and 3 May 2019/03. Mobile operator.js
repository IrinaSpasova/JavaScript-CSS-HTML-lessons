function data(input) {
    let contract = input[0];
    let type = input[1];
    let internet = input[2];
    let months = Number(input[3]);


    let tax = 0;

    if (contract === "one") {

        switch (type) {
            case "Small":
                tax = 9.98;
                if (internet == "yes") {
                    tax += 5.5;

                }
                break;
            case "Middle":
                tax = 18.99;
                if (internet == "yes") {
                    tax += 4.35;

                }
                break;
            case "Large":
                tax = 25.98;
                if (internet == "yes") {
                    tax += 4.35;

                }
                break;
            case "ExtraLarge":
                tax = 35.99;
                if (internet == "yes") {
                    tax += 3.85;

                }
                break;

        }

    } else {
        switch (type) {

            case "Small":
                tax = 8.58;
                if (internet == "yes") {
                    tax += 5.5;

                }
                break;
            case "Middle":
                tax = 17.09;
                if (internet == "yes") {
                    tax += 4.35;

                }
                break;
            case "Large":
                tax = 23.59;
                if (internet == "yes") {
                    tax += 4.35;

                }
                break;
            case "ExtraLarge":
                tax = 31.79;
                if (internet == "yes") {
                    tax += 3.85;

                }
                break;
        }


    }

    let sum = months * tax;
    if (contract == "two") {
        sum = sum - (sum * (3.75/100));
    }
    console.log(sum.toFixed(2) + " lv.");

}
data(["two",
    "Large",
    "no",
    "10"
])