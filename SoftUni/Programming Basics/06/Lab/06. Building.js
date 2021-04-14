  
function solve(input) {
    
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let printLine = "";

        if ((i == floors) || (floors == 1)) {
            for (let j = 0; j < rooms ;j++) {
                printLine += `L${i}${j} `;
            }
        } else if (i % 2 == 0) {
            for (let j = 0; j < rooms ;j++) {
                printLine += `O${i}${j} `;
            }
        } else if ((i % 2 != 0) && (i != floors)){
            for (let j = 0; j < rooms ;j++) {
                printLine += `A${i}${j} `;
            }
        }
        console.log(printLine);

    }
}
solve(["6", "4"]);
