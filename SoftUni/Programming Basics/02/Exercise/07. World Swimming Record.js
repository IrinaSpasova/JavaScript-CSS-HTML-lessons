function data(input) {
    let recordSec = Number(input[0]);
    let meters = Number(input[1]);
    let time = Number(input[2]);

    /*LOGIC*/
    let timeForSwimming = meters * time;
    let dellay = Math.floor(meters / 15) * 12.5;
    let totalTime = dellay + timeForSwimming;

    if (totalTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordSec ).toFixed(2)} seconds slower.`);
    }

}
data(["10464",
    "1500",
    "20"
])