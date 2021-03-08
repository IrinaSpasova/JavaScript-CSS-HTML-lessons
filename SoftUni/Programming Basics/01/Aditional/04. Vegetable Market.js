function data(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let vegetables = Number(input[2]);
    let fruts = Number(input[3]);

    /*LOGIC*/
    let vegetablePriceFinal = n * vegetables;
    let frutPriceFinal = m * fruts;
    let incom = (vegetablePriceFinal + frutPriceFinal) / 1.94;


    console.log(incom.toFixed(2));
}
data(["1.5", "2.5", "10", "10"])