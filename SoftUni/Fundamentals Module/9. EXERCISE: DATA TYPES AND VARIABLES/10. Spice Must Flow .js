function solve(startingYield) {

    let result = 0;
    let counter = 0;
    while (startingYield >= 100) {
        result += startingYield - 26;
        if(result<26){
            
        }
        startingYield -= 10;
        counter++;
        if (startingYield < 100) {
            result -= 26;
            if(result<26){
                result += 26;
            }
            console.log(counter);
            console.log(result);
            return;
        }

    }
    console.log(counter);
    console.log(result);

}
solve(99)