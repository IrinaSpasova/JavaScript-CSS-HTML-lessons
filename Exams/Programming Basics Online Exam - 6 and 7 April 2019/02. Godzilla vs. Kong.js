function data(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let garment = Number(input[2]);


    let decor = budget * 0.1;
    let budgetForGarment = 0;
    if (people > 150) {
        garment *= 0.90;
    }
    budgetForGarment = garment * people;

    if ((decor + budgetForGarment) > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${((decor+budgetForGarment)-budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget-(decor+budgetForGarment)).toFixed(2)} leva left.`);
    }


}
data([20000, 120, 55.5])