function data(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);

    /*LOGIC*/
    let counter = 0;
    let counterMatch=0;

    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            counter++;
            if (i + j === magicNum) {
                counterMatch++;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                return;
            }
        }
    }

    if(counterMatch===0){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
        
    }

}