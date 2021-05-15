function data(input) {
    let startingCount = Number(input[0]);

    let counter = 1;
    let counterSold = 0;

    while (input[counter] != "Close") {
        let action = input[counter];
        let count = Number(input[counter + 1]);
       
        if (action == "Buy") {
            if ( count>startingCount) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${startingCount}.`);
                return;
            }
            startingCount -= count;
            counterSold += count;
        } else if (action === "Fill") {
            startingCount += count;
        }
        
        counter += 2;
    }
console.log("Store is closed!");
console.log(`${counterSold} eggs sold.`)
}
data(["13",
"Buy",
"8",
"Fill",
"3",
"Buy",
"10"])
