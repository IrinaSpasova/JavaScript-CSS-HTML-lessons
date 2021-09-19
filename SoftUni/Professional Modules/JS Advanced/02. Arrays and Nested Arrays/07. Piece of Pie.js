function data (input){
    let arr=input[0];
let start = arr.indexOf(input[1]);
let end = arr.indexOf(input[2]);

let result = arr.slice(start,end+1);

console.log(result);


}
data([['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
])


//or

function foo(arr, a, b) {
    return arr.slice(arr.indexOf(a), arr.indexOf(b) + 1)
}