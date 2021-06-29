function solve(inputLine){
let numbers = inputLine
.split(` `)
.map(Number);

let avg = numbers.reduce((previous, current) => previous+current,0)/numbers.length;
let filtered = numbers.filter(num =>num>avg);
let sorted = filtered.sort((a,b)=>b-a);
let firstFive = sorted.slice(0,5);


if (firstFive.length === 0){
    console.log("No");
}else{
    console.log(firstFive.join(` `));
}


}

solve(`1`);



/*function solve(inputLine) {

    let numbers = inputLine
        .split(" ")
        .map(Number);

    // let sum = 0;
    // for (let index = 0; index < numbers.length; index++) {
    //     sum += numbers[index];
        
    // }

    // let avg = sum / numbers.length;
    
    // console.log(result);

    let avg = numbers.reduce((previous, current) =>previous +current,0)/ numbers.length;

    let filtered = [];

 
filtered.sort((a,b) => b-a);
let firstFive = sorted.slice(0.5);

console.log(
    firstFive.length === 0
    ? `No`
    
    : firstFive.join(" "));
}*/