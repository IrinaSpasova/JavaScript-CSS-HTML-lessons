function data(input) {

    let counter = 0;
    let number = Number.MIN_SAFE_INTEGER;

    while (true) {
        let newNumber = Number(input[counter]);
        if (newNumber > number) {
            number = newNumber;
        }
        if(input[counter]==="Stop"){
            break;
        }
        counter++;
    }

console.log(number);
}
data([-1,
    -2,
   "Stop"]);
