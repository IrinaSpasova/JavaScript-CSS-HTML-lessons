function data(input) {
    let sum = 0;
    let num = 1;

    for (let i = 1; i <= input; i++) {
        console.log(num);
        sum+=num;
        num+=2;
    }
    console.log(sum);

}
data(5);