function data(input) {

    let counter = 0;
    let counterWin = 0;
    let counterDrawn = 0;
    let counterLost = 0
    while (counter < input.length) {
        let information = input[counter];
        let firstNum = 0;
        let lastNum = 0;
        for (let i = 0; i < information.length; i++) {
            let number = information[i];
            
            if (i === 0) {
                firstNum = number;
            }
            if (i === 2) {
                lastNum = number;
            }
            if (firstNum > lastNum) {
                counterWin++;
                break;

            }
            if (firstNum === lastNum) {
                counterDrawn++;
                break;

            }
            if (firstNum < lastNum) {
                counterLost++;
                break;
            }
        }
        counter++;
    }
    console.log(`Team won ${counterWin} games.`);
    console.log(`Team lost ${counterLost} games.`);
    console.log(`Drawn games: ${counterDrawn} games.`);

}
data(["3:1", "0:2", "0:0"])