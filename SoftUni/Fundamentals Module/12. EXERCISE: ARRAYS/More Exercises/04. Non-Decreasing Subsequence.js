function solve(arr){
let max = 0;
let result = [];
for (let element of arr){
if (element>=max){
    max=element;
    result.push(element);
}
}

console.log(result.join(" "));
}
solve([51, 47, 32, 61, 21])
console.log(`---`);
solve([32, 21, 61, 1])