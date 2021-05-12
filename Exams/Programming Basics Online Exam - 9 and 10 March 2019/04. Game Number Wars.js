function data(input) {
    let name1 = input[0];
    let name2 = input[1];

    let counter = 2;

    let points1 = 0;
    let points2 = 0;
    while (input[counter] != "End of game") {
        let card1 = Number(input[counter]);
        let card2 = Number(input[counter + 1]);

        if (card1 > card2) {
            points1 += card1 - card2;
        } else if (card1 < card2) {
            points2 += card2 - card1;
        }

        if (card1 === card2) {
            counter += 2;
            let card1new = Number(input[counter]);
            let card2new = Number(input[counter + 1]);
            if (card1new > card2new) {
               
                console.log("Number wars!");
                console.log(`${name1} is winner with ${points1} points`);
                return;
            } else if (card1new < card2new) {
                
                console.log("Number wars!");
                console.log(`${name2} is winner with ${points2} points`);
                return;
            }

        }

        counter += 2;

    }
console.log(`${name1} has ${points1} points`);
console.log(`${name2} has ${points2} points`);

}

data(["Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"
])