function data(input){
let rent = Number(input[0]);

let prize = rent*0.7;
let food = prize*0.85;
let sound = food/2;

console.log((rent+prize+food+sound).toFixed(2));

}
data([5555])