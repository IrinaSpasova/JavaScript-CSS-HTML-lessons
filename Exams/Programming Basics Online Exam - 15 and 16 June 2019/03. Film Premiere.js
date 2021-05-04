function data(input) {
    let movie = input[0];
    let additionalOrder = input[1];
    let count = Number(input[2]);


    let price = 0;
    
    switch (movie) {
        case "John Wick":
            switch (additionalOrder) {
                case "Drink":
                    price = 12;
                    break;

                case "Popcorn":
                    price = 15;
                    break;

                case "Menu":
                    price = 19;
                    break;
            }
            break;

        case "Star Wars":
            switch (additionalOrder) {
                case "Drink":
                    price = 18;
                    break;

                case "Popcorn":
                    price = 25;
                    break;

                case "Menu":
                    price = 30;
                    break;
            }
            break;

        case "Jumanji":
            switch (additionalOrder) {
                case "Drink":
                    price = 9;
                    break;

                case "Popcorn":
                    price = 11;
                    break;

                case "Menu":
                    price = 14;
                    break;
            }
            break;
    }
    let sum=price*count;
if (movie =="Star Wars" && count>=4){
sum*=0.7;
}
if ( movie =="Jumanji" && count ===2){
    sum*=0.85;
}
console.log("Your bill is " + sum.toFixed(2)+" leva.");
}
data(["Jumanji",
"Menu",
"2"])

