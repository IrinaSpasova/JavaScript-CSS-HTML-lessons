function data(input) {
    let timeA = Number(input[0]);
    let timeB = Number(input[1]);
    let timeC = Number(input[2]);

    /*LOGIC*/

    let totalTime = timeA + timeB + timeC;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
data(["14", "12",
    "10"
])