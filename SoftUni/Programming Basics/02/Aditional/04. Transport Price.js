function data(input) {
    let n = Number(input[0]);
    let time = input[1];
    let price = 0;
    let taxiRate = 0;
    /*LOGIC*/

    if (time === "day") {
        taxiRate = 0.79;
    } else {
        taxiRate = 0.9;
    }

    if (n < 20) {
        price = (0.70 + (taxiRate * n)).toFixed(2);
    } else if (n < 100) {
        price = (0.09 * n).toFixed(2);
    } else {
        price = (0.06 * n).toFixed(2);
    }
    console.log(price);
}
/*let day = (((n * 0.79) + 0.70).toFixed(2));
let night = (((n * 0.9) + 0.70).toFixed(2));
let bus = (n*0.09).toFixed(2);
let train = (0.06*n).toFixed(2);

if ( time == "day" && n<20){
    console.log(day);
}else if(time == "day" && n>=20 && n<=99 ){
    console.log(bus);
}else if (time == "day" && n>=100 ){
    console.log(train);
}

if ( time == "night" && n<20){
    console.log(night);
}else if(time == "night" && n>=20 && n<=99 ){
    console.log(bus);
}else if (time == "night" && n>=100 ){
    console.log(train);
}*/







data(["40", "night"])