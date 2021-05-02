function data(input) {
    let team = input[0];
    let games = Number(input[1]);


    let counterW = 0;
    let counterD = 0;
    let counterL = 0;
    let pointsCounter =0

    if (games <1) {
        console.log(`${team} hasn't played any games during this season.`);
        return;
    }
    for (let i = 0; i <= games; i++) {

        let condition = input[i+2];
        
        switch (condition) {
            case "W":
                counterW++;
                pointsCounter+=3;
               
                break;
            case "D":
                counterD++;
                pointsCounter+=1;
             
                break;
            case "L":
                counterL++;
                
                break;
        }


    }


console.log(`${team} has won ${pointsCounter} points during this season.`);
console.log(`Total stats:`);
console.log(`## W: ${counterW}`);
console.log(`## D: ${counterD}`);
console.log(`## L: ${counterL}`);
console.log(`Win rate: ${((counterW/games)*100).toFixed(2)}%`);

}
data(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"
])