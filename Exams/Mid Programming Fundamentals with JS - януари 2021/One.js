function solve(input) {
    let budget = +input[0];
    let students = +input[1];
    let priceOfFlour = +input[2];
    let priceOfEgg = +input[3];
    let priceOfApron = +input[4]

    let counterFlour = 0;
    let counterFreeFlour = 0;
    let counterEggs = 0;
    let counterAprons = 0;

    for (let i = 1; i <= students; i++) {
        counterFlour++;
        if (counterFlour % 5 === 0) {
            counterFreeFlour++;
        }
        counterEggs += 10;
        counterAprons++;
    }
    let resultFlour = 0;
    if (counterFreeFlour != 0) {
        resultFlour = (counterFlour - counterFreeFlour) * priceOfFlour;
    } else {
        resultFlour = counterFlour * priceOfFlour;
    }

    let resultEggs = counterEggs * priceOfEgg;
    let resultAprons = Math.ceil(counterAprons * 1.2) * priceOfApron;

    let result = resultFlour + resultAprons + resultEggs;

    if (budget >= result) {
        console.log(`Items purchased for ${result.toFixed(2)}$.`);
    } 
    if  (budget < result){
        console.log(`${(result-budget).toFixed(2)}$ more needed.`);
    }

}
solve([50, 2, 1, 0.1, 10]);

solve([100, 25, 4, 1, 6]);