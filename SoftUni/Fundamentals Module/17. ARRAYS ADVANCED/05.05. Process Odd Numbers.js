function mapTask(nums) {
    // filter only elements at odd indexes;
    let filtered = nums.filter((x, i) => i % 2 == 1)
    // === let predicate =(x, i) => 1 % 2 == 1
    //map filtered elements and double them;
    let operation = x => x * 2;
    let mapped = filtered.map(operation);
    // reverse array;
    mapped.reverse();

    //print
    console.log(mapped.join(` `));
}
/* Sykraten zapis:


function mapTask(nums) {
    console.log(nums
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(` `));

}*/

/*let mapTask = n => n
 
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(` `);
        */