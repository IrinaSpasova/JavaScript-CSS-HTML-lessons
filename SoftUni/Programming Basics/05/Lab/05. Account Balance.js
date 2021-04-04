function data(input) {
    let counter = 0;
   let information ="";
    sum = 0;

    while (true) {
       information = input[counter];
        if (information === "NoMoreMoney") {
            break;
        }
        if (Number(information) < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += Number(information);
        
        console.log(`Increase: ${Number(information).toFixed(2)}`);
        counter++;
    }

    console.log("Total: " + sum.toFixed(2));

}
data(["120",
"45.55",
"-150"]);
