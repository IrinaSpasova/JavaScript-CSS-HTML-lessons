function data(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let price = 0;

    switch (type) {
        case "Premiere":
            price = 12;
            break;
        case "Normal":
            price = 7.5;
            break;
        case "Discount":
            price = 5;
            break;
    }
console.log((rows*columns*price).toFixed(2));

}
data(["Normal",
"21",
"13"])

