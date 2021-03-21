function data(input){

let days = Number(input[0]);
let room = input[1];
let assessment = input[2];


/*LOGIC*/
let sleep = days-1;
let price = 0;

if (days<10){
    if (room ==="room for one person"){
        price = sleep*18;
    }else if (room === "apartment"){
        price = (sleep*25)*0.7;
    }else if (room ==="president apartment")
    price = (sleep*35)*0.90;
}else if (days>=10 && days <=15){
    if (room ==="room for one person"){
        price = sleep*18;
    }else if (room === "apartment"){
        price = (sleep*25)*0.65;
    }else if (room ==="president apartment")
    price = (sleep*35)*0.85;
}else if (days>15){
    if (room ==="room for one person"){
        price = sleep*18;
    }else if (room === "apartment"){
        price = (sleep*25)*0.5;
    }else if (room ==="president apartment")
    price = (sleep*35)*0.80;
}

if (assessment ==="positive"){
    console.log((price*1.25).toFixed(2));
}else if (assessment === "negative"){
    console.log ((price*0.9).toFixed(2));
}



}
data(["30",
"president apartment",
"negative"]);
