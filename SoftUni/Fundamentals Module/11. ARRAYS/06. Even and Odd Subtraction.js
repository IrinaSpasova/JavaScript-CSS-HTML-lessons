function solve(arr){
let even = 0;
let odd = 0;
for (let i = 0; i<arr.length; i++){
    if (arr[i]% 2 === 0){
        even+= Number(arr[i]);
    }else{
        odd+= Number(arr[i]);
    }
}
console.log(even-odd);

}
solve([1,2,3,4,5,6]);
console.log('---');
solve([3,5,7,9]);
console.log('---');
solve([2,4,6,8,10]);


/*Other:
function solve(arr){
let even = 0;
let odd = 0;
for (let num of arr){
    if (num === 0){
        even+= Number(arr[i]);
    }else{
        odd+= Number(arr[i]);
    }
}
console.log(even-odd);

}
*/
