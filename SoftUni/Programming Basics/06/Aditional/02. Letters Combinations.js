function data(input) {
    let firstLetter = input[0].charCodeAt();
    let lastLetter = input[1].charCodeAt();
    let skipLetter = input[2].charCodeAt();

    /*LOGIC*/

    let result = "";
    let counter = 0;

    for (let i = firstLetter; i <= lastLetter; i++) {

        if (i != skipLetter) {
            for (let j = firstLetter; j <= lastLetter; j++) {
                if (j != skipLetter) {
                    for (let k = firstLetter; k <= lastLetter; k++) {
                        if (k != skipLetter) {
                            result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " ";
                            counter++;
                            
                        }
                    }
                }
            }
        }
    }
    console.log(`${result}${counter}`);

}
data(["a", "c", "b"]);