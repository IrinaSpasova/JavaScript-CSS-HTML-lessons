function data(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let tortoiseFood = Number(input[4]/1000);

    /*LOGIC*/

    let neededFoodPerDay = dogFood + catFood + tortoiseFood;
    let neededFoodPerAllDays = days * neededFoodPerDay;

    if (food >= neededFoodPerAllDays) {
        console.log(`${Math.floor(food-neededFoodPerAllDays)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(neededFoodPerAllDays-food)} more kilos of food are needed.`)
    }
}
data(["2",
    "10",
    "1",
    "1",
    "1200"
]);