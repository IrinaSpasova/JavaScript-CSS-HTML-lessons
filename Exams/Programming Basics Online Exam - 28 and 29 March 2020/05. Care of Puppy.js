function data(input) {
    let food = Number(input[0]) * 1000;

    let counter = 1;
    let eatenFood = 0;

    while (input[counter] != "Adopted") {

        let foodPerDay = Number(input[counter]);
        eatenFood += foodPerDay;
        
        counter++;
    }
    if (food >= eatenFood) {
        console.log(`Food is enough! Leftovers: ${food-eatenFood} grams. `);
    }else if (eatenFood > food) {
        console.log(`Food is not enough. You need ${eatenFood-food} grams more. `);
        
    }
}
data(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
