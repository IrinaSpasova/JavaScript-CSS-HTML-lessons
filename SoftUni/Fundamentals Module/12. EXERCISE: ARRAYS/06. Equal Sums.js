function solve(arr) {
let hasFound= false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        //calc left sum
        for (let leftIdx = 0; leftIdx < i; leftIdx++) {
            let currentNumber = arr[leftIdx];
            leftSum += currentNumber;
        }

        //calc right sum
        for (let rightIdx = i + 1; rightIdx < arr.length; rightIdx++) {
            let currentNumber = arr[rightIdx];
            rightSum += currentNumber;
        }
        //проверка дали са равни
        if (leftSum === rightSum) {
            //принтираме и край
            console.log(i);
            hasFound = true;
            break;
        }
    }
    if (!hasFound) {
        console.log("no");
    }

}

solve([1, 2, 3, 3])
console.log((`---`));
solve([1, 2]);
console.log(`---`);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
console.log(`---`);
solve([1, 2, 3]);
console.log(`---`);
solve([1]);