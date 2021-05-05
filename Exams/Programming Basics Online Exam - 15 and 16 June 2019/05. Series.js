function data(input) {
    let budget = Number(input[0]);
    let count = Number(input[1]);

let sum=0;
    for (let i = 2; i <= count*2; i+=2) {
        let name = input[i];
        let price = Number(input[i + 1]);
        switch (name) {
            case "Thrones":
                price *= 0.5;
                break;
            case "Lucifer":
                price *= 0.6;
                break;
            case "Protector":
                price *= 0.7;
                break;
            case "TotalDrama":
                price *= 0.8;
                break;
            case "Area":
                price *= 0.9;
                break;
        }
budget-=price;

    }

if(budget>=0){
    console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
}else{
    console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`)
}
}
data(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])
