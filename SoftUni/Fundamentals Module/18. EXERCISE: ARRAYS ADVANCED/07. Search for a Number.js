function solve(arr1, arr2) {

    let take = +arr2.shift();
    let deleteItem = +arr2.shift();
    let search = +arr2.shift();
    let newArray = arr1.slice(0, take);
    newArray.splice(0, deleteItem);
    let count = 0;
    /*if (newArray.includes(search)) {
        let count = newArray.filter(x => x == search)
        console.log(`Number ${search} occurs ${count.length} times.`);
    }
    Това не минава в джъдж
    */

    for (let i = 0; i < newArray.length; i++) {

        if (newArray[i] == search) {
            count++;
        }
    }
    console.log(`Number ${search} occurs ${count} times.`);
}
solve([5, 2, 3, 4, 1, 3, 6],
    [6, 2, 3]
);