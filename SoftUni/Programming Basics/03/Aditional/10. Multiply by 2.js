function data(input) {

    for (let i = 0; i < Infinity; i++) {
        let a = input[i];
        if (a >= 0) {
            console.log(`Result: ${(a*2).toFixed(2)}`)
        } else if(a<0){
            console.log(`Negative number!`)
            break;
        }

    }



}
data([12, 43.2144, 12.3, 543.23, -20])