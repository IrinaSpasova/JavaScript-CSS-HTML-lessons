function demo(input){
let depositSum = Number(input[0]);
let period = Number(input[1]);
let percent = Number(input[2]);

let result =depositSum + period*((depositSum * percent/100)/12);
console.log(result);
}

demo(["200",
"3",
"5.7"]);
