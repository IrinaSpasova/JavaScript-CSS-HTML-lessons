function data(input) {
    let moneyForTrip = Number(input[0]);
    let startingMoney = Number(input[1]);
    let counter = 2;
    /*LOGIC*/
    let counterSpend = 0;
    let nextMoney = 0;
    let money = startingMoney;
    let counterDays = 0;
    while (true) {
        let action = input[counter];
        nextMoney = Number(input[counter + 1]);

        if (action === "spend") {
            counterSpend++;
            counterDays++;
            money -= nextMoney;

            if (counterSpend === 5) {
                console.log("You can't save the money.");
                console.log(`${counterDays}`);
                break;
            }

            if (money <= 0) {
                money = 0;
            }
        } else if (action === "save") {
            counterSpend = 0;
            counterDays++;
            money += nextMoney;
        }

        if (money >= moneyForTrip) {
            console.log(`You saved the money for ${counterDays} days.`);
            break;
        }
        counter += 2;
    }

}
data(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])