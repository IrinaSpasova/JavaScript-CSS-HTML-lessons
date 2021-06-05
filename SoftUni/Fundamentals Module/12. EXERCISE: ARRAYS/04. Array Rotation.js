function solve(arr, num) {
    for (let i = 0; i < num; i++) {
        let firstElement =arr[0];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        let lastIndex = arr.length - 1;
        arr[lastIndex] = firstElement;
    }
    
    console.log(arr.join(` `));
}
solve([51, 47, 32, 61, 21], 2)
console.log(`---`);
solve([32, 21, 61, 1], 4)

/*arr.length-1; -1, за да не добавим стойност отдясно.*/