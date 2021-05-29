function solve(digit) {
    let number = digit.toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let num = Number(number[i]);
        sum += num;
    }

    console.log(sum);

}
solve(245678);