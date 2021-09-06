function data(input) {
    let sum = 0;
    let inverse = 0;
    let concat = '';
    for (i = 0; i < input.length; i++) {
        sum += +input[i];
        inverse += (1 / +input[i]);
        concat += input[i];
    } 

    console.log(sum);
    console.log(inverse);
    console.log(concat);
    
}

data([1, 2, 3]);