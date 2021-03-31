function data(input) {
    let count = Number(input[0]);
    // let num = Number(input[1]);

    /*LOGIC*/
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= count; i++) {
        let num = Number(input[i]);/* с [i] се обхожда масива. започва (в този случай от [1])*/
        if (num < 200) {
            p1++;
        } else if (num < 400) {
            p2++;
        } else if (num < 600) {
            p3++;
        } else if (num < 800) {
            p4++;
        } else if (num >= 800) {
            p5++;
        }
    }

    let p1Percent = p1 / count * 100;
    console.log(`${p1Percent.toFixed(2)}%`);
    let p2Percent = p2 / count * 100;
    console.log(`${p2Percent.toFixed(2)}%`);
    let p3Percent = p3 / count * 100;
    console.log(`${p3Percent.toFixed(2)}%`);
    let p4Percent = p4 / count * 100;
    console.log(`${p4Percent.toFixed(2)}%`);
    let p5Percent = p5 / count * 100;
    console.log(`${p5Percent.toFixed(2)}%`);

}

data(["7","800","801","250","199","399","599","799"])

