function data(input){
let a= Number(input[0]);
let b= Number(input[input.length-1]);
return a+b;
}
console.log(data(['20', '30', '40']));

//or

function foo(arr) {
    arr = arr.map(Number);
    return arr[0] + arr[arr.length - 1];
}