function data(input) {
    let countSoldGames = Number(input[0]);

    let hearthstoneCounter = 0;
    let forniteCounter = 0;
    let overwatchCounter = 0;
    let othersCounter = 0;

    for (let i = 1; i <= countSoldGames; i++) {

        switch (input[i]) {
            case "Hearthstone":
                hearthstoneCounter++;
                break;
            case "Fornite":
                forniteCounter++;
                break;
            case "Overwatch":
                overwatchCounter++;
                break;
            default:
                othersCounter++;
                break;
        }
    }
console.log(`Hearthstone - ${((hearthstoneCounter/countSoldGames)*100).toFixed(2)}%`);
console.log(`Fornite - ${((forniteCounter/countSoldGames)*100).toFixed(2)}%`);
console.log(`Overwatch - ${((overwatchCounter/countSoldGames)*100).toFixed(2)}%`);
console.log(`Others - ${((othersCounter/countSoldGames)*100).toFixed(2)}%`);

}
data(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])
