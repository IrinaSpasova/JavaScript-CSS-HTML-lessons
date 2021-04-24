function data(input) {
    let n = Number(input[0]);
    let p = Number(input[1]);
    let c = Number(input[2]);
    let str = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= p; j++) {
            for (let k = 1; k <= c; k++) {

                if (i % 2 == 0 && (j === 2 || j === 3 || j === 5 || j === 7) && k % 2 == 0 ) {
                    str = `${i} ${j} ${k} `;
                    console.log(str);
                }

            }
        }
    }

    
}

data([3,5,5])