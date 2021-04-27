function data(input){
let pen = Number(input[0])*5.8;
let maker = Number(input[1])*7.2;
let detergent = Number(input[2])*1.2;
let rabat = Number(input[3])/100;

let sum = pen+detergent+maker;
let discount = sum*rabat;

console.log((sum-discount).toFixed(3));

}
data(["2",
"3",
"2.5",
"25"])
