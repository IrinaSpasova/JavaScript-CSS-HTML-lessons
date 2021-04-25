function data(input) {
    let firstNumbers = Number(input[0]);
    let secondNumbers = Number(input[1]);
    let firstNumbersMax = Number(input[2]);
    let secondNumbersMax = Number(input[3]);

    /*LOGIC*/
    let result = "";
    for (let i = firstNumbers; i <= (firstNumbers + firstNumbersMax); i++) {
        let first = "";
        let second = "";
        
        if (i % 2 != 0) {
            
            let isPrime = true;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                first = `${i}`;
            }
            if (isPrime) {
                for (let k = secondNumbers; k <= (secondNumbers + secondNumbersMax); k++) {
                    if (k % 2 != 0) {
                        let isPrime2 = true;
                        for (let l = 2; l < k; l++) {
                            if (k % l == 0) {
                                isPrime2 = false;
                                break;
                            }
                        }
                        if (isPrime2) {
                            second = `${k}`;
                        }
                    }

                }
            }
        }
        if(first != 0 && second !=0){
            result += `${first}${second}\n`;
        }
    }
    console.log(result);
}

data([10, 30, 9, 6])




function primePairs([firstNum, secondNum, increaseFirst, increaseSecond]) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    increaseFirst = Number(increaseFirst);
    increaseSecond = Number(increaseSecond);
     
    let maxFirst = firstNum + increaseFirst;
    let maxSecond = secondNum + increaseSecond;
     
    for (let i = firstNum; i <= maxFirst; i++) {
        for (let j = secondNum; j <= maxSecond; j++) {
            let isFirstNumPrime = true;
            let isSecondNumPrime = true;
            for (let k = 2; k <= Math.sqrt(i); k++) {
                if ( i % k == 0) {
                    isFirstNumPrime = false;
                    break;
                }
            }
            for (let k = 2; k <= Math.sqrt(j); k++) {
                if ( j % k == 0) {
                    isSecondNumPrime = false;
                    break;
                }
            }
            if (isFirstNumPrime && isSecondNumPrime) {
                console.log(`${i}${j}`)
            }
        }
    }
    }