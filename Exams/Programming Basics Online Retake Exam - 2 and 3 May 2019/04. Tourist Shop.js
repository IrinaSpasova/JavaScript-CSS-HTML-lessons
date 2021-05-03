function data(input) {
    let budget = Number(input[0]);
    let counter = 1;
    let countProducts = 0;
    let sum = 0;
    while (input[counter] != "Stop") {

        let price = Number(input[counter + 1])
        countProducts++
        if (countProducts % 3===0) {
            price /= 2;
        }
        sum += price;
        if (sum > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(sum-budget).toFixed(2)} leva!`);
            return;
        }
        counter+=2;
    }
    console.log(`You bought ${countProducts} products for ${sum.toFixed(2)} leva.`)

}
data(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])

