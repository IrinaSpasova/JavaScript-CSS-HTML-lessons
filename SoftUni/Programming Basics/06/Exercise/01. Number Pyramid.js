function data(input) {
    let n = Number(input[0]);
    let isBigger = false;
    let printCurrentLine = "";
    /*LOGIC*/
    let current = 1;
    for (let rows = 1; rows <= n; rows++) {

        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current+" ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger){
            break;
        }
    }
}
data([7]);