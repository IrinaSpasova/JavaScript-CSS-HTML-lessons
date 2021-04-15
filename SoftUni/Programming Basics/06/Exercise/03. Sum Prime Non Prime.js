function data(input) {

    /*LOGIC*/
    let counter = 0;
    let primeNum = 0;
    let nonPrimeNum = 0;

    while (input[counter] != "stop") {
        let newNumber = Number(input[counter]);
      

            if (newNumber < 0) {
                console.log("Number is negative.");

            } else {

                let isPrime = true;
                if ((newNumber % 2) === 0 || newNumber === 0) {
                    isPrime = false;
                    nonPrimeNum += newNumber;

                } else {
                    for (let i = 3; i <newNumber; i += 2) {
                        if (newNumber % i === 0) {
                            isPrime = false;
                            break;
                        }

                    }
                    if(newNumber===2 || newNumber ===3 || newNumber===1){
                        isPrime=true;
                    }
                    if (isPrime) {
                        primeNum += newNumber;
                    } else {
                        nonPrimeNum += newNumber;
                    }

                }
            }

        counter++;
    }

    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);

}
data(["30",
"83",
"33",
"-1",
"20",
"stop"]);

/*function data(input) {

   
    let counter = 0;
    let primeNum = 0;
    let nonPrimeNum = 0;

    while (input[counter] != "stop") {
        let newNumber = Number(input[counter]);
        if ((newNumber >= -2147483648) && (newNumber <= 2147483648)) {

            if (newNumber < 0) {
                console.log("Number is negative.");

            } else {

                let isPrime = true;
                if ((newNumber % 2) === 0 || newNumber === 0 || newNumber === 1) {
                    isPrime = false;
                    nonPrimeNum += newNumber;

                } else {
                    for (let i = 3; i <= newNumber / 2; i += 2) {
                        if (newNumber % i === 0) {
                            isPrime = false;
                            break;
                        }

                    }
                    if (isPrime) {
                        primeNum += newNumber;
                    } else {
                        nonPrimeNum += newNumber;
                    }

                }
            }
        } else {
            return;
        }

        counter++;
    }

    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`)

}*/