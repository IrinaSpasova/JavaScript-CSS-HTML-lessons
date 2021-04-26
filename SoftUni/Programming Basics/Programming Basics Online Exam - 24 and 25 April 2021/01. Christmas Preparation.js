function data(input) {
    let paperRoll = Number(input[0]) * 5.8;
    let fabricRoll = Number(input[1]) * 7.2;
    let glue = Number(input[2]) * 1.2;
    let rabat = Number(input[3]) / 100;

    /*LOGIC*/

    let price = (paperRoll + fabricRoll + glue) - ((paperRoll + fabricRoll + glue) * rabat);
    console.log(price.toFixed(3));


}
data(["4",
    "2",
    "5",
    "13"
])