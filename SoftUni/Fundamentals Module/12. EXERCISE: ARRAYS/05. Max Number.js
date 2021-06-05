function solve(arr) {
    let topIntegers = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            let nextNumber = arr[j];

            if (nextNumber >= currentNumber) {
                isTop = false;
                break;
            }
        }
        if (isTop){
            topIntegers.push(currentNumber);
        }
    }
    console.log(topIntegers.join(` `));

}
solve([1, 4, 3, 2]);
console.log(`---`);
solve([14, 24, 3, 19, 15, 17]);