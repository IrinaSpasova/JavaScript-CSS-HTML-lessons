function data(input) {
    let n = Number(input[0]);
    let min = Number(input[1]);

    /*LOGIC*/

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (num < min) {
            min = num;
        }
    }

console.log(min);
}
data(["2", "100", "99"])