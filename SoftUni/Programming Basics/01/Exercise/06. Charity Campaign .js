function demo(input) {
    let days = Number(input[0]);
    let chefs = Number(input[1]);
    let cakeCounter = Number(input[2]);
    let wafflesCounter = Number(input[3]);
    let pancakesCounter = Number(input[4]);

    let totalSumForCakes = cakeCounter * 45;
    let totalSumForWaffles = wafflesCounter * 5.80;
    let totalSumForPancakes = pancakesCounter * 3.20;

    let sumForOneDay = (totalSumForCakes + totalSumForPancakes + totalSumForWaffles) * chefs;

    let sumForAllDays = sumForOneDay * days;
    let finalResult = sumForAllDays - (sumForAllDays / 8);




    console.log(finalResult);
}
demo
demo(["23",
    "8",
    "14",
    "30",
    "16"
]);