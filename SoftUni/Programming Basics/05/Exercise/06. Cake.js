function data(input) {

    let cake = Number(input[0]) * Number(input[1]);

    /*LOGIC*/
    let counter = 2;
    while (input[counter] !== "STOP") {

        cake -= Number(input[counter]);
        if (cake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
            return;
        }
        counter++;
    }
    console.log(`${cake} pieces are left.`)
}
data(["10",
"2",
"2",
"4",
"6",
"STOP"]);
