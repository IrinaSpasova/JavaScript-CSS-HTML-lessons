function data(input) {
    let turns = Number(input[0]);


    /*LOGIC*/
    let endResult = 0;
    let endCountTurns = 0;
    let zeroToNine = 0;
    let tenToNineteen = 0;
    let twentyToTwentyNine = 0;
    let thirtyToThirtyNine = 0;
    let fortyToFifty = 0;
    let invalidNumber = 0;

    for (let i = 1; i <= turns; i++) {
        let moves = Number(input[i]);
        if (moves >= 0 && moves <= 9) {
            zeroToNine++;
            endResult += moves * 0.2;
            endCountTurns++;
        } else if (moves >= 10 && moves <= 19) {
            tenToNineteen++;
            endResult += moves * 0.3;
            endCountTurns++;
        } else if (moves >= 20 && moves <= 29) {
            twentyToTwentyNine++;
            endResult += moves * 0.4;
            endCountTurns++;
        } else if (moves >= 30 && moves <= 39) {
            thirtyToThirtyNine++;
            endResult += 50;
            endCountTurns++;
        } else if (moves >= 40 && moves <= 50) {
            fortyToFifty++;
            endResult += 100;
            endCountTurns++;
        } else if (moves < 0 || moves > 50) {
            invalidNumber++;
            endResult = endResult / 2;
            endCountTurns++;
        }
    }

    console.log(endResult.toFixed(2));
    console.log(`From 0 to 9: ${(zeroToNine/endCountTurns*100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(tenToNineteen/endCountTurns*100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(twentyToTwentyNine/endCountTurns*100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${ (thirtyToThirtyNine/endCountTurns*100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(fortyToFifty/endCountTurns*100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumber/endCountTurns*100).toFixed(2)}%`);

}
data(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);