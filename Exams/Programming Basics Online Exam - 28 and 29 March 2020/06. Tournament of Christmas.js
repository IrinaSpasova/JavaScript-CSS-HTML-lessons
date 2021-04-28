function data(input) {
    let days = Number(input[0]);

    let counter = 1;
    let counterWins = 0;
    let counterLose = 0;
    let sum = 0;
    for (let i = 1; i <= days; i++) {

        let counterWinsForTheDay = 0;
        let counterLoseForTheDay = 0;
        let sumForTheDay = 0;
        
        while (input[counter] != "Finish") {
            
            let condition = input[counter + 1];
            if (condition == "win") {
                counterWinsForTheDay++;
                counterWins++;
                sumForTheDay += 20;
            } else {
                counterLoseForTheDay++;
                counterLose++;
            }
            counter+=2;
        }
        counter++;
        if (counterWinsForTheDay > counterLoseForTheDay) {
            sumForTheDay *= 1.1;
            sum += sumForTheDay;
        }else{
            sum += sumForTheDay; 
        }
    }
    if(counterWins>counterLose){
        sum*=1.2;
        console.log(`You won the tournament! Total raised money: ${sum.toFixed(2)}`)
    }else{
        console.log(`You lost the tournament! Total raised money: ${sum.toFixed(2)}`)
    }
}

data(["3",
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
"Finish"])
