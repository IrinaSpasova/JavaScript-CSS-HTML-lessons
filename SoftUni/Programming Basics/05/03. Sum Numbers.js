function data(input) {

    let num = Number(input[0]);
    let counter = 1;
    let sum = 0;

    while (sum < num) {
        let newNum = Number(input[counter]);
        sum += newNum;
        counter++;
    }
    console.log(sum);

}
data(["100","10","20","30","40"]);