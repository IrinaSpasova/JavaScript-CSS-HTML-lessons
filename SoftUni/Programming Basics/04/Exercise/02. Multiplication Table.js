function data(input) {

    let num = Number(input[0]);

    /*LOGIC*/
    let sum = 0;
    for (i = 1; i <= 10; i++) {
        sum = i * num;
        console.log(`${i} * ${num} = ${sum}`);
    }


}
data(["8"]);