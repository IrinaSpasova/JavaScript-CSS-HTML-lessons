function data(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let garment = Number(input[2]);


    /*LOGIC*/

    let expencesForPeople = people * garment;
    if (people > 150) {
        expencesForPeople = expencesForPeople * 0.9;
    }
    let decors = budget * 0.1;

    let priceForAll = expencesForPeople + decors;

    if (priceForAll <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget-priceForAll).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(priceForAll-budget).toFixed(2)} leva more.`);
    }
}
data(["9587.88",
    "222",
    "55.68"
])