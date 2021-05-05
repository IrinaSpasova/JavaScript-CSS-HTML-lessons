function data(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);


    let price = 0;
    if (season === "Winter") {
        switch (destination) {
            case "Dubai":
                price = 45000*0.7;
                break;
            case "Sofia" :
                price = 17000*1.25;
                break;
            case "London":
                price = 24000;
                break;
        }
    }else if (season ==="Summer"){
        switch (destination) {
            case "Dubai":
                price = 40000*0.7;
                break;
            case "Sofia" :
                price = 12500*1.25;
                break;
            case "London":
                price = 20250;
                break;
        }

    }
   let sum = days * price;

if(sum<=budget){
    console.log(`The budget for the movie is enough! We have ${(budget-sum).toFixed(2)} leva left!`)
}else{
    console.log(`The director needs ${(sum-budget).toFixed(2)} leva more!`)
}

}
data(["1500000",
"Sofia",
"Summer",
"13"])
