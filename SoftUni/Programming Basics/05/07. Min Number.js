function data(input) {

    let counter = 0;
    let number = Number.MAX_SAFE_INTEGER;

    while (true) {
        let newNumber = Number(input[counter]);
        if (newNumber < number) {
            number = newNumber;
        }
        if(input[counter]==="Stop"){
            break;
        }
        counter++;
    }

console.log(number);
}
data(["100",
"99",
"80",
"70",
"Stop"])
