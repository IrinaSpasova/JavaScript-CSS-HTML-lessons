function data(input){
let name = input[0];
let days = Number(input[1]);
let tickets = Number(input[2]);
let pricePerTicket = Number(input[3]);
let tax = Number(input[4])/100;

let income = (days*tickets*pricePerTicket)-((days*tickets*pricePerTicket)*tax);
console.log(`The profit from the movie ${name} is ${income.toFixed(2)} lv.`)
}
data(["Python Basics",
"40",
"34785",
"10.45",
"14"])



