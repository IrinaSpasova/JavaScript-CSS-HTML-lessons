function data(input){
let chicken = Number(input[0])*10.35;
let fish= Number(input[1])*12.4;
let vegetable = Number(input[2])*8.15


let dessert = (chicken+fish+vegetable)*0.2;

let finalSum = dessert+chicken+fish+vegetable+2.5;

 console.log(`Total: ${finalSum.toFixed(2)}`);   
}
data(["10",
"0",
"6"]) 
