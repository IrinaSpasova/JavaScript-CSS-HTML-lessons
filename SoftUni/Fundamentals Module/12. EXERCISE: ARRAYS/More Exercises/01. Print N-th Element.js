function solve(arr) {

    let counter = Number(arr.pop());
    let innerCounter = 0;
    let result = arr[0] + ` `;
    for (let i = 0; i <= arr.length-1; i++) {
        
        if (innerCounter === counter) {
            innerCounter = 0;
            result += arr[i]+` `;
        }
        innerCounter++;

    }
    console.log(result);
}
solve(['5', '20', '31', '4', '20', '2']);
/*function printEveryNthElementFromAnArray(input) {
    let step = Number(input.pop());

    input.filter((element, index) => index % step == 0).forEach(element => console.log(element));
}*/