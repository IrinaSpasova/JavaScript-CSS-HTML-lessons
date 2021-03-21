function data(input) {
    let num = Number(input[0]);

    /*LOGIC*/
    if (num >= -100 && num <= 100 && num != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
data(["0"]);