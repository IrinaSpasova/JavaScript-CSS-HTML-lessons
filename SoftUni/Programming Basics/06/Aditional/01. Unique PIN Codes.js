function data(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    /*LOGIC*/
    for (let i = 2; i <= a; i++) {
        if (i % 2 === 0) {
            for (let j = 2; j <= b; j++) {
                if (j === 2 || j === 3 || j === 5 || j === 7) {
                    for (let k = 1; k <= c; k++) {
                        if (k % 2 === 0) {
                            console.log(`${i} ${j} ${k}`);
                        }
                    }
                }
            }
        }
    }

}
data([3, 5, 5]);