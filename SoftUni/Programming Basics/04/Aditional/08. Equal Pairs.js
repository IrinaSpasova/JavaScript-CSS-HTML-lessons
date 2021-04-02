function data(input) {

    let number = Number(input[0]);

    /*LOGIC*/

    let sumCouple = 0;
    let countEqual = 1;
    let difference = 0;

    for (let i = 1; i <= number * 2; i += 2) {
        let firstNum = Number(input[i]);
        let secondNum = Number(input[i + 1]);
        let differenceNew = 0;
        if (i === 1) {
            /*за да започне от първата итерация*/
            sumCouple = firstNum + secondNum;

        } else {
            if (sumCouple === firstNum + secondNum) {
                countEqual++;

            }

        }
        if (i === 3) {
            difference = Math.abs((firstNum + secondNum) - (Number(input[i - 1]) + Number(input[i - 2])));

        }
        if (i > 3) {

            differenceNew = Math.abs((firstNum + secondNum) - (Number(input[i - 1]) + Number(input[i - 2])));
            if (difference < differenceNew) {
                difference = differenceNew;
            }
        }
    }
    if (countEqual == number) {
        console.log(`Yes, value=${sumCouple}`)
    } else {
        console.log(`No, maxdiff=${difference}`)
    }


}
data([3,1,2,0,3,4,-1])