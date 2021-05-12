function data(input) {
    let countGames = Number(input[0]);
    let startingPoints = Number(input[1]);
    let counterResult = 0;
    let counterWin = 0;
    for (let i = 1; i <= countGames; i++) {

        let result = input[i + 1];
        switch (result) {
            case "W":
                startingPoints += 2000;
                counterResult += 2000;
                counterWin++;
                break;
            case "F":
                startingPoints += 1200;
                counterResult += 1200;
                break;
            case "SF":
                startingPoints += 720;
                counterResult += 720;
                break;
        }

    }
console.log(`Final points: ${startingPoints}`);
console.log(`Average points: ${Math.floor(counterResult/countGames)}`);
console.log(`${((counterWin/countGames)*100).toFixed(2)}%`);
}
data(["4",
"750",
"SF",
"W",
"SF",
"W"])
