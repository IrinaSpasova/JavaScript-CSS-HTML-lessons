function data(input) {
    let counter = 0;
    let goal = Number(input[0]);

    counter++;
    let sum = 0;

    while (true) {
        let drink = Number(input[counter].length);
        let count = input[counter + 1];
        let price = (count * drink);
        if (price % 2 != 0) {
            price *= 0.75;
        }
        sum += price;

        counter+=2;
        if (input[counter] == "Party!") {
            console.log(`We need ${(goal-sum).toFixed(2)} leva more.`);
            console.log(`Club income - ${sum.toFixed(2)} leva.`);
            return;
        }
        if (sum >= goal) {
            console.log("Target acquired.");
            console.log(`Club income - ${sum.toFixed(2)} leva.`);
            return;
        }
       
    }


}
data(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
