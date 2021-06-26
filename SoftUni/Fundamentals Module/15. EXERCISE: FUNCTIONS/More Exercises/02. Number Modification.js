function appendingNines(number) {

    let initialValue = turnTheNumberToString(number);
    if (!averageValueHigherThenFive(initialValue)) {
        let counterGlobal = 0;
        //let sum = 0;
        while (true) {
            if (averageValueHigherThenFive(initialValue)==true){
                console.log(initialValue.join(''));
                return;
            }
            initialValue.push(9);
            // let counter = 1;
            // for (let element of initialValue) {
            //     sum += element;
            //     counter++;
            // }
            // if (sum / counter > 5) {
            //     console.log(initialValue);
            //     return;
            // }
            //averageValueHigherThenFive(initialValue);
                       
            counterGlobal++;

        }

    } else {
        console.log(initialValue.join(''));
    }




    function turnTheNumberToString(number) {
        let num = number;
        let digits = num.toString().split('');
        let realDigits = digits.map(Number);
        return realDigits;
    }

    function averageValueHigherThenFive(arr) {
        let sum = 0;
        counter = 0;
        for (let element of arr) {
            sum += element;
            counter++;
        }
        let result =sum / counter;
        if (result >5) {
            return true;
        }
        return false;
    }



}
appendingNines([5835]);