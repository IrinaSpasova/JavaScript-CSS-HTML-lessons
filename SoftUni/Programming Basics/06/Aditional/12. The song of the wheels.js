function data(input) {
    let number = Number(input[0]);

    /*LOGIC*/
    let counter = 1;
    let passwordsString = "";
    let currentPassword = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d && number === ((a * b) + (c * d))) {
                        passwordsString += `${a}${b}${c}${d} `;
                        if (counter === 4) {
                            currentPassword += `${a}${b}${c}${d}`;
                       }
                        counter++;

                    }
                }
            }
        }
    }
    if (counter <= 3) {
        console.log(passwordsString);
        console.log(`No!`);
        return;
    }else{
        console.log(passwordsString);
        console.log(`Password: ${currentPassword}`)

    }
}
data(["110"]);