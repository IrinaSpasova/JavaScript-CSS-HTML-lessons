function data(input) {
    let bottles = Number(input[0]) * 750;

    /*LOGIC*/
    let detergent = 0;
    let counter = 1;
    let counterDishes = 0;
    let counterPots = 0;
    while (input[counter] !== "End") {
        let itemsForWashing = Number(input[counter]);


        if (counter % 3 === 0) {
            detergent += itemsForWashing * 15;
            counterPots += itemsForWashing;
        } else {
            detergent += itemsForWashing * 5;
            counterDishes += itemsForWashing;
        }
        if(detergent>bottles){
            break;
        }
        counter++;

    }
    if (detergent > bottles) {
        console.log(`Not enough detergent, ${detergent-bottles} ml. more necessary!`);

    } else {
        console.log(`Detergent was enough!`);
        console.log(`${counterDishes} dishes and ${counterPots} pots were washed.`);
        console.log(`Leftover detergent ${bottles-detergent} ml.`);

    }
}
data([1,10,15,10,12,13,30])
