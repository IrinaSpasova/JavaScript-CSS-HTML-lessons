function data(input) {
    let days = Number(input[0]);
    /*LOGIC*/
    let counter = 1;
    let counterWin = 0;
    let counterLoose = 0;
    let sum = 0;

    let condition = "";
    for (let i = 1; i <= days; i++) {
        let sumForTheDay = 0;
        let counterWinForTheDay = 0;
        let counterLooseForTheDay = 0;
        while (input[counter] !== "Finish") {

            condition = input[counter + 1];
            switch (condition) {
                case "win":
                    counterWinForTheDay++;
                    sumForTheDay += 20;
                    break;
                case "lose":
                    counterLooseForTheDay++;
                    break;
            }
            counter++;

        }
        if (counterWinForTheDay > counterLooseForTheDay) {
            sumForTheDay *= 1.1;

        }
        sum += sumForTheDay;
        counterWin += counterWinForTheDay;
        counterLoose += counterLooseForTheDay;
        counter++;
    }

    if( counterWin>counterLoose){
        sum*=1.2;
        console.log(`You won the tournament! Total raised money: ${sum.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${sum.toFixed(2)}`);
    }

}
data([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])
