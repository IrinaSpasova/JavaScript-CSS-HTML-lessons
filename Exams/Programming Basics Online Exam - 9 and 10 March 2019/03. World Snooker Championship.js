function data(input) {

    let stage = input[0];
    let ticket = input[1];
    let ticketCount = Number(input[2]);
    let picture = input[3];

    let price = 0;
    switch (stage) {

        case "Quarter final":
            switch (ticket) {
                case "Standard":
                    price = ticketCount * 55.50;
                    break;
                case "Premium":
                    price = ticketCount * 105.20;
                    break;
                case "VIP":
                    price = ticketCount * 118.90;
                    break;
            }
            break;
        case "Semi final":
            switch (ticket) {
                case "Standard":
                    price = ticketCount * 75.88;
                    break;
                case "Premium":
                    price = ticketCount * 125.22;
                    break;
                case "VIP":
                    price = ticketCount * 300.40;
                    break;

            }
            break;
        case "Final":
            switch (ticket) {
                case "Standard":
                    price = ticketCount * 110.10;
                    break;
                case "Premium":
                    price = ticketCount * 160.66;
                    break;
                case "VIP":
                    price = ticketCount * 400;
                    break;
            }
            break;
    }


if(price>4000){
   
    price*=0.75;
    console.log(`${price.toFixed(2)}`);
return;
}
if (price>2500 && price<=4000){
    price*=0.9;
}
if (picture=="Y"){
    price+=40*ticketCount;
}
console.log(`${price.toFixed(2)}`);
}
data(["Semi final",
"VIP",
"9",
"Y"])



