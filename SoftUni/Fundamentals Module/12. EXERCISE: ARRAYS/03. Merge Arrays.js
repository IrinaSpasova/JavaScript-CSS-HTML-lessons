function solve(arr1, arr2) {
    let result = [];
    //това ще работи, защото списъците са с еднаква дължина, ако не са- няма да работи
    for (let i = 0; i < arr1.length; i++) {
        let firstListElement = arr1[i];
        let lastListElement = arr2[i];

        if (i % 2 === 0) {
            result.push(Number(firstListElement) + Number(lastListElement));
        } else {
            result.push(firstListElement + lastListElement);
        }
    }
    console.log(result.join(` - `));

}
solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
console.log('---');
solve(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);

// towa e rotate, без да се ползва самия метод